import { Component, OnInit, ViewChild } from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  addCompnay: FormGroup;
  loading = false;
  submitted = false;


 
  c_name : any;
  c_url : any;
  c_auth : any;
  

  constructor(private formBuilder: FormBuilder) { }

  displayedColumns: string[] = ['position',   'name', 'domain', 'logo' , 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

 // @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    //this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;



    this.addCompnay = this.formBuilder.group({
        name: ['', Validators.required],
        auth: ['', Validators.required],
        url: ['', Validators.required]
    });


  }

  
  get f() { return this.addCompnay.controls; }

  addNewCompnay(){

    
  }

  //edit api
  editApi(i){
      console.log(ELEMENT_DATA[i].name, ELEMENT_DATA[i].domain, ELEMENT_DATA[i].logo);

      this.c_name = ELEMENT_DATA[i].name;
      this.c_url = ELEMENT_DATA[i].domain;
      this.c_auth = ELEMENT_DATA[i].logo;
    
  }



}


export interface PeriodicElement {
  name: string;
  position: number;
  domain: number;
  logo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', domain: 1.0079, logo: 'H'},
  {position: 2, name: 'Helium', domain: 4.0026, logo: 'He'},
  {position: 3, name: 'Lithium', domain: 6.941, logo: 'Li'},
  {position: 4, name: 'Beryllium', domain: 9.0122, logo: 'Be'},
  {position: 5, name: 'Boron', domain: 10.811, logo: 'B'},
  {position: 6, name: 'Carbon', domain: 12.0107, logo: 'C'},
  {position: 7, name: 'Nitrogen', domain: 14.0067, logo: 'N'},
  {position: 8, name: 'Oxygen', domain: 15.9994, logo: 'O'},
  {position: 9, name: 'Fluorine', domain: 18.9984, logo: 'F'},
  {position: 10, name: 'Neon', domain: 20.1797, logo: 'Ne'},
  {position: 11, name: 'Sodium', domain: 22.9897, logo: 'Na'},
  {position: 12, name: 'Magnesium', domain: 24.305, logo: 'Mg'},
  {position: 13, name: 'Aluminum', domain: 26.9815, logo: 'Al'},
  {position: 14, name: 'Silicon', domain: 28.0855, logo: 'Si'},
  {position: 15, name: 'Phosphorus', domain: 30.9738, logo: 'P'},
  {position: 16, name: 'Sulfur', domain: 32.065, logo: 'S'},
  {position: 17, name: 'Chlorine', domain: 35.453, logo: 'Cl'},
  {position: 18, name: 'Argon', domain: 39.948, logo: 'Ar'},
  {position: 19, name: 'Potassium', domain: 39.0983, logo: 'K'},
  {position: 20, name: 'Calcium', domain: 40.078, logo: 'Ca'},
];



