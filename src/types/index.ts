export type AnimalType = "Cat" | "Dog" | "Other";
export type ReportStatus = "Needs help" | "Reported" | "Rescued";

export type AnimalReport = {
  id: string;
  animal: AnimalType;
  title: string;
  description: string;
  location: string;
  image: string;
  status: ReportStatus;
  createdAt: string;
};

export type Vet = {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  note: string;
  mapsQuery: string;
};
