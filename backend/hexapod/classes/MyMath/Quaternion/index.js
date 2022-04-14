class MyQuaternion {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 0;
  }

  EulertoQuaternion(vec) {
    let deg2rad = 0.0174532925;

    let X = deg2rad * vec.x;
    let Y = deg2rad * vec.y;
    let Z = deg2rad * vec.z;

    let cy = Math.cos(Z * 0.5);
    let sy = Math.sin(Z * 0.5);
    let cp = Math.cos(X * 0.5);
    let sp = Math.sin(X * 0.5);
    let cr = Math.cos(Y * 0.5);
    let sr = Math.sin(Y * 0.5);

    this.w = cr * cp * cy + sr * sp * sy;
    this.x = cr * sp * cy + sr * cp * sy;
    this.y = sr * cp * cy - cr * sp * sy;
    this.z = cr * cp * sy - sr * sp * cy;
  }
}

module.exports = MyQuaternion;
