import ReviewList from "./ReviewList";
import mockItems from "../mock.json";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleBestClick = () => setOrder("rating");

  const handleNewClick = () => setOrder("createdAt");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div>
      <button onClick={handleBestClick}>베스트</button>
      <button onClick={handleNewClick}>최신순</button>

      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
