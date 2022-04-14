const { sumMyVector3 } = require("../classes/MyMath/AuxFcn");
const MyVector3 = require("../classes/MyMath/Vector3");

class Parameters {
  constructor() {

    this.coxia = 50;
    this.tibia = 70;
    this.femuar = 92;
    this.bodyZ = this.femuar / 2
    
    this.bodyLocalEulerAngles = new MyVector3(0, 0, 0);
    this.bodyLocalPosition = new MyVector3(0, 0, 0);
    
    this.lenght = this.coxia + this.tibia;

    this.lbContCntrPnt = new MyVector3(-68, 120.0, 0);
    this.lmContCntrPnt = new MyVector3(-140, 0, 0);
    this.lfContCntrPnt = new MyVector3(-68, -120.0, 0);
    this.rbContCntrPnt = new MyVector3(68, 120.0, 0);
    this.rmContCntrPnt = new MyVector3(140, 0, 0);
    this.rfContCntrPnt = new MyVector3(68, -120.0, 0);

    this.lbEulerAngles = new MyVector3(0, 0, 120); // left back
    this.lmEulerAngles = new MyVector3(0, 0, 180); // left middle
    this.lfEulerAngles = new MyVector3(0, 0, 240); // left front
    this.rbEulerAngles = new MyVector3(0, 0, 60); // right back
    this.rmEulerAngles = new MyVector3(0, 0, 360); // right middle
    this.rfEulerAngles = new MyVector3(0, 0, 300); // right front

    this.lbLegBaseFORG = sumMyVector3(
      this.lbContCntrPnt,
      new MyVector3(
        Math.cos((Math.PI * this.lbEulerAngles.z) / 180) * this.lenght,
        Math.sin((Math.PI * this.lbEulerAngles.z) / 180) * this.lenght,
        0
      )
    );
    this.lmLegBaseFORG = sumMyVector3(
      this.lmContCntrPnt,
      new MyVector3(
        Math.cos((Math.PI * this.lmEulerAngles.z) / 180) * this.lenght,
        Math.sin((Math.PI * this.lmEulerAngles.z) / 180) * this.lenght,
        0
      )
    );
    this.lfLegBaseFORG = sumMyVector3(
      this.lfContCntrPnt,
      new MyVector3(
        Math.cos((Math.PI * this.lfEulerAngles.z) / 180) * this.lenght,
        Math.sin((Math.PI * this.lfEulerAngles.z) / 180) * this.lenght,
        0
      )
    );
    this.rbLegBaseFORG = sumMyVector3(
      this.rbContCntrPnt,
      new MyVector3(
        Math.cos((Math.PI * this.rbEulerAngles.z) / 180) * this.lenght,
        Math.sin((Math.PI * this.rbEulerAngles.z) / 180) * this.lenght,
        0
      )
    );
    this.rmLegBaseFORG = sumMyVector3(
      this.rmContCntrPnt,
      new MyVector3(
        Math.cos((Math.PI * this.rmEulerAngles.z) / 180) * this.lenght,
        Math.sin((Math.PI * this.rmEulerAngles.z) / 180) * this.lenght,
        0
      )
    );
    this.rfLegBaseFORG = sumMyVector3(
      this.rfContCntrPnt,
      new MyVector3(
        Math.cos((Math.PI * this.rfEulerAngles.z) / 180) * this.lenght,
        Math.sin((Math.PI * this.rfEulerAngles.z) / 180) * this.lenght,
        0
      )
    );
  }
}

let pr = new Parameters()
exports.pr = pr