const MyVector3 = require("../Vector3");
const MyVector4 = require("../Vector4");


exports.sumMyVector3 = (vec1,  vec2) => 
{
    var result = new MyVector3();

    result.x = vec1.x + vec2.x;
    result.y = vec1.y + vec2.y;
    result.z = vec1.z + vec2.z;

    return result;
}

exports.divMyVector3 = (vec1,  vec2) => 
{
    var result = new MyVector3();

    result.x = vec1.x - vec2.x;
    result.y = vec1.y - vec2.y;
    result.z = vec1.z - vec2.z;

    return result;
}

exports.dotMyVector4 = ( matrix4x4,  vec) =>
{
    var result = new MyVector4(0, 0, 0, 0);

    result.x = matrix4x4.m00 * vec.x + matrix4x4.m01 * vec.y + matrix4x4.m02 * vec.z + matrix4x4.m03 * vec.w;
    result.y = matrix4x4.m10 * vec.x + matrix4x4.m11 * vec.y + matrix4x4.m12 * vec.z + matrix4x4.m13 * vec.w;
    result.z = matrix4x4.m20 * vec.x + matrix4x4.m21 * vec.y + matrix4x4.m22 * vec.z + matrix4x4.m23 * vec.w;
    result.w = matrix4x4.m30 * vec.x + matrix4x4.m31 * vec.y + matrix4x4.m32 * vec.z + matrix4x4.m33 * vec.w;

    return result;
}