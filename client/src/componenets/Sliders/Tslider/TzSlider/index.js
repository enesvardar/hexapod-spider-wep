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
import { setTz } from "../../../../redux/body/bodySlice";

export const TzSlider = () => {

  const tZ = useSelector((state) => state.body.tZ);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Box marginLeft={"20px"} w="30%">
      <Text fontFamily={"fantasy"} fontSize="40px" color="tomato">
        {` Tz: ${tZ}`}
      </Text>

      <Slider
        value={tZ}
        id="slider"
        defaultValue={0}
        min={-20}
        max={+20}
        colorScheme="teal"
        onChange={(v) => dispatch(setTz(v))}
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
          label={`${tZ}`}
        >
          <SliderThumb boxSize={6} />
        </Tooltip>
      </Slider>
    </Box>
  );
};
