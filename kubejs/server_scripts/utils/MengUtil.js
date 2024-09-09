// priority: 10

const MengUtils = {
    /**
     * 概率 1为100% 0.3为30% 0.01为1%
     * @param {Number} probability 
     * @returns 
     */
    isPercent: function (probability) {
        return Math.random() < probability;
    }
}