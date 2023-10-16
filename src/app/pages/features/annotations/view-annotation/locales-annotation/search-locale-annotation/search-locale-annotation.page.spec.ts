import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchLocaleAnnotationPage } from './search-locale-annotation.page';

describe('SearchLocaleAnnotationPage', () => {
  let component: SearchLocaleAnnotationPage;
  let fixture: ComponentFixture<SearchLocaleAnnotationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLocaleAnnotationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchLocaleAnnotationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
