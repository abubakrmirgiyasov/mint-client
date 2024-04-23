import { LOCALE_ID, Provider } from "@angular/core";

export const APP_PROVIDERS: Provider[] = [
  {
    provide: LOCALE_ID,
    useValue: 'ru-RU'
  }
];