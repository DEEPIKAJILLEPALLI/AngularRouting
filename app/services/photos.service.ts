import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http.provider';
import { Photo } from '../models/photo';
import { Album } from '../models/album';
import { AlbumsService } from './albums.service';

@Injectable()
export class PhotosService {

  constructor(private http: HttpProvider) {

  }

  public getAlbums(): any {
    return this.http.get<Array<Album>>('http://jsonplaceholder.typicode.com/albums/photos').toPromise();
}
public getAlbumsByid(AlbumId: number): any {
  return this.http.get<Array<Photo>>('http://jsonplaceholder.typicode.com/albums/' + AlbumId + '/photos').toPromise();
}

  public getPhotos(): any {
    return this.http.get<Array<Photo>>('http://jsonplaceholder.typicode.com/photos/').toPromise();
  }


}
