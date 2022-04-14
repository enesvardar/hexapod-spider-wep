import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import React from "react";
import { Tslider } from "../../Sliders/Tslider";
import { Rslider } from "../../Sliders/Rslider";
import { useDispatch, useSelector } from "react-redux";
import {
  setCoxia,
  setFemuar,
  setRx,
  setRy,
  setRz,
  setTibia,
  setTx,
  setTy,
  setTz,
} from "../../../redux/body/bodySlice";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export const InverseForms = ({ angles }) => {

  const coxia = useSelector((state) => state.body.coxia);
  const tibia = useSelector((state) => state.body.tibia);
  const femuar = useSelector((state) => state.body.femuar);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setRx(0));
    dispatch(setRy(0));
    dispatch(setRz(0));
    dispatch(setTx(0));
    dispatch(setTy(0));
    dispatch(setTz(0));

    dispatch(setCoxia(53));
    dispatch(setTibia(70));
    dispatch(setFemuar(92));

  };

  return (
    <Box width={"30%"}>

      <Text fontFamily={"cursive"} fontSize="45px" color="green">
        INVERSE KINEMATICS
      </Text>
      <Flex marginLeft={"30px"}>
        <Box>
          <Text fontFamily={"cursive"} fontSize="20px" color="green">
            coxia
          </Text>
          <Input onChange={(e) => { dispatch(setCoxia(Number(e.target.value))) }} value={coxia} marginLeft={1} width="100px" type={"number"} />
        </Box>
        <Box>
          <Text fontFamily={"cursive"} fontSize="20px" color="green">
            tibia
          </Text>
          <Input onChange={(e) => { dispatch(setTibia(Number(e.target.value))) }} value={tibia} marginLeft={1} width="100px" type={"number"} />
        </Box>
        <Box>
          <Text fontFamily={"cursive"} fontSize="20px" color="green">
            femuar
          </Text>
          <Input onChange={(e) => { dispatch(setFemuar(Number(e.target.value))) }} value={femuar} marginLeft={1} width="100px" type={"number"} />
        </Box>
        <Box marginTop={"30px"} marginLeft={"15px"}>
          <Button onClick={() => onClick()} colorScheme="blue">
            Reset
          </Button>
        </Box>
      </Flex>

      <Box marginTop={"45px"}>
        <Tslider />
        <Rslider />
      </Box>

      <TableContainer marginTop={"45px"}>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th fontFamily={"cursive"} fontSize="20px" color="green">name</Th>
              <Th fontFamily={"cursive"} fontSize="20px" color="green" isNumeric>alpha</Th>
              <Th fontFamily={"cursive"} fontSize="20px" color="green" isNumeric>beta</Th>
              <Th fontFamily={"cursive"} fontSize="20px" color="green" isNumeric>gama</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              angles && (

                angles.map((item, index) => (
                  <Tr key={index}>
                    <Td fontFamily={"cursive"} fontSize="20px" color="tomato">{item.name}</Td>
                    <Td fontFamily={"cursive"} fontSize="20px" color="tomato" isNumeric>{item.alpha}</Td>
                    <Td fontFamily={"cursive"} fontSize="20px" color="tomato" isNumeric>{item.beta}</Td>
                    <Td fontFamily={"cursive"} fontSize="20px" color="tomato" isNumeric>{item.gama}</Td>
                  </Tr>
                ))

              )
            }


          </Tbody>

        </Table>
      </TableContainer>



    </Box>
  );
};
