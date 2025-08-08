const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  it: () => import('./dictionaries/it.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale as 'en' | 'it']) {
    // fallback to English
    return dictionaries.en();
  }
  return dictionaries[locale as 'en' | 'it']();
};