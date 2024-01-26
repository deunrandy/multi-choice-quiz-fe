import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SubmitComponent } from './submit/submit.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [QuizComponent, MainComponent, SubmitComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
})
export class QuizModule {}
