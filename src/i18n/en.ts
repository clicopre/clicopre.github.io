export const en = {
  lang: 'en' as 'en' | 'it',
  siteTitle: 'CLICOPRE — Climate Communication & Political Response',
  siteDescription:
    'CLICOPRE studies how extreme weather events shape climate communication and political response in the EU and the US. A research project by Duccio Gamannossi degl’Innocenti (University of Padua, Harvard University).',

  nav: [
    { href: '#research', label: 'Research',  n: 'I'   },
    { href: '#approach', label: 'Approach',  n: 'II'  },
    { href: '#people',   label: 'People',    n: 'III' },
    { href: '#outputs',  label: 'Outputs',   n: 'IV'  },
    { href: '#updates',  label: 'Updates',   n: 'V'   },
    { href: '#contact',  label: 'Contact',   n: 'VI'  },
  ],

  hero: {
    eyebrow: 'Climate shocks · Communication · Policy response',
    titleEm: 'Extreme Weather Events',
    titleRest: 'and their impact on climate communication and policy responses.',
    lede: 'CLICOPRE studies how extreme weather events shift the climate debate among politicians and news outlets on social media, how audiences respond, and whether these shocks translate into legislative action and voting behavior in the European Union and the United States.',
    ctaPrimary: 'Main research questions',
    ctaSecondary: 'Methods & data',
  },

  scopeStrip: {
    dataLabel: 'Data',
    dataValues: ['Weather', 'Social media', 'Legislative activity'],
    coverageLabel: 'Coverage',
    periodLabel: 'Period',
    methodsLabel: 'Methods',
    methodsValues: ['NLP & Causal inference'],
  },

  research: {
    marker: '§ I — Research agenda',
    heading: 'Three intertwined questions about climate, attention, and democratic accountability.',
    pillars: [
      {
        n: '01',
        title: 'Climate Communication',
        body: 'Measuring how extreme weather events reshape climate communication by politicians and news outlets on social media, and how audiences respond.',
        keys: ['Heatwaves', 'Floods', 'Engagement', 'Topic Analysis'],
      },
      {
        n: '02',
        title: 'Legislative Activity',
        body: 'Tracing whether weather-driven shifts in attention translate into climate-policy activity in the European Parliament and the US Congress.',
        keys: ['Roll-call votes', 'Bill sponsorship', 'Causal methods'],
      },
      {
        n: '03',
        title: 'Voting & Accountability',
        body: 'Assessing whether voters reward substantive policy responses over rhetoric on climate issues, and whether communication complements or substitutes for action.',
        keys: ['Elections', 'Policy response', 'Accountability', 'Causal designs'],
      },
    ],
  },

  approach: {
    marker: '§ II — Methods & data',
    heading: 'Large-scale data, NLP, and AI for causal insight.',
    items: [
      {
        label: 'Data',
        text: 'Large-scale social media data, news-outlet profiles, parliamentary records, and high-resolution weather information.',
      },
      {
        label: 'Methods',
        text: 'NLP and AI models combined with causal-inference designs that leverage the timing and intensity of weather shocks.',
      },
      {
        label: 'Outputs',
        text: 'Working papers, replication code, open datasets, policy-facing writing, and interactive evidence interfaces.',
      },
    ],
  },

  people: {
    marker: '§ III — People & institutions',
    headingPre: 'Hosted at the',
    headingUnipd: 'University of Padua',
    headingMid: 'and',
    headingHarvard: 'Harvard University',
    para1Pre: 'CLICOPRE is led by',
    para1Post: ', a postdoctoral researcher whose work spans public economics, political economy, climate, and media.',
    para2Pre: 'The project runs under the',
    para2Mid1: '. The inbound phase is hosted at the',
    para2DeptName: 'Department of Economics and Management “Marco Fanno”',
    para2Mid2: 'at the',
    para2UnipdShort: 'University of Padua',
    para2Mid3: '. The outbound phase is hosted at the',
    para2HarvardDept: 'Department of Government',
    para2HarvardShort: 'Harvard University',
  },

  outputs: {
    marker: '§ IV — Outputs',
    heading: 'Papers, data, code, and interactive interfaces.',
    streams: [
      { label: 'Papers', hint: 'Working papers and journal articles will appear here as drafts circulate.' },
      { label: 'Data',   hint: 'Replication datasets will be released alongside each paper.' },
      { label: 'Code',   hint: 'Analysis code repositories will be linked here on first release.' },
    ],
  },

  updates: {
    marker: '§ V — Updates',
    heading: 'News from the project.',
    emptyLabel: '— First post coming soon',
    emptyBody: 'Project updates, including working papers, data releases, dashboards, and events, will appear here.',
  },

  contact: {
    marker: '§ VI — Contact',
    heading: 'Get in touch.',
    body: 'For questions, clarifications, or collaboration, reach out at',
  },

  footer: {
    tag: 'Climate communication and policy responses to extreme weather events',
    projectHeading: 'Project',
    navLinks: {
      research: 'Main research questions',
      approach: 'Approach',
      outputs: 'Outputs',
      updates: 'Updates',
      contact: 'Contact',
    },
    contactHeading: 'Contact',
    deptUnipd: 'Department of Economics and Management "Marco Fanno"',
    deptHarvard: 'Department of Government',
    hostedBy: 'Hosted & supported by',
    institutionRoles: ['Host-inbound', 'Host-outbound', 'Funding Scheme'],
    backToTop: '↑ Back to top',
  },
};

export type Translations = typeof en;
