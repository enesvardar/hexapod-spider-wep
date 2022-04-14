import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { TxSlider } from "./TxSlider";
import { TySlider } from "./TySlider";
import { TzSlider } from "./TzSlider";

export const Tslider = () => {
  return (
    <div>
      <Box margin={"10px"}>
        <Flex>
          <TxSlider />
          <TySlider />
          <TzSlider />
        </Flex>
      </Box>
    </div>
  );
};
