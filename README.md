# PawRescue 🐾

A responsive animal-rescue demo built with **Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion and Lucide React**.

PawRescue helps people report injured or vulnerable street animals, browse community reports, and find veterinary clinics around Cairo.

## Features

- Responsive landing page with animated animal/paw details.
- Report form with required-field validation, image preview, and saved reports.
- Report data persisted in the browser with `localStorage` (no backend required).
- Recent reports with animal-type filtering and report status.
- Vet directory with search, area filters, phone links and Google Maps directions.
- Accessible labels, focus states, empty states, and success feedback.

## Project structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    report/page.tsx
    vets/page.tsx
  components/
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    SectionHeading.tsx
    ReportCard.tsx
    ReportFeed.tsx
    VetCard.tsx
    AnimalIllustration.tsx
  data/
    reports.ts
    vets.ts
  lib/
    reports.ts
  types/
    index.ts
```


