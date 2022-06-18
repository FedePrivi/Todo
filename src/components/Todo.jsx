const Todo = (props) => {
    // console.log(props);
    const {nombre, descripcion, estado, prioridad} = props.todo

    
  return (
    <>
        {/* <h2>{props.todo.nombre}</h2> */}
        <li className="list-group-item d-flex justify-content-between align-items-start mt-2">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.todo.nombre} {estado ? 'Finalizado' : 'Pendiente'}</div>
                     <p>{descripcion}</p> {/*puedo colocar solo descripcion porque hice una destructuracion en la linea 3 del todo en el div del nombre lo hice sin destructuracion para q se note la diferencia */}

                    <div>
                        <button className="btn btn-danger me-2" onClick={() => props.eliminarTodo(props.todo.id)}>Eliminar</button>
                        <button className="btn btn-warning" onClick={() => props.editarTodo(props.todo.id)}>Editar</button>


                    </div>

                </div>
            <span className="badge bg-primary rounded-pill">
                 {prioridad && "Prioritario"}  
            </span>
        </li>
    </>
  )
}

export default Todo;