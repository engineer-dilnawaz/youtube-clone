export type ChannelDetailsType = {
  snippet: Snippet;
  statistics: Statistics;
};

type Statistics = {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
};

type Snippet = {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
};

type Localized = {
  title: string;
  description: string;
};

type Thumbnails = {
  default: Default;
  medium: Default;
  high: Default;
};

type Default = {
  url: string;
  width: number;
  height: number;
};
