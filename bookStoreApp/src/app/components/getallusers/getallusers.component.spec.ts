import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallusersComponent } from './getallusers.component';

describe('GetallusersComponent', () => {
  let component: GetallusersComponent;
  let fixture: ComponentFixture<GetallusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
