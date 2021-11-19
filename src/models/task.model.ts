export type Task = {
  id: number;
  text: string;
  is_completed: boolean;
  created_at: Date;
  updated_at: Date;
}

export type TaskUpdate = {
  status: boolean;
  task: Task;
}
