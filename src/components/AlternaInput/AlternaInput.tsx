import React, { useCallback, useEffect, useRef } from "react";

interface Props {
    count: number;
    action?: (text: string | undefined) => void;
}

export default function AlternaInput({count, action} : Props) { 
    const inputRef = useRef<HTMLInputElement>(null);

    console.log("AlternaInput was rendered!", Date.now());

    useEffect(() => {
        inputRef.current?.focus();        
    }, [])

    const onClick = useCallback(() => {
        console.log(inputRef.current?.value);
        action?.(inputRef.current?.value);
    }, [action]);

    // Mounting
    // Rendering
    // Unmounting

    return (
      <div className="AlternaInput">
        <div>Counter: {count}</div>
        <input ref={inputRef} type="text" placeholder="Enter your search" />
        <button onClick={onClick}>Submit</button>
      </div>
    );
 }