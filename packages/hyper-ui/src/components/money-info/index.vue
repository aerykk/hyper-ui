<template>
    <div class="money-info">
        <ProgressBar
            :percentages="percentage"
            direction="vertical" />
        <div class="money-info__detail">
            <div class="text">
                {{ label }}
            </div>
            <div class="amount-detail">
                {{ amount | convertCurrency }}
                <span v-if="goal"> of {{ goal | convertCurrency }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'ProgressBar': () => import('../../').then(m => m.ProgressBar)
    },
    filters: {
        currency_sign(cur_name) {
            switch (cur_name) {
            case 'EUR':
                return '€'
            case 'GBP':
                return '£'
            default:
                return '$'
            }
        }
    },
    props: {
        amount: { required: true },
        currency: { default: 'USD' },
        label: { default: false },
        goal: {}
    },
    computed: {
        percentage() {
            return this.goal ? parseFloat(this.amount) / parseFloat(this.goal) * 100 : 100
        }
    }
}
</script>

<style lang="scss" scoped>
    .money-info {
        margin-top: 10px;
        font-size: 15px;
        position: relative;
        color: #fff;
        display: flex;
        justify-content: space-between;
    }
    .money-info__detail{
        width: 100%;
        padding-left: 15px;
        .text {
            font-weight: bold;
            margin-bottom: 4px;
        }
    }
</style>
