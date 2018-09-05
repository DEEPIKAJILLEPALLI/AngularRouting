import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosService } from './photos.service';
import { PhotoComponent } from '../photo/photo.component';
import { PhotosComponent } from './photos.component';

@NgModule({
imports: [CommonModule],
declarations: [PhotosComponent

],
// providers: [PhotosService],
exports: []
})
export class PhotosModule {}
