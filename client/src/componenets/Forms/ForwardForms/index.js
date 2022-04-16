import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import React from "react";

export const ForwardForms = () => {

    const legName = [
        "leftBack",
        "leftMiddle",
        "leftFront",
        "rightFront",
        "rightMiddle",
        "rightBack"]


    return (
        <Box width={"30%"}>
            <Text fontFamily={"cursive"} fontSize="45px" color="green">
                FORWARD KINEMATICS
            </Text>
            {
                legName.map((name, index) => (
                    <Flex key = {index} marginLeft={"30px"}>
                        <Box margin={"30px"}>
                            <Text fontFamily={"cursive"} fontSize="20px" color="green">
                                {name}
                            </Text>
                        </Box>
                        <Box>
                            <Text fontFamily={"cursive"} fontSize="20px" color="green">
                                alpha
                            </Text>
                            <Input width="100px" type={"number"} />
                        </Box>
                        <Box>
                            <Text fontFamily={"cursive"} fontSize="20px" color="green">
                                beta
                            </Text>
                            <Input width="100px" type={"number"} />
                        </Box>
                        <Box >
                            <Text fontFamily={"cursive"} fontSize="20px" color="green">
                                gama
                            </Text>
                            <Input width="100px" type={"number"} />
                        </Box>
                    </Flex>
                ))


            }


        </Box>
    );
};
