import React, { useState, useEffect } from 'react'
import PostsTable from './PostsTable'
import { getAllItems, deleteItem } from '../utils/api'

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [headings, setHeadings] = useState([]);
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


    return (
        <div>
            <h1>Hello</h1>
            <div>
                <PostsTable postsData={items} onDelete={handleDelete} />
            </div>
        </div>
    )
}

export default HomePage
