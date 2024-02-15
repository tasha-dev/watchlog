// Codes by mahdi tasha
// Importing part
import { create } from 'zustand'

// Defining types of states
type themeType = 'light' | 'dark';

interface themeStateType {
  theme: themeType;
  setTheme: (themeParam:themeType) => void;
}

interface authStateType {
  loggedIn: boolean;
}

// Creating states
export const useTheme = create<themeStateType>((set) => ({
  theme: 'dark',
  setTheme: (themeParam:themeType) => set({theme: themeParam})
}));

export const useAuth = create<authStateType>(() => ({
  loggedIn: false
}))
