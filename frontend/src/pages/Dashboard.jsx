import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import DataEntry from '../components/DataEntry'
import DataDetails from '../components/DataDetails'
import GST_details from '../components/gst_details'



const Dashboard = () => {
    const [element,setelement]=useState('gold')
    const [weightinput,setweightinput]=useState('')
    const [rateinput,setrateinput]=useState('')
    const [labourinput,setlabourinput]=useState('')
    const [product,setproduct] = useState('')
    const [finalcost, setfinalcost] = useState(0)
    const [gstbill,setgstbill] = useState(false)
    return (
        <div className='w-screen h-screen bg-neutral-800'>
            <Header/>
            <div className='h-[90%] flex'>
                <Navbar/>
                {gstbill ?
                <>
                    <GST_details
                    element = {element}
                    weight = {weightinput}
                    labour = {labourinput}
                    finalcost = {finalcost}
                    setgstbill={setgstbill}
                    />
                </> :
                <>
                    <div className='h-full w-[93%] flex'>
                        <DataEntry 
                        element={element}
                        setelement={setelement}
                        product={product}
                        setproduct={setproduct}
                        weightinput={weightinput}
                        setweightinput={setweightinput}
                        rateinput={rateinput}
                        setrateinput={setrateinput}
                        labourinput={labourinput}
                        setlabourinput={setlabourinput}
                        />
                        <DataDetails 
                        setgstbill={setgstbill}
                        element={element}
                        setelement={setelement}
                        product={product}
                        setproduct={setproduct}
                        weightinput={weightinput}
                        setweightinput={setweightinput}
                        rateinput={rateinput}
                        setrateinput={setrateinput}
                        labourinput={labourinput}
                        setlabourinput={setlabourinput}
                        setfinalcost = {setfinalcost}
                        />
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Dashboard