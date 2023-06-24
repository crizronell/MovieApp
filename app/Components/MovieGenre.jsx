import React from "react";
import Popular from "./Popular";
import TopRated from "./TopRated";
import Upcoming from "./Upcoming";
import Romance from "./Romance";
import Comedy from "./Comedy";
import Horror from "./Horror";
import Netflix from "./Netflix";

function MovieGenre() {
  return (
    <div className="mx-auto container">
      <Netflix />
      <Popular />
      <TopRated />
      <Upcoming />
      <Romance />
      <Comedy />
      <Horror />
    </div>
  );
}

export default MovieGenre;
