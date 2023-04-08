import React, { useState, useEffect } from 'react'
import { getItem } from '../utils/api';


const PostsTable = ({ postsData, onDelete, onEdit }) => {
    const [headings, setHeadings] = useState([])
    useEffect(() => {
        const fetchHeadings = async () => {
            const allHeadings = await getItem(1);
            setHeadings(Object.keys(allHeadings));
        };
        fetchHeadings();
    }, []);
    console.log(postsData)



    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
                <tr>
                    {headings.map((heading, index) => {
                        return (
                            <th key={index} scope="col" className=" sticky top-0 text-red-900 bg-gray-300 px-6 py-3" >
                                {heading}
                            </th>
                        )
                    })}
                    <th scope="col" className=" sticky top-0 text-red-900 bg-gray-300 px-6 py-3" >
                        Action
                    </th>
                </tr >
            </thead >
            <tbody>
                {postsData.map((postData, idx) => {
                    return (
                        <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {postData.userId}
                            </th>
                            <td className="px-6 py-4" >
                                {postData.id}
                            </td >
                            <td className="px-6 py-4" >
                                {postData.title}
                            </td >
                            <td className="px-6 py-4" >
                                {postData.body}
                            </td >
                            <td className="px-6 py-4" >
                                <button onClick={() => onDelete(postData.id)} className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                    <span className="px-3 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Delete
                                    </span>
                                </button>
                                <button onClick={()=> onEdit(postData)} data-modal-target="authentication-modal" className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                                    <span className="px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Edit
                                    </span>
                                </button>
                            </td >
                        </tr >
                    )
                })}
            </tbody >
        </table >

    )

}

export default PostsTable
