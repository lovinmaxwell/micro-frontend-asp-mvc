import {Component, Input, ElementRef, OnInit} from '@angular/core';
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
  constructor(private appContext: AppContextService) {
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
}
