import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../_services';

import { MustMatch } from '../../../_helpers/must-match';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUp: FormGroup;
  loading = false;
  submitted = false;
  error : false;



  constructor( 
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    ) { }


    get f() { return this.signUp.controls; }

    signup(form) {

          this.submitted = true;

          if (this.signUp.invalid) {
            return;
          }



          this.loading = true;
          this.authenticationService.signup(this.f.c_name.value, this.f.fullname.value, this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {

                  console.log("details" , data); 
                  this.loading = true;

                  if(data.status == 1){
                    this.toastr.success('New Record Added Successfully.', 'SignUp Successfully' );

                    //reset form
                    this.signUp.reset();
                    this.submitted = false;


                  }else{
                    this.toastr.error('Email id already exists.', 'Error' );
                    
                  }
                  
                    
                },
                error => {
                    //this.alertService.error(error);
                    this.toastr.error('Some thing went wrong try again.' );
                    this.loading = false;
                });



    }

 

   ngOnInit() {

      this.signUp = this.formBuilder.group({
        c_name: ['', Validators.required],
        fullname: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        c_password: ['', Validators.required]
      },{
        validator: MustMatch('password', 'c_password')
    });


   }

}
