import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSharkyComponent } from './project-sharky.component';

describe('ProjectSharkyComponent', () => {
  let component: ProjectSharkyComponent;
  let fixture: ComponentFixture<ProjectSharkyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSharkyComponent]
    });
    fixture = TestBed.createComponent(ProjectSharkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
