// Localised data for SectionDivider animated interludes.
// EN is the canonical original; IT uses Italian org names, place names,
// and translated headlines. Wire-service agency abbreviations (REUTERS,
// AFP, AP, BBC, BLOOMBERG, ECMWF, NOAA, DWD, IPCC) have no official
// Italian equivalents and are kept as-is.

export interface NewsItem {
  source: string;
  date: string;
  place: string;
  headline: string;
  theme: string;
}

// ── Dispatch fragments (wire-service teletype noise) ──────────────────

export const dispatchFragmentsEN = [
  '— REUTERS', '· DG ·', 'COPENHAGEN', '— DISPATCH', '·· — ·', 'BRUSSELS',
  '— ANALYSIS', '· · WIRE', 'BERLIN', '— UPDATE', '·· POLL', 'MADRID',
  '— BREAKING', '· OPINION', 'WARSAW', '— BULLETIN', '·· EDIT', 'PRAGA',
  '— REUTERS-AP', '· COMMENT', 'LISBOA', '— EMBARGO', '·· DRAFT', 'ROMA',
  '— FILED', '· · DRAFT', 'PARIS', '— RECAST', '·· LEDE', 'WASHINGTON',
  '— REWRITE', '· STET', 'BUDAPEST', '— SLUG', '·· KILL', 'ATHENS',
  '— UNCONFIRMED', '· BACKGROUND', 'STOCKHOLM', '— OFF-RECORD', '·· FEED',
  'OSLO', '— EMBARGOED', '· — ·', 'DUBLIN', '— SOURCED', '·· LEAK',
];

export const dispatchFragmentsIT = [
  '— REUTERS', '· DG ·', 'COPENAGHEN', '— COMUNICATO', '·· — ·', 'BRUXELLES',
  '— ANALISI', '· · AGENZIA', 'BERLINO', '— AGGIORNAMENTO', '·· SONDAGGIO', 'MADRID',
  '— FLASH', '· COMMENTO', 'VARSAVIA', '— BOLLETTINO', '·· BOZZA', 'PRAGA',
  '— REUTERS-AFP', '· OPINIONE', 'LISBONA', '— EMBARGO', '·· BOZZA', 'ROMA',
  '— ARCHIVIATO', '· · BOZZA', 'PARIGI', '— REVISIONE', '·· ATTACCO', 'WASHINGTON',
  '— RISCRITTURA', '· STET', 'BUDAPEST', '— TITOLO', '·· ANNULLATO', 'ATENE',
  '— NON CONFERMATO', '· RETROSCENA', 'STOCCOLMA', '— OFF RECORD', '·· COMUNICATO',
  'OSLO', '— SOTTO EMBARGO', '· — ·', 'DUBLINO', '— VERIFICATO', '·· LEAK',
];

// ── Source → theme mapping ────────────────────────────────────────────

export const nfSourceThemeEN: Record<string, string> = {
  'REUTERS': 'news', 'AP': 'news', 'AFP': 'news',
  'BLOOMBERG': 'finance', 'FEDERAL RESERVE': 'finance', 'ECB': 'finance',
  'BANK OF ENGLAND': 'finance', 'IMF': 'finance', 'WORLD BANK': 'finance', 'OECD': 'finance',
  'NOAA': 'weather', 'ECMWF': 'weather', 'WMO': 'weather', 'MET OFFICE': 'weather',
  'DWD': 'weather', 'IPCC': 'weather',
  'BBC': 'media',
  'WHO': 'health', 'UN': 'health',
};

// Italian institutional abbreviations: BCE (ECB), FMI (IMF), OCSE (OECD),
// OMS (WHO), ONU (UN), OMM (WMO), BANCA MONDIALE (World Bank),
// BANCA D'INGHILTERRA (Bank of England), FED (Federal Reserve).
export const nfSourceThemeIT: Record<string, string> = {
  'REUTERS': 'news', 'AP': 'news', 'AFP': 'news',
  'BLOOMBERG': 'finance', 'FED': 'finance', 'BCE': 'finance',
  'BANCA D\'INGHILTERRA': 'finance', 'FMI': 'finance', 'BANCA MONDIALE': 'finance', 'OCSE': 'finance',
  'NOAA': 'weather', 'ECMWF': 'weather', 'OMM': 'weather', 'MET OFFICE': 'weather',
  'DWD': 'weather', 'IPCC': 'weather',
  'BBC': 'media',
  'OMS': 'health', 'ONU': 'health',
};

// ── News items ────────────────────────────────────────────────────────

export const nfItemsEN: NewsItem[] = [
  // ── 2010 ──
  { source: 'ECB',             date: '2010-04-23', place: 'Athens, GR',             headline: 'Greece requests EU-IMF bailout as sovereign debt crisis erupts', theme: 'finance' },
  { source: 'REUTERS',         date: '2010-05-06', place: 'London, UK',             headline: 'Hung parliament: no party wins outright majority in UK general election', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2010-05-06', place: 'New York, NY',           headline: 'Flash crash wipes nearly 1,000 points off Dow in minutes', theme: 'finance' },
  { source: 'AFP',             date: '2010-07-11', place: 'Johannesburg, ZA',       headline: 'Spain lifts first FIFA World Cup title after 1-0 extra-time win', theme: 'sports' },
  { source: 'NOAA',            date: '2010-08-14', place: 'Indus Basin, Pakistan',  headline: 'Unprecedented monsoon flooding displaces 20 million across Pakistan', theme: 'weather' },
  // ── 2011 ──
  { source: 'AFP',             date: '2011-02-11', place: 'Cairo, EG',              headline: 'Mubarak resigns after 18 days of mass protests across Egypt', theme: 'news' },
  { source: 'AP',              date: '2011-03-11', place: 'Tōhoku, Japan',          headline: '9.1-magnitude earthquake triggers tsunami and Fukushima nuclear crisis', theme: 'weather' },
  { source: 'IMF',             date: '2011-04-06', place: 'Lisbon, PT',             headline: 'Portugal requests EU-IMF bailout as bond yields soar past 8%', theme: 'finance' },
  { source: 'ECB',             date: '2011-11-03', place: 'Frankfurt, DE',          headline: 'ECB cuts rates as eurozone debt crisis spreads to Italy and Spain', theme: 'finance' },
  // ── 2012 ──
  { source: 'IMF',             date: '2012-06-29', place: 'Brussels, BE',           headline: 'Euro-area leaders agree to ESM direct bank recapitalisation', theme: 'finance' },
  { source: 'BBC',             date: '2012-07-27', place: 'London, UK',             headline: 'London 2012 Olympic Games open with Danny Boyle ceremony', theme: 'sports' },
  { source: 'NOAA',            date: '2012-10-29', place: 'New York, NY',           headline: 'Hurricane Sandy strikes US East Coast; $70 billion in damage', theme: 'weather' },
  { source: 'AP',              date: '2012-11-06', place: 'Washington, DC',         headline: 'Obama wins re-election, defeating Romney in closely watched race', theme: 'news' },
  { source: 'IPCC',            date: '2012-11-18', place: 'Doha, Qatar',            headline: 'IPCC special report: extreme weather events increasing in frequency', theme: 'weather' },
  // ── 2013 ──
  { source: 'ECB',             date: '2013-03-25', place: 'Nicosia, CY',            headline: 'Cyprus banking crisis: unprecedented levy on deposits agreed', theme: 'finance' },
  { source: 'FEDERAL RESERVE', date: '2013-05-22', place: 'Washington, DC',         headline: 'Bernanke hints at tapering QE; bond yields spike in "taper tantrum"', theme: 'finance' },
  { source: 'ECMWF',           date: '2013-06-03', place: 'Prague, CZ',             headline: 'Worst flooding in decade forces mass evacuations across Czechia', theme: 'weather' },
  { source: 'REUTERS',         date: '2013-09-10', place: 'Stockholm, SE',          headline: 'Nobel committee awards physics prize for Higgs boson prediction', theme: 'culture' },
  { source: 'WMO',             date: '2013-11-08', place: 'Tacloban, Philippines',  headline: 'Super Typhoon Haiyan makes landfall with 315 km/h winds', theme: 'weather' },
  // ── 2014 ──
  { source: 'REUTERS',         date: '2014-03-18', place: 'Simferopol, UA',         headline: 'Russia annexes Crimea after disputed referendum; West imposes sanctions', theme: 'news' },
  { source: 'AP',              date: '2014-07-13', place: 'Rio de Janeiro, BR',     headline: 'Germany routs Brazil 7-1 in World Cup semi-final at Maracanã', theme: 'sports' },
  { source: 'WORLD BANK',      date: '2014-10-08', place: 'Washington, DC',         headline: 'World Bank warns of rising inequality dampening growth prospects', theme: 'finance' },
  // ── 2015 ──
  { source: 'AP',              date: '2015-05-23', place: 'Dublin, IE',             headline: 'Ireland votes to legalise same-sex marriage by popular referendum', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2015-08-24', place: 'Shanghai, CN',           headline: 'Chinese stock market crash triggers global "Black Monday" sell-off', theme: 'finance' },
  { source: 'AFP',             date: '2015-09-02', place: 'Bodrum, TR',             headline: 'Refugee crisis: image of drowned toddler galvanises European debate', theme: 'news' },
  { source: 'AFP',             date: '2015-10-25', place: 'Warsaw, PL',             headline: 'Law and Justice wins Polish parliamentary majority on conservative wave', theme: 'news' },
  { source: 'BBC',             date: '2015-12-12', place: 'Paris, FR',              headline: '195 nations adopt Paris Agreement on climate change', theme: 'weather' },
  { source: 'ECMWF',           date: '2015-12-30', place: 'North Atlantic',         headline: 'Storm Frank pushes UK winter flooding; December warmest on record', theme: 'weather' },
  // ── 2016 ──
  { source: 'AFP',             date: '2016-03-22', place: 'Brussels, BE',           headline: 'Coordinated bombings at Brussels airport and metro kill 32', theme: 'news' },
  { source: 'REUTERS',         date: '2016-06-24', place: 'London, UK',             headline: 'UK votes to leave EU; sterling plunges to 31-year low', theme: 'news' },
  { source: 'AFP',             date: '2016-08-21', place: 'Rio de Janeiro, BR',     headline: 'Rio 2016 Olympics close; Usain Bolt completes "triple-triple"', theme: 'sports' },
  { source: 'AP',              date: '2016-11-08', place: 'Washington, DC',         headline: 'Trump wins US presidential election in upset over Clinton', theme: 'news' },
  { source: 'OECD',            date: '2016-11-09', place: 'Paris, FR',              headline: 'OECD revises global forecasts after surprise US election result', theme: 'finance' },
  // ── 2017 ──
  { source: 'REUTERS',         date: '2017-02-01', place: 'Bucharest, RO',          headline: 'Largest protests in Romania since 1989 erupt against corruption decree', theme: 'news' },
  { source: 'REUTERS',         date: '2017-03-15', place: 'The Hague, NL',          headline: 'Dutch election: Rutte defeats Wilders in closely watched populism test', theme: 'news' },
  { source: 'AFP',             date: '2017-05-07', place: 'Paris, FR',              headline: 'Macron wins French presidency, defeating Le Pen in runoff', theme: 'news' },
  { source: 'NOAA',            date: '2017-08-25', place: 'Houston, TX',            headline: 'Hurricane Harvey dumps record rainfall on Houston; catastrophic flooding', theme: 'weather' },
  { source: 'MET OFFICE',      date: '2017-09-06', place: 'Caribbean Sea',          headline: 'Hurricane Irma reaches Category 5 with 295 km/h sustained winds', theme: 'weather' },
  { source: 'AP',              date: '2017-10-01', place: 'Barcelona, ES',          headline: 'Catalonia holds disputed independence referendum amid police crackdown', theme: 'news' },
  { source: 'ECB',             date: '2017-10-26', place: 'Frankfurt, DE',          headline: 'ECB extends asset purchases but halves monthly pace to €30bn', theme: 'finance' },
  { source: 'ECMWF',           date: '2017-10-15', place: 'Pedrógão Grande, PT',    headline: 'Deadliest wildfire season in Portuguese history kills over 100', theme: 'weather' },
  // ── 2018 ──
  { source: 'AP',              date: '2018-02-09', place: 'PyeongChang, KR',        headline: 'Winter Olympics open under unified Korean flag', theme: 'sports' },
  { source: 'REUTERS',         date: '2018-02-25', place: 'Bratislava, SK',         headline: 'Murder of journalist Kuciak triggers political crisis in Slovakia', theme: 'news' },
  { source: 'BBC',             date: '2018-05-25', place: 'Dublin, IE',             headline: 'Ireland votes overwhelmingly to repeal abortion ban in referendum', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2018-07-06', place: 'Beijing, CN',            headline: 'US-China trade war begins as first tariffs take effect', theme: 'finance' },
  { source: 'ECMWF',           date: '2018-07-23', place: 'Athens, GR',             headline: 'Greek wildfires kill 102; deadliest blazes in Europe in decades', theme: 'weather' },
  { source: 'AFP',             date: '2018-08-14', place: 'Genoa, IT',              headline: 'Morandi bridge collapses killing 43; sparks infrastructure debate', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2018-12-24', place: 'New York, NY',           headline: 'S&P 500 posts worst Christmas Eve decline since Great Depression', theme: 'finance' },
  // ── 2019 ──
  { source: 'BBC',             date: '2019-02-02', place: 'Twickenham, UK',         headline: 'Wales edge England 21-13 to clinch Six Nations Grand Slam', theme: 'sports' },
  { source: 'AFP',             date: '2019-06-05', place: 'Copenhagen, DK',         headline: 'Social Democrats win Danish election; Frederiksen becomes PM', theme: 'news' },
  { source: 'NOAA',            date: '2019-07-25', place: 'Paris, FR',              headline: 'France shatters all-time heat record at 46.0°C during June heatwave', theme: 'weather' },
  { source: 'MET OFFICE',      date: '2019-12-30', place: 'Sydney, AU',             headline: 'Australian bushfires burn 46 million acres; smoke plume circles globe', theme: 'weather' },
  // ── 2020 ──
  { source: 'WHO',             date: '2020-03-11', place: 'Geneva, CH',             headline: 'WHO declares COVID-19 a global pandemic', theme: 'health' },
  { source: 'FEDERAL RESERVE', date: '2020-03-15', place: 'Washington, DC',         headline: 'Fed slashes rates to near zero; launches unlimited QE programme', theme: 'finance' },
  { source: 'NOAA',            date: '2020-09-09', place: 'Portland, OR',           headline: 'US West Coast wildfires turn skies orange from California to Washington', theme: 'weather' },
  { source: 'AP',              date: '2020-11-07', place: 'Washington, DC',         headline: 'Biden wins US presidential election after days of ballot counting', theme: 'news' },
  // ── 2021 ──
  { source: 'REUTERS',         date: '2021-03-23', place: 'Suez Canal, EG',         headline: 'Ever Given blocks Suez Canal for six days, disrupting global trade', theme: 'finance' },
  { source: 'WMO',             date: '2021-06-24', place: 'Moravia, CZ',            headline: 'Rare tornado devastates villages in south Moravia; worst in Czech history', theme: 'weather' },
  { source: 'DWD',             date: '2021-07-14', place: 'Ahr Valley, DE',         headline: 'Record rainfall triggers catastrophic flooding across western Germany', theme: 'weather' },
  { source: 'MET OFFICE',      date: '2021-07-15', place: 'Limburg, NL',            headline: 'Severe flooding hits southern Netherlands as Meuse river overflows', theme: 'weather' },
  { source: 'REUTERS',         date: '2021-07-23', place: 'Tokyo, JP',              headline: 'Tokyo 2020 Olympics open one year late before empty stands', theme: 'sports' },
  { source: 'IPCC',            date: '2021-08-09', place: 'Geneva, CH',             headline: 'IPCC AR6: human influence on climate "unequivocal"', theme: 'weather' },
  { source: 'AP',              date: '2021-08-15', place: 'Kabul, AF',              headline: 'Taliban seize Kabul as Western forces complete withdrawal', theme: 'news' },
  // ── 2022 ──
  { source: 'REUTERS',         date: '2022-02-24', place: 'Kyiv, UA',               headline: 'Russia launches full-scale invasion of Ukraine', theme: 'news' },
  { source: 'IMF',             date: '2022-04-19', place: 'Washington, DC',         headline: 'IMF cuts global growth outlook amid war, inflation, and supply shocks', theme: 'finance' },
  { source: 'ECMWF',           date: '2022-06-30', place: 'Madrid, ES',             headline: 'Record heatwave scorches Europe; over 60,000 excess deaths estimated', theme: 'weather' },
  { source: 'REUTERS',         date: '2022-09-25', place: 'Rome, IT',               headline: 'Meloni leads right-wing coalition to victory in Italian election', theme: 'news' },
  { source: 'AFP',             date: '2022-09-26', place: 'Baltic Sea',             headline: 'Nord Stream pipelines sabotaged in suspected state-sponsored attack', theme: 'news' },
  { source: 'BANK OF ENGLAND', date: '2022-09-28', place: 'London, UK',             headline: 'Bank of England launches emergency gilt purchases after mini-budget turmoil', theme: 'finance' },
  { source: 'AFP',             date: '2022-12-18', place: 'Lusail, QA',             headline: 'Argentina wins World Cup on penalties; Messi lifts trophy', theme: 'sports' },
  // ── 2023 ──
  { source: 'BLOOMBERG',       date: '2023-03-10', place: 'San Francisco, CA',      headline: 'Silicon Valley Bank collapses in largest US bank failure since 2008', theme: 'finance' },
  { source: 'REUTERS',         date: '2023-04-04', place: 'Helsinki, FI',           headline: 'Finland joins NATO, doubling the alliance border with Russia', theme: 'news' },
  { source: 'ECMWF',           date: '2023-07-06', place: 'Global',                 headline: 'July 4 confirmed as hottest day in recorded history', theme: 'weather' },
  { source: 'WMO',             date: '2023-09-10', place: 'Derna, LY',              headline: 'Storm Daniel triggers catastrophic flooding in Libya; thousands dead', theme: 'weather' },
  { source: 'REUTERS',         date: '2023-10-05', place: 'Stockholm, SE',          headline: 'Nobel Prize in Economics awarded for research on gender labour gaps', theme: 'culture' },
  { source: 'AFP',             date: '2023-10-07', place: 'Gaza',                   headline: 'Hamas attacks Israel; war in Gaza begins with massive escalation', theme: 'news' },
  { source: 'AP',              date: '2023-10-15', place: 'Warsaw, PL',             headline: 'Polish opposition defeats PiS in landmark parliamentary election', theme: 'news' },
  // ── 2024 ──
  { source: 'BLOOMBERG',       date: '2024-01-02', place: 'New York, NY',           headline: 'S&P 500 closes at all-time high, capping 24% annual rally', theme: 'finance' },
  { source: 'WMO',             date: '2024-03-19', place: 'Geneva, CH',             headline: 'WMO confirms 2023 as warmest year on record by large margin', theme: 'weather' },
  { source: 'REUTERS',         date: '2024-04-13', place: 'Tehran, IR',             headline: 'Iran launches unprecedented drone and missile barrage at Israel', theme: 'news' },
  { source: 'AP',              date: '2024-06-09', place: 'Brussels, BE',           headline: 'European Parliament elections see record turnout amid far-right gains', theme: 'news' },
  { source: 'BBC',             date: '2024-07-26', place: 'Paris, FR',              headline: 'Paris 2024 Olympics open with Seine river ceremony', theme: 'sports' },
  { source: 'NOAA',            date: '2024-09-27', place: 'Asheville, NC',          headline: 'Hurricane Helene devastates US Southeast; hundreds killed', theme: 'weather' },
  { source: 'AP',              date: '2024-11-05', place: 'Washington, DC',         headline: 'Trump wins second presidential term, defeating Harris', theme: 'news' },
  { source: 'REUTERS',         date: '2024-12-06', place: 'Bucharest, RO',          headline: 'Romanian court annuls presidential election over foreign interference', theme: 'news' },
];

export const nfItemsIT: NewsItem[] = [
  // ── 2010 ──
  { source: 'BCE',             date: '2010-04-23', place: 'Atene, GR',              headline: 'La Grecia chiede il salvataggio UE-FMI mentre esplode la crisi del debito sovrano', theme: 'finance' },
  { source: 'REUTERS',         date: '2010-05-06', place: 'Londra, UK',             headline: 'Parlamento in bilico: nessun partito ottiene la maggioranza assoluta alle elezioni britanniche', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2010-05-06', place: 'New York, NY',           headline: 'Flash crash: il Dow perde quasi 1.000 punti in pochi minuti', theme: 'finance' },
  { source: 'AFP',             date: '2010-07-11', place: 'Johannesburg, ZA',       headline: 'La Spagna vince il suo primo Mondiale con l\'1-0 ai supplementari', theme: 'sports' },
  { source: 'NOAA',            date: '2010-08-14', place: 'Bacino dell\'Indo, Pakistan', headline: 'Alluvioni monsoniche senza precedenti: venti milioni di sfollati in Pakistan', theme: 'weather' },
  // ── 2011 ──
  { source: 'AFP',             date: '2011-02-11', place: 'Il Cairo, EG',           headline: 'Mubarak si dimette dopo 18 giorni di proteste di massa in tutto l\'Egitto', theme: 'news' },
  { source: 'AP',              date: '2011-03-11', place: 'Tōhoku, Giappone',       headline: 'Terremoto di magnitudo 9,1 provoca tsunami e crisi nucleare a Fukushima', theme: 'weather' },
  { source: 'FMI',             date: '2011-04-06', place: 'Lisbona, PT',            headline: 'Il Portogallo chiede il salvataggio UE-FMI mentre i rendimenti superano l\'8%', theme: 'finance' },
  { source: 'BCE',             date: '2011-11-03', place: 'Francoforte, DE',        headline: 'La BCE taglia i tassi mentre la crisi del debito si estende a Italia e Spagna', theme: 'finance' },
  // ── 2012 ──
  { source: 'FMI',             date: '2012-06-29', place: 'Bruxelles, BE',          headline: 'I leader dell\'area euro approvano la ricapitalizzazione bancaria diretta tramite MES', theme: 'finance' },
  { source: 'BBC',             date: '2012-07-27', place: 'Londra, UK',             headline: 'Londra 2012: i Giochi Olimpici si aprono con la cerimonia di Danny Boyle', theme: 'sports' },
  { source: 'NOAA',            date: '2012-10-29', place: 'New York, NY',           headline: 'L\'uragano Sandy colpisce la costa est degli USA: 70 miliardi di dollari di danni', theme: 'weather' },
  { source: 'AP',              date: '2012-11-06', place: 'Washington, DC',         headline: 'Obama vince la rielezione sconfiggendo Romney in una gara molto seguita', theme: 'news' },
  { source: 'IPCC',            date: '2012-11-18', place: 'Doha, Qatar',            headline: 'Rapporto speciale IPCC: gli eventi meteorologici estremi aumentano in frequenza', theme: 'weather' },
  // ── 2013 ──
  { source: 'BCE',             date: '2013-03-25', place: 'Nicosia, CY',            headline: 'Crisi bancaria cipriota: concordato un prelievo straordinario sui depositi', theme: 'finance' },
  { source: 'FED',             date: '2013-05-22', place: 'Washington, DC',         headline: 'Bernanke accenna a ridurre il QE; i rendimenti balzano nel "taper tantrum"', theme: 'finance' },
  { source: 'ECMWF',           date: '2013-06-03', place: 'Praga, CZ',             headline: 'Le peggiori alluvioni del decennio impongono evacuazioni di massa in Cechia', theme: 'weather' },
  { source: 'REUTERS',         date: '2013-09-10', place: 'Stoccolma, SE',          headline: 'Il Nobel per la fisica assegnato per la previsione del bosone di Higgs', theme: 'culture' },
  { source: 'OMM',             date: '2013-11-08', place: 'Tacloban, Filippine',    headline: 'Il super tifone Haiyan tocca terra con venti sostenuti a 315 km/h', theme: 'weather' },
  // ── 2014 ──
  { source: 'REUTERS',         date: '2014-03-18', place: 'Simferopoli, UA',        headline: 'La Russia annette la Crimea dopo un referendum contestato; l\'Occidente impone sanzioni', theme: 'news' },
  { source: 'AP',              date: '2014-07-13', place: 'Rio de Janeiro, BR',     headline: 'La Germania travolge il Brasile 7-1 nella semifinale mondiale al Maracanã', theme: 'sports' },
  { source: 'BANCA MONDIALE',  date: '2014-10-08', place: 'Washington, DC',         headline: 'La Banca Mondiale avverte: la crescente disuguaglianza frena le prospettive di crescita', theme: 'finance' },
  // ── 2015 ──
  { source: 'AP',              date: '2015-05-23', place: 'Dublino, IE',            headline: 'L\'Irlanda vota per la legalizzazione del matrimonio tra persone dello stesso sesso', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2015-08-24', place: 'Shanghai, CN',           headline: 'Il crollo della Borsa cinese scatena il "lunedì nero" sui mercati globali', theme: 'finance' },
  { source: 'AFP',             date: '2015-09-02', place: 'Bodrum, TR',             headline: 'Crisi dei rifugiati: l\'immagine del bambino annegato scuote il dibattito europeo', theme: 'news' },
  { source: 'AFP',             date: '2015-10-25', place: 'Varsavia, PL',           headline: 'Diritto e Giustizia conquista la maggioranza parlamentare polacca sull\'onda conservatrice', theme: 'news' },
  { source: 'BBC',             date: '2015-12-12', place: 'Parigi, FR',             headline: '195 nazioni adottano l\'Accordo di Parigi sui cambiamenti climatici', theme: 'weather' },
  { source: 'ECMWF',           date: '2015-12-30', place: 'Atlantico Settentrionale', headline: 'La tempesta Frank provoca alluvioni invernali nel Regno Unito; dicembre il più caldo mai registrato', theme: 'weather' },
  // ── 2016 ──
  { source: 'AFP',             date: '2016-03-22', place: 'Bruxelles, BE',          headline: 'Attentati coordinati all\'aeroporto e alla metro di Bruxelles: 32 morti', theme: 'news' },
  { source: 'REUTERS',         date: '2016-06-24', place: 'Londra, UK',             headline: 'Il Regno Unito vota per lasciare l\'UE; la sterlina crolla al minimo da 31 anni', theme: 'news' },
  { source: 'AFP',             date: '2016-08-21', place: 'Rio de Janeiro, BR',     headline: 'Chiudono le Olimpiadi di Rio 2016; Usain Bolt realizza il "triplete del triplete"', theme: 'sports' },
  { source: 'AP',              date: '2016-11-08', place: 'Washington, DC',         headline: 'Trump vince a sorpresa le elezioni presidenziali statunitensi su Clinton', theme: 'news' },
  { source: 'OCSE',            date: '2016-11-09', place: 'Parigi, FR',             headline: 'L\'OCSE rivede le previsioni globali dopo il sorprendente risultato delle elezioni USA', theme: 'finance' },
  // ── 2017 ──
  { source: 'REUTERS',         date: '2017-02-01', place: 'Bucarest, RO',           headline: 'Le più grandi proteste in Romania dal 1989 contro un decreto anticorruzione', theme: 'news' },
  { source: 'REUTERS',         date: '2017-03-15', place: 'L\'Aia, NL',             headline: 'Elezioni olandesi: Rutte sconfigge Wilders in un atteso test sul populismo', theme: 'news' },
  { source: 'AFP',             date: '2017-05-07', place: 'Parigi, FR',             headline: 'Macron vince la presidenza francese sconfiggendo Le Pen al ballottaggio', theme: 'news' },
  { source: 'NOAA',            date: '2017-08-25', place: 'Houston, TX',            headline: 'L\'uragano Harvey scarica piogge record su Houston; alluvioni catastrofiche', theme: 'weather' },
  { source: 'MET OFFICE',      date: '2017-09-06', place: 'Mar dei Caraibi',        headline: 'L\'uragano Irma raggiunge la categoria 5 con venti sostenuti a 295 km/h', theme: 'weather' },
  { source: 'AP',              date: '2017-10-01', place: 'Barcellona, ES',         headline: 'La Catalogna vota sull\'indipendenza nel controverso referendum; dure le reazioni della polizia', theme: 'news' },
  { source: 'BCE',             date: '2017-10-26', place: 'Francoforte, DE',        headline: 'La BCE prolunga gli acquisti ma dimezza il ritmo mensile a 30 miliardi di euro', theme: 'finance' },
  { source: 'ECMWF',           date: '2017-10-15', place: 'Pedrógão Grande, PT',    headline: 'La stagione degli incendi più mortale della storia portoghese: oltre 100 vittime', theme: 'weather' },
  // ── 2018 ──
  { source: 'AP',              date: '2018-02-09', place: 'PyeongChang, KR',        headline: 'Le Olimpiadi invernali si aprono sotto la bandiera coreana unificata', theme: 'sports' },
  { source: 'REUTERS',         date: '2018-02-25', place: 'Bratislava, SK',         headline: 'L\'omicidio del giornalista Kuciak provoca una crisi politica in Slovacchia', theme: 'news' },
  { source: 'BBC',             date: '2018-05-25', place: 'Dublino, IE',            headline: 'L\'Irlanda vota in modo schiacciante per abrogare il divieto di aborto', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2018-07-06', place: 'Pechino, CN',            headline: 'Ha inizio la guerra commerciale USA-Cina: entrano in vigore i primi dazi', theme: 'finance' },
  { source: 'ECMWF',           date: '2018-07-23', place: 'Atene, GR',              headline: 'Incendi boschivi in Grecia: 102 vittime, i più letali in Europa da decenni', theme: 'weather' },
  { source: 'AFP',             date: '2018-08-14', place: 'Genova, IT',             headline: 'Crolla il ponte Morandi: 43 vittime, si riapre il dibattito sulle infrastrutture', theme: 'news' },
  { source: 'BLOOMBERG',       date: '2018-12-24', place: 'New York, NY',           headline: 'L\'S&P 500 registra il peggior calo della vigilia di Natale dalla Grande Depressione', theme: 'finance' },
  // ── 2019 ──
  { source: 'BBC',             date: '2019-02-02', place: 'Twickenham, UK',         headline: 'Il Galles batte l\'Inghilterra 21-13 e conquista il Grande Slam del Sei Nazioni', theme: 'sports' },
  { source: 'AFP',             date: '2019-06-05', place: 'Copenaghen, DK',         headline: 'I socialdemocratici vincono le elezioni danesi; Frederiksen diventa premier', theme: 'news' },
  { source: 'NOAA',            date: '2019-07-25', place: 'Parigi, FR',             headline: 'La Francia frantuma il record con 46,0°C durante l\'ondata di calore di giugno', theme: 'weather' },
  { source: 'MET OFFICE',      date: '2019-12-30', place: 'Sydney, AU',             headline: 'Gli incendi australiani bruciano 18 milioni di ettari; il fumo fa il giro del globo', theme: 'weather' },
  // ── 2020 ──
  { source: 'OMS',             date: '2020-03-11', place: 'Ginevra, CH',            headline: 'L\'OMS dichiara il COVID-19 pandemia globale', theme: 'health' },
  { source: 'FED',             date: '2020-03-15', place: 'Washington, DC',         headline: 'La FED taglia i tassi a quasi zero e avvia un programma di QE illimitato', theme: 'finance' },
  { source: 'NOAA',            date: '2020-09-09', place: 'Portland, OR',           headline: 'Gli incendi sulla costa ovest degli USA tingono il cielo d\'arancio dalla California a Washington', theme: 'weather' },
  { source: 'AP',              date: '2020-11-07', place: 'Washington, DC',         headline: 'Biden vince le elezioni presidenziali USA dopo giorni di conteggio dei voti', theme: 'news' },
  // ── 2021 ──
  { source: 'REUTERS',         date: '2021-03-23', place: 'Canale di Suez, EG',     headline: 'L\'Ever Given blocca il Canale di Suez per sei giorni, paralizzando il commercio globale', theme: 'finance' },
  { source: 'OMM',             date: '2021-06-24', place: 'Moravia del Sud, CZ',    headline: 'Un raro tornado devasta i villaggi della Moravia del Sud: il peggiore nella storia ceca', theme: 'weather' },
  { source: 'DWD',             date: '2021-07-14', place: 'Valle dell\'Ahr, DE',    headline: 'Piogge record scatenano alluvioni catastrofiche nella Germania occidentale', theme: 'weather' },
  { source: 'MET OFFICE',      date: '2021-07-15', place: 'Limburgo, NL',           headline: 'Gravi alluvioni colpiscono i Paesi Bassi meridionali mentre la Mosa esonda', theme: 'weather' },
  { source: 'REUTERS',         date: '2021-07-23', place: 'Tokyo, JP',              headline: 'Le Olimpiadi di Tokyo 2020 si aprono con un anno di ritardo davanti a spalti vuoti', theme: 'sports' },
  { source: 'IPCC',            date: '2021-08-09', place: 'Ginevra, CH',            headline: 'IPCC AR6: l\'influenza umana sul clima è "inequivocabile"', theme: 'weather' },
  { source: 'AP',              date: '2021-08-15', place: 'Kabul, AF',              headline: 'I talebani conquistano Kabul mentre le forze occidentali completano il ritiro', theme: 'news' },
  // ── 2022 ──
  { source: 'REUTERS',         date: '2022-02-24', place: 'Kiev, UA',               headline: 'La Russia lancia un\'invasione su larga scala dell\'Ucraina', theme: 'news' },
  { source: 'FMI',             date: '2022-04-19', place: 'Washington, DC',         headline: 'Il FMI taglia le previsioni di crescita tra guerra, inflazione e shock d\'offerta', theme: 'finance' },
  { source: 'ECMWF',           date: '2022-06-30', place: 'Madrid, ES',             headline: 'Un\'ondata di calore record brucia l\'Europa: stimati oltre 60.000 decessi in eccesso', theme: 'weather' },
  { source: 'REUTERS',         date: '2022-09-25', place: 'Roma, IT',               headline: 'Meloni guida la coalizione di centrodestra alla vittoria nelle elezioni italiane', theme: 'news' },
  { source: 'AFP',             date: '2022-09-26', place: 'Mar Baltico',            headline: 'I gasdotti Nord Stream sabotati in quello che si sospetta un attacco di matrice statale', theme: 'news' },
  { source: 'BANCA D\'INGHILTERRA', date: '2022-09-28', place: 'Londra, UK',        headline: 'La Banca d\'Inghilterra lancia acquisti d\'emergenza di titoli dopo il caos del mini-budget', theme: 'finance' },
  { source: 'AFP',             date: '2022-12-18', place: 'Lusail, QA',             headline: 'L\'Argentina vince la Coppa del Mondo ai rigori; Messi alza il trofeo', theme: 'sports' },
  // ── 2023 ──
  { source: 'BLOOMBERG',       date: '2023-03-10', place: 'San Francisco, CA',      headline: 'Crolla Silicon Valley Bank: il più grande fallimento bancario USA dal 2008', theme: 'finance' },
  { source: 'REUTERS',         date: '2023-04-04', place: 'Helsinki, FI',           headline: 'La Finlandia entra nella NATO, raddoppiando il confine dell\'alleanza con la Russia', theme: 'news' },
  { source: 'ECMWF',           date: '2023-07-06', place: 'Globale',                headline: 'Il 4 luglio confermato come il giorno più caldo nella storia della climatologia', theme: 'weather' },
  { source: 'OMM',             date: '2023-09-10', place: 'Derna, LY',              headline: 'La tempesta Daniel provoca alluvioni catastrofiche in Libia: migliaia di morti', theme: 'weather' },
  { source: 'REUTERS',         date: '2023-10-05', place: 'Stoccolma, SE',          headline: 'Premio Nobel per l\'Economia assegnato per le ricerche sui divari di genere nel lavoro', theme: 'culture' },
  { source: 'AFP',             date: '2023-10-07', place: 'Gaza',                   headline: 'Hamas attacca Israele; la guerra a Gaza inizia con una massiccia escalation', theme: 'news' },
  { source: 'AP',              date: '2023-10-15', place: 'Varsavia, PL',           headline: 'L\'opposizione polacca sconfigge il PiS in un\'elezione parlamentare storica', theme: 'news' },
  // ── 2024 ──
  { source: 'BLOOMBERG',       date: '2024-01-02', place: 'New York, NY',           headline: 'L\'S&P 500 chiude ai massimi storici coronando un rally annuale del 24%', theme: 'finance' },
  { source: 'OMM',             date: '2024-03-19', place: 'Ginevra, CH',            headline: 'L\'OMM conferma il 2023 come l\'anno più caldo mai registrato con ampio margine', theme: 'weather' },
  { source: 'REUTERS',         date: '2024-04-13', place: 'Teheran, IR',            headline: 'L\'Iran lancia un attacco senza precedenti di droni e missili contro Israele', theme: 'news' },
  { source: 'AP',              date: '2024-06-09', place: 'Bruxelles, BE',          headline: 'Europee 2024: affluenza record e avanzata dei partiti di estrema destra', theme: 'news' },
  { source: 'BBC',             date: '2024-07-26', place: 'Parigi, FR',             headline: 'Le Olimpiadi di Parigi 2024 si aprono con la cerimonia lungo la Senna', theme: 'sports' },
  { source: 'NOAA',            date: '2024-09-27', place: 'Asheville, NC',          headline: 'L\'uragano Helene devasta il sud-est degli USA: centinaia di vittime', theme: 'weather' },
  { source: 'AP',              date: '2024-11-05', place: 'Washington, DC',         headline: 'Trump vince il suo secondo mandato presidenziale sconfiggendo Harris', theme: 'news' },
  { source: 'REUTERS',         date: '2024-12-06', place: 'Bucarest, RO',           headline: 'Il tribunale rumeno annulla le elezioni presidenziali per interferenze straniere', theme: 'news' },
];
