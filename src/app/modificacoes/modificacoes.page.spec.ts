import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificacoesPage } from './modificacoes.page';

describe('ModificacoesPage', () => {
  let component: ModificacoesPage;
  let fixture: ComponentFixture<ModificacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
