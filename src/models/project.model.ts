import {Task} from "./task.model";

export type Project = {
  id: number;
  title: string;
  tasks: Task[];
}
