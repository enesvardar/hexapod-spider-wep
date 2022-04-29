import { Box, FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";
import { Navbars } from "../../Navbars";
import React, { useEffect, useState } from "react";

export const WalkingForms = () => {
    
  const [processFlag, setProcessFlag] = useState("walking");
  const [state, setState] = useState("stop");

  console.log(state);

  function Timer() {
    console.log(state)

    if (state === "run") {
      setTimeout(Timer, 1000);
    }
  }

  useEffect(() => {
    if (state === "run") {
      setTimeout(Timer, 1000);
    }
    else{
      clearTimeout(Timer);
    }
  }, [state]);

  return (
    <Box width={"700px"} height={"800px"}>
      <Navbars />
      <Text
        marginTop={"10px"}
        fontFamily={"Comic Sans MS"}
        fontSize="35px"
        color="#a5f0be"
      >
        Walking Gaits
      </Text>

      <FormControl display="flex" alignItems="center">
        <Switch
          onChange={() => {
            if (processFlag == "walking") {
              setProcessFlag("rotating");
            } else {
              setProcessFlag("walking");
            }
          }}
          id="email-alerts"
        />
        {processFlag == "walking" ? (
          <FormLabel marginLeft={"10px"} mb="0">
            isWalk
          </FormLabel>
        ) : (
          <FormLabel marginLeft={"10px"} mb="0">
            isRotate
          </FormLabel>
        )}
      </FormControl>

      <FormControl display="flex" alignItems="center">
        <Switch
          onChange={() => {
            if (state == "stop") {
              setState("run");
            } else {
              setState("stop");
              Timer();
            }
          }}
          id="email-alerts"
        />
        {state == "stop" ? (
          <FormLabel marginLeft={"10px"} mb="0">
            ...Playing
          </FormLabel>
        ) : (
          <FormLabel marginLeft={"10px"} mb="0">
            Paused...
          </FormLabel>
        )}
      </FormControl>
    </Box>
  );
};
