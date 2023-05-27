import { useState } from "react";
import { useListPhotosQuery } from "./app/services/photos";

function App() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching } = useListPhotosQuery(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data.photos) {
    return <div>No Photos</div>;
  }

  console.log(data.photos);

  return (
    <div>
      <ul>
        {data.photos.map((photo) => (
          <li key={photo.id}>{photo.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
