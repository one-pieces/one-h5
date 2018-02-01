exports.deviceMotionShake = (shakeThreshold = 800) => {
  return new Promise((resolve, reject) => {
    if (!window.DeviceMotionEvent) {
      alert('本设备不支持devicemotion事件');
      reject('本设备不支持devicemotion事件');
    }
    let x = 0, y = 0, z = 0, lastX = 0, lastY = 0, lastZ = 0, lastUpdate = 0;
    window.addEventListener('devicemotion', (event) => {
      const acceleration = event.accelerationIncludingGravity;
      const curTime = new Date().getTime();
      const diffTime = curTime - lastUpdate;
      console.log('event', diffTime, event);
      if (diffTime > 300) {
        lastUpdate = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        const speed = Math.abs(x - lastX + y - lastY + z - lastZ) / diffTime * 10000;
        console.log('speed', speed);
        if (speed > shakeThreshold) {
          resolve();
        }
        lastX = x;
        lastY = y;
        lastZ = z;
      }

    }, false);
  });
}

// export default {
//   deviceMotionShake
// };
