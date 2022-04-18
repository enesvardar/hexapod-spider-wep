import "./App.css";
import { Flex, Text } from "@chakra-ui/react";
import { InverseForms } from "./componenets/Forms/InverseForms";
import { ForwardForms } from "./componenets/Forms/ForwardForms";
import { Draw } from "./componenets/Draw";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Flex>
          <Switch>
            <Route exact path="/inverseKinematics">
              <InverseForms />
            </Route>
            <Route path="/forwardKinematics">
              <ForwardForms/>
            </Route>
          </Switch>

          <Draw />
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
