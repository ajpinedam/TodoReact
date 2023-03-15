import { useEffect, useMemo, useState } from "react";
import './AlternaTodoList.css';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface Props {
    filterText: string | undefined;
}

export default function AlternaTodoList({filterText} : Props) {
    const [todos, setTodos] = useState<Todo[]>([]);
    
    // we will replace with useQuery
    useEffect(() => {
        getTodos();

        // axios
        async function getTodos() {
           const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
           const json = await response.json();
           console.log(json);
           setTodos(json);
        }
      }, []);

    const specialTodos = useMemo(() => {    
        // aqui dentro van operacion que tomen mucho tiempo
       // o memoria para ejecutarse
        
        console.log('Use Memo was called!', Date.now());

        if(!filterText) {
            return todos;
        }

        return todos.filter((t) => t.title.startsWith(filterText))
      }
      , [todos, filterText]);

return (
    <div>
        <ul className="todo-list">
        {        
        specialTodos && (specialTodos.map((t) => (
            <li className="todo-list-item" style={{
            color: 'green'
            }} key={t.id}>{t.id} - {t.title}              
            </li>
        )))
        }
    </ul>    
  </div>
)
}