// data/careCards.ts
// =================================================
// MASTERDATA – CareCards
// =================================================

export type CareCardCategory =
  | "akut"
  | "bedomning"
  | "omvardnad"
  | "lakemedel"
  | "kunskap";

export type CareCardType =
  | "grundkort"
  | "snabbkort"
  | "sjalskattning"
  | "resultatkort"
  | "parkort";

export type CareCardAccess = "free" | "premium";

export interface CareCard {
  id: string;
  title: string;
  category: CareCardCategory;
  area: string;
  type: CareCardType;
  access: CareCardAccess;
  isPrintCard?: boolean;
  content: string;
}

export const CARE_CARDS: CareCard[] = [

  // =================================================
  // AKUT
  // =================================================

  {
    id: "abcde",
    title: "ABCDE – primärbedömning",
    category: "akut",
    area: "akut",
    type: "grundkort",
    access: "free",
    isPrintCard: true,
    content: `
A – Airway
• Bedöm om luftvägen är fri
• Avlägsna hinder
• Säkra luftväg vid behov

B – Breathing
• Bedöm andningsfrekvens och andningsarbete
• Ge syrgas vid behov
• Auskultera lungor

C – Circulation
• Kontrollera puls och blodtryck
• Bedöm hudfärg och kapillär återfyllnad
• Stoppa pågående blödning
• Sätt infart

D – Disability
• Bedöm medvetandegrad (AVPU / GCS)
• Kontrollera pupiller
• Kontrollera blodglukos

E – Exposure
• Inspektera hela patienten
• Förebygg hypotermi

Utförs strukturerat och upprepas vid förändring.
`,
  },

  {
    id: "sepsis",
    title: "Sepsis – akut handläggning",
    category: "akut",
    area: "akut",
    type: "grundkort",
    access: "free",
    isPrintCard: true,
    content: `
Åtgärd
• Larma
• Ge syrgas
• Sätt grova infarter
• Ta blododling före antibiotika
• Ge antibiotika snarast
• Påbörja vätskebehandling

Kontrollera
• Andningsfrekvens
• Blodtryck
• Puls
• Medvetandegrad
• Temperatur
• Urinproduktion

Tänk på
• Tidig behandling är avgörande
• Sepsis kan föreligga utan feber
`,
  },

  {
    id: "anafylaxi",
    title: "Anafylaxi – akut handläggning",
    category: "akut",
    area: "akut",
    type: "grundkort",
    access: "free",
    isPrintCard: true,
    content: `
Åtgärd
• Larma
• Ge adrenalin i.m. omedelbart
• Lägg patienten plant med höjd benända
• Ge syrgas
• Sätt infart

Kontrollera
• Andning
• Blodtryck
• Puls
• Medvetandegrad
• Saturation

Tänk på
• Fördröj inte adrenalin
• Upprepa adrenalin vid behov
• Risk för bifasisk reaktion
`,
  },

  {
    id: "chock",
    title: "Chock – översikt",
    category: "akut",
    area: "akut",
    type: "grundkort",
    access: "free",
    content: `
Åtgärd
• Larma
• Säkra luftväg
• Ge syrgas
• Lägg patienten plant
• Sätt grova infarter

Kontrollera
• Puls
• Blodtryck
• Medvetandegrad
• Diures
• Hudtemperatur

Tänk på
• Chock kan föreligga utan hypotension
• Försämring kan ske snabbt
`,
  },

  {
    id: "kramper",
    title: "Kramper – akut handläggning",
    category: "akut",
    area: "akut",
    type: "grundkort",
    access: "free",
    content: `
Åtgärd
• Skydda patienten från skador
• Säkerställ fri luftväg
• Ge syrgas
• Larma vid pågående kramp

Kontrollera
• Andning
• Saturation
• Blodglukos
• Medvetandegrad efter kramp

Tänk på
• Stoppa inte föremål i munnen
• Status epilepticus vid kramp > 5 minuter
`,
  },

  {
    id: "avpu",
    title: "AVPU",
    category: "bedomning",
    area: "akut",
    type: "snabbkort",
    access: "free",
    isPrintCard: true,
    content: `
A – Alert
V – Voice
P – Pain
U – Unresponsive

Snabb bedömning av medvetandegrad.
`,
  },

  {
    id: "gcs",
    title: "GCS – Glasgow Coma Scale",
    category: "bedomning",
    area: "akut",
    type: "grundkort",
    access: "free",
    isPrintCard: true,
    content: `
Totalpoäng 3–15

Tänk på
• GCS ≤ 8 innebär hotad luftväg
• Följ förändring över tid
`,
  },

  // ===== NEWS2 – PARKORT =====

  {
    id: "news2-poang",
    title: "NEWS2 – poäng",
    category: "akut",
    area: "akut",
    type: "parkort",
    access: "free",
    isPrintCard: true,
    content: `
Andningsfrekvens (AF)
• Ca 12–20/min = 0 p
• < 12 eller 21–24 = 1–2 p
• ≥ 25 = 3 p

Syremättnad (SpO₂)
• Ca ≥ 96 % = 0 p
• 94–95 % = 1 p
• 92–93 % = 2 p
• ≤ 91 % = 3 p

Syrgas
• Ingen syrgas = 0 p
• Syrgas = 2 p

Temperatur
• Ca 36,1–38,0 °C = 0 p
• 35,1–36,0 eller 38,1–39,0 = 1 p
• ≤ 35,0 eller ≥ 39,1 = 2–3 p

Systoliskt blodtryck
• Ca 111–219 mmHg = 0 p
• 101–110 = 1 p
• 91–100 = 2 p
• ≤ 90 eller ≥ 220 = 3 p

Puls
• Ca 51–90/min = 0 p
• 41–50 eller 91–110 = 1 p
• 111–130 = 2 p
• ≤ 40 eller ≥ 131 = 3 p

Medvetande (AVPU)
• Alert = 0 p
• Voice / Pain / Unresponsive = 3 p
`,
  },

  {
    id: "news2-atgard",
    title: "NEWS2 – åtgärd",
    category: "akut",
    area: "akut",
    type: "parkort",
    access: "free",
    isPrintCard: true,
    content: `
0–4 poäng
• Fortsatt observation
• Upprepa NEWS enligt lokal rutin

5–6 poäng
• Kontakta läkare
• Ökad övervakning

≥ 7 poäng
• Akut bedömning
• Larma enligt rutin
`,
  },

  // =================================================
  // ORTOPEDI
  // =================================================

  {
    id: "distalstatus",
    title: "Distalstatus",
    category: "bedomning",
    area: "ortopedi",
    type: "snabbkort",
    access: "free",
    isPrintCard: true,
    content: `
Motorik
Sensorik
Cirkulation

Dokumentera före och efter åtgärd.
`,
  },

  {
    id: "fraktur-oversikt",
    title: "Fraktur – översikt",
    category: "akut",
    area: "ortopedi",
    type: "grundkort",
    access: "free",
    content: `
Tecken
• Smärta
• Svullnad
• Felställning
• Funktionsnedsättning

Tänk på
• Kontrollera distalstatus
`,
  },

  {
    id: "handledsfraktur",
    title: "Handledsfraktur (distal radius)",
    category: "akut",
    area: "ortopedi",
    type: "grundkort",
    access: "free",
    content: `
Vanligaste frakturen i övre extremiteten.

Orsak
• Fall på utsträckt hand

Tänk på
• Kontrollera distalstatus
`,
  },

  {
    id: "femurfraktur",
    title: "Femurfraktur",
    category: "akut",
    area: "ortopedi",
    type: "grundkort",
    access: "free",
    content: `
Åtgärd
• Larma
• Smärtlindra
• Immobilisera
• Ge syrgas vid behov

Tänk på
• Risk för stor blödning
• Förkortat och utåtroterat ben
`,
  },

  // =================================================
  // KIRURGI
  // =================================================

  {
    id: "bukstatus",
    title: "Bukstatus",
    category: "bedomning",
    area: "kirurgi",
    type: "grundkort",
    access: "free",
    isPrintCard: true,
    content: `
Inspektion
Auskultation
Palpation
Perkussion

Utförs systematiskt.
`,
  },

  {
    id: "appendicit",
    title: "Appendicit",
    category: "akut",
    area: "kirurgi",
    type: "grundkort",
    access: "free",
    content: `
Symtom
• Smärta i höger fossa
• Illamående
• Feber

Tänk på
• Smärtvandring kan förekomma
`,
  },

  // =================================================
  // PSYKIATRI
  // =================================================

  {
    id: "depression",
    title: "Depression – översikt",
    category: "bedomning",
    area: "psykiatri",
    type: "grundkort",
    access: "free",
    content: `
Vanliga symtom
• Nedstämdhet
• Minskad glädje (anhedoni)
• Trötthet

Tänk på
• Bedöm suicidrisk
`,
  },

  {
    id: "phq9",
    title: "PHQ-9",
    category: "bedomning",
    area: "psykiatri",
    type: "sjalskattning",
    access: "free",
    isPrintCard: true,
    content: `
Självskattningsformulär
• 9 frågor
• 0–3 poäng per fråga

Används som stöd vid bedömning.
`,
  },

  // =================================================
  // GERIATRIK
  // =================================================

  {
    id: "fallrisk",
    title: "Fallrisk hos äldre",
    category: "omvardnad",
    area: "geriatrik",
    type: "snabbkort",
    access: "free",
    isPrintCard: true,
    content: `
Riskfaktorer
• Tidigare fall
• Läkemedel
• Gångsvårigheter

Åtgärd
• Förebyggande insatser
`,
  },

  // =================================================
  // IVA / ANESTESI
  // =================================================

  {
    id: "iva-luftvag",
    title: "Luftväg – IVA",
    category: "akut",
    area: "iva_anestesi",
    type: "grundkort",
    access: "free",
    content: `
Prioritet
• Säker luftväg är alltid prio 1

Tänk på
• Förbered backup
`,
  },

  {
    id: "iva-syrgas",
    title: "Syrgas – IVA",
    category: "akut",
    area: "iva_anestesi",
    type: "grundkort",
    access: "free",
    content: `
Åtgärd
• Ge syrgas vid hypoxi
• Välj utrustning efter behov

Kontrollera
• Saturation
• Effekt av behandling
`,
  },

  {
    id: "iva-intubation",
    title: "Intubation – översikt",
    category: "akut",
    area: "iva_anestesi",
    type: "grundkort",
    access: "free",
    content: `
Indikation
• Hotad eller otillräcklig luftväg

Förbered
• Preoxygenera om möjligt
• Ha alltid backup
`,
  },

  // =================================================
  // HYGIEN & SMITTRISK
  // =================================================

  {
    id: "basala-hygienrutiner",
    title: "Basala hygienrutiner",
    category: "omvardnad",
    area: "hygien",
    type: "grundkort",
    access: "free",
    isPrintCard: true,
    content: `
• Handdesinfektion före och efter patientkontakt
• Handskar vid risk för kontakt med kroppsvätskor
• Plastförkläde vid stänk- eller spillrisk
• Kortärmad arbetsdräkt
• Inga ringar, armband eller klocka
`,
  },

  {
    id: "calici",
    title: "Calici / gastroenterit – hygien",
    category: "omvardnad",
    area: "hygien",
    type: "snabbkort",
    access: "free",
    content: `
Mycket smittsamt.

Åtgärd
• Noggrann handtvätt med tvål och vatten
• Handdesinfektion som komplement
• Skyddshandskar och plastförkläde
`,
  },

  {
    id: "kroppsvatskor-spill",
    title: "Spill & kroppsvätskor",
    category: "omvardnad",
    area: "hygien",
    type: "snabbkort",
    access: "free",
    content: `
Åtgärd
• Använd skyddshandskar
• Torka upp direkt
• Desinfektera ytan enligt rutin

Tänk på
• Avfall hanteras som smittförande
`,
  },

  {
    id: "cytostatika",
    title: "Cytostatika – säker hantering",
    category: "omvardnad",
    area: "hygien",
    type: "grundkort",
    access: "premium",
    content: `
Risk
• Personalexponering

Åtgärd
• Skyddshandskar och skyddsförkläde
• Undvik hudkontakt
• Följ lokala rutiner vid spill
`,
  },
];
