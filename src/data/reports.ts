import type { AnimalReport } from "@/types";

export const initialReports: AnimalReport[] = [
  {
    id: "demo-1",
    animal: "Dog",
    title: "Friendly dog with an injured paw",
    description: "A calm street dog is limping near the park entrance. Could use a check-up and some care.",
    location: "Maadi, Cairo",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=900&q=85",
    status: "Needs help",
    createdAt: "2 hours ago",
  },
  {
    id: "demo-2",
    animal: "Cat",
    title: "Small kitten needs attention",
    description: "A young kitten has been spotted alone near the shops. Please approach gently.",
    location: "Zamalek, Cairo",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85",
    status: "Reported",
    createdAt: "Yesterday",
  },
  {
    id: "demo-3",
    animal: "Dog",
    title: "Dog looking for a safe place",
    description: "This dog is resting outside a building and seems frightened by traffic.",
    location: "Nasr City, Cairo",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=85",
    status: "Rescued",
    createdAt: "2 days ago",
  },
];
