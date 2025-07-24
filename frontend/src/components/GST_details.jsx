import React, { use, useState } from 'react'
import Details from './Details'
import Input_block from './Input_block'
import Selected_input from './Selected_input'

const GST_details = ({finalcost ,setgstbill,element,weight,labour}) => {
    const purity_options = ["","18k (75%)","22k (91.6%)","24k (100%)"]
    const gst = finalcost *0.015
    const rate = Math.round(finalcost/weight)
    const totalcost = finalcost + 2*gst
    const [billno, setbillno]=useState("");
    const [purity,setpurity] = useState('');
    const [mop,setmop]=useState('')
    return (
        <div className='h-full w-[93%] flex'>
            <div className='flex flex-col items-center justify-around w-[51%] h-160 m-3 bg-[#202020] shadow-[#f9fafb] border-amber-50 rounded-2xl space-y-9'>
                <h1 className='h-[10%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>GST Bill</h1>
                <div className='h-[65%] w-[90%] space-y-3 flex flex-col justify-center'>
                    <Details label = "Element : " output={element}/>
                    <Details label = 'Bill no. : 'output={billno}/>
                    {element==='gold'?
                    <>
                        <Details label = 'Purity : 'output={purity}/>
                    </> :
                    null
                    }
                    
                    <Details label = 'Mode Of Payment : 'output={mop}/>
                    <Details label = 'Date : '/>
                    <Details label = 'Weight : 'output={weight}/>
                    <Details label = 'Rate : ' output={rate}/>
                    <Details label = 'Cost (Without GST) : ' output={finalcost}/>
                    <Details label = 'SGST : 'output={gst}/>
                    <Details label = 'CGST : 'output={gst}/>
                    <Details label = 'Total Cost : ' output={totalcost}/>
                </div>
                <button className={` flex items-center justify-center h-[8%] w-[45%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-400 border-black text-2xl`}> Add Bill</button>
            </div>
            <div className='w-[48%] h-160 ml-1 m-3 bg-[#202020] rounded-2xl flex flex-col space-y-10 items-center'>
                <h1 className='h-[8%] w-full text-4xl flex justify-center items-center text-[#ffff] font-bold'>Bill Details</h1>
                <div className='h-[80%] w-[90%] flex flex-col space-y-10 justify-start ' >
                    <Input_block label = "Bill No. " value={billno}
                    onChange={(e)=> setbillno(e.target.value)}/>
                    {element==='gold'?
                    <>
                        <Selected_input label="Purity " options = {purity_options} onChange={(e)=>{
                            setpurity(e.target.value)
                        }}/>
                    </> :
                    null
                    }
                    
                    <Selected_input label ="Mode of Payment " options={["","Cash","Paytm"]}
                    onChange={(e)=>{
                        setmop(e.target.value)
                    }}
                    />
                </div>
                <div className='h-[12%] w-[90%] flex items-center justify-center'>
                    <button onClick={(()=>{
                        setgstbill(false)
                    })} className={`h-[85%] w-[50%] bg-[#2D2F36] rounded-2xl text-[#ffff] border-2 hover:bg-green-400 border-black text-2xl `}>Dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default GST_details