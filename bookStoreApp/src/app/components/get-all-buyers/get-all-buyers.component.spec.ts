import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBuyersComponent } from './get-all-buyers.component';

describe('GetAllBuyersComponent', () => {
  let component: GetAllBuyersComponent;
  let fixture: ComponentFixture<GetAllBuyersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllBuyersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
