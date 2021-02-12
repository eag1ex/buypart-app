import { Component } from '@angular/core';
import { HttpService } from '@buypart/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buypart';
  constructor(private http: HttpService) {
    console.log('hello world', this.http);

  }
}
