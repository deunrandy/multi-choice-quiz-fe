import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { COURSES, ROUTES } from 'src/app/shared/constants/util.constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private readonly ROUTES = ROUTES
  public readonly COURSES = COURSES
  constructor(private router: Router) {}
  startQuiz() {
    this.router.navigate(['/', ROUTES.QUIZ])
  }
}
