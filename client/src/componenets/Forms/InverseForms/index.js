import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import { setTraces } from "../../../redux/traces/tracesSlice";
import { fetchBodyInverse } from "../../../api";

// Bu form hexapod tx/ty/tz/rx/ry/rz değerlerini güncellemek için oluşturuldu
export const InverseForms = () => {
  
  const [angles, setAngles] = useState();

  const dispatch = useDispatch();

  const rX = useSelector((state) => state.body.rX);
  const rY = useSelector((state) => state.body.rY);
  const rZ = useSelector((state) => state.body.rZ);

  const tX = useSelector((state) => state.body.tX);
  const tY = useSelector((state) => state.body.tY);
  const tZ = useSelector((state) => state.body.tZ);

  useEffect(() => {
    (async () => {
      const data = {
        rX: rX,
        rY: rY,
        rZ: rZ,
        tX: tX,
        tY: tY,
        tZ: tZ,
      };
      const result = await fetchBodyInverse(data);
      dispatch(setTraces(result.data.traces));
      setAngles(result.data.angles)
    })();
  }, [rX, rY, rZ, tX, tY, tZ]);

  const onClick = () => {
    // reset tuşu ile ilgili değerler sıfırlanıyor
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
        fontFamily= {"Comic Sans MS"}
        fontSize="45px"
        color="#a5f0be"
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
                <Th fontFamily={"cursive"} fontSize="20px" color="#a5f0be">
                  name
                </Th>
                <Th
                  fontFamily={"cursive"}
                  fontSize="20px"
                  color="#a5f0be"
                  isNumeric
                >
                  alpha
                </Th>
                <Th
                  fontFamily={"cursive"}
                  fontSize="20px"
                  color="#a5f0be"
                  isNumeric
                >
                  beta
                </Th>
                <Th
                  fontFamily={"cursive"}
                  fontSize="20px"
                  color="#a5f0be"
                  isNumeric
                >
                  gama
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {angles &&
                angles.map(
                  (
                    leg,
                    index // açı değerleri tabloya yazdırılıyor
                  ) => (
                    <Tr key={index}>
                      <Td fontFamily={"cursive"} fontSize="20px" color="tomato">
                        {leg.name}
                      </Td>
                      <Td
                        fontFamily={"cursive"}
                        fontSize="20px"
                        color="white"
                        isNumeric
                      >
                        {leg.alpha}
                      </Td>
                      <Td
                        fontFamily={"cursive"}
                        fontSize="20px"
                        color="white"
                        isNumeric
                      >
                        {leg.beta}
                      </Td>
                      <Td
                        fontFamily={"cursive"}
                        fontSize="20px"
                        color="white"
                        isNumeric
                      >
                        {leg.gama}
                      </Td>
                    </Tr>
                  )
                )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box float={"left"} marginTop={"20px"} marginBottom={"20px"}>
        <Button onClick={() => onClick()} bgColor="#a5f0be">
          Reset
        </Button>
      </Box>
    </Box>
  );
};
