<template>
    <div
        class="pledge-item"
        @mouseover="showToggle = true"
        @mouseleave="showToggle = false">
        <transition name="fade">
            <div
                v-if="showToggle && !form"
                class="pledge-form-toggle"
                style="animation-duration: 0.5s"
                @click="showFrom">
                Select this reward
            </div>
        </transition>
        <h3>Pledge US {{ minPrice | convertCurrency }} or more</h3>
        <h4 v-if="title">
            {{ title }}
        </h4>
        <div class="pledge-item__text">
            {{ description }}
        </div>
        <div
            v-if="!form && includes.length > 0"
            class="pledge-item__includes">
            <h6>Includes</h6>
            <ul>
                <li
                    v-for="(itm, index) in includes"
                    :key="index">
                    {{ itm.text }}
                </li>
            </ul>
        </div>
        <div class="pledge-item__info">
            <div v-if="deliveryDate">
                <span class="h6">Estimated delivery</span>
                {{ date }}
            </div>
            <div v-if="shipsTo">
                <span class="h6">Ships to</span>
                {{ shipsTo }}
            </div>
            <div
                v-if="backers"
                class="w-100 mt-5">
                <span class="h6">
                    {{ backers }} backers
                </span>
            </div>
        </div>
        <transition
            v-if="form"
            name="fade">
            <div class="mt-5">
                <div class="h6 font-weight-bold text-uppercase mb-3">
                    Pledge amount
                </div>
                <ContributeForm
                    v-model="toBePaid"
                    :defaultValue="minPrice"
                    :currency="currency"
                    :active="true"
                    @click="$emit('click')" />
            </div>
        </transition>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        'ContributeForm': () => import('../../').then(m => m.ContributeForm)
    },
    props: {
        currency: {
            type: String,
            default: '$'
        },
        minPrice: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        },
        includes: {
            type: Array,
            default: () => []
        },
        deliveryDate: {
            type: String,
            default: null
        },
        shipsTo: {
            type: String,
            default: null
        },
        backers: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            form: false,
            showToggle: false,
            toBePaid: ''
        }
    },
    computed: {
        date() {
            return moment(this.deliveryDate).format('DD MMMM, YYYY')
        }
    },
    methods: {
        showFrom() {
            this.form = true
            this.showToggle = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .pledge-item{
        padding: 15px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        color: #fff;
        background: rgba(0, 0, 0, .13);
        margin-bottom: 30px;
        h3, h4{
            font-size: 24px;
            text-transform: uppercase;
            color: #fff;
            padding: 0;
            margin-bottom: 25px;
        }
        h4{
            font-size: 16px;
            margin: 5px 0;
        }
    }
    .pledge-item__text{
        font-size: 14px;
        margin: 15px 0;
    }
    .pledge-item__includes{
        font-size: 14px;
        margin: 30px 0;
        h6{
            font-size: 14px;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
        }
        ul{
            padding: 0;
            li{
                display: block;
                width: 100%;
                margin: 10px 0;
                position: relative;
                padding-left: 20px;
                &:before{
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                    background: #fff;
                    position: absolute;
                    top: 8px;
                    left: 5px;
                    content: "";
                }
            }
        }
    }
    .pledge-item__info{
        display: flex;
        justify-content: space-between;
        text-align: left;
        flex-wrap: wrap;
        width: 100%;
        .h6{
            font-size: 14px;
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
            display: block;
        }
        div{
            width: 48%;
        }
    }
    .pledge-form-toggle{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(93, 117, 247, .95);
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>
