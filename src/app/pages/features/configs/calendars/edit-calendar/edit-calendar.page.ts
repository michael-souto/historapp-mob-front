import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoricalCalendar } from 'src/app/models/historical-calendar.model';
import { CalendarsService } from '../calendars.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-calendar',
  templateUrl: './edit-calendar.page.html',
  styleUrls: ['./edit-calendar.page.scss'],
})
export class EditCalendarPage implements OnInit {

  constructor(
    public calendarsService: CalendarsService,
    private route: Router,
    protected activateRoute: ActivatedRoute,
    private toastController: ToastController
  ) {}

  ngOnInit() {}


  title: string = '';
  ionViewWillEnter() {
    this.calendarsService.clearCalendar();
    const id: number = this.activateRoute.snapshot.params['id'];
    if (id != null) {
      this.title = `Editar calendaro - #${id}`;
      this.calendarsService.openCalendar(id);
    } else {
      this.title = `Novo calendaro`;
    }
  }

  saveCalendar() {
    this.calendarsService.saveCalendar().subscribe(
      (response) => {
        this.calendarsService.clearCalendar();
        this.calendarsService.tags = [];
        this.route.navigate(['configs/calendars/view', response.id]);
        this.presentToast('Calendaro salvo com sucesso!', false);
      },
      (response: HttpErrorResponse) => {
        let messagesn = '';
        response.error['errors'].forEach((e: any) => {
          messagesn += e.message + '</br>';
        });
        this.presentToast(messagesn, true);
      }
    );
  }

  get calendar(): HistoricalCalendar {
    return this.calendarsService.calendar;
  }

  set calendar(calendar: HistoricalCalendar) {
    this.calendarsService.calendar = calendar;
  }

  async presentToast(message: string, isError: boolean) {
    const toast = await this.toastController.create({
      message,
      duration: 10000,
      color: isError ? 'danger' : 'success',
      icon: isError ? 'close-circle' : 'checkmark-circle',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });

    await toast.present();
  }

  back() {
    if (this.calendar.id != null) {
      this.route.navigate(['configs/calendars/view', this.calendar.id]);
    } else {
      this.route.navigate(['configs/calendars']);
    }
  }

}
