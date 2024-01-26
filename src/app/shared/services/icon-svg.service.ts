import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconSvgService {
  private svgIcons: string[] = [
    'check',
    'arrow'
  ];
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}
  iconsInit(): void {
    [...this.svgIcons].forEach((iconName) => {
      this.iconRegistry.addSvgIcon(
        iconName,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          'assets/svg/' + iconName + '.svg'
        )
      );
    });
  }
}
