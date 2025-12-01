export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  priceRange: string;
  isOnSale: boolean;
}

export const products: Product[] = [
  {
    slug: "aparat-epilare-laser-diode-ndyag",
    name: "Aparat de epilare definitivă cu laser diode, ND yag pentru îndepărtarea tatuajelor",
    shortDescription: "Aparat profesional multifuncțional pentru epilare definitivă și eliminare tatuaje, cu tehnologie diode și ND yag.",
    priceRange: "8.000 € – 13.000 €",
    isOnSale: false,
  },
  {
    slug: "aparat-epilare-laserice",
    name: "Aparat de epilare definitiva LaserICE",
    shortDescription: "Sistem avansat de epilare definitivă cu tehnologie prin înghețare, fără durere și potrivit pentru toate tipurile de piele.",
    priceRange: "12.000 € – 18.000 €",
    isOnSale: true,
  },
  {
    slug: "hyaluron-pen-pro-automat",
    name: "Hyaluron Pen pro automat",
    shortDescription: "Dispozitiv profesional pentru mărirea buzelor fără ac, cu sistem automat și control precis al dozei.",
    priceRange: "1.500 € – 2.500 €",
    isOnSale: false,
  },
  {
    slug: "laserice-uk-delivery",
    name: "LaserICE – UK delivery",
    shortDescription: "Aparat LaserICE cu livrare în Regatul Unit, inclusiv instruire, asistență tehnică și suport de marketing.",
    priceRange: "15.000 € – 20.000 €",
    isOnSale: true,
  },
];

