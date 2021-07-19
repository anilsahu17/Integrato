import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthenticationService } from '../../../_services';

// import custom validator to validate that password and confirm password fields match

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signIn: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error : false;

  constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
    ) {
     
    }

  get f() { return this.signIn.controls; }

  signin(form) {

     // $('#signIn').find('.ng-invalid').addClass('error');


      this.submitted = true;

      if (this.signIn.invalid) {
        return;
      }


        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {

                  this.router.navigate(['/dashboard']);

                  //
                 // console.log(data);

                 /* if ( data.status != 0 ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                     localStorage.setItem('currentUser', JSON.stringify(data));
                     // this.currentUserSubject.next(data);

                      this.router.navigate(['/dashboard']);

                  }else{

                    this.toastr.error('Invalid username or password.', 'Login failed' );
                       

                  }*/

                    
                },
                error => {
                    //this.alertService.error(error);
                    this.toastr.error('Invalid Username or Password.', 'Login failed' );
                    this.loading = false;
                });

        //console.log(this.f.email.value, this.f.password.value);

     

  }
 

  ngOnInit() {

        this.signIn = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });

      //this.toastr.success('Hello world!', 'Toastr fun!' );
      // get return url from route parameters or default to '/'
       
    
    }

}
