import { PersonType } from "@/types/PersonType";
import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

type ActionType = {
  type: string;
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
          state.push({
            id: uuidv4(),
            name: action.payload?.name
          })
        }
      break;
  
    case "DEL":
      if(action.payload?.id) {
        state = state.filter(
          item => item.id !== action.payload?.id
        );
      }

      break;

    case "ORDER":
      //state = state.sort((a, b) => (a.name > b.name) ? 1 : -1);
      state = state.sort((a, b) => a.name.localeCompare(b.name));

      break;
  }
  return state;
}

export const usePeopleList = () => {
  return useReducer(reducer, initialState)
}