import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDateComponent } from './calendar-date/calendar-date.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SearchEntityComponent } from './search-entity/search-entity.component';
import { TagEditorComponent } from './tag-editor/tag-editor.component';
import { QuillModule } from 'ngx-quill';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CalendarDateComponent,
    SearchEntityComponent,
    TagEditorComponent,
    MessageComponent,
  ],
  exports: [
    HeaderComponent,
    CalendarDateComponent,
    SearchEntityComponent,
    TagEditorComponent,
    QuillModule,
    FontAwesomeModule,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    QuillModule.forRoot(),
    FontAwesomeModule
  ],
})
export class ComponentsModule {}
