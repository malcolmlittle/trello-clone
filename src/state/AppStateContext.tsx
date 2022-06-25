import { createContext, FC, FunctionComponent, PropsWithChildren, useContext } from "react";
import React from 'react';
import { type } from "os";

type Task = {
    id: string
    text: string
}

type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
}

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        },
    ]
}

// define the type for the context props
type AppStateContextProps = {
    lists: List[];
    getTasksByListId(id: string): Task[];
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
);

// define the context provider
export const AppStateProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const { lists } = appData

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    // return the layout
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            {children}
        </AppStateContext.Provider>
    )
}