// priority: 10

/**
 * 概率 1为100% 0.3为30% 0.01为1%
 * @param {Number} probability 
 * @returns 
 */
function isPercent(probability) {
    return Math.random() < probability;
  }
  