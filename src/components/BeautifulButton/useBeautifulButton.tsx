import { useEffect, useState } from "react";

type Props = {
    id: number;
}

export function useBeautifulButton({ id } : Props) {
    const [texto, setTexto] = useState("Hola Mundo");

    useEffect(() => {
        getText();

        async function getText() {
            const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            setTexto(json.title);
        }
    }, [id]);

    return { texto };
} 