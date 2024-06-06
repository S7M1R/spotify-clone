import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavCardComponent } from './top-nav-card.component';

describe('TopNavCardComponent', () => {
  let component: TopNavCardComponent;
  let fixture: ComponentFixture<TopNavCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
