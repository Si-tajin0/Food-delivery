import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import swal from 'sweetalert';

const UpdateProduct = () => {
    const history = useHistory();
    const [food, setFood] = useState({});
    const { id } = useParams();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://dark-witch-41365.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    swal("Updated", "Update Successfully!", "success");
                }
                history.push('/manage-product');
            })
    }


    useEffect(() => {
        fetch(`https://dark-witch-41365.herokuapp.com/foodsDetail/${id}`)
            .then(res => res.json())
            .then(result => setFood(result));
    }, [id])
    return (
        <div className="banner-bg-1">

            <h1 className="text-white pt-24 text-center text-5xl">Update Food</h1>
            <div >
                <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-6 mx-auto w-2/6" onSubmit={handleSubmit(onSubmit)}>

                    <input className="p-2" type="name" defaultValue={food?.name} {...register("name")} placeholder="Name" />
                    <input className="p-2" type="number" defaultValue={food?.price} {...register("price", { required: true })} placeholder="Price" />
                    <input className="p-2" type="url" defaultValue={food?.url} {...register("url", { required: true })} placeholder="Image URL" />
                    <select className="p-2 text-yellow-800" {...register("Foodtype")}>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Hot Pizza">Hot Pizza</option>
                        <option value="Asian Food">Asian Food</option>
                        <option value="Raw Meat">Raw Meat</option>
                    </select>
                    <textarea className="p-2" defaultValue={food?.description} {...register("description", { required: true })} placeholder="Description" />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="mx-auto w-2/6 p-2 rounded bg-yellow-500 hover:bg-white cursor-pointer transition duration-700 " type="submit" />
                </form>
            </div>



        </div>
    );
};

export default UpdateProduct;