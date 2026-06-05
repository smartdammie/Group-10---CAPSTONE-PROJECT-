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
| Placeholder Member 5     | [GitHub](https://github.com/placeholder) |
| Placeholder Member 6     | [GitHub](https://github.com/placeholder) |
| Placeholder Member 7     | [GitHub](https://github.com/placeholder) |
| Placeholder Member 8     | [GitHub](https://github.com/placeholder) |
| Placeholder Member 9     | [GitHub](https://github.com/placeholder) |
| Placeholder Member 10    | [GitHub](https://github.com/placeholder) |
| Placeholder Member 11    | [GitHub](https://github.com/placeholder) |
| Placeholder Member 12    | [GitHub](https://github.com/placeholder) |
| Placeholder Member 13    | [GitHub](https://github.com/placeholder) |
| Placeholder Member 14    | [GitHub](https://github.com/placeholder) |
| Placeholder Member 15    | [GitHub](https://github.com/placeholder) |

## Components & Responsibilities

| Component / File       | Location                                   | Contributor(s) |
| ---------------------- | ------------------------------------------ | -------------- |
| `Navbar`               | `src/components/Navbar/`                   | Group          |
| `Hero`                 | `src/components/Hero/`                     | Group          |
| `VideoSection`         | `src/components/VideoSection/`             | Group          |
| `PlanetGrid`           | `src/components/PlanetGrid/`               | Group          |
| `PlanetCard`           | `src/components/PlanetGrid/PlanetCard.jsx` | Group          |
| `DataTable`            | `src/components/DataTable/`                | Group          |
| `ContactForm`          | `src/components/ContactForm/`              | Group          |
| `Footer`               | `src/components/Footer/`                   | Group          |
| `usePlanets` hook      | `src/hooks/usePlanets.js`                  | Group          |
| `teamMembers` data     | `src/data/teamMembers.js`                  | Group          |
| `planetTableData` data | `src/data/planetTableData.js`              | Group          |

## Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/placeholder/group-10-capstone.git
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
