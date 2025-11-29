# DataLabel AI Website

This is the source code for the DataLabel AI SaaS website, built with React and Vite.

## Project Structure

- **src/components**: Reusable UI components (Navbar, Footer).
- **src/pages**: Individual page components (Home, Features, Pricing, etc.).
- **src/index.css**: Global styles and design system variables.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Design System

The project uses a CSS variable-based design system defined in `src/index.css`.
- **Colors**: `--color-primary`, `--color-secondary`, etc.
- **Typography**: `--font-sans`.
- **Spacing**: `--spacing-md`, `--spacing-lg`, etc.

## Pages Implemented

- **Home**: Landing page with Hero, Value Props, ROI Calculator.
- **Features**: Detailed feature breakdown.
- **Pricing**: Pricing tiers with toggle.
- **How It Works**: Step-by-step process.
- **Login**: User authentication UI.
- **Case Studies**: Success stories.
