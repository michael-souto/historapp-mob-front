import { Injectable } from '@angular/core';
import { Locale } from 'src/app/models/locale.model';
import { LocaleCrudService } from 'src/app/services/locale/locale-crud.service';
import { UtilsService } from 'src/app/services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  constructor(
    public localeCrudService: LocaleCrudService,
    public utilsService: UtilsService
  ) {}

  private _locale: Locale = this.localeCrudService.getNewClass();
  public tags?: string[] = [];

  newLocale() {
    this._locale = this.localeCrudService.getNewClass();
    this.tags = [];
  }

  openLocale(id: number) {
    return this.localeCrudService
      .findById(id)
      .subscribe((response: Locale) => {
        this._locale = response;
        this.tags = this.utilsService.getArrayTags(response.tags);
      });
  }

  saveLocale() {
    return this.localeCrudService.create(this._locale);
  }

  deleteLocale() {
    return this.localeCrudService.delete(this._locale.id);
  }

  clearLocale() {
    this._locale = this.localeCrudService.getNewClass();
  }

  public get locale(): Locale {
    return this._locale;
  }

  public set locale(locale: Locale) {
    this._locale = locale;
  }
}
