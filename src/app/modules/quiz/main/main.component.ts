import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from 'src/app/shared/constants/quiz.constant';
import { COURSES, ROUTES } from 'src/app/shared/constants/util.constant';
import { EScore } from 'src/app/shared/enums/quiz.enum';
import { ICourse } from 'src/app/shared/interfaces/quiz.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public readonly ROUTES = ROUTES
  public QUESTIONS = QUESTIONS;
  public readonly COURSES = COURSES;
  public recommendations: ICourse[] = [];
  public currIdx = 0;
  public isValid = true;
  public showResult = false;
  public score = 0;

  ngOnInit(): void {
    this.initializeQuestions();
  }

  initializeQuestions() {
    this.isValid = true;
    this.currIdx = 0;
    this.showResult = false;
    this.score = 0;
    this.QUESTIONS = this.QUESTIONS.map((question) => {
      return {
        ...question,
        selected: '',
      };
    });
  }

  move(direction: number) {
    this.currIdx += direction;
  }

  submit() {
    this.isValid = true;
    if (!this.QUESTIONS.every((question) => question.selected)) {
      this.isValid = false;
    } else {
      this.showResult = true;
      this.QUESTIONS.map((question) => {
        if (question.anwer === question.selected) {
          this.score += 1;
        }
      });
      if (this.score < 5)
        this.recommendations = this.COURSES.filter(
          (course) => course.score === EScore.LOW
        );
      else if (this.score > 4 && this.score < 8)
        this.recommendations = this.COURSES.filter(
          (course) => course.score === EScore.AVERAGE
        );
      else
        this.recommendations = this.COURSES.filter(
          (course) => course.score === EScore.HIGH
        );
    }
  }
}
