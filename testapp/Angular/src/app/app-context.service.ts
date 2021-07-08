import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

interface IAppContext {
  userName: string;
  firstName: string;
  lastname: string;
  comment: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppContextService {

  userName: string;
  firstName: string;
  lastname: string;
  comment: string;
  Status: any;

  private dataSubject = new ReplaySubject<GlobalConstants>();
  AppContext$: Observable<GlobalConstants> = this.dataSubject.asObservable();
  appContextBootstrap: GlobalConstants = ((window as any).appContext as GlobalConstants);
  constructor() {
      console.log('App 1');
      console.log(window);

      console.log(this.appContextBootstrap);
      console.table(this.appContextBootstrap);
      this.userName = this.appContextBootstrap.userName;
      this.firstName = this.appContextBootstrap.firstName;
      this.lastname = this.appContextBootstrap.lastname;
      this.Status = this.appContextBootstrap?.Status;
      this.comment = this.appContextBootstrap?.comment;
  }
}


export class GlobalConstants implements IAppContext{
  Status: any;
  userName: string;
  firstName: string;
  lastname: string;
  comment: string;
  isAdmin: boolean;
}
