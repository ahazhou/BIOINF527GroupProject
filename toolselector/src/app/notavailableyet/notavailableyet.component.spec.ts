import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotavailableyetComponent } from './notavailableyet.component';

describe('NotavailableyetComponent', () => {
  let component: NotavailableyetComponent;
  let fixture: ComponentFixture<NotavailableyetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotavailableyetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotavailableyetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
