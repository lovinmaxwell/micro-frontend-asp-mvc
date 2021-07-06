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
  name:string = '';
  // username: string = this.elementRef.nativeElement.getAttribute('username');
  constructor(private appContext: AppContextService) {
  }

  ngOnInit(){
    // alert('hi - ' + this.appContext.userName);
    console.log('hi - ' + this.appContext.userName);

    this.firstName = this.appContext.firstName;
    this.last = this.appContext.lastname;
  }

    
}
