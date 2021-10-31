import React, { useState } from 'react';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import { useDelivery } from '../../contexts/DeliveryProvider';
import { useOrder } from '../../contexts/OrderProvider';
import useAuth from '../../hooks/useAuth';
import TextField from './Form';
import OrderCard from './OrderCard';
import OrderPrice from './OrderPrice';

const PlaceOrder = () => {
    const { order, setOrder } = useOrder();
    const { input, setInput } = useDelivery();
    const { disabled, setDisabled } = useDelivery();
    const history = useHistory();
    const { user } = useAuth();

    const [change, setChange] = useState({
        country: '',
        roadNo: '',
        flatno: '',
        name: `${user.displayName}`
    })

    //handle Change 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setChange((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            country: change.country,
            roadNo: change.roadNo,
            flatno: change.flatno,
            name: change.name
        })
        swal("Information Updated!", "Your shipping details updated successfully!", "success")
        setDisabled(false)
    }
    return (
        <div className="bg-yellow-100">
            <div className="bg-gray-900 h-16"></div>
            <div className="max-w-screen-xl py-20 mx-auto px-4 banner-bg-4">

                {order.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {/* left side form  */}
                            <div className="col-span-1">
                                <div className="flex flex-col mt-20">
                                    <h1 className="text-2xl  pb-4 border-b border-gray-500 text-gray-700">Edit Delivery Details</h1>
                                    <form className="my-4" onSubmit={handleSubmit}>
                                        <div className="flex flex-col space-y-3">
                                            <TextField
                                                type="text"
                                                placeholder="Country and District"
                                                name="country"
                                                value={change.country}
                                                onChange={handleChange}
                                                required
                                            />
                                            <TextField
                                                type="text"
                                                placeholder="Road Name and Road No"
                                                name="roadNo"
                                                value={change.roadNo}
                                                onChange={handleChange}
                                                required
                                            />
                                            <TextField
                                                type="text"
                                                placeholder="Flat, suite or floor"
                                                name="flatno"
                                                value={change.flatno}
                                                onChange={handleChange}
                                                required
                                            />
                                            <TextField
                                                type="text"
                                                placeholder="Delivery to"
                                                name="name"
                                                value={change.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <button className="w-full px-6 py-3 rounded-lg bg-red-500 text-white poppins ring-red-300 focus:ring-4 transition duration-500">Save & Continue</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* right side  */}
                            <div className="col-span-1">
                                <div className="glass p-6 box-border rounded-lg">
                                    {/* order details  */}
                                    <div className="flex flex-col space-y-4 mb-3">
                                        <p className="poppins text-gray-700">Deliver Place :  <span className="font-semibold text-black">{input.country ? `${input.country}` : '-----'}</span></p>
                                        <p className="poppins text-gray-700">Arriving in 20-30 min</p>
                                        <p className="poppins text-gray-700">Road <span className="font-semibold text-black">{input.roadNo ? `${input.roadNo}` : '-----'}</span> </p>
                                        <p className="poppins text-gray-700">Floor :  <span className="font-semibold text-black">{input.flatno ? `${input.flatno}` : '-----'}</span> </p>
                                        <p className="poppins text-gray-700">Deliver to :  <span className="font-semibold text-black">{input.name ? `${input.name}` : '-----'}</span> </p>
                                    </div>
                                    {/* orders  */}

                                    <div className=" flex flex-col space-y-3 h-64 overflow-y-scroll orderContainer " >
                                        {order.map(item => (
                                            <OrderCard
                                                key={item.id}
                                                {...item}
                                            />
                                        ))}
                                    </div>
                                    {/* price  */}
                                    <OrderPrice {...order} />
                                    {/* place order button  */}
                                    <div>
                                        {disabled ? (
                                            <button disabled="disabled" className="w-full px-6 py-3 rounded-lg bg-red-400 text-white poppins ring-red-300 focus:ring-4 transition duration-500 opacity-40">Place Order</button>
                                        ) : (
                                            <button className="w-full px-6 py-3 rounded-lg bg-red-500 text-white poppins ring-red-300 focus:ring-4 transition duration-500" onClick={() => {
                                                swal("Congratulations!!!", `You have order ${order.length} times successfully`, "success")
                                                history.push('/order-successful');
                                                setOrder([]);
                                            }}>Place Order</button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="pt-24">
                        <h1 className="text-center text-5xl text-primary">No Order has added!!</h1>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default PlaceOrder;