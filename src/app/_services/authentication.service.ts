import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable ,  throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../_models';
import { config } from '../../config';  

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    //logUser = "";

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


    // set seeetion variable from local storage to log user
    /*loggedUser(){
       return  this.logUser  = localStorage.getItem('currentUser');
    }*/

   // login

    login(username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/api/login.php`, { username, password })

           /*.pipe(map 
                (this.extractJsonData)
             ).pipe(
                catchError(this.handleJsonError)
            );*/


           .pipe(map( user => {

               console.log("logged" , user); 
                // login successful if there's a jwt token in the response
                if (user.status != 0 ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    //this.loggedUser();
                }

                return user;
              })
            
            );
    }

   // sign up

    signup(c_name: string, fullname: string, email: string, password: string) {
      return this.http.post<any>(`${config.apiUrl}/api/signup.php`, { c_name, fullname, email, password })

         .pipe(map( user => {

              return user;
            })
          
         );
  }





// logout

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

   /* private extractJsonData(response: Response) {
        return response;
     }

    private handleJsonError(error: any) {
        if(error){
          const errMsg = (error.error) ? error.error :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          try {
            JSON.parse(errMsg);
          } catch (e){
            return throwError(errMsg);
          }
          return throwError(JSON.parse(errMsg));
        }
    }*/



      // Account Update
      accUpdate(u_id: string, c_name: string, fullname: string, domain: string, logo: string) {
        return this.http.post<any>(`${config.apiUrl}/api/accUpdate.php`, { u_id, c_name, fullname, domain, logo })

          .pipe(map( user => {

                // login successful if there's a jwt token in the response
                if (user.status != 0 ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                  
                }

                return user;
              })
            
            );
     }

  
    // Password Update
      passUpdate(u_id: string, o_password: string) {
        return this.http.post<any>(`${config.apiUrl}/api/passUpdate.php`, {u_id, o_password })

          .pipe(map( user => {
                return user;
              })
            
          );
      }











}