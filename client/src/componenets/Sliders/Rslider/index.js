import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { RxSlider } from "./RxSlider";
import { RySlider } from "./RySlider";
import { RzSlider } from "./RzSlider";

export const Rslider = () => {
  return (
    <div>
      <Box margin={"10px"}>
        <Flex>
          <RxSlider />
          <RySlider />
          <RzSlider />
        </Flex>
      </Box>
    </div>
  );
};
