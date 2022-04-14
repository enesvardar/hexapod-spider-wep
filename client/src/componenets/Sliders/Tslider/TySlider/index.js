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
import { setTy } from "../../../../redux/body/bodySlice";
export const TySlider = () => {

  const tY = useSelector((state) => state.body.tY);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <Box marginLeft={"20px"} w="30%">
      <Text fontFamily={"fantasy"} fontSize="40px" color="tomato">
        {` Ty: ${tY}`}
      </Text>

      <Slider
        value={tY}
        id="slider"
        defaultValue={0}
        min={-20}
        max={+20}
        colorScheme="teal"
        onChange={(v) => dispatch(setTy(v))}
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
          label={`${tY}`}
        >
          <SliderThumb boxSize={6} />
        </Tooltip>
      </Slider>
    </Box>
  );
};
