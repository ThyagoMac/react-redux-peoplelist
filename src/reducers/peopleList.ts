import { PersonType } from "@/types/PersonType";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

type ActionType = {
  type: "ADD" | "DEL" | "SORT";
  payload?: {
    id?: string;
    name?: string;
  }
}

const initialState: PersonType[] = []

const reducer = (state: PersonType[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
        if(action.payload?.name) {
          const newState = [
            ...state,
            {
              id: uuidv4(),
              name: action.payload?.name
            }
          ]
          
          return newState;
        }
      break;
  
    case "DEL":
      if(action.payload?.id) {
        let newState = [...state];
        newState = newState.filter(
          item => item.id !== action.payload?.id
        );

        return newState;
      }

      break;

    case "SORT":
      let newState = [...state]
      //newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);
      newState = newState.sort((a, b) => a.name.localeCompare(b.name));

      return newState;
      break;
  }

  return state;
}

export const usePeopleList = () => {
  return useReducer(reducer, initialState)
}