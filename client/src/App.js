import "./App.css";
import { Flex, Text, Box } from "@chakra-ui/react";
import { InverseForms } from "./componenets/Forms/InverseForms";
import { ForwardForms } from "./componenets/Forms/ForwardForms";
import { Draw } from "./componenets/Draw";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StarIcon, ViewIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Box marginLeft={"50px"}>
            <Flex>
              <Switch>
                <Route exact path="/inverseKinematics">
                  <Box>
                  <InverseForms />
                  </Box>
                </Route>
                <Route path="/forwardKinematics">
                  <ForwardForms />
                </Route>
              </Switch>
              <Box
                margin={"50px"}
                borderRadius={"5px"}
                border="2px"
                borderColor="gray.200"
              >
                <Draw />
              </Box>
            </Flex>

            <Flex marginLeft={"10px"}>
              <ul className="ui">
                <Box>
                  <Flex>
                    <ViewIcon
                      w={8}
                      h={8}
                      color="yellow.500"
                      marginRight={"5px"}
                    />
                    <a href="https://github.com/enesvardar/hexapod-spider-wep">
                      <Text
                        fontFamily={"cursive"}
                        fontSize="20px"
                        color="#a5f0be"
                      >
                        Source Code
                      </Text>
                    </a>
                  </Flex>
                </Box>

                <Box>
                  <Flex>
                    <StarIcon
                      w={8}
                      h={8}
                      color="yellow.500"
                      marginRight={"5px"}
                    />
                    <Link to="/inverseKinematics">
                      <Text
                        fontFamily={"cursive"}
                        fontSize="20px"
                        color="#a5f0be"
                      >
                        Inverse Kinematics
                      </Text>
                    </Link>
                  </Flex>
                </Box>

                <Box>
                  <Flex>
                    <StarIcon
                      w={8}
                      h={8}
                      color="yellow.500"
                      marginRight={"5px"}
                    />

                    <Link to="/forwardKinematics">
                      <Text
                        fontFamily={"cursive"}
                        fontSize="20px"
                        color="#a5f0be"
                      >
                        Forward Kinematics
                      </Text>
                    </Link>
                  </Flex>
                </Box>
              </ul>
            </Flex>
          </Box>
        </Router>
      </header>
    </div>
  );
}

export default App;
