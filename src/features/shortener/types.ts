export interface ApiResponse {
  alias: string;
  _links: {
    self: string;
    short: string;
  };
}

export interface ShortenedUrl {
  alias: string;
  original: string;
  short: string;
}
