import { DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestModule } from './test.module';
import { HotRegisterer } from '../src/hot-registerer.service';

import Handsontable from 'handsontable';

describe('HotTable', () => {
  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  let testContainerDe: DebugElement;
  let testContainerEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ TestComponent ],
        imports: [ TestModule ]
    });
  });

  afterEach(()=> {
    fixture.destroy();
  });

  it('should create the app', async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      fixture.detectChanges();
      expect(app).toBeTruthy();
    });
  }));

  describe(`hot-table`, () => {
    it(`should render 'HotTable'`, async(() => {
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const element = fixture.nativeElement;

        fixture.detectChanges();

        expect(element.querySelectorAll('hot-table').length).toBe(1);
      });
    }));

    it(`should render 'HotTable' with the headers defined as bindings`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: '<hot-table [rowHeaders]="headers" [colHeaders]="headers"></hot-table>'
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const element = fixture.nativeElement;

        fixture.detectChanges();

        expect(element.querySelector('.ht_clone_top_left_corner')).not.toBeNull();
      });
    }));

    it(`should render row with height defined in settings object`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: '<hot-table [settings]="settingsObj"></hot-table>'
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const element = fixture.nativeElement;

        fixture.detectChanges();

        // first row is higher than rest because of additional top border
        expect(element.querySelector('.ht_master tbody tr:nth-child(2)').offsetHeight).toBe(50);
      });
    }));

    it(`should be possible to toggle headers visibility`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: '<hot-table [rowHeaders]="headers" [colHeaders]="headers"></hot-table>'
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;
        const element = fixture.nativeElement;

        fixture.detectChanges();

        expect(element.querySelector('.ht_clone_top_left_corner')).not.toBeNull();

        app.toggleHeaders();
        fixture.detectChanges();

        expect(element.querySelector('.ht_clone_top_left_corner')).not.toBeNull();
      });
    }));
  });

  describe(`hot-column`, () => {
    it(`should render only three columns of the data`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `
            <hot-table>
              <hot-column></hot-column>
              <hot-column></hot-column>
              <hot-column></hot-column>
            </hot-table>
          `
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const element = fixture.nativeElement;

        fixture.detectChanges();

        expect(element.querySelectorAll('.ht_master col').length).toBe(3);
      });
    }));
    it(`should dynamically change number of columns`, async(() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `
            <hot-table>
              <hot-column *ngFor="let column of columnsArr; let i = index"></hot-column>
            </hot-table>
          `
        }
      });
      TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const element = fixture.nativeElement;
        const app = fixture.componentInstance;

        fixture.detectChanges();
        expect(element.querySelectorAll('.ht_master col').length).toBe(3);

        app.addColumn();
        fixture.detectChanges();
        expect(element.querySelectorAll('.ht_master col').length).toBe(4);
      });
    }));
  });
});