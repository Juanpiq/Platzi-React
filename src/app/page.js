"use client"
import Image from "next/image";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import TodoFloatingButton from "./TodoFloatingButton"
import React from "react";

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el Curso de Intro a React.js', completed: true},
  {text: 'El ayuwoki', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]

export default function Home() {
  const[todos, setTodos] = React.useState(defaultTodos); //estado para los elementos de la lista
  const [searchValue, setSearchValue] = React.useState(''); //estado para el search (input)

  const completedTodos = todos.filter(todo => todo.completed).length; //devuelve el tamaño del array de los elementos que cumplan con la condicion, con tal de que tenga un objeto este devuelve true
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todo.text.includes(searchText);
    } )

  console.log(searchValue);
  return (
    <>
    <div className="flex justify-center flex flex-col m-5 gap-10">
      

      <TodoCounter total={totalTodos} completed={completedTodos}/>

      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem
            key = {todo.text}
            text = {todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>

      <TodoFloatingButton/>
    </div>
    </>
  );
}
