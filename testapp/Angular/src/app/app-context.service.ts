import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

interface IAppContext {
  userName: string;
  firstName: string;
  lastname: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppContextService {

  userName: string;
  firstName: string;
  lastname: string;

  private dataSubject = new ReplaySubject<GlobalConstants>();
  
  constructor() {
      var appContextBootstrap: IAppContext = (<IAppContext>(<any>window).appContext);
      this.userName = appContextBootstrap.userName;
      this.firstName = appContextBootstrap.firstName;
      this.lastname = appContextBootstrap.lastname;
  }
}


export class GlobalConstants implements IAppContext{
  Status:number[];
  userName: string;
  firstName: string;
  lastname: string;
  isAdmin: boolean;
}
