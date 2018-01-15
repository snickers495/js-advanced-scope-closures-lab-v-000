 function produceDrivingRange(range) {
   return function(block1, block2) {
     const rangeVal = Math.abs(parseInt(block1.slice(0, 1)) - parseInt(block2.slice(0, 1)))
     if (rangeVal < range) {
       return `within range by ${(range - rangeVal)}`
     }
     else {
       return `${rangeVal - range} blocks out of range`
     }
   }
 }