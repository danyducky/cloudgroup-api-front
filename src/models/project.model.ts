import {Todo} from "./todo.model";

export type Project = {
  id: number;
  title: string;
  todos: Todo[];
}
