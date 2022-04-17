import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLeg } from "../../../redux/legs/legsSlice";
import { Navbars } from "../../Navbars";

// Bu form her bir bacağın istenilen açı bilgisinin değiştirilebilmesi için kullanılır.
export const ForwardForms = () => {
  const legs = useSelector((state) => state.legs.info); // her bir bacağın açı bilgilerini tutan data
  const dispatch = useDispatch();

  const onChange = (data) => {
    dispatch(setLeg(data));
  };

  return (
    <Box width={"30%"}>
      {/* hexapodun uzul parametreleri bu navbar üzerinden değiştirilir */}
      <Navbars />

      <Text
        marginTop={"10px"}
        fontFamily={"cursive"}
        fontSize="45px"
        color="green"
      >
        FORWARD KINEMATICS
      </Text>

      <Box marginTop={"10px"}>
        {legs &&
          legs.map((leg, index) => (
            <Flex key={index} marginLeft={"5px"}>
              <Box marginTop={"20px"} width={"150px"}>
                <Text fontFamily={"cursive"} fontSize="20px" color="green">
                  {leg.name}
                </Text>
              </Box>

              <Box marginLeft={"40px"}>
                <Flex>
                  <Box marginRight={"10px"}>
                    <Text fontFamily={"cursive"} fontSize="20px" color="tomato">
                      alpha
                    </Text>
                    <Input
                      value={leg.alpha}
                      onChange={(e) => {
                        onChange({
                          value: e.target.value,
                          angle: "alpha",
                          index: index,
                        });
                      }}
                      width="100px"
                      type={"number"}
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
                          value: e.target.value,
                          angle: "beta",
                          index: index,
                        });
                      }}
                      width="100px"
                      type={"number"}
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
                          value: e.target.value,
                          angle: "gama",
                          index: index,
                        });
                      }}
                      width="100px"
                      type={"number"}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          ))}
      </Box>

      <Box float={"left"} marginLeft={"30px"}>
        <Button colorScheme="blue">Reset</Button>
      </Box>
    </Box>
  );
};
