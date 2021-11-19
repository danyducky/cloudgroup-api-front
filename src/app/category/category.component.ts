import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../models/project.model";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() Categories!: Project[];
  @Output() checkboxClickEvent = new EventEmitter();

  constructor(private taskService: TaskService) {
  }

  onCheckboxClick(categoryId: number, todoId: number) {
    this.taskService.toggleTask(categoryId, todoId)
      .subscribe(_ => {
        this.checkboxClickEvent.emit({categoryId, todoId})
      })
  }
}
