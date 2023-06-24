import React from "react";
import Image from "next/image";

async function MovieDetails({ params }) {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";

  async function getMovieDetails() {
    const fetchMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );
    return fetchMovie.json();
  }

  async function getTrailer() {
    const fetchtrailer = await fetch(`
   https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`);
    return fetchtrailer.json();
  }

  const movie = await getMovieDetails();
  const trailer = await getTrailer();

  const OfficialTrailer = trailer.results.some(
    (item) => item.name === "Official Trailer"
  );

  console.log(OfficialTrailer);

  const findIndex = trailer.results.findIndex(
    (e) => e.name === "Official Trailer"
  );

  if (!OfficialTrailer) {
    console.log(" Official trailer");
  } else {
    console.log(" No Official trailer");
  }

  console.log(findIndex);

  for (var i = 0; i < trailer.results.length; i++) {
    if (trailer.results[i].name === "Official Trailer") {
      console.log("naay official trailer");
      break;
    } else if (!OfficialTrailer) {
      console.log("kuhaa ang 1st array kay walay available official trailer");
      break;
    }
  }

  return (
    <div className=" p-4 mx-auto container">
      <h1 className="text-white text-2xl">{movie.title}</h1>
      <h1 className="text-white">{movie.release_date}</h1>
      <h1 className="text-white">Runtime: {movie.runtime} Minutes</h1>
      <h1 className="text-white">Genre: {movie.genres[0].name}</h1>

      <h1 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded text-white">
        {movie.status}
      </h1>
      <h1 className="text-white text-justify ">{movie.overview}</h1>
      <div className="relative w-auto">
        <Image
          src={imagePath + movie.backdrop_path}
          width={1000}
          height={1000}
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

        {trailer.results.length > 0 && !OfficialTrailer && (
          <iframe
            width="950"
            height="534"
            title="video"
            src={
              "https://www.youtube-nocookie.com/embed/" + trailer.results[0].key
            }></iframe>
        )}

        {trailer.results.map((item, key) => {
          if (item.name === "Official Trailer") {
            return (
              <iframe
                key={key.id}
                width="950"
                height="534"
                title="video"
                src={
                  "https://www.youtube-nocookie.com/embed/" + item.key
                }></iframe>
            );
          }
        })}
      </div>
    </div>
  );
}

export default MovieDetails;
