import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRenderComponentComponent } from './button-render-component.component';

describe('ButtonRenderComponentComponent', () => {
  let component: ButtonRenderComponentComponent;
  let fixture: ComponentFixture<ButtonRenderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRenderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
