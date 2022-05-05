import ListButton from "./ListButton";
import data1, { data2 } from "./modelData";
import List from "./List";
import Control from "./Control";
import { useEffect, useState } from "react";

function App() {
    const [currentPage, setCurrentPage] = useState("Home");
    const [buttonsList, setButtonsList] = useState(data1.buttons);
    const [message, setMessage] = useState(false);

    const page =
        currentPage === "Home" ? <List buttons={buttonsList} /> : <Control />;

    function listener(event) {
        let newObject = JSON.parse(event.data);
        console.log("message received: " + newObject.message);
        setMessage(newObject.message);
    }

    // set add event listener and move event listener in here
    useEffect(() => {
        window.vuplex.addEventListener("message", listener);

        return () => {
            window.vuplex.removeEventListener("message", listener);
        };
    }, []);

    return (
        <div>
            <h1>Unity React App</h1>
            {page}
            <div>
                <button onClick={() => setCurrentPage("Control")}>
                    Go To Control
                </button>
                <button onClick={() => setCurrentPage("Home")}>
                    Go To Page
                </button>
                <button onClick={() => setButtonsList(data1.buttons)}>
                    use data 1
                </button>
                <button onClick={() => setButtonsList(data2.buttons)}>
                    use data 2
                </button>
            </div>
            <div>
                <h2>{message}</h2>
            </div>
        </div>
    );
}

export default App;
