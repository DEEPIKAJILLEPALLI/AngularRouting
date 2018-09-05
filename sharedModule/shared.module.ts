import {NgModule} from '@angular/core';
import {AlbumsModule} from '../app/albums/albums.module';
import {UserModule} from '../app/users/users.module';
import {PhotosModule} from '../app/photos/photos.module';



@NgModule({
    providers: [PhotosModule, UserModule, AlbumsModule]
})

export class SharedModule { }
