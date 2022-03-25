/**
 * @returns The default language for this website (currently "es")
 */
export const defaultLang = "es";

/**
 * @param {object} router NextJS router (necessary to interact with the url).
 * @returns the lang stored in storage, or default lang if no lang has been stored.
 */
export const getLang = (router) => {
  // Looks for lang in URL
  const langFromURL = router.query.lang;
  if (langFromURL) {
    localStorage.setItem("lang", langFromURL);
    return langFromURL;
  }

  // Looks for lang in localStorage
  const langFromStorage = localStorage.getItem("lang");
  if (langFromStorage) return langFromStorage;

  // Set localStorage item to default
  localStorage.setItem("lang", defaultLang);
  return defaultLang;
};

/**
 * Sets lang globally to "newLangKey" param.
 * @param {object} router NextJs router to be able to access and manupulate URL.
 * @param {string} newLangKey Can be "es" or "en".
 */
export const setLang = (router, newLangKey) => {
  localStorage.setItem("lang", newLangKey);
  router.replace(`${router.pathname}?lang=${newLangKey}`);
};
