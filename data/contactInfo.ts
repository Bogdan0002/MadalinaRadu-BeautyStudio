export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  program: string[];
}

export const contactInfo: ContactInfo = {
  address: "strada Tineretului nr. 17, București",
  phone: "0757 376 043",
  email: "madalina.radu777@icloud.com",
  program: [
    "Luni - Vineri: 10:30 - 19:30",
    "Sâmbătă - Duminică: 12:00 - 20:00",
  ],
};

