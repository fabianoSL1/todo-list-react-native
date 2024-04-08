import { createContext, useState, useEffect, ReactNode } from "react";
import { Alert } from "react-native";


export type Todo = {
    done: boolean;
    text: string;
}

type TodoContext = {
    todoList: Todo[],
    doneCount: number,
    handlerAddTodo: (todo: Todo) => void,
    handlerDoneTodo: (todo: Todo) => void,
    handlerRemoveTodo: (todo: Todo) => void
}

export const todoContext = createContext<TodoContext|null>(null);

export default function TodoProvider({children}: {children: ReactNode}) {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [doneCount, setDoneCount] = useState<number>(0);
    
    useEffect(() => {
        const doneList = todoList.filter(todo => todo.done);
        
        setDoneCount(doneList.length);
    }, [todoList])

    function handlerAddTodo(todo: Todo) {
        const exist = todoList.find(item => item.text == todo.text);

        if (exist) {
            return Alert.alert("essa tarefa já existe")
        }
        
        setTodoList(prev => [
            ...prev,
            todo
        ]);
    }

    function handlerDoneTodo(todo: Todo) {
        setTodoList(prev => [
            ...prev.filter(item => item.text != todo.text),
            todo
        ])
    }

    function handlerRemoveTodo(todo: Todo) {
        setTodoList(prev => prev.filter(item => item.text != todo.text))
    }

    return (
        <todoContext.Provider value={{
            todoList,
            doneCount,
            handlerAddTodo,
            handlerDoneTodo,
            handlerRemoveTodo
        }}>
            {children}
        </todoContext.Provider>
    )
}