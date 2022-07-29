import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteServicosComponent } from './componente-servicos.component';

describe('ComponenteServicosComponent', () => {
  let component: ComponenteServicosComponent;
  let fixture: ComponentFixture<ComponenteServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
