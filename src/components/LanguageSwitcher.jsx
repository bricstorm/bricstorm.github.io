import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-3a5 5 0 00-5-5 5 5 0 00-5 5v3m9-9v-3a5 5 0 00-5-5 5 5 0 00-5 5v3" />
      </svg>
      <div className="flex border border-yellow-400/20 rounded-lg overflow-hidden">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            language === 'pt' 
              ? 'bg-yellow-400 text-black' 
              : 'text-gray-300 hover:text-yellow-400'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium transition-colors ${
            language === 'en' 
              ? 'bg-yellow-400 text-black' 
              : 'text-gray-300 hover:text-yellow-400'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
