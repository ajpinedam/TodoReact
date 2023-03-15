import React, { useEffect, useState } from "react";
import "./BeautifulButton.css";

interface Props {
  text: string;
  action?: () => void;
  onCountChange?: (count: number) => void;
}

//useState is a hook that allows you to use state in functional components (instead of class components)

//useEffect is a hook that allows you to use lifecycle methods in functional components (instead of class components)

//useMemo is a hook that allows you to use memoization in functional components (instead of class components)

// useCallback is a hook that allows you to use memoization in functional components (instead of class components)

// useRef is a hook that allows you to use references in functional components (instead of class components)


function BeautifulButton({action, onCountChange}: Props) {
  const [texto, setTexto] = useState("Hola Mundo");
  const [count, setCount] = useState(0);
  
// No segundo parametro dice a useEffect que corra siempre cuando el componente se renderiza

// [] array vacio, le dice a useEffect que corra solo una vez cuando el componente se renderiza la primera vez

//console.log("BeautifulButton was rendered!", Date.now());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/28")    
    .then(response => response.json())
    .then(json => {
      console.log('Data' + json);
      return json;
    })
    .then(json => setTexto(json.title))
    .catch(error => console.log(error))
  }, []);

  useEffect(() => {
    console.log("useEffect was run!", texto);
  }, [texto, count]);

  function onClick() {
    // console.log('Button clicked!', Date.now());
    // setTexto("I was changed");
    const newCount = count + 1;
    setCount(newCount);
    onCountChange?.(newCount);
    action?.();
  }

  return <button
  className="bbutton"
  style={{backgroundColor: "blue"}}
  onClick={onClick}>
      <div>{texto} {count} Times</div>
    </button>;
}

export default BeautifulButton;