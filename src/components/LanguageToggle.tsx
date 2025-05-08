'use client';

import { useLanguageStore } from '@/utils/i18n';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:text-indigo-600 border border-gray-300 rounded-full transition-colors"
    >
      <span>{language === 'en' ? 'فارسی' : 'English'}</span>
      <span className="text-xs">|</span>
      <span>{language === 'en' ? 'FA' : 'EN'}</span>
    </button>
  );
}
