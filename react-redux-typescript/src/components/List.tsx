import React from "react";
import { Person } from "../store/features/people/peopleSlice";
import { useAppSelector } from "../store/store";
import { useQuery } from "react-query";


const retrieveTodos = async () => {
  const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return response.json();
};

const List = () => {
  const persons = useAppSelector((state) => state.persons.persons);
  
  const {
    data:todos,
    error,
    isLoading,
} = useQuery("todosData", retrieveTodos);

console.log(todos)


  return (
    <div className="rounded-md shadow border m-2 p-2">
      <p>This is List Components</p>
      <table className="rounded-md">
        <thead>
          <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white  ">
            <th className="p-2 border rounded">Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person:Person) => (
            <tr className="even:bg-slate-50" key={person.name}>
              <td className="p-2">{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;