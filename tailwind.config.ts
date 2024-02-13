// Codes by mahdi tasha
// Importing type of tailwindcss
import type { Config } from "tailwindcss";

// Defining configs of tailwindcss
const config: Config = {
  content: [
    './app/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './component/*.{ts,tsx,js,jsx}',
    './component/**/*.{ts,tsx,js,jsx}',
    './chunk/*.{ts,tsx,js,jsx}',
    './chunk/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#F8F9FA',
        lightText: '#333333',
        lightBorder: '#dcdcdc',

        darkBg: '#2C3E50',
        darkText: '#ecf0f1',
        darkBorder: '#34495e'
      }
    }
  },
  plugins: [],
};

// Exporting the configs
export default config;
