export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  metaDescription: string;
  readingTime: number;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    slug: "micropigmentare-sprancene-bucuresti-ghid-complet",
    title: "Micropigmentare Sprâncene București - Ghid Complet 2025",
    excerpt: "Descoperă tot ce trebuie să știi despre micropigmentarea sprâncenelor în București. Tehnici moderne, rezultate naturale și durata procedurii.",
    content: `
      <h2>Ce este micropigmentarea sprâncenelor?</h2>
      <p>Micropigmentarea sprâncenelor este o procedură estetică semi-permanentă care implică introducerea de pigmenți de culoare în stratul superficial al pielii pentru a crea sau îmbunătăți forma și culoarea sprâncenelor. Această tehnică este ideală pentru persoanele care au sprâncene rare, asimetrice sau care doresc să economisească timp în rutina zilnică de machiaj.</p>
      
      <h2>Tehnici de micropigmentare sprâncene</h2>
      <p>În studio-ul nostru din București, folosim două tehnici principale:</p>
      <ul>
        <li><strong>Tehnica hair stroke:</strong> Creează efectul de fire de păr individuale, rezultând un aspect foarte natural</li>
        <li><strong>Tehnica ombré/powder:</strong> Oferă un efect de machiaj permanent, cu umbrire graduală</li>
      </ul>
      
      <h2>Procesul de micropigmentare</h2>
      <p>Procedura începe cu o consultație detaliată unde discutăm forma ideală a sprâncenelor în funcție de trăsăturile faciale, culoarea naturală a părului și preferințele tale. Apoi, aplicăm pigmenți de calitate superioară folosind echipamente profesionale și sterile.</p>
      
      <h2>Durata și rezultate</h2>
      <p>O sesiune de micropigmentare sprâncene durează aproximativ 2-3 ore, inclusiv consultația și aplicarea. Rezultatele durează între 12-18 luni, după care este recomandată o sesiune de retușare.</p>
      
      <h2>Îngrijire după procedură</h2>
      <p>După micropigmentare, este important să urmezi instrucțiunile de îngrijire post-procedură pentru a asigura vindecarea corectă și rezultate optime. Evită expunerea la soare, saună și bazin în primele 2 săptămâni.</p>
    `,
    image: "/images/blog-micropigmentare-sprancene.jpg",
    date: "2025-01-15",
    author: "Mădălina Radu",
    category: "Micropigmentare",
    tags: ["micropigmentare", "sprâncene", "bucurești", "beauty", "estetică"],
    metaDescription: "Ghid complet despre micropigmentarea sprâncenelor în București. Tehnici moderne, rezultate naturale, durata procedurii și prețuri. Consultație gratuită.",
    readingTime: 5,
  },
  {
    id: "2",
    slug: "micropigmentare-buze-rezultate-durabile",
    title: "Micropigmentare Buze - Rezultate Durable și Naturale",
    excerpt: "Transformă-ți buzele cu micropigmentarea profesională. Contururi precise, volum natural și rezultate care durează până la 2 ani.",
    content: `
      <h2>Beneficii micropigmentare buze</h2>
      <p>Micropigmentarea buzelor oferă numeroase avantaje pentru persoanele care doresc buze perfect conturate și volum natural fără necesitatea aplicării zilnice de ruj.</p>
      
      <h2>Tehnici disponibile</h2>
      <ul>
        <li><strong>Contur buze:</strong> Definește și corectează forma naturală a buzelor</li>
        <li><strong>Full lip color:</strong> Aplicare completă de culoare pentru un aspect de machiaj permanent</li>
        <li><strong>Ombré lips:</strong> Efect de gradient pentru volum și profunzime</li>
      </ul>
      
      <h2>Cum se face micropigmentarea buzelor?</h2>
      <p>Procedura începe cu aplicarea unui anestezic local pentru confort maxim. Apoi, folosim tehnici specializate pentru a aplica pigmenți de calitate medicală care se integrează perfect cu culoarea naturală a buzelor tale.</p>
      
      <h2>Durata rezultatelor</h2>
      <p>Rezultatele micropigmentării buzelor pot dura între 18-24 de luni, în funcție de tipul de piele, stilul de viață și îngrijirea post-procedură. Recomandăm o sesiune de retușare după 6-8 luni pentru a menține intensitatea culorii.</p>
      
      <h2>Îngrijire după micropigmentare buze</h2>
      <p>Primele 7-10 zile sunt cruciale pentru vindecare. Evită alimente picante, băuturi foarte calde și aplicarea de produse cosmetice pe buze. Urmează instrucțiunile detaliate oferite de specialist.</p>
    `,
    image: "/images/blog-micropigmentare-buze.jpg",
    date: "2025-01-10",
    author: "Mădălina Radu",
    category: "Micropigmentare",
    tags: ["micropigmentare buze", "contur buze", "beauty", "bucurești"],
    metaDescription: "Micropigmentare buze profesională în București. Rezultate naturale și durabile până la 2 ani. Consultație gratuită și tehnici moderne.",
    readingTime: 6,
  },
  {
    id: "3",
    slug: "hyaluron-pen-marire-buze-fara-ac",
    title: "Hyaluron Pen - Mărire Buze Fără Ac, Rapidă și Sigură",
    excerpt: "Descoperă Hyaluron Pen, metoda modernă de mărire buze fără ac. Procedură rapidă, fără durere și cu rezultate imediate.",
    content: `
      <h2>Ce este Hyaluron Pen?</h2>
      <p>Hyaluron Pen este o metodă inovatoare de mărire și modelare a buzelor care folosește presiune în loc de ac pentru a introduce acid hialuronic în buze. Această tehnică este mult mai confortabilă decât metodele tradiționale de injectare.</p>
      
      <h2>Avantaje Hyaluron Pen</h2>
      <ul>
        <li>Fără durere - nu folosește ac</li>
        <li>Rezultate imediate</li>
        <li>Procedură rapidă (15-30 minute)</li>
        <li>Recuperare minimă</li>
        <li>Rezultate naturale și durabile</li>
      </ul>
      
      <h2>Cum funcționează?</h2>
      <p>Hyaluron Pen utilizează presiune pneumatică pentru a introduce acid hialuronic de calitate medicală în stratul dermic al buzelor. Acidul hialuronic atrage apă, oferind volum și hidratare imediată.</p>
      
      <h2>Pentru cine este potrivit?</h2>
      <p>Această procedură este ideală pentru persoanele care doresc buze mai pline, contururi mai definite sau volum suplimentar, dar preferă o metodă mai puțin invazivă decât injectările tradiționale.</p>
      
      <h2>Durata rezultatelor</h2>
      <p>Rezultatele Hyaluron Pen durează între 4-6 luni, după care poți opta pentru o sesiune de retușare pentru a menține volumul.</p>
    `,
    image: "/images/blog-hyaluron-pen.jpg",
    date: "2025-01-05",
    author: "Mădălina Radu",
    category: "Tratamente faciale",
    tags: ["hyaluron pen", "mărire buze", "fără ac", "acid hialuronic"],
    metaDescription: "Hyaluron Pen pentru mărire buze fără ac în București. Procedură rapidă, fără durere, rezultate imediate. Consultație gratuită.",
    readingTime: 4,
  },
  {
    id: "4",
    slug: "epilare-definitiva-laser-bucuresti",
    title: "Epilare Definitivă cu Laser în București - Tot Ce Trebuie Să Știi",
    excerpt: "Ghid complet despre epilarea definitivă cu laser. Tehnologie modernă, rezultate durabile și procedură sigură pentru toate tipurile de piele.",
    content: `
      <h2>Ce este epilarea definitivă cu laser?</h2>
      <p>Epilarea definitivă cu laser este o procedură estetică care folosește impulsuri de lumină pentru a distruge foliculul părului, oferind rezultate durabile și în multe cazuri permanente.</p>
      
      <h2>Tehnologii disponibile</h2>
      <p>În studio-ul nostru folosim tehnologii de ultimă generație:</p>
      <ul>
        <li><strong>Laser diode:</strong> Eficient pentru păr negru și brun pe piele deschisă</li>
        <li><strong>ND YAG:</strong> Sigur pentru toate tipurile de piele, inclusiv piele închisă</li>
        <li><strong>LaserICE:</strong> Tehnologie prin înghețare pentru confort maxim</li>
      </ul>
      
      <h2>Zone tratabile</h2>
      <p>Epilarea definitivă poate fi aplicată pe aproape toate zonele corpului: față, axile, picioare, zone bikini, spate, piept și multe altele.</p>
      
      <h2>Câte sesiuni sunt necesare?</h2>
      <p>Pentru rezultate optime, sunt recomandate între 6-8 sesiuni, la interval de 4-6 săptămâni între ele. Numărul exact de sesiuni variază în funcție de tipul de piele, culoarea părului și zona tratată.</p>
      
      <h2>Îngrijire după procedură</h2>
      <p>După fiecare sesiune, este important să eviți expunerea la soare, să aplici cremă hidratantă și să urmezi instrucțiunile oferite de specialist pentru rezultate optime.</p>
    `,
    image: "/images/blog-epilare-laser.jpg",
    date: "2025-01-01",
    author: "Mădălina Radu",
    category: "Epilare",
    tags: ["epilare definitivă", "laser", "bucurești", "beauty"],
    metaDescription: "Epilare definitivă cu laser în București. Tehnologii moderne, rezultate durabile, toate tipurile de piele. Consultație gratuită.",
    readingTime: 7,
  },
  {
    id: "5",
    slug: "bb-glow-tratament-facial-revolutionar",
    title: "BB Glow - Tratament Facial Revolutionar pentru Ten Perfect",
    excerpt: "BB Glow combină micropigmentarea cu îngrijirea pielii pentru un ten uniform, strălucitor și perfect. Descoperă beneficiile acestui tratament inovator.",
    content: `
      <h2>Ce este BB Glow?</h2>
      <p>BB Glow este un tratament facial inovator care combină micropigmentarea cu îngrijirea profundă a pielii. Procedura oferă un ten uniform, strălucitor și perfect, reducând necesitatea aplicării zilnice de fond de ten.</p>
      
      <h2>Beneficii BB Glow</h2>
      <ul>
        <li>Ten uniform și strălucitor</li>
        <li>Reducere a imperfecțiunilor</li>
        <li>Hidratare profundă</li>
        <li>Efect de machiaj permanent</li>
        <li>Stimulare a producției de colagen</li>
      </ul>
      
      <h2>Cum funcționează?</h2>
      <p>BB Glow folosește pigmenți speciali care sunt introduși în stratul superficial al pielii, oferind un ton uniform și strălucitor. Procedura include și seruri hidratante și nutriente care îmbunătățesc calitatea pielii.</p>
      
      <h2>Pentru cine este potrivit?</h2>
      <p>BB Glow este ideal pentru persoanele care au ten neuniform, pete pigmentare, cicatrici de acnee sau care doresc un ten perfect fără machiaj zilnic.</p>
      
      <h2>Durata rezultatelor</h2>
      <p>Rezultatele BB Glow durează între 6-12 luni, în funcție de tipul de piele și stilul de viață. Recomandăm o sesiune de întreținere după 3-4 luni.</p>
    `,
    image: "/images/blog-bb-glow.jpg",
    date: "2025-01-20",
    author: "Mădălina Radu",
    category: "Tratamente faciale",
    tags: ["bb glow", "tratament facial", "ten perfect", "beauty"],
    metaDescription: "BB Glow tratament facial în București. Ten uniform și strălucitor, rezultate durabile. Consultație gratuită.",
    readingTime: 5,
  },
];

