export type GenericResponse<T> = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: T[];
};

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
