import { useRef, useState } from "react"
import { ListItem } from "../ListItem/ListItem"
import { v4 as uuidv4 } from 'uuid';

export const List = () => {
    const [tasks, setTasks] = useState([]);
    const textRef = useRef();

    const addTask = () => {
        let text = textRef.current.value;
        setTasks([
            ...tasks, {
                id: uuidv4(),
                title: text
            }
        ]);
    }

    const addTaskViaEnter = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="d-flex mt-5">
                        <input ref={textRef} className="form-control me-sm-2"
                            type="search" placeholder="Enter a new task" onKeyDown={addTaskViaEnter} />
                        <button className="btn btn-secondary my-2 my-sm-0"
                            onClick={addTask}>
                            <i className="bi bi-plus-lg" style={{ color: "green" }}></i>
                        </button>
                    </div>
                    <div className="container mt-5">
                        <div className="row ul list-group">
                            {tasks.map((t) => {
                                return (
                                    <ListItem key={t.id} data={t} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}