import {Component, OnInit} from '@angular/core';
import {Project} from "../models/project.model";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CategoryDialogComponent} from "./category-dialog/category-dialog.component";
import {CategoryService} from "./services/category.service";
import {TaskUpdate} from "../models/task.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Project[] = [];

  constructor(private dialog: MatDialog,
              private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.data = categories;
    })
  }

  openDialog(): void {
    const config = new MatDialogConfig();

    config.disableClose = false;
    config.autoFocus = true;

    config.width = "500px";
    config.height = "250px";
    config.data = {
      categories: this.data
    }

    let dialog = this.dialog.open(CategoryDialogComponent, config);

    dialog.componentInstance.submitEvent.subscribe(category => {
      let index = this.data.findIndex(c => c.id === category.id)

      if (index === -1)
        this.data.push(category)
      else
        this.data[index] = category
    })
  }

  onCheckboxClick(payload: any): void {
    const category = this.data.find(c => c.id === payload.categoryId);
    const todo = category?.tasks.find(t => t.id === payload.todoId);

    if (todo)
      todo.is_completed = !todo.is_completed
  }
}
