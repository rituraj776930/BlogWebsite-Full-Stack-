import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import EditModal from './EditModal';
  
  export default function Card({el,handleDelete,handleEdit}) {

     
    return (
      <Center py={6}>
        <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
            width={"640px"}
            height={"400px"}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {el.title}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Category : {el.category}
          </Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Author : {el.author}
          </Text>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Content:{el.content}
          </Text>
          

  
          
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
            // onClick={()=>handlebookmark(el)}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              <EditModal handleEdit={handleEdit} el={el}/>
            </Button>
            <Button
            onClick={()=>handleDelete(el._id)}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Delete
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }