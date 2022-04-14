import "./App.css";
import { fetchBodyTransform, fetchBodyParameter } from "./api";
import { Flex, Text } from "@chakra-ui/react";
import { InverseForms } from "./componenets/Forms/InverseForms";
import { ForwardForms } from "./componenets/Forms/ForwardForms";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Draw } from "./componenets/Draw";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <Router>

        <Flex>

          <Switch>
            <Route exact path="/inverseKinematics"> <InverseForms angles={angles} /> </Route>
            <Route path="/forwardKinematics"> <ForwardForms /> </Route>
          </Switch>

          {traces && <Draw traces={traces} />}
        </Flex>

        <Flex marginLeft={"10px"}>

          <ul>
            <li>
              <Link to="/inverseKinematics">
                <Text fontFamily={"cursive"} fontSize="20px" color="green">
                  inverseKinematics
                </Text>
              </Link>
            </li>
            <li>
              <Link to="/forwardKinematics">
                <Text fontFamily={"cursive"} fontSize="20px" color="green">
                  forwardKinematics
                </Text>
              </Link>
            </li>
          </ul>

          </Flex>

      </Router>

    </div>
  );
} 

export default App;


