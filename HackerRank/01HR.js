// TODO Medidor para ver si pasa de un nivel y cuando pasa contamos
function countingValleys(steps, path) {
  let count = 0;
  let elevation = 0;
  for (i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      if (elevation == -1) {
        count++;
      }
      elevation++;
    } else {
      elevation--;
    }
  }

  return count;
}

//? A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return.
// b=60
// keyboards = [40,50,60]
// drivers = [5,8,12]

function getMoneySpent(keyboards, drives, b) {
  if (Math.min(...keyboards) + Math.min(...drives) > b) return -1;
  let cache = 0;
  for (let k of keyboards) {
    for (let d of drives) {
      cache = k + d > cache && k + d <= b ? k + d : cache;
    }
  }
  return cache;
}

function catAndMouse(x, y, z) {
  let aDistance = Math.abs(z - x);
  let bDistance = Math.abs(z - y);
  if (aDistance < bDistance) {
    return 'Cat A';
  } else if (aDistance > bDistance) {
    return 'Cat B';
  }
  return 'Mouse C';
}
