import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnItemComponent } from './pkmn-item.component';

describe('PkmnItemComponent', () => {
  let component: PkmnItemComponent;
  let fixture: ComponentFixture<PkmnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmnItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
