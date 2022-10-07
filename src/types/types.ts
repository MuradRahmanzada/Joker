export type Category =
  | "Any"
  | "Misc"
  | "Programming"
  | "Dark"
  | "Pun"
  | "Spooky"
  | "Christmas";

export type FlagKeys =
  | "nsfw"
  | "religious"
  | "political"
  | "racist"
  | "sexist"
  | "explicit";

export type Language = "cs" | "de" | "en" | "es" | "fr" | "pt";

export type Flag = {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
};

export type Joke = {
  id: number;
  category: Category;
  setup?: string;
  delivery?: string;
  joke: string;
  safe: boolean;
  flags: Flag;
  lang: Language;
  type: "single" | "twopart";
};
