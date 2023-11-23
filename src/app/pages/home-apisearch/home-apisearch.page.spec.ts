import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeApisearchPage } from './home-apisearch.page';

describe('HomeApisearchPage', () => {
  let component: HomeApisearchPage;
  let fixture: ComponentFixture<HomeApisearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeApisearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
