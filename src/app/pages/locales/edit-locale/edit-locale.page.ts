import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../locales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Locale } from 'src/app/models/locale.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-edit-locale',
  templateUrl: './edit-locale.page.html',
  styleUrls: ['./edit-locale.page.scss'],
})
export class EditLocalePage implements OnInit {
  constructor(
    public localesService: LocalesService,
    private route: Router,
    protected activateRoute: ActivatedRoute,
    public utilsService: UtilsService
  ) {}

  ngOnInit() {}

  title: string = '';

  ionViewWillEnter() {
    const id: number = this.activateRoute.snapshot.params['id'];
    if (id != null) {
      this.title = `Editar lugar - #${id}`;
      this.localesService.openLocale(id);
    } else {
      this.title = `Novo lugar`;
      this.localesService.newLocale();
    }
  }

  saveLocale() {
    let tagFinal = '';
    this.localesService.tags?.forEach((t) => (tagFinal += t.trim() + ';'));
    this.localesService.locale.tags = tagFinal;
    this.localesService.saveLocale().subscribe(
      (response) => {
        this.localesService.clearLocale();
        this.localesService.tags = [];
        this.route.navigate(['locales/view', response.id]);
        this.utilsService.presentToast('Local salvo com sucesso!', false);
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.utilsService.presentToast(messagesn, true);
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
