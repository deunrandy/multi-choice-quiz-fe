import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIcon } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, MatIcon],
      imports: [RouterTestingModule, MatIconTestingModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('header section', () => {
    it('should show heading 1', () => {
      let element = fixture.debugElement.query(By.css('#heading-1'));
      expect(element).toBeTruthy();
    });

    it('should show subheading', () => {
      let element = fixture.debugElement.query(By.css('#subheading-1'));
      expect(element).toBeTruthy();
    });
  });

  describe('bullet points', () => {
    it('should have 3 bullets', () => {
      let elements = fixture.debugElement.queryAll(By.css('.bullet'));
      expect(elements.length).toEqual(3);
    });
    it('should show 3 check icon', () => {
      let elements = fixture.debugElement.queryAll(By.css('.check'));
      expect(elements.length).toEqual(3);
    });
  });

  it('should show take exam button', () => {
    let element = fixture.debugElement.query(By.css('#take-quiz-btn'));
    expect(element).toBeTruthy();
  });
  it('should show image', () => {
    let element = fixture.debugElement.query(By.css('#header-img'));
    expect(element).toBeTruthy();
  });

  describe('course overview', () => {
    it('should have 5 courses', () => {
      let element = fixture.debugElement.queryAll(By.css('.course'));
      expect(element.length).toEqual(5);
    });
    it('should have 5 course code', () => {
      let element = fixture.debugElement.queryAll(By.css('.course-code'));
      expect(element.length).toEqual(5);

    })
    it('should have 5 course desc', () => {
      let element = fixture.debugElement.queryAll(By.css('.course-desc'));
      expect(element.length).toEqual(5);

    })
  });
});
