import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../../models/project.model";
import {TaskUpdate} from "../../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  toggleTask(categoryId: number, todoId: number) {
    return this.http.patch<TaskUpdate>(`projects/${categoryId}/todo/${todoId}`, null)
  }

  addOrCreate(categoryId: number, categoryTitle: string, text: string) {
    return this.http.post<Project>('todos', {
      categoryId,
      categoryTitle,
      text
    })
  }
}
