import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { HttpModule, Http, Response } from '@angular/http';
import { Album } from '../models/album';
import { Photo } from '../models/photo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  @Input() public albums = new Array<Album>();
  @Input() public photos = new Array<Photo>();
  //  @Output() onalbumSelected: EventEmitter<Photo>;

  // public photos = new Array<Photo>();
  loading: boolean;
  constructor(private albumsService: AlbumsService, private router: Router) { }


  makeRequestAlbums(): void {
    // this.loading = true;
    // this.http.request('http://jsonplaceholder.typicode.com/albums/')
    //   .subscribe((res: Response) => {
    //     this.data = res.json();
    //     this.loading = false;
    //   });

  }
  public async ngOnInit() {
    this.albums = await this.albumsService.getAlbums();
    console.log(this.albums);
  }
  public async clicked(albumid: number) {
    this.albumsService.setAlbumId = albumid;
    //  this.photos = await this.albumsService.getAlbums();
    this.router.navigate(['/photos'], { queryParams: { albumid: albumid } });
    //  console.log(this.photos);
    // this.onalbumSelected.emit();
  }


}
