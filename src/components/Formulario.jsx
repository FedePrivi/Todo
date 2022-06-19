
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../hooks/useFormulario";


const Formulario = (props) => {
//   Formulario = ({agregarTodo}) => {} lo mismo que en la linea 5 pero desustructurando las props(si se hace de esta forma al llamar a la funcion tengo q sacar el props.)
// console.log(props);
  
    const initialState = {
        nombre: '',
        descripcion:'',
        estado:'pendiente',
        prioridad: false
    }

    // const [todo, setTodo] = useState(initialState);  lo saco porque lo traigo del hook personalizado de useFormulario.js y simplemente pongo:

    const [inputs, handleChange, reset] = useFormulario(initialState)



    // console.log(useState(initialState)[0]);
    // console.log(todo);
    // console.log(todo.estado);

    const {nombre, descripcion, estado, prioridad} =  inputs; //todo;


    const handleSubmit = (e) => {
        e.preventDefault()   
        // console.log(todo);
        if (!nombre.trim()) {
            e.target[0].focus();
            Swal.fire({
                title: '¡Error!',
                text: 'No deje nombre en blanco ',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            return           
        }
        if (!descripcion.trim()) {
            e.target[1].focus();
            Swal.fire({
                title: '¡Error!',
                text: 'No deje descripcion en blanco ',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            return    
        }
        // console.log(todo);
        Swal.fire({
            title: '¡Enviado!',
            text: 'Formulario enviado con exito',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        props.agregarTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad: prioridad,
            id: uuidv4(),
        })

        //setTodo(initialState) //es simplemente para resetear el formulario al enviarlo
                                //pero lo saco porque traigo del hook personalizado en useFoormulario la funcion:
                                // console.log(todo);
    
        reset()

    }


//    cortamos el handleChange y lo pasamos al hook useFormulario.js pero en este caso lo estamos llamando en los elementos jsx.




 return (
    <>
       <div>Formulario</div>

        <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-2"
              name="nombre"
              placeholder="Ingrese todo nombre"
              id="nombre"
              value={nombre} //value={todo.nombre} pero podemos colocar solo nombre porque hicimos la destructuracion del todo en la linea 28
              onChange={handleChange}
            />

            <textarea
                name="descripcion"
                placeholder="Descripcion del todo"
                className="form-control mb-2"
                value={descripcion}
                onChange={handleChange}
            />

            <select 
                className="form-control mb-2"
                name="estado"
                value={estado}
                onChange={handleChange}
                >
                
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
            </select>

            <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault" 
                  name="prioridad"
                  checked={prioridad}
                  onChange={handleChange}
                  />

                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault">
                         Prioritario
                </label>
            </div>

            <button className="btn btn-primary"> Agregar </button>    

    
        

        </form>
    </>
 )
}

export default Formulario
