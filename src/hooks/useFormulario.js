import { useState } from "react"

export const useFormulario = (initialState = {}) => {

    const [inputs, setInputs] = useState(initialState)



    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        // console.log([name]);
        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value

        }))
    }

    const reset = () => {
        // console.log(inputs);
        // console.log(initialState);
        setInputs(initialState)
    }


    return [inputs, handleChange, reset];
}
