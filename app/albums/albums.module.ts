import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from './albums.service';
import { AlbumsComponent } from './albums.component';

@NgModule({
imports: [CommonModule],
declarations: [AlbumsComponent

],
// providers: [AlbumsService],
exports: []
})
export class AlbumsModule {}
