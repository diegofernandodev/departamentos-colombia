import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioListaComponent } from './municipio-lista.component';

describe('MunicipioListaComponent', () => {
  let component: MunicipioListaComponent;
  let fixture: ComponentFixture<MunicipioListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipioListaComponent]
    });
    fixture = TestBed.createComponent(MunicipioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
