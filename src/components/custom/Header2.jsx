import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' }
];

const Header2 = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold">
              {t('welcome')}
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/plan" className="hover:text-primary">
                {t('planTrip')}
              </Link>
              <Link to="/destinations" className="hover:text-primary">
                {t('destinations')}
              </Link>
              <Link to="/itinerary" className="hover:text-primary">
                {t('itinerary')}
              </Link>
              <Link to="/budget" className="hover:text-primary">
                {t('budget')}
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder={t('search')}
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-xl">
                    {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
                  </span>
                  <span className="hidden sm:inline">
                    {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild>
              <Link to="/login">{t('login')}</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">{t('signup')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2; 