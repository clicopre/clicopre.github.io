export type PrivacyBlock =
  | { type: 'paragraph'; html: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] };

export interface PrivacySection {
  id: string;
  title: string;
  blocks: PrivacyBlock[];
}

export interface PrivacyNotice {
  annexLabel: string;
  title: string;
  description: string;
  intro: string;
  contentsLabel: string;
  sections: PrivacySection[];
}

export const privacyEn: PrivacyNotice = {
  annexLabel: 'Annex 1',
  title: 'Privacy Notice for the CLICOPRE Website',
  description:
    'How personal data may be processed within the CLICOPRE project and how the project website is operated.',
  intro:
    'The CLICOPRE project is carried out by the University of Padua, with Harvard University as co-host, and is funded under the Seal of Excellence@UNIPD (SoE) scheme. This notice explains how personal data may be processed within the project and is published for transparency purposes on the project website.',
  contentsLabel: 'On this page',
  sections: [
    {
      id: 'data-controller',
      title: '1. Data Controller',
      blocks: [
        {
          type: 'paragraph',
          html: 'The University of Padua is the data controller for the personal data processed within the project.',
        },
      ],
    },
    {
      id: 'contact-details',
      title: '2. Contact Details',
      blocks: [
        {
          type: 'paragraph',
          html: '<strong>Data Protection Officer: </strong><a href="mailto:privacy@unipd.it">privacy@unipd.it</a>.',
        },
        {
          type: 'paragraph',
          html: '<strong>Principal Investigator: </strong>Dr Duccio Gamannossi degl’Innocenti, <a href="mailto:duccio.gamannossi@unipd.it">duccio.gamannossi@unipd.it</a>.',
        },
        {
          type: 'paragraph',
          html: '<strong>CLICOPRE project team (for data-subject requests): </strong><a href="mailto:info@clicopre.com">info@clicopre.com</a>.',
        },
      ],
    },
    {
      id: 'purpose',
      title: '3. Purpose of the Processing',
      blocks: [
        {
          type: 'paragraph',
          html: 'CLICOPRE studies public debate on climate-related issues in the European Union and the United States. In particular, the project examines how extreme weather events shape public debate, how audiences react, and whether these shocks translate into legislative action and voting behaviour.',
        },
      ],
    },
    {
      id: 'data-categories',
      title: '4. Categories of Data Processed',
      blocks: [
        {
          type: 'paragraph',
          html: 'The project relies on three broad categories of data: social media data, third-party datasets, and project-generated data and documentation.',
        },
        { type: 'subheading', text: '4.1 Social Media Data' },
        {
          type: 'paragraph',
          html: 'The project processes publicly available data from public Facebook pages and public Instagram accounts. Data were collected through CrowdTangle, a tool provided by Meta to approved researchers for access to public content on its platforms. The project complies with Meta’s terms, conditions, and privacy policies.',
        },
        {
          type: 'paragraph',
          html: 'Accessible fields may include the numeric ID and name associated with the publishing account, the date and time of publication, the post type, attached links, the post ID, the textual description, and aggregated engagement counts such as likes, comments, shares, and reactions. No personal data of individual users who react to or comment on posts are collected through CrowdTangle. However, personal data may still be present indirectly where account names, post content, timestamps, or similar fields make an individual identifiable, whether alone or in combination with other information. In some cases, special categories of personal data, including political opinions, may also be incidentally present in public political communication.',
        },
        { type: 'subheading', text: '4.2 Third-Party Datasets' },
        {
          type: 'paragraph',
          html: 'The project also uses external datasets to link communication patterns to climate events, policymaking, and political behavior. These datasets do not raise concerns relating to personal data or special categories of data. Where third-party datasets are subject to license or access restrictions, they are handled in accordance with the applicable terms and are not redistributed unless explicitly permitted.',
        },
        { type: 'subheading', text: '4.3 Project-Generated Data and Documentation' },
        {
          type: 'paragraph',
          html: 'The project also produces cleaned and harmonized datasets, merged analytical files, topic-model outputs, natural-language-processing-derived variables, legislative text indicators, metadata, codebooks, and reproducibility scripts. These internal research outputs are documented and managed to support research integrity, internal reuse, and reproducibility.',
        },
      ],
    },
    {
      id: 'legal-basis',
      title: '5. Legal Basis',
      blocks: [
        {
          type: 'paragraph',
          html: 'The legal basis for the processing of personal data is Article 6(1)(e) GDPR, within the University’s official research functions. Where special categories of personal data are incidentally present, processing for scientific research purposes is covered by Article 9(2)(j) GDPR. Where such data have been manifestly made public by the data subject, processing is also covered by Article 9(2)(e) GDPR.',
        },
      ],
    },
    {
      id: 'collection-processing',
      title: '6. How the Data Are Collected and Processed',
      blocks: [
        {
          type: 'paragraph',
          html: 'Data collection was carried out through official tools such as Meta CrowdTangle. The project processes only data that is necessary for the approved research objectives. The analysis may include frequency analysis, audience engagement analysis, topic analysis, sentiment analysis, stance analysis, and causal inference techniques. The processing does not involve automated decision-making, including profiling, that produces legal effects concerning data subjects or significantly affects them (Article 22 GDPR).',
        },
        {
          type: 'paragraph',
          html: 'AI-assisted tools, including large language models, may be used for data validation and content analysis within the scope of the CLICOPRE project, including analysis of the text of posts. The default workflow for post-text analysis is to use open-source models run on the University\'s own infrastructure within the EEA. OpenAI ChatGPT may also be used under the CRUI-OpenAI agreement for validation and content-analysis tasks, including where inputs may contain personal data or special categories of data such as political opinions, only where the institutional DPA is executed and the workspace is covered by European data residency and inference residency for in-scope customer content. OpenAI Ireland Limited acts as a data processor pursuant to Article 28 GDPR and does not use project data to train its models. Any residual processing outside the European Economic Area is governed by the Standard Contractual Clauses (Article 46(2)(c) GDPR) incorporated in OpenAI\'s Data Processing Addendum. OpenAI API falls under the same regulations. The AI-assisted tools used in the project do not fall within the category of high-risk AI systems under Article 6 and Annex III of Regulation (EU) 2024/1689. Their use is therefore expected to entail only transparency and information obligations for the deployer.',
        },
      ],
    },
    {
      id: 'recipients',
      title: '7. Recipients and Disclosure',
      blocks: [
        {
          type: 'paragraph',
          html: 'Personal data may be accessed only by authorized members of the research team and, where strictly necessary, by authorized research collaborators within the EEA or service providers acting within the limits of the project and subject to appropriate safeguards. Non-anonymized data are not communicated or disseminated publicly. Results are presented only in aggregated or anonymized form. Before publication, any granular information that may lead to the identification of an individual is removed. Platform data is therefore of closed access. Results derived from third-party licensed data are handled in accordance with the applicable license terms and shared only in forms that do not reproduce restricted content. Where AI-assisted analysis is performed under the conditions described in this notice, OpenAI (OpenAI Ireland Limited) acts as a data processor and may process personal data for that purpose, with residual processing outside the EEA governed by the Standard Contractual Clauses. GitHub and Harvard University do not receive personal data in the project workflow.',
        },
      ],
    },
    {
      id: 'retention-storage',
      title: '8. Retention and Storage',
      blocks: [
        {
          type: 'paragraph',
          html: 'The following data categories are considered to have long-term value and will therefore be retained:',
        },
        {
          type: 'list',
          items: [
            '<strong>Aggregated and de-identified datasets</strong>. These represent the main public-facing research outputs of the project and will be preserved in a public repository with persistent identifiers.',
            '<strong>Analysis code, scripts, and computational workflows, together with codebooks, metadata, and related documentation</strong>. These materials are necessary to support transparency and reproducibility and will be preserved on GitHub and, where appropriate, in a public repository with persistent identifiers. GitHub hosts only analysis code and documentation.',
            '<strong>Raw platform-derived data and cleaned or harmonized internal datasets in non-anonymized form.</strong> These materials are necessary for verification, research integrity, and compliance purposes. A data sharing agreement may be required for any restricted materials shared for these purposes. The specific terms will be determined on a case-by-case basis. These datasets will therefore be retained in secure storage for as long as necessary for the research purposes, including verification, reproducibility, and research integrity, in accordance with Article 89 GDPR and subject to periodic review at least annually and at major project milestones. The personal data is kept in pseudonymized form rather than anonymized at a fixed point, while anonymized or aggregated outputs are derived from it for sharing and publication. At each review, the PI will assess whether continued retention remains necessary and whether further aggregation or anonymization can be performed.',
          ],
        },
        {
          type: 'paragraph',
          html: 'Data are stored through a layered combination of researcher-controlled and institutional solutions at the University of Padua and Harvard University. Storage and backup arrangements are designed for large files and computationally intensive workflows and include encrypted drives, institutional cloud storage, and secure computing environments with access controls. Personal data is stored primarily within the University of Padua\'s secure infrastructure in the EEA. OpenAI may process personal data only under the safeguards described in Section 6 of this notice and Section 3.3 of the DMP. The Harvard infrastructure is used only for anonymized or aggregated data, and personal data is not transferred to Harvard.',
        },
      ],
    },
    {
      id: 'security',
      title: '9. Security Measures',
      blocks: [
        {
          type: 'paragraph',
          html: 'Appropriate technical and organizational measures are implemented to safeguard the rights and freedoms of data subjects. Access to non-anonymized data is restricted to the PI and, only where strictly necessary, to authorized collaborators within the EEA acting under specific instructions and confidentiality obligations. Access to storage and computing environments is protected through institutional accounts, encrypted connections, and project-level access controls.',
        },
        {
          type: 'paragraph',
          html: 'Non-anonymized and special-category social media data are not transmitted through insecure channels. Non-anonymized data is shared only with authorized collaborators within the EEA and with processors operating under the safeguards described in this notice. Any transfer outside the EEA is limited to anonymized or aggregated data, except for residual processing by OpenAI where covered by the Data Processing Addendum and the Standard Contractual Clauses. Security procedures will be reviewed if project workflows materially change.',
        },
        {
          type: 'paragraph',
          html: 'Identifiable fields are pseudonymized using a keyed hash (HMAC-SHA-512) with a secret key held only by the PI and kept separate from the data, so that they cannot be re-identified by third parties. Data that is shared externally or published is aggregated or otherwise de-identified so that it does not constitute personal data.',
        },
      ],
    },
    {
      id: 'information-rights-limits',
      title: '10. Information to Data Subjects and Limits to Rights',
      blocks: [
        {
          type: 'paragraph',
          html: 'The research does not collect personal data directly from data subjects. The University of Padua will respond to data-subject rights requests in accordance with the GDPR, subject to the exemptions and limitations applicable to processing for scientific research purposes.',
        },
        {
          type: 'paragraph',
          html: 'In line with Article 14(5)(b) GDPR, the University of Padua will not provide individual notice to each data subject regarding the processing, since the data are not collected directly from the data subjects and doing so would require a disproportionate effort. This notice is therefore published on the project website to ensure transparency.',
        },
      ],
    },
    {
      id: 'data-subject-rights',
      title: '11. Data Subject Rights',
      blocks: [
        {
          type: 'paragraph',
          html: 'Under the GDPR, data subjects may have rights including access, rectification, erasure, restriction of processing, objection, and the right to lodge a complaint with a supervisory authority. The exercise of some of these rights may be limited where the GDPR provides a specific exemption applicable to processing for scientific research purposes. To exercise these rights, data subjects may contact the CLICOPRE project team at <a href="mailto:info@clicopre.com">info@clicopre.com</a>',
        },
      ],
    },
    {
      id: 'complaint',
      title: '12. Right to Lodge a Complaint',
      blocks: [
        {
          type: 'paragraph',
          html: 'Data subjects have the right to lodge a complaint with the competent supervisory authority.',
        },
      ],
    },
    {
      id: 'website-use',
      title: '13. Website Use and Statistics',
      blocks: [
        {
          type: 'paragraph',
          html: 'The CLICOPRE website (clicopre.com) is hosted on GitHub Pages (GitHub, Inc., a Microsoft company). To deliver the pages, GitHub processes technical data such as the visitor’s IP address and browser information in its server logs. GitHub is based in the United States, under its own data-protection safeguards. This processing relies on the University’s legitimate interest in operating and securing the website (Article 6(1)(f) GDPR).',
        },
        {
          type: 'paragraph',
          html: 'The website stores the visitor’s language, colour theme, and last scroll position locally in the browser. This information stays on the visitor’s device, is not transmitted to the University, and can be cleared at any time from the browser. It is technically necessary to provide the chosen features and requires no consent.',
        },
        {
          type: 'paragraph',
          html: 'Visit statistics are limited to aggregate counts provided by GitHub’s repository traffic feature. No analytics script runs in the visitor’s browser, no cookies or persistent identifiers are used, and the site loads no third-party content. The website performs no profiling, tracking, or advertising. For these reasons no cookie banner is required.',
        },
      ],
    },
  ],
};

export const privacyIt: PrivacyNotice = {
  annexLabel: 'Allegato 1 (versione italiana)',
  title: 'Informativa sul trattamento dei dati personali per il sito web CLICOPRE',
  description:
    'Come possono essere trattati i dati personali nel progetto CLICOPRE e come viene gestito il sito del progetto.',
  intro:
    'Il progetto CLICOPRE è realizzato dall’Università degli Studi di Padova, con l’Università di Harvard come co-host, ed è finanziato nell’ambito del programma Seal of Excellence@UNIPD (SoE). Questa informativa spiega come i dati personali possono essere trattati nel progetto ed è pubblicata sul sito del progetto per trasparenza.',
  contentsLabel: 'In questa pagina',
  sections: [
    {
      id: 'data-controller',
      title: '1. Titolare del trattamento',
      blocks: [
        {
          type: 'paragraph',
          html: 'Il titolare del trattamento dei dati personali trattati nel progetto è l’Università degli Studi di Padova.',
        },
      ],
    },
    {
      id: 'contact-details',
      title: '2. Contatti',
      blocks: [
        {
          type: 'paragraph',
          html: '<strong>Responsabile della protezione dei dati: </strong><a href="mailto:privacy@unipd.it">privacy@unipd.it</a>.',
        },
        {
          type: 'paragraph',
          html: '<strong>Responsabile scientifico: </strong>dott. Duccio Gamannossi degl’Innocenti, <a href="mailto:duccio.gamannossi@unipd.it">duccio.gamannossi@unipd.it</a>.',
        },
        {
          type: 'paragraph',
          html: '<strong>Team di progetto CLICOPRE (per le richieste degli interessati): </strong><a href="mailto:info@clicopre.com">info@clicopre.com</a>.',
        },
      ],
    },
    {
      id: 'purpose',
      title: '3. Finalità del trattamento',
      blocks: [
        {
          type: 'paragraph',
          html: 'CLICOPRE studia il dibattito pubblico sui temi legati al clima nell’Unione europea e negli Stati Uniti. In particolare, il progetto analizza come gli eventi meteorologici estremi influenzano il dibattito pubblico, come reagisce l’opinione pubblica e se questi shock si traducono in iniziative legislative e in comportamenti di voto.',
        },
      ],
    },
    {
      id: 'data-categories',
      title: '4. Categorie di dati trattati',
      blocks: [
        {
          type: 'paragraph',
          html: 'Il progetto si basa su tre grandi categorie di dati: i dati provenienti dai social media, i dataset di terze parti e i dati e la documentazione prodotti dal progetto.',
        },
        { type: 'subheading', text: '4.1 Dati provenienti dai social media' },
        {
          type: 'paragraph',
          html: 'Il progetto tratta dati pubblicamente disponibili, provenienti da pagine Facebook e account Instagram pubblici. I dati sono stati raccolti con CrowdTangle, uno strumento messo a disposizione da Meta ai ricercatori accreditati per accedere ai contenuti pubblici delle sue piattaforme. Il progetto rispetta i termini, le condizioni e le informative sulla privacy di Meta.',
        },
        {
          type: 'paragraph',
          html: 'I campi accessibili possono comprendere l’identificativo numerico e il nome dell’account che pubblica, la data e l’ora di pubblicazione, il tipo di post, i link allegati, l’identificativo del post, il testo e i dati aggregati di interazione, come like, commenti, condivisioni e reazioni. Con CrowdTangle non vengono raccolti i dati personali dei singoli utenti che reagiscono ai post o li commentano. Dati personali possono però essere presenti in modo indiretto quando il nome dell’account, il contenuto del post, i riferimenti temporali o campi simili rendono una persona identificabile, da sola o insieme ad altre informazioni. In alcuni casi, nella comunicazione politica pubblica possono comparire in modo incidentale categorie particolari di dati personali, comprese le opinioni politiche.',
        },
        { type: 'subheading', text: '4.2 Dataset di terze parti' },
        {
          type: 'paragraph',
          html: 'Il progetto usa anche dataset esterni per collegare le dinamiche della comunicazione agli eventi climatici, all’attività legislativa e ai comportamenti politici. Questi dataset non pongono problemi rispetto ai dati personali o alle categorie particolari di dati. Se i dataset di terze parti sono soggetti a licenza o a restrizioni di accesso, vengono trattati nel rispetto dei relativi termini e non vengono ridistribuiti, salvo esplicita autorizzazione.',
        },
        { type: 'subheading', text: '4.3 Dati e documentazione prodotti dal progetto' },
        {
          type: 'paragraph',
          html: 'Il progetto produce anche dataset ripuliti e armonizzati, file di analisi integrati, risultati di modelli tematici (topic model), variabili ottenute dall’elaborazione del linguaggio naturale, indicatori ricavati da testi legislativi, metadati, codebook e script per la riproducibilità. Questi risultati interni della ricerca sono documentati e gestiti per garantire l’integrità della ricerca, il riutilizzo interno e la riproducibilità.',
        },
      ],
    },
    {
      id: 'legal-basis',
      title: '5. Base giuridica',
      blocks: [
        {
          type: 'paragraph',
          html: 'La base giuridica del trattamento dei dati personali è l’articolo 6, paragrafo 1, lettera e), del GDPR, nell’ambito delle funzioni istituzionali di ricerca dell’Università. Quando sono presenti in modo incidentale categorie particolari di dati personali, il trattamento per finalità di ricerca scientifica si basa sull’articolo 9, paragrafo 2, lettera j), del GDPR. Se questi dati sono stati resi manifestamente pubblici dall’interessato, il trattamento si basa anche sull’articolo 9, paragrafo 2, lettera e), del GDPR.',
        },
      ],
    },
    {
      id: 'collection-processing',
      title: '6. Modalità di raccolta e trattamento dei dati',
      blocks: [
        {
          type: 'paragraph',
          html: 'La raccolta dei dati è avvenuta con strumenti ufficiali come Meta CrowdTangle. Il progetto tratta solo i dati necessari agli obiettivi di ricerca approvati. L’analisi può comprendere analisi di frequenza, analisi dell’interazione del pubblico, analisi tematica, analisi del sentiment, analisi della posizione (stance) e tecniche di inferenza causale. Il trattamento non prevede decisioni automatizzate, compresa la profilazione, che producano effetti giuridici o che incidano in modo significativo sull’interessato (articolo 22 del GDPR).',
        },
        {
          type: 'paragraph',
          html: 'Nel progetto CLICOPRE possono essere usati strumenti di intelligenza artificiale, compresi i modelli linguistici di grandi dimensioni, per la validazione dei dati e l’analisi dei contenuti, compresa l’analisi del testo dei post. Di norma l’analisi del testo dei post viene fatta con modelli open source eseguiti sull’infrastruttura dell’Università, all’interno del SEE. In aggiunta, nell’ambito del contratto CRUI-OpenAI può essere usato OpenAI ChatGPT per attività di validazione e analisi dei contenuti, anche quando i dati in ingresso contengono dati personali o categorie particolari di dati, come le opinioni politiche, ma solo se il DPA d’Ateneo è stato sottoscritto e il workspace usa la residenza europea dei dati e dell’elaborazione (inference) per i contenuti del cliente che rientrano nell’ambito. OpenAI Ireland Limited agisce come responsabile del trattamento ai sensi dell’articolo 28 del GDPR e non usa i dati del progetto per addestrare i propri modelli. Gli eventuali trattamenti residui fuori dallo Spazio Economico Europeo sono regolati dalle Clausole Contrattuali Standard (articolo 46, paragrafo 2, lettera c), del GDPR) incorporate nel Data Processing Addendum di OpenAI. Alle API di OpenAI si applicano le stesse regole. Gli strumenti di intelligenza artificiale usati nel progetto non rientrano tra i sistemi di IA ad alto rischio ai sensi dell’articolo 6 e dell’Allegato III del Regolamento (UE) 2024/1689. Il loro uso comporta quindi solo obblighi di trasparenza e informazione per chi li utilizza (deployer).',
        },
      ],
    },
    {
      id: 'recipients',
      title: '7. Destinatari e comunicazione',
      blocks: [
        {
          type: 'paragraph',
          html: 'Ai dati personali possono accedere solo i membri autorizzati del gruppo di ricerca e, se strettamente necessario, i collaboratori di ricerca autorizzati all’interno del SEE o i fornitori di servizi che operano nei limiti del progetto e con garanzie adeguate. I dati non anonimizzati non vengono comunicati né diffusi al pubblico. I risultati sono presentati solo in forma aggregata o anonimizzata. Prima della pubblicazione viene rimossa ogni informazione di dettaglio che potrebbe portare all’identificazione di una persona. I dati provenienti dalle piattaforme sono quindi ad accesso chiuso. I risultati ricavati da dati di terze parti concessi in licenza vengono trattati nel rispetto dei relativi termini di licenza e condivisi solo in forme che non riproducono contenuti soggetti a restrizioni. Quando l’analisi con l’intelligenza artificiale viene svolta alle condizioni descritte in questa informativa, OpenAI (OpenAI Ireland Limited) agisce come responsabile del trattamento e può trattare dati personali per questa finalità. Gli eventuali trattamenti residui fuori dal SEE sono regolati dalle Clausole Contrattuali Standard. GitHub e l’Università di Harvard non ricevono dati personali nel flusso di lavoro del progetto.',
        },
      ],
    },
    {
      id: 'retention-storage',
      title: '8. Conservazione e archiviazione',
      blocks: [
        {
          type: 'paragraph',
          html: 'Le seguenti categorie di dati hanno valore nel lungo periodo e vengono quindi conservate:',
        },
        {
          type: 'list',
          items: [
            '<strong>Dataset aggregati e deidentificati</strong>. Sono i principali risultati della ricerca destinati al pubblico e verranno conservati in un repository pubblico con identificativi persistenti.',
            '<strong>Codice di analisi, script e flussi di lavoro, insieme a codebook, metadati e relativa documentazione</strong>. Servono a garantire trasparenza e riproducibilità e verranno conservati su GitHub e, dove opportuno, in un repository pubblico con identificativi persistenti. Su GitHub sono presenti solo il codice di analisi e la documentazione.',
            '<strong>Dati grezzi ricavati dalle piattaforme e dataset interni ripuliti o armonizzati in forma non anonimizzata</strong>. Servono per verifica, integrità della ricerca e conformità. Per gli eventuali materiali con restrizioni condivisi a questi fini può essere richiesto un accordo di condivisione dei dati, i cui termini vengono definiti caso per caso. Questi dataset verranno conservati in un ambiente sicuro per il tempo necessario alle finalità di ricerca, comprese la verifica, la riproducibilità e l’integrità della ricerca, ai sensi dell’articolo 89 del GDPR, con una revisione periodica almeno una volta l’anno e in corrispondenza delle tappe principali del progetto. I dati personali vengono tenuti in forma pseudonimizzata, invece di essere anonimizzati a una data fissa, mentre gli output anonimizzati o aggregati vengono ricavati da questi per la condivisione e la pubblicazione. A ogni revisione, il responsabile scientifico valuta se la conservazione è ancora necessaria e se si può procedere a un’ulteriore aggregazione o anonimizzazione.',
          ],
        },
        {
          type: 'paragraph',
          html: 'I dati vengono archiviati con una combinazione di soluzioni gestite dal ricercatore e di soluzioni istituzionali, presso l’Università degli Studi di Padova e l’Università di Harvard. Le modalità di archiviazione e di backup sono pensate per file di grandi dimensioni e per elaborazioni impegnative e comprendono dischi cifrati, archiviazione cloud istituzionale e ambienti di calcolo sicuri con controlli di accesso. I dati personali vengono archiviati soprattutto nell’infrastruttura sicura dell’Università degli Studi di Padova, nel SEE. OpenAI può trattare dati personali solo con le garanzie descritte nella Sezione 6 di questa informativa e nella Sezione 3.3 del DMP. L’infrastruttura di Harvard viene usata solo per dati anonimizzati o aggregati e i dati personali non vengono trasferiti a Harvard.',
        },
      ],
    },
    {
      id: 'security',
      title: '9. Misure di sicurezza',
      blocks: [
        {
          type: 'paragraph',
          html: 'Vengono adottate misure tecniche e organizzative adeguate a tutelare i diritti e le libertà degli interessati. L’accesso ai dati non anonimizzati è riservato al responsabile scientifico e, solo se strettamente necessario, ai collaboratori autorizzati all’interno del SEE, che operano seguendo istruzioni specifiche e obblighi di riservatezza. L’accesso agli ambienti di archiviazione e di calcolo è protetto con account istituzionali, connessioni cifrate e controlli di accesso a livello di progetto.',
        },
        {
          type: 'paragraph',
          html: 'I dati dei social media non anonimizzati e quelli appartenenti a categorie particolari non vengono trasmessi su canali non sicuri. I dati non anonimizzati sono condivisi solo con i collaboratori autorizzati all’interno del SEE e con i responsabili del trattamento che operano con le garanzie descritte in questa informativa. Ogni trasferimento fuori dal SEE è limitato a dati anonimizzati o aggregati, tranne gli eventuali trattamenti residui da parte di OpenAI, se coperti dal Data Processing Addendum e dalle Clausole Contrattuali Standard. Le procedure di sicurezza verranno riviste se i flussi di lavoro del progetto cambiano in modo sostanziale.',
        },
        {
          type: 'paragraph',
          html: 'I campi che identificano le persone vengono pseudonimizzati con una funzione di hash con chiave (HMAC-SHA-512). La chiave segreta è tenuta solo dal responsabile scientifico e conservata separatamente dai dati, così da impedire la re-identificazione da parte di terzi. I dati condivisi all’esterno o pubblicati sono aggregati o comunque deidentificati, in modo da non costituire dati personali.',
        },
      ],
    },
    {
      id: 'information-rights-limits',
      title: '10. Informazioni agli interessati e limiti ai diritti',
      blocks: [
        {
          type: 'paragraph',
          html: 'La ricerca non raccoglie dati personali direttamente dagli interessati. L’Università degli Studi di Padova risponde alle richieste di esercizio dei diritti degli interessati nel rispetto del GDPR, tenendo conto delle eccezioni e dei limiti previsti per il trattamento a fini di ricerca scientifica.',
        },
        {
          type: 'paragraph',
          html: 'Come previsto dall’articolo 14, paragrafo 5, lettera b), del GDPR, l’Università degli Studi di Padova non invia a ogni interessato una comunicazione individuale sul trattamento, perché i dati non sono raccolti direttamente dagli interessati e farlo richiederebbe uno sforzo sproporzionato. Per questo l’informativa viene pubblicata sul sito del progetto, così da garantire la trasparenza.',
        },
      ],
    },
    {
      id: 'data-subject-rights',
      title: '11. Diritti dell’interessato',
      blocks: [
        {
          type: 'paragraph',
          html: 'In base al GDPR, l’interessato può esercitare, tra gli altri, i diritti di accesso, rettifica, cancellazione, limitazione del trattamento e opposizione, oltre al diritto di proporre reclamo a un’autorità di controllo. L’esercizio di alcuni di questi diritti può essere limitato nei casi in cui il GDPR prevede una specifica eccezione per il trattamento a fini di ricerca scientifica. Per esercitare questi diritti, l’interessato può scrivere al team di progetto CLICOPRE all’indirizzo info@clicopre.com.',
        },
      ],
    },
    {
      id: 'complaint',
      title: '12. Diritto di proporre reclamo',
      blocks: [
        {
          type: 'paragraph',
          html: 'L’interessato ha il diritto di proporre reclamo all’autorità di controllo competente.',
        },
      ],
    },
    {
      id: 'website-use',
      title: '13. Uso del sito e statistiche',
      blocks: [
        {
          type: 'paragraph',
          html: 'Il sito CLICOPRE (clicopre.com) è ospitato su GitHub Pages (GitHub, Inc., società del gruppo Microsoft). Per fornire le pagine, GitHub tratta dati tecnici come l’indirizzo IP e le informazioni sul browser del visitatore nei propri log. GitHub ha sede negli Stati Uniti, con le proprie garanzie di protezione dei dati. Questo trattamento si basa sul legittimo interesse dell’Università a gestire e proteggere il sito (articolo 6, paragrafo 1, lettera f, del GDPR).',
        },
        {
          type: 'paragraph',
          html: 'Il sito salva localmente nel browser del visitatore la lingua, il tema di colore e l’ultima posizione di scorrimento. Queste informazioni restano sul dispositivo del visitatore, non vengono trasmesse all’Università e possono essere cancellate in qualsiasi momento dal browser. Sono tecnicamente necessarie a fornire le funzioni scelte e non richiedono consenso.',
        },
        {
          type: 'paragraph',
          html: 'Le statistiche di visita si limitano a conteggi aggregati forniti dalla funzione di traffico dei repository di GitHub. Nessuno script di analytics viene eseguito nel browser del visitatore, non sono usati cookie o identificatori persistenti e il sito non carica contenuti di terze parti. Il sito non effettua profilazione, tracciamento o pubblicità. Per questi motivi non è richiesto alcun banner cookie.',
        },
      ],
    },
  ],
};
