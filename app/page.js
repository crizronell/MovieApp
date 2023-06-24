import Banner from "./Components/Banner";
import MovieGenre from "./Components/MovieGenre";

export default async function Home() {
  return (
    <main>
      <Banner />
      <MovieGenre />
    </main>
  );
}
