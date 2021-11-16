import {Component, OnInit} from '@angular/core';
import {Project} from "../models/project.model";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CategoryDialogComponent} from "./category-dialog/category-dialog.component";
import {CategoryService} from "./services/category.service";

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
    this.getCategories();
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

    dialog.componentInstance.submitEvent.subscribe(_ => {
      this.getCategories();
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(categories => {
      this.data = categories;
    })
  }
}
