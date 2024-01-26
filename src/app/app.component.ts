import { Component } from '@angular/core';
import { IconSvgService } from './shared/services/icon-svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'multi-choice-quiz-fe';

  constructor(iconService: IconSvgService) {
    iconService.iconsInit();
  }
}
