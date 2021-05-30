import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAndNavComponent } from './top-and-nav.component';

describe('TopAndNavComponent', () => {
  let component: TopAndNavComponent;
  let fixture: ComponentFixture<TopAndNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAndNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAndNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
