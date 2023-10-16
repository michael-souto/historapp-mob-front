import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../locales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { Locale } from 'src/app/models/locale.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-locale',
  templateUrl: './view-locale.page.html',
  styleUrls: ['./view-locale.page.scss'],
})
export class ViewLocalePage implements OnInit {
  constructor(
    public localesService: LocalesService,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.localesService.clearLocale();
  }

  ionViewWillEnter() {
    const id: number = this.activateRoute.snapshot.params['id'];
    if (!id != null) {
      this.localesService.openLocale(id);
    }
  }

  showDialogDelete() {
    this.utilsService.presentActionSheet({
      header: 'Deseja deletar este lugar?',
      buttons: [
        { text: 'Sim', handler: () => this.deleteEntity() },
        { text: 'Não' },
      ],
    });
  }

  addTag(tag:string){
    this.localesService.updateTags().subscribe(
      (response) => {
        this.utilsService.presentToast('Tag adicionada com sucesso!', false);
      }
    );
  }

  removeTag(tags:string){
    this.localesService.updateTags().subscribe(
      (response) => {
        this.utilsService.presentToast('Tag removida com sucesso!', false);
      }
    );
  }


  private deleteEntity() {
    this.localesService.deleteLocale().subscribe(
      (response) => {
        this.localesService.clearLocale();
        this.localesService.tags = [];
        this.utilsService.backMyBaseRoute();
        this.utilsService.presentToast('Local excluído com sucesso!', false);
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, false);
      }
    );
  }

  get locale(): Locale {
    return this.localesService.locale;
  }

  set locale(locale: Locale) {
    this.localesService.locale = locale;
  }
}
