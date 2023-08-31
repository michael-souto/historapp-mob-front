import { CalendarDate } from "./calendar-date.model";

export class HistoricalDate {
  public id?: number;
	public date: Date = new Date();
	public datesCalendars?: CalendarDate[] = [];
}
