"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import type { NewTodo } from "@/types";

const Form = () => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const newTodoMutation = useMutation({
    mutationFn: async (newTodo: NewTodo) => {
      const response = await fetch(`http://localhost:4000/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const todo = await response.json();
      return todo;
    },
  });

  const addTodoHandler = () => {
    newTodoMutation.mutate(
      {
        title,
        content,
      },
      {
        onSuccess: () => {
          alert("성공적으로 데이터가 입력되었습니다.");
          setTitle("");
          setContent("");

          queryClient.invalidateQueries({
            queryKey: ["todos"],
          });
        },
      }
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodoHandler();
      }}
    >
      <div>
        <label htmlFor="title">Title : </label>
        <input
          className="text-blue-700 rounded"
          id="title"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
      </div>
      <div>
        <label htmlFor="content">Content : </label>
        <input
          className="text-blue-700 rounded"
          id="content"
          type="text"
          value={content}
          onChange={onChangeContent}
        />
      </div>
      <button className="p-2 m-2" type="submit">
        저장하기
      </button>
    </form>
  );
};

export default Form;
