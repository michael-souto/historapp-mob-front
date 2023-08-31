import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { LogoutService } from './services/auth/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Eventos Históricos', url: '/events/list', icon: 'calendar-number' },
    { title: 'Personagens', url: '/characters/list', icon: 'person-circle' },
    { title: 'Lugares', url: '/locales/list', icon: 'location' },
    { title: 'Anotações', url: '/annotations/list', icon: 'create' },
    //{ title: 'TAGs (Em construção)', url: '/tags', icon: 'bookmarks' },
    { title: 'Configurações', url: '/configs', icon: 'settings' }
  ];
  constructor(private authService: AuthService,
    private logoutService: LogoutService) {}

  userName: string = `${this.authService.jwtPayload?.first_name} ${this.authService.jwtPayload?.last_name}` ?? 'Historapp';
  userEmail: string = this.authService.jwtPayload?.user_name ?? 'Person@historapp.com';

  isLogged(): boolean {
    return (this.authService.jwtPayload?.id_user != null)
  }
  logout() {
    this.logoutService.logout();
  }

  refreshToken() {
    this.authService.obterNovoAccessToken().then((response) => {
      console.log(response)
    })
    .catch((erro) => {
      console.log(erro)
    });
  }
}
