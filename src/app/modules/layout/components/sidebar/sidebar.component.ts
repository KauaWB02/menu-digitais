import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from '../../../../shared/services/dark-mode/dark-mode.service';

@Component({
  selector: 'menu-digital-sidebar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidebar.component.html',
})
export class SideBarComponent {
  constructor(private readonly darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
}
