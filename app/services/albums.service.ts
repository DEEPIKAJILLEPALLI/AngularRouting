import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http.provider';
import { Photo } from '../models/photo';
import { Album } from '../models/album';
@Injectable()
export class AlbumsService {

    private selectedAlbumId: number = null;

    public set setAlbumId(value: number) {
        if (value) {
            this.selectedAlbumId = value;
        }
    }

    public get getAlbumId() {
        return this.selectedAlbumId;
    }

    constructor(private http: HttpProvider) {

    }
    public getAlbumsById(albumId: number): any {
        return this.http.get<Array<Photo>>('http://jsonplaceholder.typicode.com/albums/' + albumId + '/photos').toPromise();
    }

    public getAlbums(): any {
        return this.http.get<Array<Album>>('http://jsonplaceholder.typicode.com/albums').toPromise();
    }

}
