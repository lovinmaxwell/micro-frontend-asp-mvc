import { inject, Inject, Injectable, InjectionToken } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import {map} from 'rxjs/operators';
declare global {
  interface Window { 
    AppContextOne:  Observable<GlobalConstants>;
    AppContextOneSub:  Subject<any>;
    AppContextOnefun:  any;
    AppContextOnMessage:  any;
  }
}

// appContext: {
//   razorApp: Observable<any>,
//   NgOneApp: Observable<any>,
//   NgTwoApp: Observable<any>
// }
@Injectable({
  providedIn: 'root'
})
export class AppContextService {

  userName: string;
  firstName: string;
  lastname: string;
  comment: string;
  Status: any;

  // private _IAppContext: IAppContext;

  private dataSubject = new ReplaySubject<GlobalConstants>();
  StatusList$: Observable<GlobalConstants> = this.dataSubject.asObservable();

  AppContext$: Observable<GlobalConstants> = this.dataSubject.asObservable();
  appContextBootstrap: GlobalConstants = ((window as any).appContext as GlobalConstants);

  
  constructor(private http: HttpClient,
    // @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(WINDOW) public windowsRef: Window,
    // @Inject(Window) private windowsRef: Window
    ) {

      // this._IAppContext.appData = this.dataSubject.asObservable()
      console.log('App 1');
      console.log(window);

      console.log(this.appContextBootstrap);
      console.table(this.appContextBootstrap);
      // windowsRef.AppContextOne = this.dataSubject.asObservable();
      // windowsRef.AppContextOneSub = new Subject<any>();
      console.log("**************App 1*****************");
      console.log(this.windowsRef);

      if(this.appContextBootstrap){
      this.userName = this.appContextBootstrap.userName;
      this.firstName = this.appContextBootstrap.firstName;
      this.lastname = this.appContextBootstrap.lastname;
      this.Status = this.appContextBootstrap?.Status;
      this.comment = this.appContextBootstrap?.comment;

      this.consolMethod('***App1***') 
    }
    // this.getStatus();
  }

  getStatus() {
    return this.http.get('http://localhost:4200').subscribe(res => {
      this.dataSubject.next();
    })
  }


  // sendMessage(message: string) {
  //   this.dataSubject.next({ 
  //     Status: message,
  //     userName: this.userName,
  //     firstName: this.firstName,
  //     lastname: this.lastname,
  //     comment: this.comment
  //   });
  // }

  // clearMessages() {
  //     this.dataSubject.next();
  // }

  // onMessage(): Observable<any> {
  //     return this.dataSubject.asObservable();
  // }
    // sendMessage(message: string) {
    //     this.windowsRef.AppContextOneSub.next({ text: message });
    // }

    // clearMessages() {
    //     this.windowsRef.AppContextOneSub.next();
    // }

    // onMessage(): Observable<any> {
    //     this.windowsRef.AppContextOnefun('app 2 sendMessage');
    //     return this.windowsRef.AppContextOneSub.asObservable();
    // }

    onMessage(): Observable<any> {
        return this.windowsRef.AppContextOnMessage().asObservable()
    }

    consolMethod(mgs : string) {
      this.windowsRef.AppContextOnefun(mgs);
    }

}




// In order for your app to work with Server Side Rendering I suggest you not only use window through token, 
// but also create this token in SSR friendly manner, without referencing window at all.
// Angular has built-in DOCUMENT token for accessing document. 
// Here's what I came up with for my projects to use window through tokens:
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


// export const ANIMATION_FRAME = new InjectionToken<
//   Observable<Window>
// >(
//   'Shared Observable based on `window.requestAnimationFrame`',
//   {
//     factory: () => {
//       const {defaultView} = inject(DOCUMENT);
//       if (!defaultView) {
//         throw new Error('Window is not available');
//       }

//       return defaultView;
//     },
//   },
// );


// export interface IAppContext extends Window {
//   appData: Observable<GlobalConstants>;
// }

export class GlobalConstants{
  Status: any;
  userName: string;
  firstName: string;
  lastname: string;
  comment: string;
  text: string;
}

// export class AppContext
// {
//   razorApp: Observable<any> = new Observable();
//   NgOneApp: Observable<any> = new Observable();
//   NgTwoApp: Observable<any> = new Observable();
// }

