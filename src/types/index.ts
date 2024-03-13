export type Explanation = {
  fact: string;
  length: number;
};

export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type Todos = Array<Todo>;
