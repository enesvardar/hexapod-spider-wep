import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import React from "react";
import { Tslider } from "../../Sliders/Tslider";
import { Rslider } from "../../Sliders/Rslider";
import { useDispatch, useSelector } from "react-redux";
import {
  setRx,
  setRy,
  setRz,
  setTx,
  setTy,
  setTz,
} from "../../../redux/body/bodySlice";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Navbars } from "../../Navbars";

// Bu form hexapod tx/ty/tz/rx/ry/rz değerlerini güncellemek için oluşturuldu
export const InverseForms = () => {
  const dispatch = useDispatch();

  const legs = useSelector((state) => state.legs.info); // her bir bacağın açı bilgilerini tutan data
  
  const onClick = () => { // reset tuşu ile ilgili değerler sıfırlanıyor
    dispatch(setRx(0));
    dispatch(setRy(0));
    dispatch(setRz(0));
    dispatch(setTx(0));
    dispatch(setTy(0));
    dispatch(setTz(0));
  };

  return (
    <Box width={"30%"}>
      <Navbars />

      <Text
        marginTop={"10px"}
        fontFamily={"cursive"}
        fontSize="45px"
        color="green"
      >
        INVERSE KINEMATICS
      </Text>

      <Box marginTop={"15px"}> 
        <Tslider /> 
        <Rslider />
      </Box>

      <Box>
        <TableContainer marginTop={"20px"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th fontFamily={"cursive"} fontSize="20px" color="green">
                  name
                </Th>
                <Th
                  fontFamily={"cursive"}
                  fontSize="20px"
                  color="green"
                  isNumeric
                >
                  alpha
                </Th>
                <Th
                  fontFamily={"cursive"}
                  fontSize="20px"
                  color="green"
                  isNumeric
                >
                  beta
                </Th>
                <Th
                  fontFamily={"cursive"}
                  fontSize="20px"
                  color="green"
                  isNumeric
                >
                  gama
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {legs &&
                legs.map((leg, index) => ( // açı değerleri tabloya yazdırılıyor
                  <Tr key={index}>
                    <Td fontFamily={"cursive"} fontSize="20px" color="tomato">
                      {leg.name}
                    </Td>
                    <Td
                      fontFamily={"cursive"}
                      fontSize="20px"
                      color="tomato"
                      isNumeric
                    >
                      {leg.alpha}
                    </Td>
                    <Td
                      fontFamily={"cursive"}
                      fontSize="20px"
                      color="tomato"
                      isNumeric
                    >
                      {leg.beta}
                    </Td>
                    <Td
                      fontFamily={"cursive"}
                      fontSize="20px"
                      color="tomato"
                      isNumeric
                    >
                      {leg.gama}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box float={"left"} marginLeft={"30px"}>
        <Button onClick={() => onClick()} colorScheme="blue">
          Reset
        </Button>
      </Box>
    </Box>
  );
};
