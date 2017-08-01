import { DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestModule } from './test.module';
import { HotRegisterer } from '../src/hot-registerer.service';

describe(`hot-column`, () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [ TestModule ]
    });
  });

  afterEach(() => {
    fixture.destroy();
  });

  it(`should be possible to render static hot-column element inside hot-table`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot">
            <hot-column></hot-column>
            <hot-column></hot-column>
            <hot-column></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      fixture.detectChanges();

      expect(app.hotRegisterer.getInstance('hot').countCols()).toBe(3);
    });
  }));

  it(`should be possible to change dynamically the number of columns`, async(() => {
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
          <hot-table hotId="hot">
            <hot-column *ngFor="let column of prop['columns']; let i = index"></hot-column>
          </hot-table>
        `
      }
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;
      
      app['prop']['columns'] = [ {}, {}, {} ];

      fixture.detectChanges();

      expect(app.hot('hot').countCols()).toBe(3);

      app['prop']['columns'].push({});

      fixture.detectChanges();

      expect(app.hot('hot').countCols()).toBe(4);
    });
  }));
});