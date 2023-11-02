
function Todo(props) {
    return (
        <li className="todo">
            <div className="stack-small">
                <div className="c-cb">
                    <input id="todo-0" type="checkbox" checked={props.state}/>
                    <label className="todo-label" htmlFor="todo-0">{props.name}</label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn">
                        Edit
                        <span className="visually-hidden">Eat</span>
                    </button>
                    <button type="button" className="btn btn__danger">
                        Delete
                        <span className="visually-hidden">Eat</span>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Todo;
