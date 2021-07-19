import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  editApplication: FormGroup;
  addApplication: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  displayedColumns: string[] = ['position',   'name', 'domain', 'key' , 'secret' , 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 // @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

     this.editApplication = this.formBuilder.group({
          c_name: ['', Validators.required],
          ap_name: ['', Validators.required],
          ad_name: ['', Validators.required],
          logo: ['', Validators.required],
          apis: ['', Validators.required],
          desc: ['', Validators.required]
      });

      this.addApplication = this.formBuilder.group({
        c_name: ['', Validators.required],
        ap_name: ['', Validators.required],
        ad_name: ['', Validators.required],
        logo: ['', Validators.required],
        apis: ['', Validators.required],
        desc: ['', Validators.required]
    });


  }




  get fe() { return this.editApplication.controls; }
  get f() { return this.addApplication.controls; }



  addNewApp() {
          
      //this.submitted = true;

      // if (this.addApplication.invalid) {
      //   return;
      // }

  }

  editApp(){

     //this.submitted = true;

      // if (this.editApplication.invalid) {
      //   return;
      // }

      
  }



}




export interface PeriodicElement {
  name: string;
  position: number;
  domain: number;
  key: string;
  secret: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', domain: 1.0079, secret:"sada as", key: 'H'},
  {position: 2, name: 'Helium', domain: 4.0026, secret:"sada as", key: 'He'},
  {position: 3, name: 'Lithium', domain: 6.941,  secret:"sada as",key: 'Li'},
  {position: 4, name: 'Beryllium', domain: 9.0122, secret:"sada as", key: 'Be'},
  {position: 5, name: 'Boron', domain: 10.811, secret:"sada as", key: 'B'},
  {position: 6, name: 'Carbon', domain: 12.0107, secret:"sada as", key: 'C'},
  {position: 7, name: 'Nitrogen', domain: 14.0067, secret:"sada as", key: 'N'},
  {position: 8, name: 'Oxygen', domain: 15.9994, secret:"sada as", key: 'O'},
  {position: 9, name: 'Fluorine', domain: 18.9984, secret:"sada as", key: 'F'},
  {position: 10, name: 'Neon', domain: 20.1797, secret:"sada as", key: 'Ne'},
  {position: 11, name: 'Sodium', domain: 22.9897, secret:"sada as", key: 'Na'},
  {position: 12, name: 'Magnesium', domain: 24.305, secret:"sada as", key: 'Mg'},
  {position: 13, name: 'Aluminum', domain: 26.9815 ,secret:"sada as", key: 'Al'},
  {position: 14, name: 'Silicon', domain: 28.0855, secret:"sada as", key: 'Si'},
  {position: 15, name: 'Phosphorus', domain: 30.9738, secret:"sada as", key: 'P'},
  {position: 16, name: 'Sulfur', domain: 32.065, secret:"sada as", key: 'S'},
  {position: 17, name: 'Chlorine', domain: 35.453, secret:"sada as", key: 'Cl'},
  {position: 18, name: 'Argon', domain: 39.948, secret:"sada as", key: 'Ar'},
  {position: 19, name: 'Potassium', domain: 39.0983, secret:"sada as", key: 'K'},
  {position: 20, name: 'Calcium', domain: 40.078, secret:"sada as", key: 'Ca'},
];



