export type Explanation = {
  fact: string;
  length: number;
};

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export type NewTodo = {
  title: string;
  content: string;
};
