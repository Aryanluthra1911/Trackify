import React from 'react'
import Digit_button from './Digit_button';

const Numpad = ({ activeinput, setweightinput, setrateinput, setlabourinput }) => {
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'Del'];
    const handleDigitClick = (digit) => {
        if (!activeinput) return;
        const updateFn = {
            weight: setweightinput,
            rate: setrateinput,
            labour: setlabourinput,
        }[activeinput];

        if (!updateFn) return;

        if (digit === 'Del') {
            updateFn(prev => prev.slice(0, -1));
        } else {
            updateFn(prev => prev + digit);
        }
    }
    return (
        <div className='h-[45%] w-[50%] space-y-3'>
            <div className='w-full h-[100%] flex flex-row flex-wrap items-center justify-center'>
                {digits.map((digit,idx)=>(
                    <Digit_button key={idx} no={digit} onClick={() => handleDigitClick(digit)}/>
                ))}
            </div>
        </div>
    )
}

export default Numpad