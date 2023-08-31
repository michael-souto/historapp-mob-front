import { Character } from "./character.model";
import { Comment } from "./comment.model";
import { Event } from "./event.model";
import { Locale } from "./locale.model";

export class Annotation {
  public id?: number;
  public title?: string;
  public text?: string;
  public tags?: string;
  public characters: Character[] = [];
  public locales: Locale[] = [];
  public events: Event[] = [];
  public comments: Comment[] = [];
  public createAt?: Date;
  public updateAt?: Date;
}
