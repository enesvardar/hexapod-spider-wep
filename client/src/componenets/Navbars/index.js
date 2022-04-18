import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBodyParameter } from "../../api";
import { setCoxia, setFemuar, setTibia } from "../../redux/body/bodySlice";
import { setTraces } from "../../redux/traces/tracesSlice";

export const Navbars = () => {
  const coxia = useSelector((state) => state.body.coxia);
  const tibia = useSelector((state) => state.body.tibia);
  const femuar = useSelector((state) => state.body.femuar);

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setCoxia(53));
    dispatch(setTibia(70));
    dispatch(setFemuar(92));
  };

  useEffect(() => {
    (async () => {
      const data = {
        coxia: coxia,
        tibia: tibia,
        femuar: femuar,
      };

      // const result = await fetchBodyParameter(data);
      // dispatch(setTraces(result.data.traces));
    })();
  }, [coxia, tibia, femuar]);

  return (
    <Box width={"30%"}>
      <Flex marginLeft={"30px"}>
        <Box>
          <Text fontFamily={"cursive"} fontSize="20px" color="green">
            coxia
          </Text>
          <Input
            onChange={(e) => {
              dispatch(setCoxia(Number(e.target.value)));
            }}
            value={coxia}
            marginLeft={1}
            width="100px"
            type={"number"}
          />
        </Box>
        <Box>
          <Text fontFamily={"cursive"} fontSize="20px" color="green">
            tibia
          </Text>
          <Input
            onChange={(e) => {
              dispatch(setTibia(Number(e.target.value)));
            }}
            value={tibia}
            marginLeft={1}
            width="100px"
            type={"number"}
          />
        </Box>
        <Box>
          <Text fontFamily={"cursive"} fontSize="20px" color="green">
            femuar
          </Text>
          <Input
            onChange={(e) => {
              dispatch(setFemuar(Number(e.target.value)));
            }}
            value={femuar}
            marginLeft={1}
            width="100px"
            type={"number"}
          />
        </Box>
        <Box marginTop={"30px"} marginLeft={"15px"}>
          <Button onClick={() => onClick()} colorScheme="blue">
            Reset
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
