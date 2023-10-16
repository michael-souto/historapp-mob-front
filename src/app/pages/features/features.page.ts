import { Component, OnInit } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LogoutService } from 'src/app/services/auth/logout.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.page.html',
  styleUrls: ['./features.page.scss'],
})
export class FeaturesPage {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Anotações', url: '/annotations', icon: 'sticky-note' },
    { title: 'Personagens', url: '/characters', iconClass: 'fas', icon: 'user-friends' },
    { title: 'Eventos Históricos', url: '/events', icon: 'calendar-day' },
    { title: 'Lugares', url: '/locales/list', icon: 'map-marked-alt' },
    //{ title: 'TAGs (Em construção)', url: '/tags', icon: 'bookmarks' },
    { title: 'Configurações', url: '/configs', icon: 'cogs' }
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

  getIcon(t: any): IconName  {
    const fg: IconName = t;
    return fg;
  }

}
