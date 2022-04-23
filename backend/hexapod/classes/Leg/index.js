const { pr } = require("../../parameters");
const { dotMyVector4 } = require("../MyMath/AuxFcn");
const MyMatrix4x4 = require("../MyMath/Matrix4x4");
const MyQuaternion = require("../MyMath/Quaternion");
const MyVector3 = require("../MyMath/Vector3");
const MyVector4 = require("../MyMath/Vector4");

class MyLeg {
  constructor(name,_endOfset) {
    this.name = name
    switch (name) {
      case "leftBack":
        this.legLocalEulerAngles = pr.lbEulerAngles;
        this.legBaseFORG = pr.lbLegBaseFORG;
        this.legCCP = pr.lbContCntrPnt;
        break;
      case "leftMiddle":
        this.legLocalEulerAngles = pr.lmEulerAngles;
        this.legBaseFORG = pr.lmLegBaseFORG;
        this.legCCP = pr.lmContCntrPnt;
        break;
      case "leftFront":
        this.legLocalEulerAngles = pr.lfEulerAngles;
        this.legBaseFORG = pr.lfLegBaseFORG;
        this.legCCP = pr.lfContCntrPnt;
        break;
      case "rightBack":
        this.legLocalEulerAngles = pr.rbEulerAngles;
        this.legBaseFORG = pr.rbLegBaseFORG;
        this.legCCP = pr.rbContCntrPnt;
        break;
      case "rightMiddle":
        this.legLocalEulerAngles = pr.rmEulerAngles;
        this.legBaseFORG = pr.rmLegBaseFORG;
        this.legCCP = pr.rmContCntrPnt;
        break;
      case "rightFront":
        this.legLocalEulerAngles = pr.rfEulerAngles;
        this.legBaseFORG = pr.rfLegBaseFORG;
        this.legCCP = pr.rfContCntrPnt;
        break;

      default:
        break;
    }

    
    let _endOfsetX = 0;
    let _endOfsetY = 0;

    if ((this.legBaseFORG.x) > 0)
    {
        _endOfsetX = _endOfset * -1;
    }
    else
    {
        _endOfsetX = _endOfset;
    }

    if((this.legBaseFORG.y) < 0)
    {
        _endOfsetX /= 2;
        _endOfsetY = _endOfset/2;
    }
    else if((this.legBaseFORG.y) > 0)
    {
        _endOfsetX /= 2;
        _endOfsetY = (_endOfset / 2) * -1;
    }
    
    this.legBaseFORG = new MyVector3(this.legBaseFORG.x + _endOfsetX, this.legBaseFORG.y +_endOfsetY, this.legBaseFORG.z);

    this.alphaAngleRad = 0;
    this.betaAngleRad = 0;
    this.gamaAngleRad = 0;

    this.alphaAngleDeg = 0;
    this.betaAngleDeg = 0;
    this.gamaAngleDeg = 0;

    this.alphaPos = this.legCCP;
    this.betaPos = 0;
    this.gamaPos = 0;

    this.legBaseFCCP = new MyVector3(0, 0, 0);

    this.InverseKinematicsForEndJoint();
  }


  UpdateLegBaseFORG(ofsetZ) {
    var rotation = new MyQuaternion();
    rotation.EulertoQuaternion(
      new MyVector3(
        this.legLocalEulerAngles.x + pr.bodyLocalEulerAngles.x,
        this.legLocalEulerAngles.y + pr.bodyLocalEulerAngles.y,
        this.legLocalEulerAngles.z + pr.bodyLocalEulerAngles.z + ofsetZ
      )
    );

    let T = new MyMatrix4x4();

    T.Rotate(rotation);

    let alphaPosForOrigin = this.GetAlphaPosForOrigin();
    
    T.m03 = alphaPosForOrigin.x;
    T.m13 = alphaPosForOrigin.y;
    T.m23 = alphaPosForOrigin.z;

    var trans = dotMyVector4(T, new MyVector4(this.legBaseFCCP.x, this.legBaseFCCP.y, this.legBaseFCCP.z, 1.0));

    this.legBaseFORG = new MyVector3(trans.x, trans.y, this.legBaseFORG.z);
    this.legBasePos = this.legBaseFORG
  }

  GetAlphaPosForOrigin() {

    var rotation = new MyQuaternion();

    rotation.EulertoQuaternion(new MyVector3(
      pr.bodyLocalEulerAngles.x,
      pr.bodyLocalEulerAngles.y,
      pr.bodyLocalEulerAngles.z
    )
    );

    let T = new MyMatrix4x4();
    T.Rotate(rotation);

    T.m03 = pr.bodyLocalPosition.x;
    T.m13 = pr.bodyLocalPosition.y;
    T.m23 = pr.bodyLocalPosition.z;

    var pos = new MyVector4(this.legCCP.x, this.legCCP.y, this.legCCP.z, 1.0);

    return dotMyVector4(T, pos);

  }

  GetBetaPosForOrigin() {

    var Q1 = this.alphaAngleRad

    var rotation = new MyQuaternion();

    rotation.EulertoQuaternion(
      new MyVector3(
        this.legLocalEulerAngles.x + pr.bodyLocalEulerAngles.x,
        this.legLocalEulerAngles.y + pr.bodyLocalEulerAngles.y,
        this.legLocalEulerAngles.z + pr.bodyLocalEulerAngles.z + Q1 * 180 / Math.PI
      )
    );

    let T = new MyMatrix4x4();
    T.Rotate(rotation);

    let alphaPosForOrigin = this.GetAlphaPosForOrigin();

    T.m03 = alphaPosForOrigin.x;
    T.m13 = alphaPosForOrigin.y;
    T.m23 = alphaPosForOrigin.z;

    var pos = new MyVector4(pr.coxia * Math.cos(Q1), pr.coxia * Math.sin(Q1), 0, 1.0);

    return dotMyVector4(T, pos);
  }

  GetGamaPosForOrigin() {

    var Q1 = this.alphaAngleRad;
    var Q2 = -this.betaAngleRad;

    var rotation = new MyQuaternion();

    rotation.EulertoQuaternion(
      new MyVector3(
        this.legLocalEulerAngles.x + pr.bodyLocalEulerAngles.x,
        this.legLocalEulerAngles.y + pr.bodyLocalEulerAngles.y,
        this.legLocalEulerAngles.z + pr.bodyLocalEulerAngles.z + Q1 * 180 / Math.PI
      )
    );

    let T = new MyMatrix4x4();
    T.Rotate(rotation);

    let alphaPosForOrigin = this.GetAlphaPosForOrigin();

    T.m03 = alphaPosForOrigin.x;
    T.m13 = alphaPosForOrigin.y;
    T.m23 = alphaPosForOrigin.z;

    var pos = new MyVector4(Math.cos(Q1) * (pr.coxia + pr.tibia * Math.cos(Q2)),
      Math.sin(Q1) * (pr.coxia + pr.tibia * Math.cos(Q2)),
      pr.tibia * Math.sin(Q2),
      1);
    
    return dotMyVector4(T, pos);
  }

  GetLegBaseForOrigin() {

    var Q1 = this.alphaAngleRad;
    var Q2 = -this.betaAngleRad;
    var Q3 = -this.gamaAngleRad;
    
    var rotation = new MyQuaternion();

    rotation.EulertoQuaternion(
      new MyVector3(
        this.legLocalEulerAngles.x + pr.bodyLocalEulerAngles.x,
        this.legLocalEulerAngles.y + pr.bodyLocalEulerAngles.y,
        this.legLocalEulerAngles.z + pr.bodyLocalEulerAngles.z + Q1 * 180 / Math.PI
      )
    );

    let T = new MyMatrix4x4();
    T.Rotate(rotation);

    let alphaPosForOrigin = this.GetAlphaPosForOrigin();

    T.m03 = alphaPosForOrigin.x;
    T.m13 = alphaPosForOrigin.y;
    T.m23 = alphaPosForOrigin.z;

    var pos = new MyVector4(
      Math.cos(Q1)*(pr.coxia + 1.0*pr.femuar * Math.sin(Q2 + Q3) + pr.tibia * Math.cos(Q2)),
      Math.sin(Q1)*(pr.coxia - 1.0*pr.femuar * Math.sin(Q2 + Q3) + pr.tibia * Math.cos(Q2)),
      -pr.femuar * Math.cos(Q2 + Q3) + pr.tibia * Math.sin(Q2),
      1);
    
    return dotMyVector4(T, pos);
  }

  InverseKinematicsForEndJoint() {
    var rotation = new MyQuaternion();
    rotation.EulertoQuaternion(
      new MyVector3(
        this.legLocalEulerAngles.x + pr.bodyLocalEulerAngles.x,
        this.legLocalEulerAngles.y + pr.bodyLocalEulerAngles.y,
        this.legLocalEulerAngles.z + pr.bodyLocalEulerAngles.z
      )
    );

    var T = new MyMatrix4x4();

    T.Rotate(rotation);

    var alphaPosForOrigin = this.GetAlphaPosForOrigin();

    T.m03 = alphaPosForOrigin.x;
    T.m13 = alphaPosForOrigin.y;
    T.m23 = alphaPosForOrigin.z;

    T.Inverse();

    var P = dotMyVector4(T, new MyVector4(this.legBaseFORG.x, this.legBaseFORG.y, this.legBaseFORG.z, 1.0));

    this.alphaAngleRad = Math.atan2(P.y, P.x);

    var K = P.x * Math.cos(this.alphaAngleRad) - pr.coxia + P.y * Math.sin(this.alphaAngleRad);

    var a = 2 * P.z * pr.tibia;
    var b = -2 * K * pr.tibia;
    var c = pr.femuar * pr.femuar - K * K - P.z * P.z - pr.tibia * pr.tibia;

    this.betaAngleRad = Math.atan2(a, b) + Math.atan2(Math.sqrt(a * a + b * b - c * c), c);

    a = 0;
    b = pr.femuar;
    c = pr.coxia * Math.sin(this.betaAngleRad) - P.z * Math.cos(this.betaAngleRad) - P.x * Math.cos(this.alphaAngleRad) * Math.sin(this.betaAngleRad) -
      P.y * Math.sin(this.alphaAngleRad) * Math.sin(this.betaAngleRad);

    var gamaAngleX = [0, 0];

    gamaAngleX[0] = Math.atan2(a, b) + Math.atan2(Math.sqrt(a * a + b * b - c * c), c);
    gamaAngleX[1] = Math.atan2(a, b) - Math.atan2(Math.sqrt(a * a + b * b - c * c), c);

    var dif = [0, 0];

    for (var i = 0; i < 2; i++) {
      var px = Math.cos(this.alphaAngleRad) * (pr.coxia -
        pr.femuar * Math.sin(this.betaAngleRad + gamaAngleX[i]) +
        pr.tibia * Math.cos(this.betaAngleRad));

      var py = Math.sin(this.alphaAngleRad) * (pr.coxia -
        pr.femuar * Math.sin(this.betaAngleRad + gamaAngleX[i]) +
        pr.tibia * Math.cos(this.betaAngleRad));

      var pz = -pr.femuar * Math.cos(this.betaAngleRad + gamaAngleX[i]) -
        pr.tibia * Math.sin(this.betaAngleRad);

      dif[i] = Math.sqrt((px - P.x) * (px - P.x) + (py - P.y) * (py - P.y) + (pz - P.z) * (pz - P.z));
    }

    if (dif[0] <= dif[1]) {
      this.gamaAngleRad = gamaAngleX[0];
    } else {
      this.gamaAngleRad = gamaAngleX[1];
    }

    this.alphaPos = this.GetAlphaPosForOrigin();
    this.betaPos = this.GetBetaPosForOrigin();
    this.gamaPos = this.GetGamaPosForOrigin();
    this.legBasePos = this.GetLegBaseForOrigin();
    
    this.alphaAngleDeg = this.alphaAngleRad * 180 / Math.PI;
    this.betaAngleDeg = this.betaAngleRad * 180 / Math.PI;
    this.gamaAngleDeg = this.gamaAngleRad * 180 / Math.PI;
  }

  ForwardKinematics() {

    this.alphaAngleRad = this.alphaAngleDeg  * Math.PI / 180;
    this.betaAngleRad =  this.betaAngleDeg * Math.PI / 180;
    this.gamaAngleRad = this.gamaAngleDeg * Math.PI / 180;

    this.alphaPos = this.GetAlphaPosForOrigin();
    this.betaPos = this.GetBetaPosForOrigin();
    this.gamaPos = this.GetGamaPosForOrigin();
    this.legBasePos = this.GetLegBaseForOrigin();
  }
}

module.exports = MyLeg;
