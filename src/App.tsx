import React, { useState } from "react";
import axios from 'axios';
import owl from "./images/owl.svg";

// TYPES
import {Joke, Flag, Category} from './types/types';
import JokeItem from "./components/JokeItem";

function App() {
  const BASE_URL = "https://v2.jokeapi.dev/joke/Any?amount=10";

  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getJokes = async (event:React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`;
    const {data} = await axios.get(ENDPOINT);
    
    if(data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes)
    }

    setSearch("");

  };

  return (
    <div className="flex items-center  flex-col max-w-[80rem] mx-auto">
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-5xl font-semibold text-red-500 my-0 mx-8">Joker</h1>
        <img src={owl} alt="" className="w-24 h-24" />
      </div>

      <form className="py-10" onSubmit={getJokes}>
        <input
          type="text"
          placeholder="Search.."
          className="py-2 px-9 rounded-lg border-[2px] border-red-500 outline-none"
          onChange={handleChange}
          value={search}
        />
        <button className="py-2 px-4 mx-2 rounded-lg bg-red-500 font-semibold text-white">
          Submit
        </button>
      </form>

      {error && <p>Sorry, no jokes found.</p>}
      {jokes.length > 0 && /* @ts-ignore */ jokes.map(joke => (
        <JokeItem  key={joke.id} joke={joke}/>
      ))}
    </div>
  );
}

export default App;
