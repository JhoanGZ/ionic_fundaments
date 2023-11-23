import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  provideIn: 'root';
})

export class ApiService {
  constructor(private http: HttpClient){}
}

