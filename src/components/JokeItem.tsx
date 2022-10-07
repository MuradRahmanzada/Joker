import React from "react";
import { Joke, FlagKeys } from "../types/types";

interface JokeItemProps {
  joke: Joke;
}

const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {
  const flags = Object.keys(joke.flags)
    .filter((key) => joke.flags[key as FlagKeys])
    .join(" , ");

  return (
    <div className="bg-white rounded-md my-4 mx-0 w-[350px] md:w-[650px] h-[180px] text-xl overflow-hidden flex flex-col cursor-pointer">
      <div className="text-center bg-white p-3 flex flex-row justify-between items-center flex-auto">
        {joke.type === "single" ? (
          <p>{joke.joke}</p>
        ) : (
          <>
            <p className="text-base flex-1">{joke.setup}</p>
            <p className="text-base flex-1 font-semibold">{joke.delivery}</p>
          </>
        )}
      </div>

      <div className="bg-secondary text-white text-base flex justify-between p-3">
        <p>{joke.category}</p>
        <div>{flags}</div>
      </div>
    </div>
  );
};

export default JokeItem;
