import React from "react";
import Card from "./Card";

const CardList = ({ members }) => {
  return (
    <div>
      {members.map((member, i) => {
        return (
          <Card
            id={members[i].id}
            key={members[i].id}
            name={members[i].name}
            song={members[i].song}
          />
        );
      })}
    </div>
  );
};

export default CardList;
