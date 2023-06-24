import React from "react";
import Image from "next/image";

async function NetflixDetails({ params }) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  async function getNetflix() {
    const netflixdetails = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`
    );
    return netflixdetails.json();
  }

  async function getTrailer() {
    const netflixtrailer = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}`
    );
    return netflixtrailer.json();
  }
  const netflix = await getNetflix();
  const trailer = await getTrailer();

  return (
    <div className=" p-4 mx-auto container">
      <h1 className="text-white text-2xl font-extrabold">{netflix.name}</h1>

      <h1 className="text-white">{netflix.first_air_date}</h1>
      <h1 className="text-white">
        Runtime: {netflix.last_episode_to_air.runtime} Minutes
      </h1>
      <h1 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded text-white">
        {netflix.status}
      </h1>

      <h1 className="text-white text-justify ">{netflix.overview}</h1>

      <div className="relative w-auto">
        <Image
          src={imagePath + netflix.backdrop_path}
          width={700}
          height={700}
          alt="icon"
          priority
          quality={100}
          className="w-auto object-fill mx-auto m-4  rounded-xl"
        />
      </div>

      <div className="flex items-center justify-center mt-4">
        {trailer.results.length === 0 && (
          <h1 className="text-red-900 text-3xl">No Available Trailer</h1>
        )}
        {trailer.results.length > 0 && (
          <iframe
            width="950"
            height="534"
            title="video"
            src={
              "https://www.youtube-nocookie.com/embed/" + trailer.results[0].key
            }></iframe>
        )}
      </div>
    </div>
  );
}

export default NetflixDetails;
