import React, { useMemo, useState } from 'react'
import Details from './Details'
import Input_block from './Input_block'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DataDetails = ({setfinalcost,setgstbill,element,product,setproduct,weightinput,setweightinput,rateinput,setrateinput,labourinput,setlabourinput}) => {
    const weight = parseFloat(weightinput);
    const rate = parseFloat(rateinput)
    const labour = parseFloat(labourinput)
    let cost=''
    if(weight && rate){
        cost=Math.round(weight*rate)
    }
    let labourcost=''
    let totalcost=''
    
    if(weight && rate && labour){
        if(element==='gold') labourcost = cost *(labour/100)
        else labourcost = labour
        labourcost = Math.round(labourcost)
        totalcost=cost + labourcost  
    }
    const [discount,setdiscount]=useState('')
    const discountedCost = useMemo(() => {
        const disc = parseFloat(discount);
        return !isNaN(disc) ? totalcost - disc : totalcost;
    }, [discount, totalcost]);
    const navigate =useNavigate()
    const addsales = async()=>{
        const now = new Date();
        const formated_date = now.toLocaleDateString('en-GB');
        const formated_time = now.toLocaleTimeString('en-GB');
        const response =await axios.post('http://localhost:4444/dashboard/addsales',{
            email:'11@gmail.com',
            product:product,
            weight:weight,
            rate:rate,
            labourcost:labourcost,
            total:discountedCost,
            date:formated_date,
            time:formated_time
        })
        // alert("Sale added successfully!");
        

        setproduct('')
        setdiscount('')
        setlabourinput('')
        setrateinput('')
        setweightinput('')
    }


    const [clicked,setclicked] =  useState(false);
    const buttonclicked=()=>{
        setclicked(true)
        setTimeout(() => {
            setclicked(false)
        }, 200);
    }

    return (
        <div className='w-[40%] h-160 ml-1 m-3 bg-gradient-to-b from-black  to-[#0d0d0d] rounded-2xl flex flex-col space-y-3 items-center'>
            <h1 className='h-[8%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold' >Rough Estimate</h1>
            <div className='h-[69%] w-[90%] space-y-3 flex flex-col justify-center'>
                <Details label='product : ' output={product}/>
                <Details label='Weight : ' output={!isNaN(weight) ? weight : ''}/>
                <Details label='Rate : 'output={!isNaN(rate) ? rate : ''}/>
                <Details label={`${element==='gold'?'Gold Cost':'Silver Cost'}`} output={cost}/>
                <Details label='Labour Cost : ' output={labourcost}/>
                <Details label='Total Cost: ' output={totalcost}/>
                <Input_block label='Discount'
                    value={discount}
                    onChange={(e) => setdiscount(e.target.value) }
                />
                <Details label='Final Price: ' output={discountedCost}/>
            </div>
            <div className='h-[7%] w-[90%] flex justify-evenly items-center'>
                <button 
                onClick={()=>{
                    buttonclicked()
                    setproduct('')
                    setdiscount('')
                    setlabourinput('')
                    setrateinput('')
                    setweightinput('')
                }}
                className={`h-full w-[45%] ${clicked?'bg-red-500 border-2 border-amber-50': ''} hover:bg-red-500 bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 border-black text-2xl`} >Clear Data</button>
                <button onClick={async()=>{
                    try{
                        await addsales()
                        navigate('/sales')
                        
                    }
                    catch (err) {
                        console.error("Error adding sale:", err);
                        alert("Failed to add sale");
                    }
                }} className={`h-full w-[45%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-gray-500 border-black text-2xl`}>Add sales</button>
            </div>
            <div className='h-[7%] w-[90%] flex justify-evenly items-center'>
                <button onClick={(()=>{
                    setfinalcost(discountedCost)
                    setgstbill(true)
                })} className={`h-full w-[93%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-400 border-black text-2xl`}>GST Bill</button>
            </div>
        </div>
    )
}

export default DataDetails