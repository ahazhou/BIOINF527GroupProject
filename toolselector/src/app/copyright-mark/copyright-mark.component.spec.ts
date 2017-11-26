import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightMarkComponent } from './copyright-mark.component';

describe('CopyrightMarkComponent', () => {
  let component: CopyrightMarkComponent;
  let fixture: ComponentFixture<CopyrightMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyrightMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
