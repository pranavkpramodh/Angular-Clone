import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHeadComponent } from './community-head.component';

describe('CommunityHeadComponent', () => {
  let component: CommunityHeadComponent;
  let fixture: ComponentFixture<CommunityHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
