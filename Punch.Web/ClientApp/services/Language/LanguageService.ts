import { Language } from "../../enums/Language.enum";
import VueI18n from "vue-i18n";
import Vue from "vue";

Vue.use(VueI18n);

class LanguageService {

  private _vueI18N: VueI18n;

  constructor() {
    this._vueI18N = new VueI18n({
      locale: 'en-US',
      messages: this.getLanguages()
    });
  }

  public init(): VueI18n {
    return this._vueI18N;
  }

  public changeLanguage(language: Language = Language.EN): void {
    this._vueI18N.locale = language;
  }

  private getLanguages(): any {
    let languages = {};

    Object.keys(Language).forEach(language => {
      const languageValue = Language[language];
      languages[languageValue] = require('../../assets/i18n/' + languageValue + '.json');
    });

    return languages;
  }

}

export default new LanguageService();