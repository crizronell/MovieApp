import React from "react";
import Image from "next/image";
import Link from "next/link";

async function TopRated() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <h1 className="text-white font-serif text-2xl p-4">Top Rated</h1>
      <div className="flex gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide p-4">
        {res.results.map((movie) => (
          <Link href={`/movie/${movie.id}`} legacyBehavior>
            <Image
              src={imagePath + movie.backdrop_path}
              width={500}
              height={500}
              alt={movie.id}
              className=" cursor-pointer w-auto max-h-40 object-contain hover:scale-105 hover:ease-in delay-75 duration-200"
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default TopRated;
