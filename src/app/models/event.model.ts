import { Character } from './character.model';
import { HistoricalDate } from './historical-date.model';
import { Locale } from './locale.model';
export class Event {
  id?: number;
  title?: string;
  description?: string;
  tags?: string;
  characters?: Character[] = [];
  locales?: Locale[] = [];
  startOfPeriod?: HistoricalDate;
  endOfPeriod?: HistoricalDate;
}
