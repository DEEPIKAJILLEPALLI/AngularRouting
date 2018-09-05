import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 import { AlbumsComponent } from './albums/albums.component';
 import { PhotosComponent } from './photos/photos.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
 import { PhotosService } from './services/photos.service';
import { HttpProvider } from './providers/http.provider';
 import { UsersComponent } from './users/users.component';
 import { AlbumsService } from './services/albums.service';
 import { UsersService } from './services/users.service';
import { UserCardComponent } from './user-card/user-card.component';
import { PhotoComponent } from './photo/photo.component';
import { AlbumComponent } from './album/album.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../sharedModule/shared.module';

/**ROUTE CONFIGURATION */
const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  /**
   * The redirectTo property describes the path we want to redirect this user to if they navigate to
this URL.
Now if the user visits the root (empty) URL they are redirected to /home instead.

For the special case of an empty URL we also need to add the pathMatch: 'full'
property so Angular knows it should be matching exactly the empty string and not
partially the empty string.
   */
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'users', component: UsersComponent },
{ path: 'form', component: FormComponent },
/**
 * • The path property describes the URL this route will handle.
• The component property is the name of the component we want to display when the URL in the
browser matches this path.
 Routes is a typescript type of Route[], an array of individual Route instances.
 Catch all route
We can also add a catch all route by using the path **, if the URL doesn’t match any of the other
routes it will match this route.
const routes:Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'find', redirectTo: 'search'},
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
{path: '**', component: HomeComponent} ①
];
*/

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
   PhotosComponent,
    UsersComponent,
    UserCardComponent,
    PhotoComponent,
    FormComponent,
    AlbumComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    /**
   * We then install these routes into our application by importing RouterModule.forRoot(routes) into
our NgModule, like so:
   */
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule
  ],
  /**
   * Each web application you build is composed of objects that collaborate to get stuff done.
   *  These objects need to be instantiated and wired together for the app to work.
   * In AngularJS apps most of these objects are instantiated and wired together automatically by the injector service.

The injector creates two types of objects, services and specialized objects.

Services are objects whose API is defined by the developer writing the service.

Specialized objects conform to a specific AngularJS framework API. These objects are one of controllers, directives, filters or animations.
   */
  providers: [PhotosService, HttpProvider, AlbumsService, UsersService],
  // providers: [ HttpProvider, SharedModule],

 bootstrap: [AppComponent]
})


export class AppModule { }
