import { Box, Flex, Text, Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLegInfo, fetchForward } from "../../../api";
import { setLeg, setLegs } from "../../../redux/legs/legsSlice";
import { setTraces } from "../../../redux/traces/tracesSlice";
import { Navbars } from "../../Navbars";

// Bu form her bir bacağın istenilen açı bilgisinin değiştirilebilmesi için kullanılır.
export const ForwardForms = () => {
  const legs = useSelector((state) => state.legs.info); // her bir bacağın açı bilgilerini tutan data
  const dispatch = useDispatch();

  const onChange = async (data) => {
    console.log(data);

    const result = await fetchForward(data);
    dispatch(setTraces(result.data.traces));

    dispatch(setLeg(data));
  };

  useEffect(() => {
    (async () => {
      const result = await fetchLegInfo();
      console.log(result.data);
      dispatch(setLegs(result.data));
    })();
  }, []);

  return (
    <Box width={"700px"} height={"800px"}>
      <Navbars />
      <Text
        marginTop={"10px"}
        fontFamily={"Comic Sans MS"}
        fontSize="35px"
        color="#a5f0be"
      >
        FORWARD KINEMATICS
      </Text>

      {/* hexapodun uzul parametreleri bu navbar üzerinden değiştirilir */}
      
      <Box marginTop={"10px"}>
        {legs &&
          legs.map((leg, index) => (
            <Flex key={index} marginLeft={"5px"}>
              <Box marginTop={"40px"} width={"110px"}>
                <Text fontFamily={"cursive"} fontSize="20px" color="#a5f0be">
                  {leg.name}
                </Text>
              </Box>

              <Box marginLeft={"30px"}>
                <Flex>
                  <Box marginRight={"10px"}>
                    <Text fontFamily={"cursive"} fontSize="20px" color="tomato">
                      alpha
                    </Text>
                    <Input
                      value={leg.alpha}
                      onChange={(e) => {
                        onChange({
                          value: Number(e.target.value),
                          angle: "alpha",
                          index: index,
                        });
                      }}
                      width="100px"
                      type={"number"}
                      color={"white"}
                    />
                  </Box>
                  <Box marginRight={"10px"}>
                    <Text fontFamily={"cursive"} fontSize="20px" color="tomato">
                      beta
                    </Text>
                    <Input
                      value={leg.beta}
                      onChange={(e) => {
                        onChange({
                          value: Number(e.target.value),
                          angle: "beta",
                          index: index,
                        });
                      }}
                      width="100px"
                      type={"number"}
                      color={"white"}
                    />
                  </Box>
                  <Box marginRight={"10px"}>
                    <Text fontFamily={"cursive"} fontSize="20px" color="tomato">
                      gama
                    </Text>
                    <Input
                      value={leg.gama}
                      onChange={(e) => {
                        onChange({
                          value: Number(e.target.value),
                          angle: "gama",
                          index: index,
                        });
                      }}
                      width="100px"
                      type={"number"}
                      color={"white"}
                    />
                  </Box>
                </Flex>
              </Box>

            </Flex>
          ))}
      </Box>
      
    </Box>
  );
};
