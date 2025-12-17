import { type MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";


function App() {
    // const [counter, setCounter] = useState<number>(0);

    const addCounter = (e: MouseEvent) => {
        console.log(e);
    };

    return (
        <>
            <Button onClick={addCounter}> Текст </Button>
            <Button onClick={addCounter} appearance="big">
                Текст
            </Button>
            <Input placeholder="email" />
        </>
    );
}

export default App;
