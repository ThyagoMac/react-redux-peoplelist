"use client"

import { usePeopleList } from "@/reducers/peopleList";

export default function Home() {
  const [peopleList, dispatchPeopleList] = usePeopleList();

  return (
    <main className="min-h-screen">
      <h1>People list:</h1>
      {peopleList.map((people) => (
        <li key={people.id}>{people.name}</li>
      ))

      }
    </main>
  );
}