import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicoex2Component } from './servicoex2.component';

describe('Servicoex2Component', () => {
  let component: Servicoex2Component;
  let fixture: ComponentFixture<Servicoex2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicoex2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicoex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
