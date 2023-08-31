import { HistoricalMonth } from "./historical-month.model";

export class HistoricalCalendar {
  public id?: number;
	public name?: string;
	public comments?: string;
  public allowYearZero?: Boolean;
	public allowYearBeforeZero?: Boolean;
	public acronymForYearsBeforeZero?: String;
	public acronymForYearsAfterZero?: String;
  public months?:HistoricalMonth[] = [];
}
