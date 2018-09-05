import { Component, OnInit, Output, Input } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { HttpModule, Http, Response } from '@angular/http';
import { Photo } from '../models/photo';
import { EventEmitter } from 'events';
import { Album } from '../models/album';
import { AlbumsService } from '../services/albums.service';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from 'querystring';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photoId: string;
  public photoList = new Array<Photo>();
  // public len: number;
  // public j: number;
  // value: boolean;

  constructor(private photosService: PhotosService, private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService) {
      // An observable of the query parameters shared by all the routes
    this.route.queryParams.subscribe(res => {
      this.photoId = res.albumid;
      console.log(this.photoId);
    }
    );
  }

  public async ngOnInit() {
    let photos: Array<Photo> = [];
    // this.isPalindrome('madam');
    // console.log(this.addN(3, 2));
    // console.log(this.SpreadSyntaxDemo);
    // this.SpreadSyntaxDemo();
    // if (!this.isPalindrome('maamaam')) {
    //   console.log('not palindrome');
    // } else {
    //   console.log(' palindrome');

    // }
    if (this.photoId) {
      photos = await this.photosService.getAlbumsByid(parseInt(this.photoId, 10));
      console.log(photos);
    } else {
      photos = await this.photosService.getPhotos();
    }
    if (photos.length > 0) {
      for (let i = 0; i < photos.length; i++) {
        const photo = new Photo();
        photo.albumId = photos[i].albumId;
        photo.id = photos[i].id;
        photo.title = photos[i].title;
        photo.url = photos[i].url;
        photo.thumbnailUrl = photos[i].thumbnailUrl;

        this.photoList.push(photo);
      }
    }
  }
  // public isPalindrome(value: string) {

  //   for (let i = 0, j = value.length - 1; i < value.length / 2; i++ , j--) {
  //     if (value[i] !== value[j]) {
  //       return false;
  //     } else {
  //       return true;
  //     }


  //   }
  // }
  // public SpreadSyntaxDemo() {
  //   const cde = ['c', 'd', 'e'];
  //   const any = ['a', 'b', ...cde, 'f'];
  //   console.log(any);
  //   const add = (a, b) => (a + b);
  //   const args = [3, 5];
  //   // console.log(add(...args));
  // }
  // public addN(...numbers) {
  //   return numbers[0] + numbers[1];
  // }
}
