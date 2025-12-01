export interface Review {
  id: string;
  name: string;
  initials: string;
  content: string;
  category: "studio" | "laserice";
  rating?: number;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Anca T.",
    initials: "AT",
    content: "Rezultate excelente la micropigmentarea sprâncenelor! Mădălina este foarte atentă la detalii și profesionistă.",
    category: "studio",
    rating: 5,
  },
  {
    id: "2",
    name: "Teodora V.",
    initials: "TV",
    content: "Sunt foarte mulțumită de tratamentul BB Glow. Tenul meu arată mult mai uniform și strălucitor.",
    category: "studio",
    rating: 5,
  },
  {
    id: "3",
    name: "Cristina R.",
    initials: "CR",
    content: "Procedura cu Hyaluron Pen a fost rapidă și fără durere. Buzele mele arată perfect!",
    category: "studio",
    rating: 5,
  },
  {
    id: "4",
    name: "Alina M.",
    initials: "AM",
    content: "Epilarea cu laser este eficientă și profesională. Recomand cu căldură serviciile de aici.",
    category: "studio",
    rating: 5,
  },
  {
    id: "5",
    name: "Teodora B.",
    initials: "TB",
    content: "Am achiziționat LaserICE pentru salonul meu. Instruirea și suportul oferit sunt excepționale.",
    category: "laserice",
    rating: 5,
  },
  {
    id: "6",
    name: "Amalia H.",
    initials: "AH",
    content: "LaserICE a transformat oferta salonului meu. Clienții sunt încântați de rezultatele fără durere.",
    category: "laserice",
    rating: 5,
  },
  {
    id: "7",
    name: "Gabriela M.",
    initials: "GM",
    content: "Investiția în LaserICE s-a amortizat rapid. Este un produs de calitate superioară.",
    category: "laserice",
    rating: 5,
  },
  {
    id: "8",
    name: "Antonia R.",
    initials: "AR",
    content: "Suportul tehnic și de marketing oferit de echipa Mădălinei este remarcabil. Mulțumim!",
    category: "laserice",
    rating: 5,
  },
];

