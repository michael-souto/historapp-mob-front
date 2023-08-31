import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterService } from './../../services/auth/register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    private registerService: RegisterService,
    private authService: AuthService,
    public utilsService: UtilsService,
    private router: Router
  ) {}

  ngOnInit() {}

  register(
    firstName?: any,
    lastName?: any,
    email?: any,
    password?: any,
    confirm?: any
  ) {
    this.registerService
      .register({ firstName, lastName, email, password })
      .subscribe(
        (response) => {
          this.authService.login(email, password, ()=> this.router.navigate(['events/list'])).then(() => {
            this.utilsService.presentToast('Seja bem vindo!', false);
            //window.location.href = environment.urlProject;

          });
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
}
