import React, { useState, useEffect } from 'react'
import PostsTable from './components/PostsTable'
import { getAllItems, createItem, updateItem, deleteItem } from './utils/api';

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getAllItems();
      setItems(allItems);
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    await deleteItem(id);
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== id));
  };

  const handleUpdate = async (item) => {
    const updatedItem = await updateItem(item);
    setItems(items.map((i) => (i.id === item.id ? updatedItem : i)));
  };

  return (
    <div>
      <h1>Hello</h1>
      <div>
        <PostsTable postsData={items} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>
    </div>
  )

}

export default App
