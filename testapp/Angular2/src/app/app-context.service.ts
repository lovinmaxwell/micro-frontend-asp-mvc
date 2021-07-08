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

  constructor() {
      console.log(window);
      const appContextBootstrap: GlobalConstants = ((window as any).appContext as GlobalConstants);
      console.log(appContextBootstrap);
      console.table(appContextBootstrap);
      this.userName = appContextBootstrap.userName;
      this.firstName = appContextBootstrap.firstName;
      this.lastname = appContextBootstrap.lastname;
      this.Status = appContextBootstrap?.Status;
      this.comment = appContextBootstrap?.comment;
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
