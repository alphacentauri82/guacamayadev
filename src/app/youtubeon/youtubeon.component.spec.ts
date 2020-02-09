import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeonComponent } from './youtubeon.component';

describe('YoutubeonComponent', () => {
  let component: YoutubeonComponent;
  let fixture: ComponentFixture<YoutubeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
