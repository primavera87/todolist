import React, {useEffect, useState} from 'react';
import { todolistsAPI } from '../../src/api/todolist-api';

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "1bbb23cf-855e-43a8-b605-3815e33f0247"
    }
    
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>({name: "chicken"})
    useEffect(() => {
        //здесь мы будем делать запрос и ответ закидывать в стейт
        //который в виде строки будем отображать в div-ке
        todolistsAPI.getTodolists()
            .then( (res) => {
                debugger;
                setState(res.data);
            })
    }, [])

return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.createTodolist("chicken")
            .then( (res) => {
                debugger;
                setState(res.data);
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '6cad3fb0-08c8-4580-bc6c-ca7438ad5d80';
        todolistsAPI.deleteTodolist(todolistId)
            .then( (res) => {
                debugger;
                setState(res.data);
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = ''
        todolistsAPI.updateTodolist(todolistId, "great chicken")
            .then( (res) => {
                debugger;
                setState(res.data);
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}



export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '8aa5a525-4018-47c4-b175-c044d6925b98';
        todolistsAPI.getTasks(todolistId)
            .then( (res) => {
                debugger;
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const createTask = () => {
        todolistsAPI.createTask(todolistId, "YoYo")
            .then((res) => {
                setState(res.data)
            })
    }
    // useEffect(() => {
    //     const todolistId = '8aa5a525-4018-47c4-b175-c044d6925b98';
    //     todolistsAPI.createTask(todolistId, "Js")
    //         .then( (res) => {
    //             debugger;
    //             setState(res.data);
    //         })
    // }, [])
    return <div> {JSON.stringify(state)}
        <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}} />
        <button onClick={createTask}>create task</button>
    </div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<any>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const updateTask = () => {
        todolistsAPI.updateTask(todolistId, taskId, "Cool")
            .then((res) => {
                setState(res.data);
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}} />
            <input placeholder={"taskId"} value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value)}} />
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        todolistsAPI.deleteTask(todolistId, taskId)
            .then( (res) => {
                debugger;
                setState(res.data);
            })
    }

return <div> {JSON.stringify(state)}
    <div>
        <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {setTodolistId(e.currentTarget.value)}} />
        <input placeholder={"taskId"} value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value)}} />
        <button onClick={deleteTask}>delete task</button>
    </div>

</div>
}