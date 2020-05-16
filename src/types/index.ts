export interface GeneralObject {
  [index: string]: any;
}
export interface Locales {
  locales: LocaleItem[];
}
export interface LocaleItem {
  name: string;
  title: string;
  slug: string;
}
