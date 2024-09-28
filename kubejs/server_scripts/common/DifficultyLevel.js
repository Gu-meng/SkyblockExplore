const Difficulty = {
    wither:{
        /**
         * 每等级增加的血量上限
         */
        levelUpAddHealth : 10,
        /**
         * 达到等级额外增加的血量上限
         */
        levelArriveExtraHealth:{
            10:100,
            20:200,
            30:400
        },
        /**
         * 达到等级增加盔甲上限
         */
        levelArriveArmor:{
            5 : 2,
            10 : 4,
            15 : 6,
            20 : 8,
            25 : 10,
            45 : 18,
        }
    },
    endDragon:{
        /**
         * 每等级增加的血量上限
         */
        levelUpAddHealth : 30,
        /**
         * 达到等级额外增加的血量上限
         */
        levelArriveExtraHealth:{
            10:100,
            20:200,
            30:400
        },
        /**
         * 每等级增加的盔甲上限
         */
        levelUpAddArmor: 0.25
    }
}