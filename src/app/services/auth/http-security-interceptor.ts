import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

import { Observable, from } from "rxjs";
import { mergeMap } from "rxjs/operators";

import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";

export class NotAuthenticatedError {}

@Injectable()
export class HttpSecurityInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.auth.isLoginPage() && !this.auth.isRegisterPage() && !req.url.includes("/oauth/token") && this.auth.isAccessTokenInvalido()) {
      console.log("Navegação com access token inválido. Obtendo novo token...");
      return from(this.auth.obterNovoAccessToken()).pipe(
        mergeMap(() => {
          if (this.auth.isAccessTokenInvalido()) {
            this.auth.redirectLogin();
          }
          return next.handle(req);
        })
      );
    } else {
      return next.handle(req);
    }
  }
}
