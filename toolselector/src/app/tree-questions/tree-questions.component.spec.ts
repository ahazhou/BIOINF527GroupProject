import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeQuestionsComponent } from './tree-questions.component';

describe('TreeQuestionsComponent', () => {
  let component: TreeQuestionsComponent;
  let fixture: ComponentFixture<TreeQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
