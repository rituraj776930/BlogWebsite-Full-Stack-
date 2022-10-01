import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Counter() {
    const [value, setvalue] = useState(0)
    const [evenNum, setevenNum] = useState(2)

    const memoHook = useMemo(function evenNumDouble(){
        return evenNum*2
    },[evenNum])
  return (
    <div>
        <div>Count: {value}</div>
        <div>Even Value: {evenNum}</div>
        <div>Even double number : {memoHook}</div>
        <button onClick={()=>setvalue(value+1)}>Increment Count</button>
        <button onClick={()=>setevenNum(evenNum+2)}>Increment Even Count</button>
    </div>
  )
}

export default Counter