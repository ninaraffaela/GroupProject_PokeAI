# Welcome to our GroupProject PokeAPI

💪🏼 Oğuz and Nina Raffaela 🍀

## What we do:
We are given a Notion Project Requirement, and a Figma Overview for a
### PokeDex-like WebApplication, using the PokeAPI:
[Poke API](https://pokeapi.co/) 

### Figma Overview
![Figma Project Requirement](Figma_Overview.png)

### the given requirements:
- PokeMon Overview Page
- PokeMon DetailPages 
- FilterPage for certain type
- SearchBar for specific PokeMon
- Dark/Light Toggle
- 
_____________________________________________
## TechStack
![TechStack](TechStack.png)

_________________________

### Diagram
![Pokemon Diagram View](Pokemon_Diagram.png)

### KICKOFF
![Xmind Overview KICKOFF](Xmind_Kickoff-1.png)

### Xmind 6hrs in
![Xmind Overview 6hrs in](Xmind_soFar.png)
![Xmind Overview 6hrs in](Xmind_soFar-1.png)

👾 Let´s Fetz 🍀

_____________________________________________
### needed to make it work:
- npm i react-router-dom
- npm install lucide-react
- npm i axios
- npm install tailwindcss @tailwindcss/vite
______________________________________________

# Standard Initial React Vite Readme Filling: 
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# GroupProject_PokeAI
