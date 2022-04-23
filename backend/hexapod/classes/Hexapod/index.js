const { pr } = require("../../parameters");
const MyLeg = require("../Leg");
const MyVector3 = require("../MyMath/Vector3");

class Hexapod {
  constructor() {
    this.joints = [
      new MyLeg("leftBack", -10),
      new MyLeg("leftMiddle", -10),
      new MyLeg("leftFront", -10),
      new MyLeg("rightFront", -10),
      new MyLeg("rightMiddle", -10),
      new MyLeg("rightBack", -10),
    ];
  }

  legInfo() {
    let angles = [];
    for (let i = 0; i < 6; i++) {
      let name = hexapod.joints[i].name;
      let alpha = Math.round(hexapod.joints[i].alphaAngleDeg);
      let beta = Math.round(hexapod.joints[i].betaAngleDeg);
      let gama = Math.round(hexapod.joints[i].gamaAngleDeg);
      angles.push({ name, alpha, beta, gama });
    }

    return angles;
  }

  legUpdate(data) {

    if(data.angle == "alpha"){
      this.joints[data.index].alphaAngleDeg = (data.value)
    }
    else if(data.angle == "beta"){
      this.joints[data.index].betaAngleDeg = (data.value)
    }
    else if(data.angle == "gama"){
      this.joints[data.index].gamaAngleDeg = (data.value)
    }

    
    this.joints[data.index].ForwardKinematics();
    

  }

  bodyUpdate(data) {
    this.RotateHexapodBodyXYZ(data.rX, data.rY, data.rZ);
    this.MoveHexapodBodyXYZ(data.tX, data.tY, data.tZ);

    for (let i = 0; i < 6; i++) {
      this.joints[i].InverseKinematicsForEndJoint();
    }
  }

  parameterUpdate(data) {
    pr.coxia = data.coxia;
    pr.tibia = data.tibia;
    pr.femuar = data.femuar;

    for (let i = 0; i < 6; i++) {
      this.joints[i].InverseKinematicsForEndJoint();
    }
  }

  RotateHexapodBodyXYZ(x, y, z) {
    pr.bodyLocalEulerAngles = new MyVector3(x, y, z);
  }

  MoveHexapodBodyXYZ(x, y, z) {
    pr.bodyLocalPosition = new MyVector3(x, y, z + pr.bodyZ);
  }
}

const hexapod = new Hexapod();

module.exports = hexapod;
