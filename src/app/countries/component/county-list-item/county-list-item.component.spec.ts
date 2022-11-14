import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyListItemComponent } from './county-list-item.component';

describe('CountyListItemComponent', () => {
  let component: CountyListItemComponent;
  let fixture: ComponentFixture<CountyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountyListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
