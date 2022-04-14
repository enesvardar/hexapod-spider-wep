import "./App.css";
import { fetchBodyTransform, fetchBodyParameter } from "./api";
import { Flex } from "@chakra-ui/react";
import { InverseForms } from "./componenets/Forms/InverseForms";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Draw } from "./componenets/Draw";

function App() {

  const coxia = useSelector((state) => state.body.coxia);
  const tibia = useSelector((state) => state.body.tibia);
  const femuar = useSelector((state) => state.body.femuar);

  const rX = useSelector((state) => state.body.rX);
  const rY = useSelector((state) => state.body.rY);
  const rZ = useSelector((state) => state.body.rZ);

  const tX = useSelector((state) => state.body.tX);
  const tY = useSelector((state) => state.body.tY);
  const tZ = useSelector((state) => state.body.tZ);

  const [traces, setTraces] = useState();
  const [angles, setTAngles] = useState();

  useEffect(() => {
    (async () => {
      const data = {
        rX: rX,
        rY: rY,
        rZ: rZ,
        tX: tX,
        tY: tY,
        tZ: tZ,
      };
      const result = await fetchBodyTransform(data);
      setTraces(result.data.traces);
      setTAngles(result.data.angles);
    })();
  }, [rX, rY, rZ, tX, tY, tZ]);

  useEffect(() => {
    (async () => {
      const data = {
        coxia: coxia,
        tibia: tibia,
        femuar: femuar,
      };

      const result = await fetchBodyParameter(data);
      setTraces(result.data.traces);
      setTAngles(result.data.angles);
    })();
  }, [coxia, tibia, femuar]);

  return (
    <div className="App">
      <Flex>
        <InverseForms angles={angles}/>
        {traces && <Draw traces={traces} />}
      </Flex>
    </div>
  );
}

export default App;
