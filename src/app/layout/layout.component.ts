import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { EmptyComponent } from './components/empty/empty.component';
import { ActivatedRoute } from '@angular/router';
import { Layout } from './layout.type';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../shared/services/dark-mode/dark-mode.service';

@Component({
  selector: 'menu-digital-layout',
  standalone: true,
  imports: [SideBarComponent, EmptyComponent, CommonModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  public layout!: Layout;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    public darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.darkModeService.darkModeIsActive();

    this.activatedRoute.data.subscribe((data: any) => {
      if (data.layout) {
        this.layout = data.layout;
      }
    });
  }
}
