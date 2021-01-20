'use stict';
import {
    Accelerometer
} from 'expo';

const THRESHOLD = 800;

export function addListener(handler) {
    let last_x, last_y, last_z;
    let lastUpdate = 0;
    
    Accelerometer.addListener(accelerometerData => {
        let {x, y, z} = accelerometerData;
        let currTime = Date.now();
        if ((currTime - lastUpdate) > 100) {
            let diffTime = (currTime - lastUpdate);
            lastUpdate = currTime;

            let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

            if(speed > THRESHOLD) {
                handler();
            }
            last_x = x;
            last_y = x;
            last_z = z;
        }
    })
}

export function removeListener() {
    Accelerometer.removeAllListeners();
}