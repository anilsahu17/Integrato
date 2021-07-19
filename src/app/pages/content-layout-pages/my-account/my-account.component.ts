import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

import { Subscription } from 'rxjs';
import { User } from '../../../_models';
import { UserService, AuthenticationService } from '../../../_services';
import { MustMatch } from '../../../_helpers/must-match';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

// get logged in data
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  uId : any ;


  generalSetting: FormGroup;
  passwordSetting: FormGroup;
  loading = false;
  submitted = false;
  submittedF2 = false;
  error : false;


  

  constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService,
      private userService: UserService,
      private authenticationService: AuthenticationService,
      ){ 
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
        });
    }
    
    

  ngOnInit() {

    
       this.uId = this.currentUser['id'];
    

        this.generalSetting = this.formBuilder.group({
          u_id: ['', Validators.required],
          c_name: ['', Validators.required],
          fullname: ['', Validators.required],
          domain: ['', Validators.required],
          logo: ['', Validators.required ]
        });


        this.passwordSetting = this.formBuilder.group({
          u_id: ['', Validators.required],
          o_password: ['', Validators.required],
          password: ['', Validators.required],
          c_password: ['', Validators.required]
        },{
          validator: MustMatch('password', 'c_password')
      });

   

  }

  get f() { return this.generalSetting.controls; }
  get f2() { return this.passwordSetting.controls; }



    genUpdate(form) {

        this.submitted = true;

        if (this.generalSetting.invalid) {
          return;
        }


        this.authenticationService.accUpdate(this.f.u_id.value, this.f.c_name.value, this.f.fullname.value, this.f.domain.value, this.f.logo.value)
        .pipe(first())
        .subscribe(
            data => {

              console.log("details" , data); 

              if(data.status == 1){

                this.toastr.success('Record Updated Successfully.', 'Success' );

                //reset form
                this.generalSetting.reset();
                this.submitted = false;


              }else{

                this.toastr.error('Some thing went wrong try again.', 'Error' );
                
              }
              
                
            },
            error => {
                //this.alertService.error(error);
                this.toastr.error('Some thing went wrong try again.' );
                this.loading = false;
            });

        
    }



     passUpdate(form2) {

      this.submittedF2 = true;

      if (this.passwordSetting.invalid) {
        return;
      }



      this.authenticationService.passUpdate(this.f2.u_id.value, this.f2.o_password.value )
      .pipe(first())
      .subscribe(
          data => {

            console.log("details" , data); 

            if(data.status == 1){

              this.toastr.success('Password Updated Successfully.', 'Success' );

              //reset form
              this.passwordSetting.reset();
              this.submittedF2 = false;


            }else{

              this.toastr.error('Some thing went wrong try again.', 'Error' );
              
            }
            
              
          },
          error => {
              //this.alertService.error(error);
              this.toastr.error('Some thing went wrong try again.' );
             

          });


      
   }






}
