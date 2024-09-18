// priority: 10

const MengUtils = {
    /**
     * 概率 1为100% 0.3为30% 0.01为1%
     * @param {Number} probability 
     * @returns 
     */
    isPercent: function (probability) {
        return Math.random() < probability;
    },
    // 优先级 9
    ArrUtil: {
        /**
        * 打乱数组
        * @param {Array} arr 
        * @returns 打乱后的数组
        */
        randArr: function (arr) { },
        /**
        * 判断是否为数组
        * @param {*} value 
        * @returns 
        */
        isArr: function (value) { }
    },
    // 优先级 9
    StrUtil: {
        /**
         * 字符串里是否包含数字
         * @param {String} str 
         */
        strInNumber: function (str) { },
        /**
         * 是否为字符串类型
         * @param {String} str 
         */
        isString: function (str) { }
    },
    // 优先级 8
    StrToItemUtil: {
        /**
         * 字符串内是否含有tag
         * @param {String} str 
         */
        strInTag: function (str) { },
        /**
         * 字符串第一位是否为数字
         * @param {String} str 
         */
        isFirstCharDigit: function (str) { },
        /**
         * 将字符串物品转换为json类型
         * @param {String} str 
         * @returns 会返回三个值 item或者tag、count和nbt或null
         */
        strSplitItem: function (str) { },
        /**
         * 物品类变成jsonobj
         * @param {Internal.ItemStack_} itemObj 
         */
        ItemOfAlterItem: function (itemObj) { },
        /**
         * 处理物品的nbt
         * @param {*} obj 
         */
        nbtProcessing: function (obj) { },
        /**
         * 处理字符串并同时处理nbt
         */
        strProcessingNbtItem:function (str){},
        /**
         * 物品数组处理
         * @param {Internal.ItemStack_[]} newList 
         * @param {Internal.ItemStack_[]} itemList 
         */
        itemListProcessing: function (newList, itemList) { }
    },
    /**
     * 工具等级
     */
    toolLevel: {
        'minecraft:needs_stone_tool': 1,
        'minecraft:needs_iron_tool': 2,
        'minecraft:needs_diamond_tool': 3,
        stoneTool: 'minecraft:needs_stone_tool',
        ironTool: 'minecraft:needs_iron_tool',
        diamondTool: 'minecraft:needs_diamond_tool'
    },
    /**
     * 工具tag
     */
    tagTool: {
        pickaxes: 'minecraft:pickaxes',
        axes: 'minecraft:axes',
        shovels: 'minecraft:shovels',
        hoes: 'minecraft:hoes'
    },
    /**
     * 方块对应的工具tag
     */
    tagBlockTool: {
        pickaxes: 'minecraft:mineable/pickaxe',
        hoes: 'minecraft:mineable/hoe',
        shovels: 'minecraft:mineable/shovel',
        axes: 'minecraft:mineable/axe'
    },
    /**
     * 每个等级对应的工具
     */
    tool: {
        0: {
            'minecraft:pickaxes': [
                'minecraft:wooden_pickaxe',
                'minecraft:golden_pickaxe'
            ],
            'minecraft:axes': [
                'minecraft:wooden_axe',
                'minecraft:golden_axe',
            ],
            'minecraft:shovels': [
                'minecraft:wooden_shovel',
                'minecraft:golden_shovel',
            ],
            'minecraft:hoes': [
                'minecraft:wooden_hoe',
                'minecraft:golden_hoe',
            ]
        },
        1: {
            'minecraft:pickaxes': [
                'minecraft:stone_pickaxe'
            ],
            'minecraft:axes': [
                'minecraft:stone_axe',
            ],
            'minecraft:shovels': [
                'minecraft:stone_shovel'
            ],
            'minecraft:hoes': [
                'minecraft:stone_hoe'
            ]
        },
        2: {
            'minecraft:pickaxes': [
                'minecraft:iron_pickaxe',
                'ae2:nether_quartz_pickaxe',
                'ae2:fluix_pickaxe',
                'ae2:certus_quartz_pickaxe',
            ],
            'minecraft:axes': [
                'minecraft:iron_axe',
                'ae2:nether_quartz_axe',
                'ae2:fluix_axe',
                'ae2:certus_quartz_axe',
                'meng:crushbone_axe'
            ],
            'minecraft:shovels': [
                'minecraft:iron_shovel',
                'ae2:nether_quartz_shovel',
                'ae2:fluix_shovel',
                'ae2:certus_quartz_shovel',
            ],
            'minecraft:hoes': [
                'minecraft:iron_hoe',
                'ae2:nether_quartz_hoe',
                'ae2:fluix_hoe',
                'ae2:certus_quartz_hoe',
            ]
        },
        3: {
            'minecraft:pickaxes': [
                'minecraft:diamond_pickaxe',
                'minecraft:netherite_pickaxe',
            ],
            'minecraft:axes': [
                'minecraft:diamond_axe',
                'minecraft:netherite_axe',
            ],
            'minecraft:shovels': [
                'minecraft:diamond_shovel',
                'minecraft:netherite_shovel',
            ],
            'minecraft:hoes': [
                'minecraft:diamond_hoe',
                'minecraft:netherite_hoe',
            ]
        }
    }
}