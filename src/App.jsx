import { fetchUnsplashImages,fetchPexelsImages } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen text-white w-full bg-gray-950 flex flex-row items-center gap-2 justify-center">
      <button
      className="bg-blue-500 px-4 py-2 rounded-md"
        onClick={async () => {
          const response = await fetchUnsplashImages("nature");
          console.log(response.data.results);
        }}
      >
        Get Images
      </button>
      <button
        className="bg-green-500 px-4 py-2 rounded-md"
        onClick={async () => {
          const response = await fetchPexelsImages("health");
          console.log(response.data.videos);
        }}
      >
        Get Videos
      </button>
    </div>
  );
};

export default App;
