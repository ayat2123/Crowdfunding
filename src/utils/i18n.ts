import { create } from 'zustand';

type Language = 'en' | 'fa';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (lang: Language) => set({ language: lang }),
}));
