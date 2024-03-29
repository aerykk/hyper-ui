<template>
    <JsonVie
        v-model="parsedData"
        :parsedData="parsedData" />
</template>


<script>
export default {

    components: {
        'JsonView': () => import('../../').then(m => m.JsonView)
    },
    props: {
        objData: {
            required: true
        }
    },

    data() {
        return {
            'parsedData': []
        }
    },

    watch: {
        'parsedData': {
            handler(newVal, oldVal) {
                this.$emit('input', this.makeJson(this.parsedData))
            },
            deep: true
        }
    },

    created() {
        this.parsedData = this.jsonParse(this.objData)
    },

    methods: {
        jsonParse(jsonStr) {
            const parseJson = json => {
                const result = []
                const keys = Object.keys(json)
                keys.forEach(k => {
                    const val = json[k]
                    let parsedVal = val

                    if (this.getType(val) === 'object') {
                        parsedVal = parseJson(val)
                    } else if (this.getType(val) === 'array') {
                        parsedVal = parseArray(val)
                    }

                    const opt = {
                        'name': k,
                        'type': this.getType(val)
                    }

                    if (opt.type === 'array' || opt.type === 'object') {
                        opt.childParams = parsedVal
                        opt.remark = null
                    } else {
                        opt.childParams = null
                        opt.remark = parsedVal
                    }

                    result.push(opt)
                })
                return result
            }

            const parseArray = arrayObj => {
                const result = []
                for (let i = 0; i < arrayObj.length; ++i) {
                    const val = arrayObj[i]
                    let parsedVal = val
                    if (this.getType(val) === 'object') {
                        parsedVal = parseJson(val)
                    } else if (this.getType(val) === 'array') {
                        parsedVal = parseArray(val)
                    }

                    const opt = {
                        'name': null,
                        'type': this.getType(val)
                    }

                    if (opt.type === 'array' || opt.type === 'object') {
                        opt.childParams = parsedVal
                        opt.remark = null
                    } else {
                        opt.childParams = null
                        opt.remark = parsedVal
                    }

                    result.push(opt)
                }
                return result
            }

            const parseBody = json => parseJson(json)

            return parseBody(jsonStr)
        },

        getType(obj) {
            if (obj === null) {
                return 'null'
            }

            switch (Object.prototype.toString.call(obj)) {
            case '[object Array]':
                return 'array'

            case '[object Object]':
                return 'object'

            default:
                return typeof obj
            }
        },

        makeJson(dataArr) {
            const revertWithObj = function(data) {
                const r = {}
                for (let i = 0; i < data.length; ++i) {
                    const el = data[i]
                    let key; let val
                    key = el.name
                    if (el.type === 'array') {
                        val = revertWithArray(el.childParams)
                    } else if (el.type === 'object') {
                        val = revertWithObj(el.childParams)
                    } else {
                        val = el.remark
                    }

                    if (key !== undefined) { r[key] = val }
                }
                return r
            }

            const revertWithArray = function(data) {
                const arr = []
                for (let i = 0; i < data.length; ++i) {
                    const el = data[i]
                    let r
                    if (el.type === 'array') {
                        r = revertWithArray(el.childParams)
                    } else if (el.type === 'object') {
                        r = revertWithObj(el.childParams)
                    } else {
                        r = el.remark
                    }

                    arr.push(r)
                }
                return arr
            }

            const revertMain = function(data) {
                return revertWithObj(data)
            }

            return revertMain(dataArr)
        }
    }
}

</script>

<style lang="scss">
p {
    margin: 0
}

ol, ul {
    margin: 0;
}

.block{
    position: relative;
    display: block;
    line-height: 30px;
    .fa-chevron-down, .fa-plus, .fa-remove {
        color: #999999;
    }
    .fa-chevron-down:hover {
        color: #ed1c24;
    }
}

.block.hide-block {
    background: #f5f5f5;

    .json-val {
        display: none;
    }

    .collapse-down {
        transform: rotate(-90deg);
        .fa-chevron-down:hover {
            color: #5cb85c;
        }
    }
}


.del-btn {
    position: absolute;
    top: 0;
    right: 2px;
    cursor: pointer;
    transition: opacity .4s ease;

    &:hover {
        opacity: .6;
    }
}

.des {
    position: absolute;
    right: 14px;
    font-size: 10px;
    line-height: 30px;
    color: #6190e8;
    cursor: pointer;
}

.add-des {
    color: #999;
}

.block_content {
    text-align: left;
    margin-left: 30px;
    line-height: 1.5 !important;

    .i-type {
        color: #999;
    }

    .key-input,
    .val-input {
        width: 140px;
        border: none;
        height: 25px;
        padding: 0 5px;
        font-weight: bold;
        font-size: 14px;
        background: rgba(0,0,0,0);

        &:focus {
            background: #ffffa0;
            border: none;
            outline: 0;
        }
    }

    .val-input {
        font-weight: normal;
        color: #0b8e6b;
    }
}

.block_content .json-key {
    font-weight: bold;

    &.json-desc {
        color: #999;
        font-size: .8em;
    }
}


.collopsed:before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 10px;
    background: #333;
}

.collapse-down {
    float: left;
    margin-top: 2px;
    margin-right: 2px;
    color: #000;
    cursor: pointer;
    transition: transform .2s ease;
}

.add-key {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    margin-bottom: 10px;
    font-size: .8em;
    line-height: 1em;
    cursor: pointer;
}


.array-ol {
    padding-left: 20px !important;
}

.array-item {
    position: relative;

    &.hide-item {
        background: #f5f5f5;

        .json-val {
            display: none;
        }

        .collapse-down {
            transform: rotate(-90deg);
            // transition: transform .4s ease;
        }
    }
}

.fa-remove:hover {
    color: #ed1c24;
}

.fa-plus:hover {
    color: #5cb85c;
}

</style>
