## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📁 Project Structure

├── public/ # Static assets
├── src/
│ ├── app/ # App router components
│ │ ├── layout.tsx # Root layout component
│ │ └── page.tsx # Main page component
│ ├── components/ # Reusable UI components
│ ├── styles/ # Global styles and Tailwind configuration
├── next.config.mjs # Next.js configuration
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
└── tailwind.config.js # Tailwind CSS configuration
