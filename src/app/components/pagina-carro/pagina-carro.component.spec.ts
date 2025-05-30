import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCarroComponent } from './pagina-carro.component';

describe('PaginaCarroComponent', () => {
  let component: PaginaCarroComponent;
  let fixture: ComponentFixture<PaginaCarroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaCarroComponent]
    });
    fixture = TestBed.createComponent(PaginaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
