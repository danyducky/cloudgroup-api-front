import { Injectable } from '@angular/core';
import { from, Observable } from "rxjs"
import {client} from "../../services/client.service";
import {Project} from "../../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Observable<Project[]> {
    const response = client.get<Project[]>('/projects')
      .then(r => r.data);

    return from(response);
  }
}
