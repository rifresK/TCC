import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoModificacoesPage } from './info-modificacoes.page';

describe('InfoModificacoesPage', () => {
  let component: InfoModificacoesPage;
  let fixture: ComponentFixture<InfoModificacoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoModificacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
