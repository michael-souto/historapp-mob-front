import { HistoricalDate } from './historical-date.model';
export class Character {
  public id?: number;
  public name?: string;
  public tags?: string;
  public comments?: string;
  public sex?: string;
  public birthDate?: HistoricalDate;
  public deathDate?: HistoricalDate;
  public mother?: Character;
  public father?: Character;
  public createAt?: Date;
  public updateAt?: Date;
}
