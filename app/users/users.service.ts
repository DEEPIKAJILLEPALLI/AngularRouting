import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http.provider';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
/**
 *
 * @param http To build a web application these days we need to make a number of calls to external HTTP APIs.
Angular comes with its own HTTP client library which we can use to make those calls.
In JavaScript making HTTP requests is an asynchronous operation. It just sends the HTTP request to
the API and doesn’t wait for a response before continuing with the next line of code.
When the API responds milliseconds or seconds or minutes later then we get notified and we can
start processing the response.
In Angular there are two ways of handling these asynchronous operations. We can use Promises
 or  Observables
 *
 * import { Http, Response, RequestOptions, Headers } from '@angular/http';
 *  Promise: handles a single event when an async operation completes or fails.

Note: There are Promise libraries out there that support cancellation, but ES6 Promise doesn’t so far.
An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.

Often Observable is preferred over Promise because it provides the features of Promise and more.
With Observable it doesn’t matter if you want to handle 0, 1, or multiple events. You can utilize the same API in each case.

Observable also has the advantage over Promise to be cancelable.
 If the result of an HTTP request to a server or some other expensive async operation isn’t needed anymore,
 the Subscription of an Observable allows to cancel the subscription,
 while a Promise will eventually call the success or failed callback
 even when you don’t need the notification or the result it provides anymore.
Observable provides operators like map, forEach, reduce,... similar to an array

There are also powerful operators like retry(), or replay().
 */

  constructor(private http: HttpProvider) {

  }

  public getUsers(): any {
    return this.http.get<Array<User>>('http://jsonplaceholder.typicode.com/users/').toPromise();
  }

  public CreateUser(user: User): Observable<User> {
    return this.http.post<User>('http://jsonplaceholder.typicode.com/users/', user);
  }
}
