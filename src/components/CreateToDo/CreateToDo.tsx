import React, { useRef } from "react";

interface createToDoProps { 
    addTask: (task: string)=>void;
}

const CreateToDo = ({ addTask }: createToDoProps) => {
    
  let textInput = useRef<any>(null);

    return <>
        <form onSubmit={(event) => {
            event.preventDefault();
            addTask(textInput.current.value);
            console.log(textInput?.current?.value);
        }}>
            <input type="text" className="border" placeholder="Agrega la tarea" ref={textInput} />
            <button type="submit">Agregar</button>
        </form>
    </>
};

export default CreateToDo;
