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
import { setRx } from "../../../../redux/body/bodySlice";

export const RxSlider = () => {

  const rX = useSelector((state) => state.body.rX);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Box marginLeft={"20px"} w="30%">
      <Text fontFamily={"fantasy"} fontSize="40px" color="tomato">
        {` Rx: ${rX}`}
      </Text>

      <Slider
        value={rX}
        id="slider"
        defaultValue={0}
        min={-40}
        max={+40}
        colorScheme="teal"
        onChange={(v) => dispatch(setRx(v))}
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
          label={`${rX}`}
        >
          <SliderThumb boxSize={6} />
        </Tooltip>
      </Slider>
    </Box>
  );
};
