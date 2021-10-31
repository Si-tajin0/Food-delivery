import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import swal from 'sweetalert';

const ManageProduct = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://dark-witch-41365.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);


    const handleDelete = (id) => {
        fetch(`https://dark-witch-41365.herokuapp.com/foodItem/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    swal("Successful!", "Deleted successfully!", "success");
                    const restFoods = foods.filter(item => item._id !== id);
                    setFoods(restFoods);
                }
            });
    }
    return (
        <div>
            <div className="bg-gray-900 h-16"></div>
            <div className="flex flex-col my-8 mx-8">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden sm:rounded-lg shadow-md">
                            <table className="min-w-full">
                                <thead className="bg-yellow-400">
                                    <tr>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foods.map(item => (
                                        <tr className="bg-white border-b" key={item._id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <img className="w-16" src={item.url} alt={item.name} />
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.name}
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                $ {item.price}
                                            </td>
                                            <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                                {item.Foodtype}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                                                <div className="flex items-center justify-center space-x-3">
                                                    <Link to={`/update/${item._id}`}>
                                                        <FiEdit className="cursor-pointer text-2xl text-green-600" />
                                                    </Link>
                                                    <AiOutlineDelete className="cursor-pointer text-2xl text-red-600" onClick={() => handleDelete(item._id)} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;