import { TodolistType } from "../App";
import { ActionType } from "./user-reducer";



export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST'{
            return ()...state,

        }

        default:
            throw new Error('I don\'t understand this type');
    }
};
