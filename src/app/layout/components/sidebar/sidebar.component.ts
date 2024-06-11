import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from '../../../shared/services/dark-mode/dark-mode.service';
import { SharedModule } from '../../../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'menu-digital-sidebar',
  standalone: true,
  imports: [RouterOutlet, MatExpansionModule],
  templateUrl: './sidebar.component.html',
})
export class SideBarComponent {
  constructor(private readonly darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }
}
