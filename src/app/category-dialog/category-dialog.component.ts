import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {TaskService} from "../services/task.service";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss'],
})
export class CategoryDialogComponent implements OnInit {
  @Output() submitEvent = new EventEmitter();

  constructor(private dialogRef: MatDialogRef<CategoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {categories: Project[]},
              private categoryService: CategoryService,
              private taskService: TaskService,
              private fb: FormBuilder) {
  }

  form: FormGroup = this.fb.group({
    task: ['', [
      Validators.required
      ]
    ],
    categoryId: [null, [
      Validators.required
      ]
    ],
    categoryTitle: [null, [
      Validators.required
      ]
    ]
  })

  isDesireToAdd: boolean = false;

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  onSubmit() {
    const task = this.form.controls['task']
    const categoryId = this.form.controls['categoryId']
    const categoryTitle = this.form.controls['categoryTitle']

    if (!this.isDesireToAdd && (task.invalid || categoryId.invalid))
      return false
    else if (this.isDesireToAdd && (task.invalid || categoryTitle.invalid))
      return false

    this.taskService.addOrCreate(categoryId.value, categoryTitle.value, task.value)
      .subscribe(category => {
        this.submitEvent.emit(category);
        this.dialogRef.close()
      })

    return true;
  }

  onSelectListChange(target: EventTarget | null) {
    if ((target as HTMLInputElement).value === 'add')
      this.isDesireToAdd = true
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.form.controls[controlName];

    return control.invalid && control.touched;
  }
}
