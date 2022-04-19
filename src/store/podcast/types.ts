export interface ILinks {
  self: string;
  episodes: string;
  public_episodes: string;
  public_feed: string;
  art: string;
  episode_new_art: string;
  episode_new_media: string;
}

export interface IEepisodes {
  id: string;
  storage_location_id: number;
  title: string;
  link: string;
  description: string;
  language: string;
  author: string;
  email: string;
  has_custom_art: boolean;
  art: string;
  art_updated_at: number;
  categories: string[];
  episodes: string[];
  links: ILinks;
}



