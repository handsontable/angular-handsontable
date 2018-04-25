import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotTableModule } from '@handsontable-pro/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ HotTableModule.forRoot() ],
      declarations: [ AppComponent ],
    }).compileComponents();
  }));

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });

  it('should create the app', (() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      fixture.detectChanges();

      expect(app).toBeTruthy();
    });
  }));
});
