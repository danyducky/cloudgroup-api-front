import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../../models/project.model";
import {client} from "../../services/client.service";
import {CategoryService} from "../services/category.service";
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
      .then(_ => this.checkboxClickEvent.emit())
  }
}
