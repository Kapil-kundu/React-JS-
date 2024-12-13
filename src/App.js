import './App.css';
import Header from "./Mycomponents/Header";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import AddTodo from "./Mycomponents/AddTodo";
import React, { useState, useEffect } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete= (todo) => {
    console.log("I am onDelete of todo", todo);
    // Deleting this way in react does not work
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }
  const addTodo = (title, desc)=> {
    let sno;
    console.log("I am adding this todo", title, desc)
    if(todos.length == 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1] + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos]= useState(initTodo);
  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  return (
  <>
      <Header title = "My Todos List"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
  </>
  );
}

export default App;
