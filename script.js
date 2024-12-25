function timeToNazhigai(hours, minutes, seconds) {
    const totalSeconds = (hours * 3600 + minutes * 60 + seconds);
    const nazhigai = totalSeconds / 1440; // 1 Nazhigai = 1440 seconds
    const vinazhigai = (nazhigai - Math.floor(nazhigai)) * 60;
    const tharparai = (vinazhigai - Math.floor(vinazhigai)) * 60;

    return {
      nazhigai: Math.floor(nazhigai),
      vinazhigai: Math.floor(vinazhigai),
      tharparai: Math.round(tharparai),
    };
  }

function nazhigaiToSec(nazhigai, vinazhigai, tharparai) {
// Convert Nazhigai, Vinazhigai, and Tharparai to total seconds
return (nazhigai * 1440 + vinazhigai * 24 + tharparai);
}

function nazhigaiSubtract(n1, v1, t1, n2, v2, t2) {
// Subtract times in seconds
const totalSeconds = nazhigaiToSec(n1, v1, t1) - nazhigaiToSec(n2, v2, t2);

// Handle negative results if necessary
if (totalSeconds < 0) {
    return {
        nazhigai: 0,
        vinazhigai: 0,
        tharparai: 0,
    };
}

// Convert total seconds back to Nazhigai, Vinazhigai, Tharparai
const nazhigai = Math.floor(totalSeconds / 1440);
const remainingSeconds = totalSeconds % 1440;

const vinazhigai = Math.floor(remainingSeconds / 24);
const tharparai = remainingSeconds % 24;

return {
    nazhigai: nazhigai,
    vinazhigai: vinazhigai,
    tharparai: tharparai,
};
}
  
function nazhigaiDivide(hours, minutes, seconds) {
    
    const nazhigai = hours / 4; // 1 Nazhigai = 1440 seconds
    const vinazhigai = (nazhigai - Math.floor(nazhigai)) * 60;
    const tharparai = (vinazhigai - Math.floor(vinazhigai)) * 60;

    return {
      nazhigai: Math.floor(nazhigai),
      vinazhigai: Math.floor(vinazhigai),
      tharparai: Math.round(tharparai),
    };
  }
  
var result = nazhigaiSubtract(42, 40, 0, 10, 50, 0);

console.log(result.nazhigai);
console.log(result.vinazhigai);
console.log(result.tharparai);