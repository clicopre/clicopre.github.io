import type { Translations } from './en';

export const it: Translations = {
  lang: 'it' as const,
  siteTitle: 'CLICOPRE — Comunicazione Climatica & Risposta Politica ad eventi meteo estremi',
  siteDescription:
    'CLICOPRE studia come gli eventi meteo estremi impattano la comunicazione sul clima e le risposte di policy nell\'UE e negli USA. Un progetto di ricerca di Duccio Gamannossi degl\'Innocenti (Università di Padova e Harvard University).',

  nav: [
    { href: '#research', label: 'Ricerca',         n: 'I'   },
    { href: '#approach', label: 'Metodi',           n: 'II'  },
    { href: '#people',   label: 'Persone',          n: 'III' },
    { href: '#outputs',  label: 'Risultati',        n: 'IV'  },
    { href: '#updates',  label: 'Aggiornamenti',    n: 'V'   },
    { href: '#contact',  label: 'Contatti',         n: 'VI'  },
  ],

  hero: {
    eyebrow: 'Shock climatici · Comunicazione · Risposta di policy',
    titleEm: 'Eventi meteo estremi',
    titleRest: 'e impatto sulla comunicazione climatica e sulle risposte di policy.',
    lede: 'CLICOPRE studia come gli eventi meteorologici estremi influenzino il dibattito pubblico sul clima, analizzando l\’attività sui social media di politici e testate giornalistiche, ed investigando come questi shock impattino sull\’attività legislativa e sul comportamento di voto nell\’Unione Europea e negli Stati Uniti.',
    ctaPrimary: 'Domande di ricerca',
    ctaSecondary: 'Metodi e dati',
  },

  scopeStrip: {
    dataLabel: 'Dati',
    dataValues: ['Dati meteorologici', 'Social media', 'Attività legislativa'],
    coverageLabel: 'Copertura',
    periodLabel: 'Periodo',
    methodsLabel: 'Metodi',
    methodsValues: ['NLP e inferenza causale'],
  },

  research: {
    marker: '§ I — Agenda di ricerca',
    heading: 'Tre domande interconnesse su clima, dibattito pubblico e risposta democratica.',
    pillars: [
      {
        n: '01',
        title: 'Comunicazione Climatica',
        body: 'Misurare come gli eventi meteorologici estremi ridefiniscono la comunicazione climatica di politici e testate giornalistiche sui social media, e come il pubblico reagisce.',
        keys: ['Ondate di calore', 'Alluvioni', 'Engagement', 'Analisi tematica'],
      },
      {
        n: '02',
        title: 'Attività Legislativa',
        body: 'Verificare se i cambiamenti nel dibattito pubblico generati dagli shock meteo si traducano in misure di politica climatica al Parlamento Europeo e al Congresso degli Stati Uniti.',
        keys: ['Voti nominali', 'Proposta di disegni di legge', 'Metodi causali'],
      },
      {
        n: '03',
        title: 'Voto e Responsabilità',
        body: 'Valutare se gli elettori premino risposte concrete di politica climatica piuttosto che la retorica, e se la comunicazione affianca l\'azione politica o la sostituisce.',
        keys: ['Elezioni', 'Risposta politica', 'Accountability', 'Disegni causali'],
      },
    ],
  },

  approach: {
    marker: '§ II — Metodi e dati',
    heading: 'Dati su larga scala, NLP e AI per l\'inferenza causale.',
    items: [
      {
        label: 'Dati',
        text: 'Dati dei social media su larga scala, documenti parlamentari e informazioni meteorologiche ad alta risoluzione.',
      },
      {
        label: 'Metodi',
        text: 'Modelli NLP e AI combinati con inferenza causale che sfruttano la tempistica e l\'intensità degli shock meteo.',
      },
      {
        label: 'Output',
        text: 'Working paper, codice di replicazione, dataset aperti, contributi per il dibattito pubblico e interfacce interattive.',
      },
    ],
  },

  people: {
    marker: '§ III — Persone e istituzioni',
    headingPre: 'Con sede all\'',
    headingUnipd: 'Università di Padova',
    headingMid: 'e a',
    headingHarvard: 'Harvard University',
    para1Pre: 'CLICOPRE è un progetto di',
    para1Post: ' ppostdoc in economia, con interessi di ricerca in economia pubblica, economia politica, clima e media.',
    para2Pre: 'Il progetto è finanziato dal programma',
    para2Mid1: '. La fase inbound è ospitata presso il',
    para2DeptName: 'Dipartimento di Scienze Economiche e Aziendali "Marco Fanno"',
    para2Mid2: 'dell\'',
    para2UnipdShort: 'Università di Padova',
    para2Mid3: '. La fase outbound è ospitata presso il',
    para2HarvardDept: 'Department of Government',
    para2HarvardShort: 'Harvard University',
  },

  outputs: {
    marker: '§ IV — Risultati',
    heading: 'Working paper, dati, codice e interfacce interattive.',
    streams: [
      { label: 'Articoli', hint: 'Working paper e articoli scientifici saranno pubblicati qui.' },
      { label: 'Dati',     hint: 'I dataset per la replicazione dei risultati saranno rilasciati insieme a ciascun articolo.' },
      { label: 'Codice',   hint: 'I repository del codice saranno riportati qui quando disponibili.' },
    ],
  },

  updates: {
    marker: '§ V — Aggiornamenti',
    heading: 'Novità dal progetto.',
    emptyLabel: '— Primo post in arrivo',
    emptyBody: 'Aggiornamenti sul progetto, working paper, rilascio di dati, dashboard ed eventi saranno pubblicati qui.',
  },

  contact: {
    marker: '§ VI — Contatti',
    heading: 'Contattaci.',
    body: 'Per domande, chiarimenti o collaborazioni, scrivici a',
  },

  footer: {
    tag: 'Comunicazione climatica e risposte di policy agli eventi meteorologici estremi',
    projectHeading: 'Progetto',
    navLinks: {
      research: 'Domande di ricerca',
      approach: 'Metodi',
      outputs: 'Risultati',
      updates: 'Aggiornamenti',
      contact: 'Contatti',
    },
    contactHeading: 'Contatti',
    deptUnipd: 'Dipartimento di Scienze Economiche e Aziendali "Marco Fanno"',
    deptHarvard: 'Department of Government',
    hostedBy: 'Ospitato e sostenuto da',
    institutionRoles: ['Sede ospitante (inbound)', 'Sede ospitante (outbound)', 'Programma di finanziamento'],
    backToTop: '↑ Torna su',
  },
};
