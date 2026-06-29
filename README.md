# Frontend Capstone Project — Group 10

A React web application that explores our solar system through data. Built as a capstone project for the TS Academy Frontend Development course.

## Live Demo

https://group-10-capstone-project.vercel.app

## Project Summary

Phoenix is a React-based web app that fetches real planetary data from an external API and presents it in an interactive, visually rich interface. The app features a responsive planet card grid, a comparative data table, a validated contact form, and a background video section — all styled with a dark space-exploration theme.

## Team Members

| Name                     | GitHub                                   |
| ------------------------ | ---------------------------------------- |
| Adebayo Ayodele Israel   | [GitHub](https://github.com/ayoisrael)   |
| Olaniyi Damilare Gabriel | [GitHub](https://github.com/smartdammie) |
| Erua Joseph Yusuf        | [GitHub](https://github.com/Eruxuf)      |
| Okoro Oghenetega         | [GitHub](https://github.com/INFlNlTEE)   |
| Oyesola Kenneth Oyedotun | [GitHub](https://github.com/Kenoye001)   |
| Akinsipe Oluwabukola     | [GitHub](https://github.com/Bukolaeg)    |
| Grace Okome              | [GitHub](https://github.com/Gracesabel)  |
| Omobolaji Olaniyan       | [GitHub](https://github.com/loco-tech)   |

## Components & Responsibilities

| Component / File       | Location                                   | Contributor(s) |
| ---------------------- | ------------------------------------------ | -------------- |
| `Navbar`               | `src/components/Navbar/`                   | Grace Okome          |
| `Hero`                 | `src/components/Hero/`                     | Adebayo Ayodele Irael          |
| `VideoSection`         | `src/components/VideoSection/`             | Erua Joseph Yusuf          |
| `PlanetGrid`           | `src/components/PlanetGrid/`               | Omobolaji Olaniyan         |
| `PlanetCard`           | `src/components/PlanetGrid/PlanetCard.jsx` | Okon Oghenetega           |
| `DataTable`            | `src/components/DataTable/`                |Oyesola Kenneth Oyedotun          |
| `ContactForm`          | `src/components/ContactForm/`              | Olaniyi Damilare Gabriel          |
| `Footer`               | `src/components/Footer/`                   | Grace Okome         |
| `usePlanets` hook      | `src/hooks/usePlanets.js`                  | Olaniyi Damilare Gabriel          |
| `teamMembers` data     | `src/data/teamMembers.js`                  | Okon Oghenetega          |
| `planetTableData` data | `src/data/planetTableData.js`              | Adebayo Ayodele Irael          |

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/smartdammie/Group-10---CAPSTONE-PROJECT-.git
   cd group-10-capstone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Tech Stack

- **React 19** via Vite
- **CSS** — custom properties, Flexbox, CSS Grid, media queries (no CSS framework)
- **Fetch API** — for planet data from external API
- **Vercel / Netlify** — for deployment
