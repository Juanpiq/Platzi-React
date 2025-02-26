import Image from "next/image";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import TodoFloatingButton from "./TodoFloatingButton"

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex flex-col m-5 gap-10">
      <TodoCounter total={18} completed={5}/>

      <TodoSearch/>

      <TodoList>
        <TodoItem text={"Cortar cebollas"}/>
        <TodoItem text={"Hola Mundo"}/>
        <TodoItem text={"Maracuyá"}/>
      </TodoList>

      <TodoFloatingButton/>
    </div>
    </>
  );
}
