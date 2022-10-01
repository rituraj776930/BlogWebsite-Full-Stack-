import { Box, Heading, Select, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'

function Blog() {
  const [blog, setblog] = useState([])
  const [filter1, setfilter1] = useState("")
  const [filter2, setfilter2] = useState("")

  const token = localStorage.getItem("token") || ""

  const handlefilter1 = (e)=>{
    setfilter1(e.target.value)
    
  }
  const handlefilter2 = (e)=>{
    setfilter2(e.target.value)
    
  }

  const handleDelete = (id)=>{
    fetch(`https://ancient-hamlet-90230.herokuapp.com/blog/${id}/delete`, {
    method:"DELETE",
    "headers":{
        "content-type" : "application/json",
        "Authorization" : `Bearer ${token}`
    }
    }).then((res)=>{
      if(res.status == 400){
        alert("You are not authorized")
      }
      else if(res.status == 200){
        alert("Deleted successfully")
        fetchData()
      }
        
    })
    .catch((err)=>{
      console.log("err")
    })
}
const handleEdit = (id,obj)=>{
        fetch(`https://ancient-hamlet-90230.herokuapp.com/blog/${id}/patch`, {
        method:"PATCH",
        body:JSON.stringify(obj),
        "headers":{
            "content-type" : "application/json",
            "Authorization" : `Bearer ${token}`
        }
    }).then((res)=>{
      if(res.status == 400){
        alert("You are not authorized")
      }
      else if(res.status == 200){
        alert("Updated successfully")
        fetchData()
      }
        
    })
    .catch((err)=>{
      console.log("err")
    })
  }

  const fetchData = ()=>{
    if(filter1 && filter2){
      console.log(filter1,filter2)
      fetch(`https://ancient-hamlet-90230.herokuapp.com/blog?category=${filter1}&author=${filter2}`,{
          "method":"GET",
      })
      .then((res)=>res.json())
      .then((data)=>{
          setblog(data.blog)
      })
      .catch((err)=>{
          console.log("error")
      })
    }
    else if(filter1){
      console.log(filter1,filter2)
      fetch(`https://ancient-hamlet-90230.herokuapp.com/blog?category=${filter1}`,{
          "method":"GET",
      })
      .then((res)=>res.json())
      .then((data)=>{
          setblog(data.blog)
      })
      .catch((err)=>{
          console.log("error")
      })
    }
    else if(filter2){
      console.log(filter1,filter2)
      fetch(`https://ancient-hamlet-90230.herokuapp.com/blog?author=${filter2}`,{
          "method":"GET",
      })
      .then((res)=>res.json())
      .then((data)=>{
          setblog(data.blog)
      })
      .catch((err)=>{
          console.log("error")
      })
    }
    else{
      console.log(filter1,filter2)
      fetch(`https://ancient-hamlet-90230.herokuapp.com/blog/`,{
          "method":"GET",
      })
      .then((res)=>res.json())
      .then((data)=>{
          setblog(data.blog)
      })
      .catch((err)=>{
          console.log("error")
      })
    }
}
useEffect(()=>{
    fetchData()
},[filter1,filter2])
console.log(blog)
  return (
    <div>
      <Navbar/>
      <Form fetchData={fetchData}/>
      <Box mt={"30px"} display={'flex'} justifyContent={'space-around'}>
            <Select onChange={handlefilter1}  maxWidth={'15vw'}  placeholder='Filter By Category'>
                        <option value=''>All</option>
                        <option value='Career'>Career</option>
                        <option value='Finance'>Finance</option>
                        <option value='Travel'>Travel</option>
                        <option value='Sports'>Sports</option>
            </Select>
            <Select onChange={handlefilter2} maxWidth={'15vw'}  placeholder='Filter By Author'>
                        <option value=''>All</option>
                        <option value='Albert'>Albert</option>
                        <option value='Pranbhanjan'>Pranbhanjan</option>
                        <option value='Chandra'>Chandra</option>
                        <option value='Ankush'>Ankush</option>
                        <option value='Ritesh'>Ritesh</option>
            </Select>
        </Box>
        <Heading>All Blogs</Heading>
        <SimpleGrid columns={[1, 2]} spacing='40px'>
            {blog?.map((el)=><Card handleDelete={handleDelete} handleEdit={handleEdit}  key={el._id} el={el} fetchData={fetchData}/>)}
        </SimpleGrid>
    </div>
  )
}

export default Blog