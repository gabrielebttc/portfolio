# Project: Personal Portfolio Website

## Project Overview

This is a modern, highly dynamic personal portfolio website for a Full Stack Developer specializing in SaaS and management platforms. Built with **Next.js**, **React**, **TypeScript**, and styled with **Tailwind CSS**, the project serves as an impressive digital business card.

The user interface is rich with interactive and animated elements designed to capture attention. Key features include:
- A mouse-following spotlight effect.
- An animated text gradient on the main headline.
- Sequential fade-in animations for text and UI elements.
- An infinite scrolling marquee showcasing the developer's technical stack.
- A manual image carousel for project showcases.
- Subtle hover effects and transitions to enhance user experience.

The portfolio is structured into three main sections: a hero section, a "My Works" section detailing specific projects, and a footer displaying the "Technical Ecosystem."

## Building and Running

### Prerequisites

-   [Node.js](https://nodejs.org) (version 20 or later)
-   [npm](https://www.npmjs.com) (or a compatible package manager like yarn or pnpm)

### Installation

1.  Clone the repository.
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Key Commands

-   **Run the development server:**
    ```bash
    npm run dev
    ```
    This starts the application on `http://localhost:3000`.

-   **Build the application for production:**
    ```bash
    npm run build
    ```

-   **Start the production server:**
    ```bash
    npm run start
    ```

-   **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

### Code Style & Structure

-   The project uses **ESLint** with the `eslint-config-next` configuration to maintain code quality.
-   The main application logic is centralized in `src/app/page.tsx`, which acts as a single-page portfolio.
-   Data for the technology stack and projects is hardcoded as arrays of objects at the top of `page.tsx` for easy management.

### Styling & Animations

-   Styling is managed entirely with **Tailwind CSS**.
-   Custom animations and effects are defined in `src/app/globals.css`. This includes:
    -   `@keyframes shine`: Creates the animated gradient on the main headline.
    -   `@keyframes reveal` & `@keyframes fade-in`: Used for staggered text and element appearances.
    -   `@keyframes marquee`: Drives the infinite scrolling of the tech stack logos.
-   The interactive spotlight effect is achieved by tracking the mouse position (`--mouse-x`, `--mouse-y`) with a `useEffect` hook and applying it to a radial gradient on a pseudo-element.

### Components & Logic

-   The page is primarily a single, large React component.
-   A `useEffect` hook manages the mouse-tracking for the spotlight effect.
-   The image carousel in the "My Works" section is controlled manually using React Refs (`useRef`) to scroll the container when the arrow buttons are clicked.
