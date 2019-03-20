import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTableModule, HotTableRegisterer } from '@handsontable/angular';
import Handsontable from 'handsontable';

@Component({
  selector: 'hot-test-component',
  template: ''
})
export class TestComponent {
  public prop: object = {};
  id = 'hot';

  constructor (private _registerer: HotTableRegisterer) { }

  getHotInstance(instance: string): Handsontable {
    return this._registerer.getInstance(instance);
  }
}

describe('HotTableComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent ],
      imports: [ HotTableModule.forRoot() ],
    });
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  describe('hooks', () => {
    it('should support all of the available hooks in Handsontable', async() => {
      const hooks = Handsontable.hooks.getRegistered();
      const unsupportedHooks = ['afterContextMenuExecute', 'afterDropdownMenuExecute', 'afterIsMultipleSelection'];
      const template = `<hot-table [hotId]="id" ${hooks.map(hook => unsupportedHooks.includes(hook) ?
          '' :
          `[${hook}]="prop.${hook}"`).join(' ')}></hot-table>`;

      TestBed.overrideComponent(TestComponent, {
        set: {
          template: template
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const elem = fixture.nativeElement;

        fixture.detectChanges();

        expect(elem.querySelectorAll('.handsontable').length).toBeGreaterThan(0);
      });
  });
    it(`should use Handsontable as a hook's context, if is defined as a component's method`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [afterInit]="prop.afterInit"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['afterInit'] = function() {
          return this;
        };

        fixture.detectChanges();
        const instance: Handsontable = app.getHotInstance(app.id).runHooks('afterInit');

        expect(instance.getPlugin).toBeDefined();
        expect(instance.getPlugin('copyPaste')).toBeTruthy();
      });
    });

    it(`should allow overwrite Handsontable in a hook's context by bind`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [afterInit]="prop.afterInit.bind(this)"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['specKey'] = 'testKey';
        app.prop['afterInit'] = function() {
          return this;
        };

        fixture.detectChanges();
        const instance: TestComponent = app.getHotInstance(app.id).runHooks('afterInit');

        expect(instance.prop['specKey']).toBe('testKey');
      });
    });

    it(`should use Handsontable as a hook's context, if is defined as a function in settings object`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterInit() {
            return this;
          }
        };

        fixture.detectChanges();
        const instance: Handsontable = app.getHotInstance(app.id).runHooks('afterInit');

        expect(instance.getPlugin).toBeDefined();
        expect(instance.getPlugin('copyPaste')).toBeTruthy();
      });
    });

    it(`should use TestComponent as a hook's context, if is defined as a arrow-function in settings object`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['specKey'] = 'testKey';
        app.prop['settings'] = {
          afterInit: (function() {
            return () => {
              return this;
            };
          }).call(app),
        };

        fixture.detectChanges();
        const instance: TestComponent = app.getHotInstance(app.id).runHooks('afterInit');

        expect(instance.prop['specKey']).toBe('testKey');
      });
    });

    it(`should run afterAddChild hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterAddChild: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterAddChild')).toBe('test');
      });
    });

    it(`should run afterBeginEditing hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterBeginEditing: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterBeginEditing')).toBe('test');
      });
    });

    it(`should run afterCellMetaReset hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCellMetaReset: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCellMetaReset')).toBe('test');
      });
    });

    it(`should run afterChange hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterChange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterChange')).toBe('test');
      });
    });

    it(`should run afterChangesObserved hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterChangesObserved: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterChangesObserved')).toBe('test');
      });
    });

    it(`should run afterColumnMove hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterColumnMove')).toBe('test');
      });
    });

    it(`should run afterColumnResize hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterColumnResize')).toBe('test');
      });
    });

    it(`should run afterColumnSort hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterColumnSort: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterColumnSort')).toBe('test');
      });
    });

    it(`should run afterContextMenuDefaultOptions hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          contextMenu: true,
          afterContextMenuDefaultOptions: function(items) {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterContextMenuDefaultOptions', {items: []})).toBe('test');
      });
    });

    it(`should run afterContextMenuHide hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterContextMenuHide: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterContextMenuHide')).toBe('test');
      });
    });

    it(`should run afterContextMenuShow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterContextMenuShow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterContextMenuShow')).toBe('test');
      });
    });

    it(`should run afterCopy hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCopy: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCopy')).toBe('test');
      });
    });

    it(`should run afterCopyLimit hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCopyLimit: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCopyLimit')).toBe('test');
      });
    });

    it(`should run afterCreateCol hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCreateCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCreateCol')).toBe('test');
      });
    });

    it(`should run afterCreateRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCreateRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCreateRow')).toBe('test');
      });
    });

    it(`should run afterCut hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterCut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterCut')).toBe('test');
      });
    });

    it(`should run afterDeselect hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDeselect: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDeselect')).toBe('test');
      });
    });

    it(`should run afterDestroy hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDestroy: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDestroy')).toBe('test');
      });
    });

    it(`should run afterDetachChild hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDetachChild: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDetachChild')).toBe('test');
      });
    });

    it(`should run afterDocumentKeyDown hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDocumentKeyDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDocumentKeyDown')).toBe('test');
      });
    });

    it(`should run afterDropdownMenuDefaultOptions hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDropdownMenuDefaultOptions: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDropdownMenuDefaultOptions')).toBe('test');
      });
    });

    it(`should run afterDropdownMenuHide hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDropdownMenuHide: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDropdownMenuHide')).toBe('test');
      });
    });

    it(`should run afterDropdownMenuShow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterDropdownMenuShow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterDropdownMenuShow')).toBe('test');
      });
    });

    it(`should run afterFilter hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterFilter: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterFilter')).toBe('test');
      });
    });

    it(`should run afterGetCellMeta hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterGetCellMeta')).toBe('test');
      });
    });

    it(`should run afterGetColHeader hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          colHeaders: true,
          afterGetColHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();

        const elem = fixture.nativeElement;
        const TH = elem.querySelector('th');

        expect(app.getHotInstance(app.id).runHooks('afterGetColHeader', 0, TH)).toBe('test');
      });
    });

    it(`should run afterGetColumnHeaderRenderers hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;
        let afterGetColumnHeaderRenderersCount = 0;

        app.prop['settings'] = {
          afterGetColumnHeaderRenderers: () => {
            afterGetColumnHeaderRenderersCount++;
          }
        };

        fixture.detectChanges();
        expect(afterGetColumnHeaderRenderersCount).toBeGreaterThan(0);
      });
    });

    it(`should run afterGetRowHeader hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetRowHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterGetRowHeader')).toBe('test');
      });
    });

    it(`should run afterGetRowHeaderRenderers hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterGetRowHeaderRenderers: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterGetRowHeaderRenderers')).toBe('test');
      });
    });

    it(`should run afterInit hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterInit: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterInit')).toBe('test');
      });
    });

    it(`should run afterLoadData hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterLoadData: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterLoadData', {})).toBe('test');
      });
    });

    it(`should run afterModifyTransformEnd hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterModifyTransformEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterModifyTransformEnd')).toBe('test');
      });
    });

    it(`should run afterModifyTransformStart hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterModifyTransformStart: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterModifyTransformStart')).toBe('test');
      });
    });

    it(`should run afterMomentumScroll hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterMomentumScroll: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterMomentumScroll')).toBe('test');
      });
    });

    it(`should run afterOnCellCornerDblClick hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellCornerDblClick: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        app.getHotInstance(app.id).selectCell(0, 0);
        expect(app.getHotInstance(app.id).runHooks('afterOnCellCornerDblClick')).toBe('test');
      });
    });

    it(`should run afterOnCellCornerMouseDown hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellCornerMouseDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellCornerMouseDown')).toBe('test');
      });
    });

    it(`should run afterOnCellMouseDown hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellMouseDown')).toBe('test');
      });
    });

    it(`should run afterOnCellMouseOver hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseOver: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellMouseOver')).toBe('test');
      });
    });

    it(`should run afterOnCellMouseOut hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterOnCellMouseOut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterOnCellMouseOut')).toBe('test');
      });
    });

    it(`should run afterPluginsInitialized hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterPluginsInitialized: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterPluginsInitialized')).toBe('test');
      });
    });

    it(`should run afterRedo hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRedo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRedo')).toBe('test');
      });
    });

    it(`should run afterRemoveCol hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRemoveCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRemoveCol')).toBe('test');
      });
    });

    it(`should run afterRemoveRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRemoveRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRemoveRow')).toBe('test');
      });
    });

    it(`should run afterRender hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRender')).toBe('test');
      });
    });

    it(`should run afterRenderer hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRenderer: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRenderer')).toBe('test');
      });
    });

    it(`should run afterRowMove hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRowMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRowMove')).toBe('test');
      });
    });

    it(`should run afterRowResize hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterRowResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterRowResize')).toBe('test');
      });
    });

    it(`should run afterScrollHorizontally hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterScrollHorizontally: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterScrollHorizontally')).toBe('test');
      });
    });

    it(`should run afterScrollVertically hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterScrollVertically: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterScrollVertically')).toBe('test');
      });
    });

    it(`should run afterSelection hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelection: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelection')).toBe('test');
      });
    });

    it(`should run afterSelectionByProp hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionByProp: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelectionByProp')).toBe('test');
      });
    });

    it(`should run afterSelectionEnd hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelectionEnd')).toBe('test');
      });
    });

    it(`should run afterSelectionEndByProp hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSelectionEndByProp: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSelectionEndByProp')).toBe('test');
      });
    });

    it(`should run afterSetCellMeta hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSetCellMeta')).toBe('test');
      });
    });

    it(`should run afterSetDataAtCell hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetDataAtCell: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSetDataAtCell')).toBe('test');
      });
    });

    it(`should run afterSetDataAtRowProp hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterSetDataAtRowProp: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterSetDataAtRowProp')).toBe('test');
      });
    });

    it(`should run afterTrimRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterTrimRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterTrimRow')).toBe('test');
      });
    });

    it(`should run afterUndo hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUndo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterUndo')).toBe('test');
      });
    });

    it(`should run afterUntrimRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUntrimRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterUntrimRow')).toBe('test');
      });
    });

    it(`should run afterUpdateSettings hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterUpdateSettings: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterUpdateSettings', {})).toBe('test');
      });
    });

    it(`should run afterValidate hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterValidate: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterValidate')).toBe('test');
      });
    });

    it(`should run afterViewportColumnCalculatorOverride hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterViewportColumnCalculatorOverride: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterViewportColumnCalculatorOverride')).toBe('test');
      });
    });

    it(`should run afterViewportRowCalculatorOverride hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          afterViewportRowCalculatorOverride: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('afterViewportRowCalculatorOverride')).toBe('test');
      });
    });

    it(`should run beforeAddChild hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAddChild: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeAddChild')).toBe('test');
      });
    });

    it(`should run beforeAutofill hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAutofill: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeAutofill')).toBe('test');
      });
    });

    it(`should run beforeAutofillInsidePopulate hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeAutofillInsidePopulate: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeAutofillInsidePopulate')).toBe('test');
      });
    });

    it(`should run beforeCellAlignment hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCellAlignment: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCellAlignment')).toBe('test');
      });
    });

    it(`should run beforeChange hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeChange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeChange', [[0, 0, '', '']])).toBe('test');
      });
    });

    it(`should run beforeChangeRender hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeChangeRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeChangeRender')).toBe('test');
      });
    });

    it(`should run beforeColumnMove hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeColumnMove')).toBe('test');
      });
    });

    it(`should run beforeColumnResize hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeColumnResize')).toBe('test');
      });
    });

    it(`should run beforeColumnSort hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeColumnSort: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeColumnSort')).toBe('test');
      });
    });

    it(`should run beforeContextMenuSetItems hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeContextMenuSetItems: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeContextMenuSetItems')).toBe('test');
      });
    });

    it(`should run beforeCopy hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCopy: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCopy')).toBe('test');
      });
    });

    it(`should run beforeCreateCol hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCreateCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCreateCol')).toBe('test');
      });
    });

    it(`should run beforeCreateRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCreateRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCreateRow')).toBe('test');
      });
    });

    it(`should run beforeCut hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeCut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeCut')).toBe('test');
      });
    });

    it(`should run beforeDetachChild hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeDetachChild: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeDetachChild')).toBe('test');
      });
    });

    it(`should run beforeDrawBorders hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeDrawBorders: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeDrawBorders')).toBe('test');
      });
    });

    it(`should run beforeDropdownMenuSetItems hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeDropdownMenuSetItems: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeDropdownMenuSetItems')).toBe('test');
      });
    });

    it(`should run beforeFilter hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeFilter: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeFilter')).toBe('test');
      });
    });

    it(`should run beforeGetCellMeta hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeGetCellMeta: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeGetCellMeta')).toBe('test');
      });
    });

    it(`should run beforeInit hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeInit: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeInit')).toBe('test');
      });
    });

    it(`should run beforeInitWalkontable hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeInitWalkontable: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeInitWalkontable')).toBe('test');
      });
    });

    it(`should run beforeKeyDown hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeKeyDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeKeyDown')).toBe('test');
      });
    });

    it(`should run beforeOnCellMouseDown hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseDown: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeOnCellMouseDown')).toBe('test');
      });
    });

    it(`should run beforeOnCellMouseOut hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseOut: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeOnCellMouseOut')).toBe('test');
      });
    });

    it(`should run beforeOnCellMouseOver hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeOnCellMouseOver: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeOnCellMouseOver')).toBe('test');
      });
    });

    it(`should run beforePaste hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforePaste: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforePaste')).toBe('test');
      });
    });

    it(`should run beforeRedo hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRedo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRedo')).toBe('test');
      });
    });

    it(`should run beforeRemoveCol hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRemoveCol')).toBe('test');
      });
    });

    it(`should run beforeRemoveRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRemoveRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRemoveRow')).toBe('test');
      });
    });

    it(`should run beforeRender hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRender')).toBe('test');
      });
    });

    it(`should run beforeRenderer hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRenderer: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRenderer')).toBe('test');
      });
    });

    it(`should run beforeRowMove hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRowMove: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRowMove')).toBe('test');
      });
    });

    it(`should run beforeRowResize hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeRowResize: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeRowResize')).toBe('test');
      });
    });

    it(`should run beforeSetRangeEnd hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeSetRangeEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeSetRangeEnd')).toBe('test');
      });
    });

    it(`should run beforeSetRangeStart hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeSetRangeStart: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeSetRangeStart')).toBe('test');
      });
    });

    it(`should run beforeStretchingColumnWidth hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeStretchingColumnWidth: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeStretchingColumnWidth')).toBe('test');
      });
    });

    it(`should run beforeTouchScroll hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeTouchScroll: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeTouchScroll')).toBe('test');
      });
    });

    it(`should run beforeUndo hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeUndo: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeUndo')).toBe('test');
      });
    });

    it(`should run beforeValidate hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeValidate: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeValidate')).toBe('test');
      });
    });

    it(`should run beforeValueRender hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          beforeValueRender: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('beforeValueRender')).toBe('test');
      });
    });

    it(`should run construct hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          construct: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('construct')).toBe('test');
      });
    });

    it(`should run hiddenColumn hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          hiddenColumn: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('hiddenColumn')).toBe('test');
      });
    });

    it(`should run hiddenRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          hiddenRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('hiddenRow')).toBe('test');
      });
    });

    it(`should run init hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          init: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('init')).toBe('test');
      });
    });

    it(`should run modifyAutofillRange hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyAutofillRange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyAutofillRange')).toBe('test');
      });
    });

    it(`should run modifyCol hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyCol')).toBe('test');
      });
    });

    it(`should run modifyColHeader hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyColHeader')).toBe('test');
      });
    });

    it(`should run modifyColumnHeaderHeight hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColumnHeaderHeight: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyColumnHeaderHeight')).toBe('test');
      });
    });

    it(`should run modifyColWidth hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyColWidth: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyColWidth')).toBe('test');
      });
    });

    it(`should run modifyCopyableRange hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyCopyableRange: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyCopyableRange')).toBe('test');
      });
    });

    it(`should run modifyData hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyData: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyData')).toBe('test');
      });
    });

    it(`should run modifyRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRow')).toBe('test');
      });
    });

    it(`should run modifyRowHeader hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeader: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowHeader')).toBe('test');
      });
    });

    it(`should run modifyRowHeaderWidth hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeaderWidth: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowHeaderWidth')).toBe('test');
      });
    });

    it(`should run modifyRowHeight hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowHeight: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowHeight')).toBe('test');
      });
    });

    it(`should run modifyRowData hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyRowData: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyRowData')).toBe('test');
      });
    });

    it(`should run modifyTransformEnd hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyTransformEnd: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyTransformEnd')).toBe('test');
      });
    });

    it(`should run modifyTransformStart hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          modifyTransformStart: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('modifyTransformStart')).toBe('test');
      });
    });

    it(`should run persistentStateLoad hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateLoad: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('persistentStateLoad')).toBe('test');
      });
    });

    it(`should run persistentStateReset hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateReset: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('persistentStateReset')).toBe('test');
      });
    });

    it(`should run persistentStateSave hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          persistentStateSave: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('persistentStateSave')).toBe('test');
      });
    });

    it(`should run skipLengthCache hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          skipLengthCache: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('skipLengthCache')).toBe('test');
      });
    });

    it(`should run unmodifyCol hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          unmodifyCol: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('unmodifyCol')).toBe('test');
      });
    });

    it(`should run unmodifyRow hook defined in settings`, async() => {
      TestBed.overrideComponent(TestComponent, {
        set: {
          template: `<hot-table [hotId]="id" [settings]="prop.settings"></hot-table>`
        }
      });
      await TestBed.compileComponents().then(() => {
        fixture = TestBed.createComponent(TestComponent);
        const app = fixture.componentInstance;

        app.prop['settings'] = {
          unmodifyRow: () => {
            return 'test';
          }
        };

        fixture.detectChanges();
        expect(app.getHotInstance(app.id).runHooks('unmodifyRow')).toBe('test');
      });
    });
  });
});
