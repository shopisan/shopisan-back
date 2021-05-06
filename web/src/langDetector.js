function addLang(found, lang){
  if (!found.includes(lang)){
    found.push(lang);
  }
}

export default {
    name: 'langDetector',
  
    lookup(options) {
      let found = [];

      console.log(options);
      if (typeof navigator !== 'undefined') {
        if (navigator.languages) {
          for (let i=0; i < navigator.languages.length; i++) {
            addLang(found, navigator.languages[i]);
          }
        }
        if (navigator.userLanguage) {
          addLang(found, navigator.userLanguage);
        }
        if (navigator.language) {
          addLang(found, navigator.language);
        }
      }

      if (found.length === 0){
        return 'en';
      }

      var lang = found[0].substr(0, found[0].indexOf('-'));

      return lang;
    },
  
    cacheUserLanguage(lng, options) {
      // options -> are passed in options
      // lng -> current language, will be called after init and on changeLanguage
      // store it
    },
  };
