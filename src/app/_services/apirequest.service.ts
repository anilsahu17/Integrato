import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable ,  throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../_models';
import { config } from '../../config';  

@Injectable({ providedIn: 'root' })
export class ApiRequestService {
    


    constructor(private http: HttpClient) { }

  





}