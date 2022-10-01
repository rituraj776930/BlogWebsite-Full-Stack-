import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Otp.css'

function Otp() {
    const navigate = useNavigate()
    let RealOtp = 1234
    let totalSize = 4
    const [otp,setotp] = useState("")
    const inputref = useRef([])
    useEffect(()=>{
        alert(`<${RealOtp}> is your One Time Password.Please fill this OTP to confirm  the payment`)
    },[])

    const handleClick = ()=>{
        console.log(otp,RealOtp)
        if(otp == RealOtp){
            navigate("/thankyou")
        } 
        else{
            alert("Otp is not valid")
        }
    }

    const handleChange = (e)=>{
        console.log(e.target.value)
        setotp(otp+ e.target.value)
        console.log(otp)
    }
    console.log(inputref)
  return (
    <div style={{textAlign:"center"}} >
        <h1>Give OTP</h1>
        {new Array(totalSize).fill(0).map((elem,index)=>(
            <input className='input-tag' onChange={(event)=>handleChange(event)}
            onKeyUp={(e)=>{
                if(e.code === 'Backspace' && index > 0){
                    inputref.current[index-1].focus()
                    inputref.current[index-1].select()
                }
                else if(index < totalSize-1){
                    inputref.current[index+1].focus()
                }
            }}
            ref={(el)=>{
                if(el && inputref.current){
                    inputref.current[index] = el
                }
                console.log(el)
                console.log(inputref)
            }}
            maxLength={1} type='text' key={index}
            />
        ))}
        <br />
        <button className='button-tag' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Otp