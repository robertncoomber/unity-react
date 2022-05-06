function List(props) {
    const buttons = props.buttons;
    const listItems = buttons.map((button) => (
        <div>
            <button
                onClick={() => sendMessage("button", button.name)}
                key={button.name}
            >
                {button.name}
            </button>
        </div>
    ));

    return <div>{listItems}</div>;
}

function sendMessage(type, message) {
    console.log(type + message);
    window.vuplex.postMessage({
        type: type,
        message: message,
    });
}

export default List;
