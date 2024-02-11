import Uploader from './Uploader';
import './App.css';
import {useState, useRef, useEffect} from 'react'
import Icon from './Icon';

function App() {
  // const inp1 = useRef()
  // const inp2 = useRef()
  // const inp3 = useRef()
  // const [imageFiles1, setImageFiles1] = useState([])
  // const [imageFiles2, setImageFiles2] = useState([])
  // const [imageFiles3, setImageFiles3] = useState([])
  // const[files,setFiles] = useState({
  //   name:"",
  //   i1:[],
  //   i2:[],
  //   i3:[],
  // })

  // useEffect(()=>{
  //   setFiles({...files,i1:imageFiles1})
  //   console.log("done1")
  // },[inp1, imageFiles1])
  // useEffect(()=>{
  //   setFiles({...files,i2:imageFiles2})
  //   console.log("done2")
  // },[inp2, imageFiles2])
  // useEffect(()=>{
  //   setFiles({...files,i3:imageFiles3})
  //   console.log("done3")
  // },[inp3, imageFiles3])
  // useEffect(()=>{
  //   console.log(files)
  // })

  return (<>
    {/* <input type="text" onChange={(e)=>setFiles({...files,name:e.target.value})}  className='p-2 m-4 border-2 border-gray-200' />
    <Uploader ref={inp1} imageFiles={imageFiles1} setImageFiles={setImageFiles1}/>
    <Uploader ref={inp2} imageFiles={imageFiles2} setImageFiles={setImageFiles2}/>
    <Uploader ref={inp3} imageFiles={imageFiles3} setImageFiles={setImageFiles3}/> */}
    <Icon/>
  </>);
}

export default App;
