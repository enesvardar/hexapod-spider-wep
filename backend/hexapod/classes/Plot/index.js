const hexapod = require("../Hexapod");

exports.createBodyPlotData = () => {
  let traces = [];
  let angles = [];

  for (let i = 0; i < 6; i++) {

     let name = hexapod.joints[i].name
     let alpha = Math.round(hexapod.joints[i].alphaAngleDeg)
     let beta = Math.round(hexapod.joints[i].betaAngleDeg)
     let gama = Math.round(hexapod.joints[i].gamaAngleDeg)

     let x = [];
     let y = [];
     let z = [];

     x.push(hexapod.joints[i].alphaPos.x);
     y.push(hexapod.joints[i].alphaPos.y);
     z.push(hexapod.joints[i].alphaPos.z);

     x.push(hexapod.joints[i].betaPos.x);
     y.push(hexapod.joints[i].betaPos.y);
     z.push(hexapod.joints[i].betaPos.z);

     x.push(hexapod.joints[i].gamaPos.x);
     y.push(hexapod.joints[i].gamaPos.y);
     z.push(hexapod.joints[i].gamaPos.z);

     x.push(hexapod.joints[i].legBaseFORG.x);
     y.push(hexapod.joints[i].legBaseFORG.y);
     z.push(hexapod.joints[i].legBaseFORG.z);

     traces.push({ x, y, z});
     angles.push({name,alpha,beta,gama})
  }

  let x = [];
  let y = [];
  let z = [];

  for (let i = 0; i < 6; i++) {

    x.push(hexapod.joints[i].alphaPos.x);
    y.push(hexapod.joints[i].alphaPos.y);
    z.push(hexapod.joints[i].alphaPos.z);
  }

  x.push(hexapod.joints[0].alphaPos.x);
  y.push(hexapod.joints[0].alphaPos.y);
  z.push(hexapod.joints[0].alphaPos.z);

  traces.push({ x, y, z });

  return {
    traces,
    angles,
  };
};
