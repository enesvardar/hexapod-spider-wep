const { pr } = require("../../parameters");
const MyLeg = require("../Leg");
const MyVector3 = require("../MyMath/Vector3");

class Hexapod {
  constructor() {
    
    this.joints = [
      new MyLeg("leftBack"),
      new MyLeg("leftMiddle"),
      new MyLeg("leftFront"),
      new MyLeg("rightFront"),
      new MyLeg("rightMiddle"),
      new MyLeg("rightBack"),
    ];
  }

  bodyUpdate(data) {
    this.RotateHexapodBodyXYZ(data.rX, data.rY, data.rZ);
    this.MoveHexapodBodyXYZ(data.tX, data.tY, data.tZ);
  }

  parameterUpdate(data) {
    pr.coxia = data.coxia;
    pr.tibia = data.tibia;
    pr.femuar = data.femuar;
  }

  RotateHexapodBodyXYZ(x, y, z) {
    pr.bodyLocalEulerAngles = new MyVector3(
      x,
      y,
      z
    );
  }

  MoveHexapodBodyXYZ(x, y, z) {
    pr.bodyLocalPosition = new MyVector3(
      x,
      y,
      z + pr.bodyZ
    );
  }
}

const hexapod = new Hexapod();

module.exports = hexapod;
