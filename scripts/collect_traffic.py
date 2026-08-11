#!/usr/bin/env python3
"""Merge GitHub traffic API snapshots into cumulative CSVs.

Reads the JSON produced by `gh api` (traffic/_views.json, _clones.json,
_paths.json, _referrers.json) and updates, under traffic/:

  views.csv       date, views, unique_views      -> one row per calendar day
  clones.csv      date, clones, unique_clones     -> one row per calendar day
  referrers.csv   snapshot_date, referrer, count, uniques
  paths.csv       snapshot_date, path, title, count, uniques

The daily series are keyed by date and updated in place, so the API's rolling
14-day window is accumulated into full history without duplicates. The top-10
referrers/paths are stored as dated snapshots (one batch per run).

Standard library only. Safe to re-run multiple times on the same day.
"""
import csv
import json
import os
from datetime import datetime, timezone

TDIR = "traffic"
TODAY = datetime.now(timezone.utc).strftime("%Y-%m-%d")


def load_json(name):
    with open(os.path.join(TDIR, name), encoding="utf-8") as f:
        return json.load(f)


def merge_daily(json_name, series_key, out_name, count_col, uniques_col):
    """Update per-day rows keyed by date (latest values win)."""
    data = load_json(json_name)
    rows = {}
    out = os.path.join(TDIR, out_name)
    if os.path.exists(out):
        with open(out, newline="", encoding="utf-8") as f:
            for r in csv.DictReader(f):
                rows[r["date"]] = (r[count_col], r[uniques_col])
    for item in data.get(series_key, []):
        date = item["timestamp"][:10]
        rows[date] = (str(item["count"]), str(item["uniques"]))
    with open(out, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["date", count_col, uniques_col])
        for date in sorted(rows):
            w.writerow([date, rows[date][0], rows[date][1]])
    print(f"{out_name}: {len(rows)} days")


def merge_snapshot(json_name, out_name, header, fields):
    """Append today's top-N snapshot; re-runs on the same day overwrite it."""
    data = load_json(json_name)
    out = os.path.join(TDIR, out_name)
    kept = []
    if os.path.exists(out):
        with open(out, newline="", encoding="utf-8") as f:
            for r in csv.DictReader(f):
                if r.get("snapshot_date") != TODAY:
                    kept.append(r)
    with open(out, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=header)
        w.writeheader()
        for r in kept:
            w.writerow({k: r.get(k, "") for k in header})
        for item in data:
            row = {"snapshot_date": TODAY}
            for col, key in fields.items():
                row[col] = item.get(key, "")
            w.writerow(row)
    print(f"{out_name}: +{len(data)} rows for {TODAY}")


def main():
    os.makedirs(TDIR, exist_ok=True)
    merge_daily("_views.json", "views", "views.csv", "views", "unique_views")
    merge_daily("_clones.json", "clones", "clones.csv", "clones", "unique_clones")
    merge_snapshot(
        "_referrers.json", "referrers.csv",
        ["snapshot_date", "referrer", "count", "uniques"],
        {"referrer": "referrer", "count": "count", "uniques": "uniques"},
    )
    merge_snapshot(
        "_paths.json", "paths.csv",
        ["snapshot_date", "path", "title", "count", "uniques"],
        {"path": "path", "title": "title", "count": "count", "uniques": "uniques"},
    )


if __name__ == "__main__":
    main()
