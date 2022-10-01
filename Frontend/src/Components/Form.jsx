import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    Select,
    FormLabel,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form({fetchData}) {
    const token = localStorage.getItem("token") || ""
    const [title, settitle] = useState("")
    const [category, setcategory] = useState("")
    const [authors, setauthor] = useState("")
    const [content, setcontent] = useState("")
    const [image, setimage] = useState("")

    const handleAuthor = (e)=>{
        setauthor(e.target.value)
        console.log(authors)
    }

    const handleSubmit = ()=>{
        console.log("author :", authors)
        if(title && category && authors && content && image){
            let obj = {title,category,"author":authors,content , image}
            fetch(`https://ancient-hamlet-90230.herokuapp.com/blog/create`,{
                "method":"POST",
                "body":JSON.stringify(obj),
                "headers":{
                    "content-type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
                }).then((res)=>res.json()).then((data)=>{
                    if(data.newBlog){
                        alert("Posted successfully")
                        fetchData()

                    }
                    else{
                        alert("error in posting")
                    }
                    
                })
                .catch((err)=>{
                    alert("Error in posting data")
                })
        }
        else{
            alert("Please fill all fields")
        }
    }

  return (
    <div>
        <Stack
            margin={"auto"}
            bg={'gray.50'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'gray.800'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                Blog Form
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text">
                  !
                </Text>
              </Heading>
            </Stack>
            <Box as={'form'} mt={50}>
              <Stack spacing={4}>
                <Input
                onChange={(e)=>settitle(e.target.value)}
                type={'text'}
                  placeholder="Title"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Select onChange={(e)=>setcategory(e.target.value)} maxWidth={'30vw'} >
                        <option value='Career'>Career</option>
                        <option value='Finance'>Finance</option>
                        <option value='Travel'>Travel</option>
                        <option value='Sports'>Sports</option>
                </Select>
                
            <Input
                onChange={(e)=>setcontent(e.target.value)}
                type={'text'}
                  placeholder="Enter your content"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                onChange={(e)=>setimage(e.target.value)}
                type={'text'}
                  placeholder="Image url"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Select onChange={handleAuthor} maxWidth={'30vw'} >
                        <option value='Albert'>Albert</option>
                        <option value='Pranbhanjan'>Pranbhanjan</option>
                        <option value='Chandra'>Chandra</option>
                        <option value='Ankush'>Ankush</option>
                        <option value='Ritesh'>Ritesh</option>
                </Select>
                 
              </Stack>
              <Button
              onClick={handleSubmit}
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }}>
                Submit
              </Button>
            </Box>
          </Stack>
    </div>
  )
}

export default Form