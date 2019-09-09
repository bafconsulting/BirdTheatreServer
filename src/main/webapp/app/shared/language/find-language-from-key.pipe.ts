import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: any = {
    'ar-ly': { name: 'العربية', rtl: true },
    'zh-tw': { name: '繁體中文' },
    en: { name: 'English' },
    fr: { name: 'Français' },
    de: { name: 'Deutsch' },
    hi: { name: 'हिंदी' },
    ja: { name: '日本語' },
    ko: { name: '한국어' },
    'pt-pt': { name: 'Português' },
    ru: { name: 'Русский' },
    es: { name: 'Español' },
    sv: { name: 'Svenska' },
    tr: { name: 'Türkçe' },
    th: { name: 'ไทย' },
    vi: { name: 'Tiếng Việt' }
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };
  transform(lang: string): string {
    return this.languages[lang].name;
  }
  isRTL(lang: string): boolean {
    return this.languages[lang].rtl;
  }
}
