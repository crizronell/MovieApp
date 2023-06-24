import React from "react";
import Link from "next/link";
import Image from "next/image";

async function Banner() {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_networks=213&page=1`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();
  const Getrandom = res.results[Math.floor(Math.random() * res.results.length)];
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <Link href={`/netflix/${Getrandom.id}`} legacyBehavior>
      <div
        className="text-white relative w-auto h-[35rem] cursor-pointer 
       ">
        <Image
          src={imagePath + Getrandom.backdrop_path}
          fill
          alt={Getrandom.id}
          quality={100}
          priority></Image>

        <div className=" absolute ml-[30px] top-[140px]   ">
          <h1 className="text-2xl font-extrabold">
            {Getrandom.name || Getrandom.original_name}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default Banner;
