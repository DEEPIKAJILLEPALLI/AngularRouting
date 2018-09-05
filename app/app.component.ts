import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

// to define custom tag we use decorator component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Navigating programmatically via the router
In Angular we can also programmatically navigate via a Router service we inject into our
component, like so:
 */
export class AppComponent {
  /**
   *This idea of moving the responsibility of creating concrete instances of dependency’s to something
else is called Inversion of Control, or IoC.
The specific design pattern for implementing IoC above is called Dependency Injection
   */
  constructor(private router: Router) {
  }
}
