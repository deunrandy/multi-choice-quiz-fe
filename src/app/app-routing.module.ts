import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/constants/util.constant';
import { HomeComponent } from './modules/home/home.component';
import { QuizComponent } from './modules/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.HOME,
  },
  {
    path: ROUTES.HOME,
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: ROUTES.QUIZ,
    component: QuizComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/quiz/quiz.module').then((m) => m.QuizModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
