import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    Select,
    FormLabel,
  } from '@chakra-ui/react';

function EditModal({handleEdit, el}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = localStorage.getItem("token") || ""
    const [title, settitle] = useState("")
    const [category, setcategory] = useState("")
    const [author, setauthor] = useState("")
    const [content, setcontent] = useState("")
    const [image, setimage] = useState("")

    const handleSubmit = ()=>{
        let obj = {}
        if(title){
            obj['title'] = title
            
        }
        if(category){
            obj['category'] = category
            
        }
        if(author){
            obj['author'] = author
            
        }
        if(content){
            obj['content'] = content
            
        }
        if(image){
            obj['image'] = image
            
        }
        if(obj){
            handleEdit(el._id,obj)
        }
        onClose()

    }
    
  return (
    <>
    <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>
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
                <Select onChange={(e)=>setauthor(e.target.value)} maxWidth={'30vw'} >
                        <option value='Albert'>Albert</option>
                        <option value='Pranbhanjan'>Pranbhanjan</option>
                        <option value='Chandra'>Chandra</option>
                        <option value='Ankush'>Ankush</option>
                        <option value='Ritesh'>Ritesh</option>
                </Select>
                 
              </Stack>
              
            </Box>
          </Stack>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleSubmit} variant='ghost'>Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  )
}

export default EditModal