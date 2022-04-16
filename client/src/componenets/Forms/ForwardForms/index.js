import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import React from "react";
import { Navbars } from "../../Navbars";

export const ForwardForms = () => {
  const legName = [
    "leftBack",
    "leftMiddle",
    "leftFront",
    "rightFront",
    "rightMiddle",
    "rightBack",
  ];

  return (
    <Box width={"30%"}>
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
        {legName.map((name, index) => (
          <Flex key={index} marginLeft={"5px"}>
            <Box marginTop={"20px"} width={"150px"}>
              <Text fontFamily={"cursive"} fontSize="20px" color="green">
                {name}
              </Text>
            </Box>

            <Box marginLeft={"40px"}>
              <Flex>
                <Box marginRight={"10px"}>
                  <Text fontFamily={"cursive"} fontSize="20px" color="tomato">
                    alpha
                  </Text>
                  <Input width="100px" type={"number"} />
                </Box>
                <Box marginRight={"10px"}>
                  <Text fontFamily={"cursive"} fontSize="20px" color="tomato">
                    beta
                  </Text>
                  <Input width="100px" type={"number"} />
                </Box>
                <Box marginRight={"10px"}>
                  <Text fontFamily={"cursive"} fontSize="20px" color="tomato">
                    gama
                  </Text>
                  <Input width="100px" type={"number"} />
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
