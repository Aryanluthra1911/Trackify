import React, { useState } from 'react'
import Input_block from './Input_block'
import Button_block from './Button_block'
import Digit_block from './Numpad'
import Selected_input from './Selected_input'

const DataEntry = ({element,setelement,payment,setpayment,weightinput,setweightinput,rateinput,setrateinput,labourinput,setlabourinput}) => {
    const [activeinput,setactiveinput] = useState('');
    return (
        <div className='flex flex-col items-center w-[57%] h-[97%] m-3 bg-gradient-to-b from-black to-[#0d0d0d] shadow-[#f9fafb] border-amber-50 rounded-2xl space-y-8'>
            <h1 className='h-15 w-full text-4xl flex justify-center items-center text-[#ffff] font-bold' >Billing Panel</h1>
            <Button_block element={element} setelement={setelement}/>
            <div className='h-[7%] w-[90%] flex space-x-10 items-center justify-center ' >
                <Selected_input label='Payment' 
                value={payment} 
                options={['','Cash','Paytm','OldGold' ,'OldGold, Cash','OldGold, Paytm']} 
                onChange={(e)=> setpayment(e.target.value)}/>
                <Input_block label={`${element==='gold'?'Gold rate':'Silver rate'}`} value={rateinput}
                onFocus={() => setactiveinput('rate')}
                onChange={(e)=>setrateinput(e.target.value)}
                />
            </div>
            <div className='h-[7%] w-[90%] flex space-x-10 items-center justify-center'>
                <Input_block label='Weight' value={weightinput} 
                onFocus={() => setactiveinput('weight')}
                onChange={(e)=>setweightinput(e.target.value)}
                />
                <Input_block label='Labour' value={labourinput} element={element} 
                onFocus={() => setactiveinput('labour')}
                onChange={(e)=>setlabourinput(e.target.value)}
                />
            </div>
            <Digit_block
            activeinput={activeinput}
            setweightinput={setweightinput}
            setrateinput={setrateinput}
            setlabourinput={setlabourinput}
            />
        </div>
    )
}

export default DataEntry