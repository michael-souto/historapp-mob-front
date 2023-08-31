import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CalendarDate } from 'src/app/models/calendar-date.model';
import { HistoricalCalendar } from 'src/app/models/historical-calendar.model';
import { HistoricalMonth } from 'src/app/models/historical-month.model';
import { CalendarCrudService } from 'src/app/services/calendar/calendar-crud.service';

@Component({
  selector: 'app-calendar-date',
  templateUrl: './calendar-date.component.html',
  styleUrls: ['./calendar-date.component.scss'],
})
export class CalendarDateComponent implements OnInit {
  constructor() {}

  @Input() titleModal?: string;
  @Output() onSaveDate = new EventEmitter<any>();
  @Output() onDeleteDate = new EventEmitter<any>();

  @Input() calendarDate: CalendarDate = new CalendarDate();

  calendarSelected?: HistoricalCalendar;
  monthSelected?: HistoricalMonth;
  numberDays?: number;

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {}

  editDate(calendarDate: CalendarDate, calendar?: HistoricalCalendar) {
    this.calendarSelected = calendar;
    this.titleModal = `Calendário - ${calendar?.name}`;
    if (calendarDate?.id != null) {
      this.calendarDate = calendarDate;
      if (calendarDate.idHistoricMonth)
      {
        this.monthSelected = calendar?.months?.find(
          (x) => x.id == calendarDate.idHistoricMonth
        );
        this.handleChange({target: {value: this.monthSelected }})
      }
    } else {
      this.calendarDate = new CalendarDate();
    }

    if (this.calendarDate.historicDay == 0){
      this.calendarDate.historicDay = null;
    }
    if (this.calendarDate.historicMonth == 0){
      this.calendarDate.historicMonth = null;
    }
    if (this.calendarDate.historicYear == 0){
      this.calendarDate.historicYear = null;
    }
    if (!this.calendarDate.negativeYear) {
      this.calendarDate.negativeYear = false;
    }
    this.setOpen(true);
  }

  cancelCalendarDate() {
    this.setOpen(false);
    this.calendarDate = new CalendarDate();
  }

  saveCalendarDate() {
    this.calendarDate.idHistoricMonth = this.monthSelected?.id;
    this.calendarDate.nameHistoricMonth = this.monthSelected?.name;
    this.calendarDate.idCalendar = this.calendarSelected?.id;
    this.calendarDate.nameCalendar = this.calendarSelected?.name;
    if (this.onSaveDate.observers.length > 0) {
      this.onSaveDate.emit(this.calendarDate);
    }
    this.setOpen(false);
  }

  deleteCalendarDate() {
    if (this.onDeleteDate.observers.length > 0) {
      this.onDeleteDate.emit(this.calendarDate);
    }
  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(ev: any) {
    this.monthSelected = ev.target.value;
    this.numberDays = this.monthSelected?.numberDays;
  }

  isValidForSave() {
    return (this.calendarDate.historicDay == null || this.calendarDate.historicDay != 0)
    && (this.calendarDate.historicMonth == null || this.calendarDate.historicMonth != 0)
    && (this.calendarDate.historicYear == null || this.calendarDate.historicYear != 0)
    && (this.calendarDate.historicDay || this.calendarDate.historicMonth || this.calendarDate.historicYear);

  }
}
