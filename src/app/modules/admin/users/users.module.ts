import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserRouters } from './admin.routes';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, RouterModule.forChild(UserRouters)],
})
export class UsersModule {}
