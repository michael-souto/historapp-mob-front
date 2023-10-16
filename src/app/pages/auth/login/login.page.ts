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
    if (this.authService.estaLogado()) {
      this.router.navigate(['/']);
    } else {
      this.email?.setFocus();
    }
  }

  login(usuario?: any, senha?: any) {
    console.log(usuario, senha)
    this.authService
      .login(usuario.toLowerCase(), senha, () => this.gotToSystem())
      .then(() => {

      })
      .catch((erro) => {
        //this.utilsService.presentToast(erro.message + " - " + erro.error + " - " + erro.error_description, true);
        this.utilsService.presentToast('Login ou senha inválido', true);
      });
  }

  gotToSystem():void {
    this.utilsService.presentToast('Bem vindo de volta!', false);
    if (this.authService.previousUrl && this.authService.previousUrl.indexOf('/login') < 0){
      const url = this.authService.previousUrl.replace(environment.urlProject, "").split("?");
      const baseRoute = url[0] ?? '/';
      const queryParam = url[1]?.split('&') ?? '';
      if (queryParam.length == 0) {
        this.router.navigate([baseRoute]);
      } else {
        let params = {};
        for (let i = 0; i < queryParam.length; i++) {
          var split = queryParam[i].split('=');
          params[split[0].trim()] = split[1].trim();
        }
        this.router.navigate([baseRoute], { queryParams : params });
      }
    } else {
      this.router.navigate(['/']);
    }
    this.authService.previousUrl = null;
  }

}
