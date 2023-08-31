import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDateComponent } from './calendar-date/calendar-date.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SearchEntityComponent } from './search-entity/search-entity.component';
import { TagEditorComponent } from './tag-editor/tag-editor.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [HeaderComponent, CalendarDateComponent,SearchEntityComponent, TagEditorComponent],
  exports: [HeaderComponent, CalendarDateComponent, SearchEntityComponent, TagEditorComponent, QuillModule],
  imports: [CommonModule, FormsModule, IonicModule.forRoot(),     QuillModule.forRoot(),],
})
export class ComponentsModule {}
