// src/translations/translations.js
import settingsTranslationsEn from './settings/en';
import settingsTranslationsEs from './settings/es';
import settingsTranslationsFr from './settings/fr';
import settingsTranslationsPt from './settings/pt';

import aboutTranslationsEn from './about/en';
import aboutTranslationsEs from './about/es';
import aboutTranslationsFr from './about/fr';
import aboutTranslationsPt from './about/pt';

const translations = {
  en: {
    ...settingsTranslationsEn,
    ...aboutTranslationsEn,
  },
  es: {
    ...settingsTranslationsEs,
    ...aboutTranslationsEs,
  },
  fr: {
    ...settingsTranslationsFr,
    ...aboutTranslationsFr,
  },
  pt: {
    ...settingsTranslationsPt,
    ...aboutTranslationsPt,
  },
};

export default translations;
