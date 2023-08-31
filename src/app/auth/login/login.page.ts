import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private authService: AuthService,
    public utilsService: UtilsService,
    private router: Router
  ) {}

  @ViewChild('email', { static: true }) email?: IonInput;

  ionViewWillEnter() {
    this.email?.setFocus();
  }

  login(usuario?: any, senha?: any) {
    this.authService
      .login(usuario.toLowerCase(), senha, () => this.gotToSystem())
      .then(() => {

      })
      .catch((erro) => {
        this.utilsService.presentToast(erro.message + " - " + erro.error + " - " + erro.error_description, true);
      });
  }

  gotToSystem():void {
    this.utilsService.presentToast('Bem vindo de volta!', false);
    if (this.authService.previousUrl && this.authService.previousUrl.indexOf('/login') < 0){
      const url = this.authService.previousUrl.replace(environment.urlProject, "").split("?");
      const baseRoute = url[0] ?? '/';
      const queryParam = url[1]?.split('&') ?? '';
      if (typeof queryParam === 'string' && queryParam == '') {
        this.router.navigate([baseRoute]);
      } else {
        let params: any = {};
        for (let i = 0; i < queryParam.length; i++) {
          let split = queryParam[i].split('=');
          params[split[0].trim()] = split[1].trim();
        }
        this.router.navigate([baseRoute], { queryParams : params });
      }
      this.authService.previousUrl = '';
    } else {
      this.router.navigate(['/']);
    }
  }
}
