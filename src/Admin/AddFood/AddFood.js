import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import swal from 'sweetalert';

const AddFood = () => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://dark-witch-41365.herokuapp.com/addFoods`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    swal("Food Added!", "Food is added to the store!", "success");
                    history.push('/');
                }
                else {
                    swal("Unsuccessful !", "Food is not added to the store!", "error");
                }
            });
    }
    return (
        <div className="banner-bg-1">

            <h1 className="text-white pt-24 text-center text-5xl">Add Food</h1>
            <div >
                <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-6 mx-auto w-2/6" onSubmit={handleSubmit(onSubmit)}>

                    <input className="p-2" type="name" {...register("name")} placeholder="Name" />
                    <input className="p-2" type="number" {...register("price", { required: true })} placeholder="Price" />
                    <input className="p-2" type="url" {...register("url", { required: true })} placeholder="Image URL" />
                    <select className="p-2 text-yellow-800" {...register("Foodtype")}>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Hot Pizza">Hot Pizza</option>
                        <option value="Asian Food">Asian Food</option>
                        <option value="Raw Meat">Raw Meat</option>
                    </select>
                    <textarea className="p-2" {...register("description", { required: true })} placeholder="Description" />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="mx-auto w-2/6 p-2 rounded bg-yellow-500 hover:bg-white cursor-pointer transition duration-700 " type="submit" />
                </form>
            </div>



        </div>
    );
};

export default AddFood;