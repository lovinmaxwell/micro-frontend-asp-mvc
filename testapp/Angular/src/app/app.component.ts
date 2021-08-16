import {Component, Input, ElementRef, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppContextService } from './app-context.service';

@Component({
  selector: 'app-1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  firstName: string;
  last: string;
  // @Input() last: string = '';
  title = 'Angular';
  name: string;
  // username: string = this.elementRef.nativeElement.getAttribute('username');
  comment: string;
  Status: string;

  public appData;

  messages: any[] = [{text: "Mgs 1"}];
  subscription: Subscription;

  constructor(private appContext: AppContextService) {
    this.appContext.consolMethod('app 1 constructor');
    // subscribe to home component messages
    this.subscription = this.appContext.onMessage().subscribe(message => {
      console.log('@subscription')
      console.log(message)
      console.log("*****message****")
      if (message) {
          console.log('is true message')
          console.log(message)
          this.messages.push(message);
          console.log(this.messages);
      } else {
          // clear messages when empty message received
          this.messages = [];
      }
    });
    
    // this.appContext.consolMethod();
    // this.getStatus();
  }

  ngOnInit(): void{
    // alert('hi - ' + this.appContext.userName);
    console.log('hi - ' + this.appContext.userName);
    this.firstName = this.appContext.firstName;
    this.last = this.appContext.lastname;
  }


  onInput($event: Event): void {
    console.log('On Input Comment');
    console.log($event);
    console.log('appContext');
    this.appContext.appContextBootstrap.comment =  $event.toString();
    console.log(this.appContext);
  }

  getStatus(): void {
    this.appContext.AppContext$.subscribe(
      result => {
        this.appData = result;
        console.log('this.appData')
        console.log(this.appData);
      }
    )
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.appContext.sendMessage('Message from Home Component to App Component!');
  }
  clearMessages(): void {
    // clear messages
    this.appContext.clearMessages();
  }
}
