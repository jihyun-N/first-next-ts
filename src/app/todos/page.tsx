"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Form from "@/components/Form";
import type { Todo } from "@/types";
import useTodoQueries from "@/components/hooks/useTodoQueries";

const TodosPage = () => {
  const queryClient = useQueryClient();

  const { dataTodo, isLoading, isError, deleteTodos, toggleTodos } =
    useTodoQueries();
  console.log(dataTodo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>투두리스트</h1>
      <p>Here you can see all your todos</p>
      <section>
        <h2>새로운 투두 추가하기</h2>
        <Form />
      </section>

      <div>
        {dataTodo?.map((todo: Todo) => (
          <div
            key={todo.id}
            className="bg-blue-100 border border-blue-400 text-blue-700 p-8 m-2 rounded"
          >
            <h2>{todo.title}</h2>
            <p>{todo.content}</p>
            {todo.isDone ? <p>완료 ㅋㅋㅋ</p> : <p>아직 하는중 ㅋㅋ</p>}
            <button onClick={() => deleteTodos(todo)}>삭제</button>
            <button onClick={() => toggleTodos(todo)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosPage;
