// import { useState } from "react";
// import { heroes } from "../../data/heroes";
import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1>DcScreen</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </div>
  );
};
