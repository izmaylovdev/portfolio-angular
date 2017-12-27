import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksPageComponentComponent } from './works-page-component.component';

describe('WorksPageComponentComponent', () => {
  let component: WorksPageComponentComponent;
  let fixture: ComponentFixture<WorksPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
