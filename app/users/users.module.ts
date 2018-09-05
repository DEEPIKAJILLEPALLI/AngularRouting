import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { UsersComponent } from './users.component';

@NgModule({
imports: [CommonModule],
declarations: [UsersComponent

],
// providers: [UsersService],
exports: []
})
export class UserModule {}
