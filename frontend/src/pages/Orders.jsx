import React, { use, useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Input_block from '../components/Input_block'
import Selected_input from '../components/Selected_input'
import Custom_bill_sales from '../components/Custom_bill_sales'
import Heading from '../components/Heading'
import axios from 'axios'
import Order_detail_block from '../components/Order_detail_block'

const Orders = () => {
    const [selected,setselected] = useState('')
    const [orders,setorders]= useState([])
    const [product,setproduct]=useState('')
    const [purity,setpurity]=useState('')
    const [weight,setweight] = useState('')
    const [rate,setrate] = useState("")
    const [total,settotal] = useState('');
    const [deposit,setdeposit] = useState('');
    const [ph_no,setph_no] = useState('')
    const [address,setaddress]= useState('')
    const now = new Date();
    const formated_date = now.toLocaleDateString('en-GB');
    const [search_input,setsearch_input] = useState("")
    

    const addorder =async()=>{
        await axios.post('http://localhost:4444/orders/addorder',{
            email:'1@gmail.com',
            date: formated_date,
            ph_no:ph_no,
            address:address,
            product:product,
            purity:purity,
            weight:weight,
            rate:rate,
            deposit:deposit,
            total:total,
        })
        displayorders()
        
    }
    const displayorders = async()=>{
        const response = await axios.get('http://localhost:4444/orders')
        setorders(response.data)
    }
    useEffect(()=>{
        displayorders()
    },[])
    const findBillByph_no = async(search_input)=>{
        if(search_input === '' || isNaN(parseFloat(search_input))){
            displayorders()
            return;
        }
        try{
            const response = await axios.get(`http://localhost:4444/orders/phoneno/${parseFloat(search_input)}`)
            setorders(response.data)
        }
        catch(err){
            console.error("Error adding sale:", err);
            alert("Failed to find sales");
        }
    }
    const deletebillbyid = async(selected)=>{
        if(selected === '' || isNaN(parseInt(selected))){
            displayorders()
            alert('No order selected')
            return;
        }
        try{
            await axios.get(`http://localhost:4444/orders/deleteorder/${parseInt(selected)}`)
            await displayorders()
        }
        catch(err){
            console.error("Error adding sale:", err);
            alert("Failed to find sales");
        }
    }
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Header/>
            <div className='h-[90%] flex'>
                <Navbar/>
                <div className='h-full w-[93%] flex'>
                    <div className='w-[40%] h-160 mr-1 m-3 bg-[#202020] rounded-2xl flex flex-col space-y-3 items-center justify-around shadow-[#f9fafb] border-amber-50'>
                        <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Order Details</h1>
                        <div className='h-[70%] w-[90%] flex flex-col justify-around'>
                            <Selected_input label='Product' value={product} onChange={(e)=>{
                                setproduct(e.target.value)
                            }}
                            options={["","bali","braclet","chain","bangle","nth","tikka","god figure","pendant set","ring","tops","Not in list"]}/>
                            <Selected_input label ='Purity' value={purity} onChange={(e)=>setpurity(e.target.value)}
                            options={['','18k','22k','24k','silver']}/>
                            <Input_block label='Approx Weight' value={weight}onChange={(e)=>{setweight(e.target.value)}}/>
                            <Input_block label='Rate' value={rate}onChange={(e)=>setrate(e.target.value)}/>
                            <Input_block label = 'Approx Total' value={total}onChange={(e)=>settotal(e.target.value)}/>
                            <Input_block label='Advance Deposit' value={deposit} onChange={(e)=>setdeposit(e.target.value)}/>
                            <Input_block label="Customer Ph no." value={ph_no} onChange={(e)=>setph_no(e.target.value)}/>
                            <Input_block label="Address" value={address} onChange={(e)=>setaddress(e.target.value)}/>
                        </div>
                        <button onClick={async()=>{
                            await addorder()
                            settotal('')
                            setweight('')
                            setrate('')
                            setdeposit('')
                            setph_no('')
                            setaddress('')
                        }} className={` flex items-center justify-center h-[8%] w-[45%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-400 border-black text-2xl`}> Place Order</button>
                    </div>
                    <div className='flex flex-col items-center w-[57%] h-160 m-3 bg-[#202020] shadow-[#f9fafb] border-amber-50 rounded-2xl space-y-8'>
                        <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Orders</h1>
                        <div className='h-[7%] w-[90%]  flex justify-between items-center'>
                            <Searchbar search_input={search_input}
                            findsales={findBillByph_no}
                            setsearch_input={setsearch_input}
                            />
                            <button onClick={()=>{
                                deletebillbyid(selected)
                            }}
                            className={` flex items-center justify-center h-10 w-50 bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-500 border-black `}>Order Completed</button>
                        </div>
                        <div className='  h-[70%] w-[90%] overflow-auto  space-y-3'>
                            <div className='h-10 w-[97%] bg-[#262626] shadow-[#262626] shadow-m rounded-xl flex items-center justify-around hover:border-1 hover:border-white sticky top-0'>
                                <Heading label={"Date"}/>
                                <Heading label={"Ph. no."}/>
                                <Heading label={"Address"}/>
                                <Heading/>
                            </div>
                            {orders.map((order,idx)=>{
                                return <Order_detail_block data ={order} setselected={setselected} selected={selected}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders