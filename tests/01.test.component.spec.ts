import { DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestModule } from './test.module';

import Handsontable from 'handsontable';

describe('test-component', () => {
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

  it('should create the app', async(() => {
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(TestComponent);
      const app = fixture.componentInstance;

      fixture.detectChanges();
      expect(app).toBeTruthy();
    });
  }));
});