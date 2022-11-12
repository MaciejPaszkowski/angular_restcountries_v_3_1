export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  capital: string;
  capitalInfo: LatLng;
  continents: string;
  latlng: LatLng;
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Language[];
  population: number;
  area: number | null;
  gini: number | null;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  flags: Flag;
  coatOfArms: Flag;
}

export interface LatLng {
  latlng: number[];
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
}

export interface Flag {
  png: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
