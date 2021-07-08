import { Component } from '@angular/core';
import {AppContextService} from './app-context.service';
@Component({
  selector: 'app-2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2';

  constructor(private appContext: AppContextService) {
  }

  onSubmit($event: any): void {
    console.log('App 2 onSubmit');
    console.log($event);
    console.log('appContext');
    console.log(window);
    this.appContext.appContextBootstrap.Status = this.appContext.appContextBootstrap.comment;
    document.getElementById('razorLabel').innerHTML = this.appContext.appContextBootstrap.Status;
    console.log(this.appContext);
    console.log('***** After Update ***********');
    console.log(window);
  }
}
