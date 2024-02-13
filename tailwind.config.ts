// Codes by mahdi tasha
// Importing type of tailwindcss
import type { Config } from "tailwindcss";

// Defining configs of tailwindcss
const config: Config = {
  darkMode: 'class',
  content: [
    './app/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './component/*.{ts,tsx,js,jsx}',
    './component/*.{ts,tsx,js,jsx}',
    './chunk/*.{ts,tsx,js,jsx}',
    './chunk/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',

        lightBG: '#F8F9FA',
        lightText: '#333333',
        lightBorder: '#dcdcdc',

        darkBG: '#2C3E50',
        darkText: '#ecf0f1',
        darkBorder: '#34495e'
      }
    }
  },
  plugins: [],
};

// Exporting the configs
export default config;
