import {
  SliderFilledTrack,
  SliderTrack,
  Tooltip,
  SliderThumb,
  Slider,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTx } from "../../../../redux/body/bodySlice";

export const TxSlider = () => {

  const tX = useSelector((state) => state.body.tX);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Box marginLeft={"20px"} w="30%">
      <Text fontFamily={"fantasy"} fontSize="40px" color="tomato">
        {` Tx: ${tX}`}
      </Text>

      <Slider
        value={tX}
        id="slider"
        defaultValue={0}
        min={-20}
        max={+20}
        colorScheme="teal"
        onChange={(v) => dispatch(setTx(v))}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${tX}`}
        >
          <SliderThumb boxSize={6} />
        </Tooltip>
      </Slider>
    </Box>
  );
};
