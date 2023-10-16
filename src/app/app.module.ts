import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth/auth.guard';
import { HttpSecurityInterceptor } from './services/auth/http-security-interceptor';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export function tokenGetter() {
  return localStorage.getItem(environment.tokenGetter);
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes,
      },
    }),],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy,
  },
  AuthGuard,
  HttpSecurityInterceptor,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpSecurityInterceptor,
    multi: true,
  }
],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
