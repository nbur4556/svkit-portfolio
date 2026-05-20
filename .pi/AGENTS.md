# SVKit Portfolio Project Context

This project is a professional portfolio built with SvelteKit, Tailwind CSS, and TypeScript. It showcases projects, work experience, and contact information.

## 🚀 Project Goal
To provide a responsive, visually appealing portfolio that highlights the developer's work and allows potential employers or collaborators to get in touch.

## 🛠 Tech Stack
- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Testing:** [Cypress](https://www.cypress.io/) (E2E & Visual Regression)
- **Deployment:** Vercel

## 📂 Project Structure

### `/src` - Application Source
- **`components/`**: Reusable UI elements.
    - `NavigationBar/`: Header and navigation logic.
    - `SVG/`: Custom SVG icons.
    - `UI/`: Base UI components like `Card.svelte`, `Link.svelte`, etc.
        - `PageContent.svelte`: Wrapper component formatting as page content
        - `PageSection.svelte`: Wrapper component formatting as page section
    - Other components like `Hero.svelte`, `FeaturedProjects.svelte`, `WorkExperience.svelte`, `Contact.svelte`.
- **`routes/`**: SvelteKit file-based routing.
    - `+layout.svelte`: Global layout wrapper.
    - `+page.svelte`: Homepage.
    - `projects/[id]/`: Dynamic route for detailed project view.
- **`stores/`**: Svelte stores for state management.
    - `projectStore.ts`: Contains the source of truth for projects data.
    - `experienceStore.ts`: Contains professional work experience data.
- **`util/`**: Types and helper functions (e.g., `paths.ts`).

### `/static` - Static Assets
- `/images`: Project screenshots and social icons.
- `resume.pdf`: Developer's resume.

### `/cypress` - Testing
- `e2e/`: End-to-end tests for critical user paths.
- `snapshots/`: Base images for visual regression testing.

## 🧬 Key Patterns & Guidelines

### Data Management
- Data is centralized in Svelte stores (`src/stores/`). 
- Use `readable` stores for static data that doesn't change at runtime.

### UI Development
- Use Tailwind CSS for all styling.
- Follow the component-based architecture in `src/components/`.
- Base UI components in `src/components/UI/` should be kept generic and reusable.

### Testing Workflow
Visual regression is a first-class citizen in this project.
1. **E2E Tests**: `yarn test:run`
2. **Visual Regression**: `yarn test:snapshot`
3. **Updating Snapshots**: `yarn test:update` (Only when visual changes are intentional).

## ⚡ Common Tasks

### Adding a new project
1. Add the project details to `projectsData` in `src/stores/projectStore.ts`.
2. Add the corresponding screenshot to `static/images/projects/`.

### Updating Work Experience
1. Modify the data in `src/stores/experienceStore.ts`.

### Adding a new page
1. Create a new directory in `src/routes/` with a `+page.svelte` file.
2. Update `src/components/NavigationBar/navigationRoutes.ts` if the page needs to be linked in the nav.

## ⚠️ Important Red Lines
- **Visual Regression**: Any change to the CSS or layout may trigger visual regression failures. Always run `yarn test:snapshot` before committing UI changes.
- **Case Sensitivity**: Ensure image paths in `projectStore.ts` match the actual filenames in `static/images/projects/` exactly.
