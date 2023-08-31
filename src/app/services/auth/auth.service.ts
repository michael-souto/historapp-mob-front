import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { JwtHelperService } from "@auth0/angular-jwt";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  oauthTokenUrl: string;
  jwtPayload: any;

  constructor(
    private httpLogin: HttpClient,
    private httpRefreshToken: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    this.oauthTokenUrl = `${environment.apiUrlAdm}/oauth/token`;
    //this.oauthTokenUrl = `http://localhost:32000/oauth/token`;
    //this.oauthTokenUrl = `http://localhost:5555/auth/oauth/token`;

    this.carregarToken();
  }

  refresh(): void {
    window.location.reload();
  }

  login(usuario: string, senha: string, actionSussess: ()=> void): Promise<void> {
    console.log("Limpando token de acesso para login!");
    this.limparAccessToken();

    const headersLogin = new HttpHeaders()
      .append("Content-Type", "application/x-www-form-urlencoded")
      .append("Authorization", `Basic ${environment.authorizationApi}`);

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    console.log("Iniciando request na URL ", this.oauthTokenUrl);
    return this.httpLogin
      .post(this.oauthTokenUrl, body, {
        headers: headersLogin,
        withCredentials: false,
      })
      .toPromise()
      .then((response: any) => {
        this.armazenarToken(response["access_token"]);
        actionSussess();
      })
      .catch((response) => {
        if (response.status === 400) {
          if (response.error === "invalid_grant") {
            return Promise.reject("Usuário ou senha inválida!");
          }
        }

        return Promise.reject(response);
      });
  }

  obterNovoAccessToken(): Promise<any> {
    const headersRefreshToken = new HttpHeaders()
      .append("Content-Type", "application/x-www-form-urlencoded")
      .append("Authorization", `Basic ${environment.authorizationApi}`);

    const body = "grant_type=refresh_token";

    return this.httpRefreshToken
      .post(this.oauthTokenUrl, body, {
        headers: headersRefreshToken,
        withCredentials: true,
      })
      .toPromise()
      .then((response:any) => {
        this.armazenarToken(response["access_token"]);
        console.log("Novo access token criado!");
        return Promise.resolve(response);
      })
      .catch((response:any) => {
        this.limparAccessToken();
        this.redirectLogin();
        return Promise.resolve(response);
      });
  }

  limparAccessToken() {
    localStorage.removeItem(environment.tokenGetter);
    this.jwtPayload = null;
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem(environment.tokenGetter);

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  estaLogado() {
    const token = localStorage.getItem(environment.tokenGetter);
    return !!token;
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles: string[]) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

    return false;
  }

  public armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem(environment.tokenGetter, token);
  }

  private carregarToken() {
    const token = localStorage.getItem(environment.tokenGetter);

    if (token) {
      this.armazenarToken(token);
    }
  }

  public getLoginPage():string {
    return environment.urlProject[environment.urlProject.length - 1] == "/"
    ? environment.urlProject.substring(0, environment.urlProject.length - 1)
    : environment.urlProject;
  }

  public isLoginPage(): boolean {
    let url = this.getLoginPage();
    return window.location.href == url + "/login";
  }

  public isRegisterPage(): boolean {
    let url = this.getLoginPage();
    return window.location.href == url + "/register";
  }

  public getIdDetrasoft(): number {
    return this.jwtPayload.id_detrasoft;
  }

  public getIdUsuario(): number {
    return this.jwtPayload.id_user;
  }

  public redirectLogin() {
    console.log("Direcionando para login...");
    if (!this.isLoginPage()) {
      this.previousUrl = window.location.href;
    }
    this.router.navigate(["/login"]);
  }

  get previousUrl(): string {
    return localStorage.getItem("previous-url") ?? '';
  }
  set previousUrl(url: string) {
    if (url == null) {
      localStorage.removeItem("previous-url");
    } else {
      localStorage.setItem("previous-url", url);
    }
  }
}
