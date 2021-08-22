import { NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {AppContextService} from './app-context.service';
@Component({
  selector: 'app-2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2';

  messages: any[] = [];
  subscription: Subscription;

  constructor(public appContext: AppContextService,private zone: NgZone) {
  //   this.subscription = this.appContext.onMessage().subscribe(message => {
  //     if (message) {
  //         this.messages.push(message);
  //     } else {
  //         // clear messages when empty message received
  //         this.messages = [];
  //     }
  // });
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

  sendMessage(): void {
    // this.zone.run(() => {
    // send message to subscribers via observable subject
      this.appContext.sendMessage('Message app 2 from Home Component to App Component!');
    // });
  }
  clearMessages(): void {
    // clear messages
    // this.zone.run(() => {
    this.appContext.clearMessages();
    // });
  }
}
