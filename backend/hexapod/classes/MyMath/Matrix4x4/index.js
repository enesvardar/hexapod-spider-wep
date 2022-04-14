class MyMatrix4x4 {
  constructor() {
    this.m00 = 0;
    this.m01 = 0;
    this.m02 = 0;
    this.m03 = 0;

    this.m10 = 0;
    this.m11 = 0;
    this.m12 = 0;
    this.m13 = 0;

    this.m20 = 0;
    this.m21 = 0;
    this.m22 = 0;
    this.m23 = 0;

    this.m30 = 0;
    this.m31 = 0;
    this.m32 = 0;
    this.m33 = 1;
  }

  Rotate(vec) {
    this.m00 = 1 - 2 * vec.y * vec.y - 2 * vec.z * vec.z;
    this.m01 = 2 * vec.x * vec.y - 2 * vec.z * vec.w;
    this.m02 = 2 * vec.x * vec.z + 2 * vec.y * vec.w;
    this.m03 = 0;

    this.m10 = 2 * vec.x * vec.y + 2 * vec.z * vec.w;
    this.m11 = 1 - 2 * vec.x * vec.x - 2 * vec.z * vec.z;
    this.m12 = 2 * vec.y * vec.z - 2 * vec.x * vec.w;
    this.m13 = 0;

    this.m20 = 2 * vec.x * vec.z - 2 * vec.y * vec.w;
    this.m21 = 2 * vec.y * vec.z + 2 * vec.x * vec.w;
    this.m22 = 1 - 2 * vec.x * vec.x - 2 * vec.y * vec.y;
    this.m23 = 0;
  }

  Inverse() {
    var det =
      this.m03 * this.m12 * this.m21 * this.m30 -
      this.m02 * this.m13 * this.m21 * this.m30 -
      this.m03 * this.m11 * this.m22 * this.m30 +
      this.m01 * this.m13 * this.m22 * this.m30 +
      this.m02 * this.m11 * this.m23 * this.m30 -
      this.m01 * this.m12 * this.m23 * this.m30 -
      this.m03 * this.m12 * this.m20 * this.m31 +
      this.m02 * this.m13 * this.m20 * this.m31 +
      this.m03 * this.m10 * this.m22 * this.m31 -
      this.m00 * this.m13 * this.m22 * this.m31 -
      this.m02 * this.m10 * this.m23 * this.m31 +
      this.m00 * this.m12 * this.m23 * this.m31 +
      this.m03 * this.m11 * this.m20 * this.m32 -
      this.m01 * this.m13 * this.m20 * this.m32 -
      this.m03 * this.m10 * this.m21 * this.m32 +
      this.m00 * this.m13 * this.m21 * this.m32 +
      this.m01 * this.m10 * this.m23 * this.m32 -
      this.m00 * this.m11 * this.m23 * this.m32 -
      this.m02 * this.m11 * this.m20 * this.m33 +
      this.m01 * this.m12 * this.m20 * this.m33 +
      this.m02 * this.m10 * this.m21 * this.m33 -
      this.m00 * this.m12 * this.m21 * this.m33 -
      this.m01 * this.m10 * this.m22 * this.m33 +
      this.m00 * this.m11 * this.m22 * this.m33;

    det = 1 / det;

    var _m00 =
      det *
      (this.m12 * this.m23 * this.m31 -
        this.m13 * this.m22 * this.m31 +
        this.m13 * this.m21 * this.m32 -
        this.m11 * this.m23 * this.m32 -
        this.m12 * this.m21 * this.m33 +
        this.m11 * this.m22 * this.m33);
    var _m01 =
      det *
      (this.m03 * this.m22 * this.m31 -
        this.m02 * this.m23 * this.m31 -
        this.m03 * this.m21 * this.m32 +
        this.m01 * this.m23 * this.m32 +
        this.m02 * this.m21 * this.m33 -
        this.m01 * this.m22 * this.m33);
    var _m02 =
      det *
      (this.m02 * this.m13 * this.m31 -
        this.m03 * this.m12 * this.m31 +
        this.m03 * this.m11 * this.m32 -
        this.m01 * this.m13 * this.m32 -
        this.m02 * this.m11 * this.m33 +
        this.m01 * this.m12 * this.m33);
    var _m03 =
      det *
      (this.m03 * this.m12 * this.m21 -
        this.m02 * this.m13 * this.m21 -
        this.m03 * this.m11 * this.m22 +
        this.m01 * this.m13 * this.m22 +
        this.m02 * this.m11 * this.m23 -
        this.m01 * this.m12 * this.m23);
    var _m10 =
      det *
      (this.m13 * this.m22 * this.m30 -
        this.m12 * this.m23 * this.m30 -
        this.m13 * this.m20 * this.m32 +
        this.m10 * this.m23 * this.m32 +
        this.m12 * this.m20 * this.m33 -
        this.m10 * this.m22 * this.m33);
    var _m11 =
      det *
      (this.m02 * this.m23 * this.m30 -
        this.m03 * this.m22 * this.m30 +
        this.m03 * this.m20 * this.m32 -
        this.m00 * this.m23 * this.m32 -
        this.m02 * this.m20 * this.m33 +
        this.m00 * this.m22 * this.m33);
    var _m12 =
      det *
      (this.m03 * this.m12 * this.m30 -
        this.m02 * this.m13 * this.m30 -
        this.m03 * this.m10 * this.m32 +
        this.m00 * this.m13 * this.m32 +
        this.m02 * this.m10 * this.m33 -
        this.m00 * this.m12 * this.m33);
    var _m13 =
      det *
      (this.m02 * this.m13 * this.m20 -
        this.m03 * this.m12 * this.m20 +
        this.m03 * this.m10 * this.m22 -
        this.m00 * this.m13 * this.m22 -
        this.m02 * this.m10 * this.m23 +
        this.m00 * this.m12 * this.m23);
    var _m20 =
      det *
      (this.m11 * this.m23 * this.m30 -
        this.m13 * this.m21 * this.m30 +
        this.m13 * this.m20 * this.m31 -
        this.m10 * this.m23 * this.m31 -
        this.m11 * this.m20 * this.m33 +
        this.m10 * this.m21 * this.m33);
    var _m21 =
      det *
      (this.m03 * this.m21 * this.m30 -
        this.m01 * this.m23 * this.m30 -
        this.m03 * this.m20 * this.m31 +
        this.m00 * this.m23 * this.m31 +
        this.m01 * this.m20 * this.m33 -
        this.m00 * this.m21 * this.m33);
    var _m22 =
      det *
      (this.m01 * this.m13 * this.m30 -
        this.m03 * this.m11 * this.m30 +
        this.m03 * this.m10 * this.m31 -
        this.m00 * this.m13 * this.m31 -
        this.m01 * this.m10 * this.m33 +
        this.m00 * this.m11 * this.m33);
    var _m23 =
      det *
      (this.m03 * this.m11 * this.m20 -
        this.m01 * this.m13 * this.m20 -
        this.m03 * this.m10 * this.m21 +
        this.m00 * this.m13 * this.m21 +
        this.m01 * this.m10 * this.m23 -
        this.m00 * this.m11 * this.m23);
    var _m30 =
      det *
      (this.m12 * this.m21 * this.m30 -
        this.m11 * this.m22 * this.m30 -
        this.m12 * this.m20 * this.m31 +
        this.m10 * this.m22 * this.m31 +
        this.m11 * this.m20 * this.m32 -
        this.m10 * this.m21 * this.m32);
    var _m31 =
      det *
      (this.m01 * this.m22 * this.m30 -
        this.m02 * this.m21 * this.m30 +
        this.m02 * this.m20 * this.m31 -
        this.m00 * this.m22 * this.m31 -
        this.m01 * this.m20 * this.m32 +
        this.m00 * this.m21 * this.m32);
    var _m32 =
      det *
      (this.m02 * this.m11 * this.m30 -
        this.m01 * this.m12 * this.m30 -
        this.m02 * this.m10 * this.m31 +
        this.m00 * this.m12 * this.m31 +
        this.m01 * this.m10 * this.m32 -
        this.m00 * this.m11 * this.m32);
    var _m33 =
      det *
      (this.m01 * this.m12 * this.m20 -
        this.m02 * this.m11 * this.m20 +
        this.m02 * this.m10 * this.m21 -
        this.m00 * this.m12 * this.m21 -
        this.m01 * this.m10 * this.m22 +
        this.m00 * this.m11 * this.m22);

    this.m00 = _m00;
    this.m01 = _m01;
    this.m02 = _m02;
    this.m03 = _m03;
    this.m10 = _m10;
    this.m11 = _m11;
    this.m12 = _m12;
    this.m13 = _m13;
    this.m20 = _m20;
    this.m21 = _m21;
    this.m22 = _m22;
    this.m23 = _m23;
    this.m30 = _m30;
    this.m31 = _m31;
    this.m32 = _m32;
    this.m33 = _m33;
  }
}

module.exports = MyMatrix4x4;
