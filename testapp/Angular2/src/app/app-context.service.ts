import { DOCUMENT } from '@angular/common';
import { inject, Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

declare global {
  interface Window { 
    AppContextOne:  Observable<GlobalConstants>;
    AppContextOneSub:  Subject<any>;
    AppContextOnefun:  any;
    AppContextOnMessage:  any;
  }
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
  constructor(@Inject(WINDOW) public windowsRef: Window) {
      console.log('App 2');
      console.log(window);
      console.log(this.appContextBootstrap);
      console.table(this.appContextBootstrap);
      this.userName = this.appContextBootstrap.userName;
      this.firstName = this.appContextBootstrap.firstName;
      this.lastname = this.appContextBootstrap.lastname;
      this.Status = this.appContextBootstrap?.Status;
      this.comment = this.appContextBootstrap?.comment;

      console.log("**************App 2*****************");
      console.log(this.windowsRef);
      // windowsRef.AppContextOneSub = new Subject<any>();
      windowsRef.AppContextOne = this.dataSubject.asObservable();
      windowsRef.AppContextOneSub = new Subject<any>();

      windowsRef.AppContextOnefun = function (where: string) {
        window.AppContextOneSub
        .subscribe(data => {
            console.log('consolMethod ' + where);
            console.log(data);
        });
      };

      windowsRef.AppContextOnMessage = function() : Observable<any> {
        return windowsRef.AppContextOneSub;
      }
  }

  sendMessage(message: string) {
    this.windowsRef.AppContextOneSub.next({ 
      text: message 
    });
    this.windowsRef.AppContextOnefun('app 2 sendMessage');
  }

  clearMessages() {
      this.windowsRef.AppContextOneSub.next();
      this.windowsRef.AppContextOnefun('app 2 clearMessages');
  }

  // onMessage(): Observable<any> {
  //     return this.windowsRef.AppContextOneSub.asObservable();
  // }


}

export const WINDOW = new InjectionToken<Window>(
  'An abstraction over global window object',
  {
      factory: () => {
          const {defaultView} = inject(DOCUMENT);

          if (!defaultView) {
              throw new Error('Window is not available');
          }

          return defaultView;
      },
  },
);


export class GlobalConstants{
  Status: any;
  userName: string;
  firstName: string;
  lastname: string;
  comment: string;
  text: string;
}
