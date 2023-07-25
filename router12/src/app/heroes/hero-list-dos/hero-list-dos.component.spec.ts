import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListDosComponent } from './hero-list-dos.component';

describe('HeroListDosComponent', () => {
  let component: HeroListDosComponent;
  let fixture: ComponentFixture<HeroListDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
