import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RootObject} from "../models";
import { ANALYTICS_API } from "../utils/config";

@Injectable({
  providedIn: 'root'
})
export class DataRepositoryService {

  data : RootObject[] = [];

  constructor(private http: HttpClient) {
   }

  async getData() {
    await this.http.get<RootObject[]>(ANALYTICS_API)
               .toPromise()
               .then(response => this.data = response)
    return this.data;
  }
}
