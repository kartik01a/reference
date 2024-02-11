import React,{useState} from 'react'

const Icon = () => {
    const [isActive,setIsActive] = useState(false)
    const [val,setVal] = useState(false)


    const handleIt = (value)=>{
        setVal(value)
        setIsActive(true)
        console.log(value)
    }
  return (
    <div>
        <span onClick={()=>handleIt(1)} value="id1" className={`m-4 p-4 ${isActive && val===1 ?'bg-green-200':'bg-gray-200'}`} >1</span>
        <span onClick={()=>handleIt(2)} value="id2" className={`m-4 p-4 ${isActive && val===2 ?'bg-green-200':'bg-gray-200'}`} >2</span>
        <span onClick={()=>handleIt(3)} value="id3" className={`m-4 p-4 ${isActive && val===3 ?'bg-green-200':'bg-gray-200'}`} >3</span>
        <span onClick={()=>handleIt(4)} value="id4" className={`m-4 p-4 ${isActive && val===4 ?'bg-green-200':'bg-gray-200'}`} >4</span>
    </div>
  )
}

export default Icon