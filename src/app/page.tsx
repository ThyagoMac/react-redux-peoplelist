"use client"

import { usePeopleList } from "@/reducers/peopleList";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [peopleList, dispatchPeopleList] = usePeopleList();
  const [name, setName] = useState<string>("");

  const handleAddPeopleBtn = () => {
    if(!name) return;
    dispatchPeopleList({
      type: "ADD",
      payload: {
        name: name
      }
    })
    setName("");
  }

  const handleDeletePeopleBtn = (id: string) => {
    if(!id) return;

    dispatchPeopleList({
      type: "DEL",
      payload: {
        id: id
      }
    })
  }

  const handleSortPeopleBtn = () => {
    dispatchPeopleList({type: "SORT"})
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <main className="max-w-5xl min-h-screen m-auto p-10">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex items-center justify-center">
          <input
            className="p-2 bg-white text-black rounded-md"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <button
            className="px-3 py-2 bg-blue-500 rounded-md ml-1"
            onClick={handleAddPeopleBtn}
          >
            Add People
          </button>
          <button
            className="px-3 py-2 bg-blue-500 rounded-md ml-1"
            onClick={handleSortPeopleBtn}
          >
            Sort People
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>People list</h1>
          {peopleList.map((people) => (
            <li className="my-2" key={people.id}>
              {people.name}
              <button className="ml-2 px-2 py-1 bg-red-700 rounded-md" onClick={() => handleDeletePeopleBtn(people.id)}>Delete</button>
            </li>
          ))}
        </div>
      </div>

    </main>
  );
}