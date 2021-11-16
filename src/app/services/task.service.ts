import { Injectable } from '@angular/core';
import {client} from "../../services/client.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  toggleTask(categoryId: number, todoId: number) {
    return client.patch<number>(`/projects/${categoryId}/todo/${todoId}`)
  }

  addOrCreate(categoryId: number, categoryTitle: string, text: string) {
    return client.post<number>('/todos', {
      categoryId,
      categoryTitle,
      text
    })
  }
}
