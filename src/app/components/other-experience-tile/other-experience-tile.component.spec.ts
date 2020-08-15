import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherExperienceTileComponent } from './other-experience-tile.component';

describe('OtherExperienceTileComponent', () => {
  let component: OtherExperienceTileComponent;
  let fixture: ComponentFixture<OtherExperienceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherExperienceTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherExperienceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
