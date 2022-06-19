import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import  Todo  from "./Todo"


const TodoList = () => {

  const [todos, setTodos] = useState([])

 useEffect(() => {
    if (localStorage.getItem("Todos")) {
      setTodos(JSON.parse(localStorage.getItem("Todos")))  
    }
 },[])

 useEffect(() => {
    localStorage.setItem("Todos" , JSON.stringify(todos))
 }, [todos]) //este useEffect se ejecuta cada vez que se modifican los todos (el array con cada todo)

 

  const agregarTodo = (todo) => {
    // console.log(todo);
    
    setTodos((old) => [...old, todo])
    
  }
  // console.log(todos);

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id
      ))
  }

  const editarTodo = (id) => {
    const editarTodos = todos.map(item => (item.id === id ? {...item, estado: !item.estado} : item 
      ))

      
      setTodos(editarTodos) //editar todos es el nuevo array que se genero del map y llamamos a setTodos que modifica los todos con la edicion que hicimos en la funcion editarTodo
  }

  return (

    <>
    <Formulario agregarTodo={agregarTodo}/> 
    
      <ul className="list-group list-group-numbered">
        {
          todos.map(item => (
            <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
          ))
        }
      </ul>

    </>
)
}






export default TodoList