import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import {Project} from "../../models/project.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Project[]> {
    return this.http.get<Project[]>('/projects')
  }
}
