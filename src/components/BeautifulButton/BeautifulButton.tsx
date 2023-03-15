import React, { useEffect, useState } from "react";
import "./BeautifulButton.css";
import { useBeautifulButton } from "./useBeautifulButton";

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
  const [count, setCount] = useState(0);
  
  const {texto} = useBeautifulButton({id: count});
  
// No segundo parametro dice a useEffect que corra siempre cuando el componente se renderiza

// [] array vacio, le dice a useEffect que corra solo una vez cuando el componente se renderiza la primera vez

//console.log("BeautifulButton was rendered!", Date.now());

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