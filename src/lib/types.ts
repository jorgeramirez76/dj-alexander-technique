export interface Release {
  id: string;
  title: string;
  artists: string[];
  featuring: string | null;
  type: "single" | "ep" | "album" | "remix" | "collab" | "rework";
  label: string | null;
  year: number | null;
  catalog: string | null;
  links: Partial<Record<"beatport" | "traxsource" | "discogs" | "soundcloud", string>>;
  image?: string | null;
  verified: boolean;
  note: string | null;
}

export interface VideoItem {
  id: string;
  title: string;
  dj?: string;
  track?: string;
}

export interface VideoCategory {
  key: string;
  label: string;
  blurb: string;
  items: VideoItem[];
}

export interface Show {
  event: string;
  venue: string;
  city: string;
  date: string;
  year: number | null;
  note: string | null;
  verified: boolean;
  ticketUrl?: string;
}
