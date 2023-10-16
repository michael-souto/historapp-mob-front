import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthGuard  {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('passe')
    if (next.routeConfig?.path == 'login'){
      return false;
    } else {
      if (this.auth.isAccessTokenInvalido() && this.auth.estaLogado()){
        console.log('Navegação com access token inválido. Obtendo novo token...');

        return this.auth.obterNovoAccessToken()
          .then(() => {
            if (this.auth.isAccessTokenInvalido()) {
              this.auth.redirectLogin();
              return false;
            }
            return true;
          });
      } else if (next.data['roles'] && !this.auth.temQualquerPermissao(next.data['roles'])) {
        this.router.navigate(['/accessdenied']);
        return false;
      }
    }

    if (!this.auth.estaLogado()) {
      this.auth.redirectLogin();
    }

    return true;
  }

}
