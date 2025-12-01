export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  image?: string;
  benefits?: string[];
  forWhom?: string[];
  procedure?: string[];
  tags?: string[];
  metaDescription?: string;
  subservices?: Subservice[];
}

export interface Subservice {
  id: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "micropigmentare-sprancene",
    name: "Micropigmentare sprâncene",
    shortDescription: "Tehnica modernă de micropigmentare pentru sprâncene perfect conturate și naturale.",
    longDescription: "Micropigmentarea sprâncenelor este o procedură estetică care oferă rezultate durabile și naturale. Folosim tehnici avansate și pigmenți de calitate superioară pentru a crea contururi perfecte care se potrivesc perfect cu trăsăturile tale faciale. Procedura este personalizată în funcție de forma feței, culoarea naturală a părului și preferințele tale.",
    category: "Micropigmentare",
    image: "/images/service-sprancene.jpg",
    benefits: [
      "Sprâncene perfect definite și simetrice",
      "Aspect natural și de lungă durată (12-18 luni)",
      "Economie de timp în rutina zilnică de machiaj",
      "Corectarea imperfecțiunilor și golurilor",
      "Rezultate personalizate adaptate trăsăturilor faciale",
    ],
    forWhom: [
      "Persoane cu sprâncene rare sau subțiri",
      "Cei care doresc să-și corecteze forma sprâncenelor",
      "Sportivi sau persoane active care doresc un machiaj rezistent la apă",
      "Oricine își dorește un aspect îngrijit și definit fără efort zilnic",
    ],
    procedure: [
      "Consultație inițială și design personalizat al sprâncenelor",
      "Alegerea pigmentului potrivit nuanței pielii și părului",
      "Aplicarea anestezicului local pentru confort maxim",
      "Realizarea micropigmentării cu tehnici moderne (microblading, pudrare)",
      "Instrucțiuni post-procedură și programare retuș după 6-8 luni",
    ],
    tags: ["micropigmentare", "sprâncene", "microblading", "bucurești"],
    metaDescription: "Micropigmentare sprâncene București - Tehnici moderne, rezultate naturale 12-18 luni. Consultație gratuită. Peste 500 de cliente mulțumite.",
  },
  {
    id: "2",
    slug: "micropigmentare-buze",
    name: "Micropigmentare buze",
    shortDescription: "Contur și volum pentru buze perfect definite, cu rezultate naturale și durabile.",
    longDescription: "Transformă-ți buzele cu tehnica de micropigmentare profesională. Oferim contururi precise și volum natural, adaptate perfect la forma naturală a buzelor tale. Procedura este realizată cu atenție la detalii, asigurând rezultate naturale și durabile care îți vor oferi încredere în fiecare zi.",
    category: "Micropigmentare",
    image: "/images/service-buze.jpg",
    benefits: [
      "Contururi precise și volum natural",
      "Rezultate durabile până la 18-24 luni",
      "Aspect natural care se integrează perfect cu buzele tale",
      "Fără necesitatea aplicării zilnice de ruj",
      "Corectarea formei și volumului buzelor",
    ],
    forWhom: [
      "Persoane cu buze subțiri care doresc volum",
      "Cei care doresc să-și corecteze conturul buzelor",
      "Persoane care doresc un aspect de machiaj permanent",
      "Oricine își dorește buze definite și voluminoase",
    ],
    procedure: [
      "Consultație detaliată și design personalizat",
      "Alegerea culorii potrivite nuanței naturale a buzelor",
      "Aplicarea anestezicului local",
      "Realizarea micropigmentării cu tehnici specializate",
      "Instrucțiuni de îngrijire post-procedură și programare retuș",
    ],
    tags: ["micropigmentare buze", "contur buze", "volum buze", "bucurești"],
    metaDescription: "Micropigmentare buze București - Contur și volum natural, rezultate 18-24 luni. Consultație gratuită. Tehnici profesionale.",
  },
  {
    id: "3",
    slug: "marire-buze-hyaluron-pen",
    name: "Mărire buze Hyaluron Pen",
    shortDescription: "Procedură fără ac pentru mărirea buzelor cu acid hialuronic, rapidă și eficientă.",
    longDescription: "Hyaluron Pen este o metodă modernă și fără durere pentru mărirea și modelarea buzelor. Folosind presiune în loc de ac, procedura este mult mai confortabilă decât metodele tradiționale, oferind rezultate imediate și naturale. Acidul hialuronic injectat oferă volum și hidratare, asigurând buze pline și sănătoase.",
    category: "Tratamente faciale",
    image: "/images/service-hyaluron-pen.jpg",
    benefits: [
      "Procedură fără ac, fără durere",
      "Rezultate imediate și vizibile",
      "Procedură rapidă (15-30 minute)",
      "Recuperare minimă, fără downtime",
      "Rezultate naturale și durabile (4-6 luni)",
    ],
    forWhom: [
      "Persoane care doresc buze mai pline",
      "Cei care preferă metode fără ac",
      "Persoane care doresc volum rapid și sigur",
      "Oricine își dorește buze voluminoase fără durere",
    ],
    procedure: [
      "Consultație și evaluarea zonei de tratament",
      "Alegerea cantității de acid hialuronic necesară",
      "Aplicarea procedurii cu Hyaluron Pen",
      "Verificarea rezultatelor și ajustări dacă este necesar",
      "Instrucțiuni de îngrijire și programare retuș după 4-6 luni",
    ],
    tags: ["hyaluron pen", "mărire buze", "fără ac", "acid hialuronic", "bucurești"],
    metaDescription: "Mărire buze Hyaluron Pen București - Fără ac, fără durere, rezultate imediate. Consultație gratuită. Procedură rapidă 15-30 min.",
  },
  {
    id: "4",
    slug: "tratamente-faciale-bb-glow",
    name: "Tratamente faciale BB Glow",
    shortDescription: "Tratament facial complet care oferă ten uniform, strălucitor și hidratat.",
    longDescription: "BB Glow este un tratament facial revoluționar care combină micropigmentarea cu îngrijirea pielii. Procedura oferă un ten uniform, strălucitor și perfect hidratat, reducând imperfecțiunile și oferind un aspect natural și sănătos. Ideal pentru cei care doresc un ten impecabil fără machiaj zilnic.",
    category: "Tratamente faciale",
    image: "/images/service-bb-glow.jpg",
    benefits: [
      "Ten uniform și strălucitor",
      "Reducere a imperfecțiunilor și petelor pigmentare",
      "Hidratare profundă și îmbunătățirea calității pielii",
      "Efect de machiaj permanent, fără fond de ten zilnic",
      "Stimulare a producției de colagen",
    ],
    forWhom: [
      "Persoane cu ten neuniform sau pete pigmentare",
      "Cei care au cicatrici de acnee sau imperfecțiuni",
      "Persoane care doresc un ten perfect fără machiaj zilnic",
      "Oricine își dorește o piele sănătoasă și strălucitoare",
    ],
    procedure: [
      "Consultație și evaluarea tipului de piele",
      "Curățare profundă și pregătirea pielii",
      "Aplicarea serurilor hidratante și nutriente",
      "Micropigmentare cu pigmenți speciali BB Glow",
      "Instrucțiuni de îngrijire și programare întreținere după 3-4 luni",
    ],
    tags: ["bb glow", "tratament facial", "ten perfect", "micropigmentare facială", "bucurești"],
    metaDescription: "BB Glow tratament facial București - Ten uniform și strălucitor, rezultate 6-12 luni. Consultație gratuită. Efect machiaj permanent.",
  },
  {
    id: "5",
    slug: "epilare-definitiva-cu-laser",
    name: "Epilare definitivă cu laser",
    shortDescription: "Eliminare permanentă a părului nedorit cu tehnologie laser de ultimă generație.",
    longDescription: "Elimină definitiv părul nedorit cu tehnologia laser avansată. Procedura este rapidă, eficientă și potrivită pentru toate tipurile de piele. Oferim tratamente personalizate pentru fiecare zonă a corpului, asigurând rezultate durabile și o piele netedă și moale. Tehnologia modernă minimizează disconfortul și maximizează eficiența.",
    category: "Epilare",
    image: "/images/service-epilare-laser.jpg",
    benefits: [
      "Eliminare permanentă a părului nedorit",
      "Potrivit pentru toate tipurile de piele",
      "Procedură rapidă și eficientă",
      "Rezultate durabile și vizibile după primele sesiuni",
      "Piele netedă și moale, fără iritații",
    ],
    forWhom: [
      "Persoane care doresc să elimine definitiv părul nedorit",
      "Cei care au probleme cu iritații sau ingrown hairs",
      "Sportivi sau persoane active",
      "Oricine își dorește o piele netedă permanent",
    ],
    procedure: [
      "Consultație și evaluarea zonei de tratament",
      "Alegerea setărilor laser potrivite tipului de piele",
      "Aplicarea gelului de răcire pentru confort",
      "Tratarea zonei cu impulsuri laser",
      "Instrucțiuni post-procedură și programare următoarei sesiuni (4-6 săptămâni)",
    ],
    tags: ["epilare definitivă", "laser", "epilare laser", "bucurești", "laserice"],
    metaDescription: "Epilare definitivă cu laser București - Tehnologie modernă, toate tipurile de piele. Rezultate durabile. Consultație gratuită.",
  },
  {
    id: "6",
    slug: "dermopigmentare-medicala",
    name: "Dermopigmentare medicală",
    shortDescription: "Soluții estetice medicale pentru reconstrucție și acoperire a cicatricilor sau zone afectate.",
    longDescription: "Dermopigmentarea medicală oferă soluții profesionale pentru reconstrucție estetică și acoperire a cicatricilor, vergeturilor sau altor zone afectate. Folosim tehnici specializate și pigmenți medicali de calitate superioară pentru a restabili aspectul natural al pielii. Procedura este realizată cu atenție la detalii medicale și estetice, oferind rezultate naturale și durabile.",
    category: "Dermopigmentare",
    image: "/images/service-dermopigmentare.jpg",
    benefits: [
      "Restaurarea aspectului natural al pielii",
      "Camuflarea cicatricilor și imperfecțiunilor",
      "Îmbunătățirea încrederii în sine",
      "Rezultate de lungă durată și naturale",
      "Tehnici medicale specializate și sigure",
    ],
    forWhom: [
      "Persoane cu cicatrici post-chirurgicale sau post-traumatice",
      "Femei după mastectomie și reconstrucție mamară",
      "Persoane cu vitiligo sau alte afecțiuni de pigmentare",
      "Cei care doresc să-și îmbunătățească aspectul estetic al pielii",
    ],
    procedure: [
      "Consultație detaliată și evaluarea zonei de tratament",
      "Crearea unui plan personalizat de pigmentare",
      "Aplicarea anestezicului local",
      "Realizarea procedurii cu pigmenți medicali speciali",
      "Instrucțiuni de îngrijire post-procedură și programare retuș",
    ],
    tags: ["dermopigmentare medicală", "tricopigmentare", "reconstrucție estetică", "bucurești"],
    metaDescription: "Dermopigmentare medicală București - Reconstrucție estetică, camuflare cicatrici. Tehnici medicale specializate. Consultație gratuită.",
    subservices: [
      {
        id: "6.1",
        name: "Tricopigmentare scalp",
        description: "Reconstrucție estetică a părului pe scalp prin micropigmentare, oferind iluzia unui păr natural și bine distribuit.",
      },
      {
        id: "6.2",
        name: "Dermopigmentare areolă mamară",
        description: "Reconstrucție estetică a areolei mamare după intervenții chirurgicale, oferind un aspect natural și armonios.",
      },
      {
        id: "6.3",
        name: "Tricopigmentare cicatrici/vergeturi",
        description: "Acoperire estetică a cicatricilor și vergeturilor prin tehnici specializate de micropigmentare medicală.",
      },
      {
        id: "6.4",
        name: "Dermopigmentare vitiligo",
        description: "Tratament estetic pentru acoperirea zonei afectate de vitiligo, restabilind uniformitatea culorii pielii.",
      },
    ],
  },
];

