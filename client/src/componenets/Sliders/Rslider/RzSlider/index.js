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
import { setRz } from "../../../../redux/body/bodySlice";

export const RzSlider = () => {

  const rZ = useSelector((state) => state.body.rZ);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Box marginLeft={"20px"} w="30%">
      <Text fontFamily={"fantasy"} fontSize="40px" color="tomato">
        {` Rz: ${rZ}`}
      </Text>

      <Slider
        value={rZ}
        id="slider"
        defaultValue={0}
        min={-40}
        max={+40}
        colorScheme="teal"
        onChange={(v) => dispatch(setRz(v))}
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
          label={`${rZ}`}
        >
          <SliderThumb boxSize={6} />
        </Tooltip>
      </Slider>
    </Box>
  );
};
