import { formatDistanceToNowStrict } from "date-fns";

export const dateFormatter = (date: string) => {
  const result = formatDistanceToNowStrict(date, { addSuffix: true });
  return result;
};
