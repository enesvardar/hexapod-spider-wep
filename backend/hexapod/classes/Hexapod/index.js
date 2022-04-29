const { pr } = require("../../parameters");
const MyLeg = require("../Leg");
const MyVector3 = require("../MyMath/Vector3");


const Legs = {
   leftBack : 0,
   leftMiddle : 1,
   leftFront : 2,
   rightBack : 3,
   rightMiddle : 4,
   rightFront :5,
}

const WalkingStep = {
  sleepy : 0,
  start : 1,
  walking1 : 2,
  walking2 : 3,
  stop : 4,
}

const Direction = {
  forward : 0,
  back : 1,
  up : 2,
  down : 3,
  left : 4,
  right : 5,
  none : 6,
}

const group1 = 1;
const group2 = 2;

let changePosY = 0;
let changeRotateZ = 0;

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

  MoveHexapodBodyDir(ofset, dir)
  {
      let x = 0;
      let y = 0;

      if (dir == Direction.back || dir == Direction.forward)
      {
          if (dir == Direction.back)
          {
              ofset *= -1;
          }

          x = -Math.sin(Math.PI * hexapod.transform.localEulerAngles.z / 180) * ofset;

          y = Math.cos(Math.PI * hexapod.transform.localEulerAngles.z / 180) * ofset;
      }
      else if (dir == Direction.right || dir == Direction.left)
      {
          if (dir == Direction.left)
          {
              ofset *= -1;
          }

          x = Math.cos(Math.PI * hexapod.transform.localEulerAngles.z / 180) * ofset;

          y = Math.sin(Math.PI * hexapod.transform.localEulerAngles.z / 180) * ofset;
      }
      
      pr.bodyLocalPosition = new MyVector3(pr.bodyLocalPosition.x + x, pr.bodyLocalPosition.y + y, pr.bodyLocalPosition.z);
  }

  MoveHexapodBodyXYZ(x, y, z) {
    pr.bodyLocalPosition = new MyVector3(x, y, z + pr.bodyZ);
  }

  RotateHexapodBodyXYZ(x, y, z) {
    pr.bodyLocalEulerAngles = new MyVector3(x, y, z);
  }

  SetLocalPositionHexapodBody(value)
  {
      pr.bodyLocalPosition = value;
  }

  SetLocalEulerAnglesHexapodBody(value)
  {
    pr.bodyLocalEulerAngles = value;
  }

  MoveLegGroup(group, step, dir)
  {
    for (let i = 0; i < step; i++) {
      switch (group) {
        case group1:
          this.joints[int(Legs.leftBack)].MoveLeg(dir);
          this.joints[int(Legs.rightMiddle)].MoveLeg(dir);
          this.joints[int(Legs.leftFront)].MoveLeg(dir);
          break;
  
        case group2:
          this.joints[int(Legs.rightBack)].MoveLeg(dir);
          this.joints[int(Legs.leftMiddle)].MoveLeg(dir);
          this.joints[int(Legs.rightFront)].MoveLeg(dir);
          break;
  
        default:
          break;
      }
    }
  }
  
  WalkingSpecialStep(dir, group, conditionY)
  {
    let done = false;
  
    if (changePosY < conditionY / 2) {
      this.MoveLegGroup(group, 1, Direction.up);
    } else {
      this.MoveLegGroup(group, 1, Direction.down);
    }
  
    this.MoveHexapodBodyDir(1, dir);
    this.MoveLegGroup(group, 2, dir);
  
    changePosY++;
  
    if (changePosY == conditionY) {
      changePosY = 0;
      done = true;
    }
  
    return done;
  }
  
  Walking(dir, contFlag)
  {
    let done = false;
  
    switch (stepWalk) {
      case WalkingStep.sleepy:
        stepWalk = contFlag == true ? WalkingStep.start : stepWalk;
        break;
      case WalkingStep.start:
        done = WalkingSpecialStep(dir, group1, 50);
        stepWalk = done == true ? WalkingStep.walking2 : stepWalk;
        break;
      case WalkingStep.walking1:
        done = WalkingSpecialStep(dir, group1, 100);
        stepWalk = done == true ? WalkingStep.walking2 : stepWalk;
        if (done == true)
          stepWalk = contFlag == false ? WalkingStep.stop : stepWalk;
        break;
      case WalkingStep.walking2:
        done = WalkingSpecialStep(dir, group2, 100);
        stepWalk = done == true ? WalkingStep.walking1 : stepWalk;
        break;
      case WalkingStep.stop:
        done = WalkingSpecialStep(dir, group2, 50);
        stepWalk = done == true ? WalkingStep.sleepy : stepWalk;
        break;
      default:
        break;
    }
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
    if (data.angle == "alpha") {
      this.joints[data.index].alphaAngleDeg = data.value;
    } else if (data.angle == "beta") {
      this.joints[data.index].betaAngleDeg = data.value;
    } else if (data.angle == "gama") {
      this.joints[data.index].gamaAngleDeg = data.value;
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
}

const hexapod = new Hexapod();

module.exports = hexapod;
