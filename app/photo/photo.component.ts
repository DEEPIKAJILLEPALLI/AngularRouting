import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../models/photo';
import { Album } from '../models/album';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  constructor() {
   }

  ngOnInit() {
  }

}
