import { Component } from '@angular/core';
import { ROUTES } from '../../constants/util.constant';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  public readonly ROUTES = ROUTES
}
