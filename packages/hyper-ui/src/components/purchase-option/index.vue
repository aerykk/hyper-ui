<template>
    <div
        class="purchase-option"
        :class="{'in-the-list' : inList}">
        <div class="purchase-option__price">
            <s
                v-if="oldPrice"
                class="small">
                {{ oldPrice | convertCurrency }}
            </s>
            {{ price | convertCurrency }}
        </div>
        <div
            v-if="img"
            class="purchase-option__img">
            <Img :src="img" />
        </div>
        <div class="purchase-option__info">
            <div class="small text-uppercase">
                {{ gameTag }}
            </div>
            <div class="h5 font-weight-bold m-0 p-0">
                {{ title }}
            </div>
            <div class="mt-2">
                <Button
                    icon="cart-plus"
                    size="xs">
                    ADD TO CART
                </Button>
                <Button
                    icon="play"
                    size="xs">
                    QUICK BUY
                </Button>
                <Button
                    icon="gift"
                    size="xs">
                    GIFT
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PurchaseOption',
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Img': () => import('../../').then(m => m.Img)
    },
    props: {
        price: {
            type: String,
            default: null
        },
        oldPrice: {
            type: String,
            default: null
        },
        img: {
            type: String,
            default: null
        },
        gameTag: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        id: {
            type: Number,
            default: null
        },
        inList: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .purchase-option{
        display: flex;
        flex-wrap: nowrap;
        align-items: stretch;
        min-height: 70px;
        &.in-the-list{
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, .1);
        }
    }
    .purchase-option__price{
        display: flex;
        flex-direction: column;
        width: 80px;
        text-align: right;
        font-size: 14px;
        color: #fff;
        margin-right: 8px;
        s{
            font-size: 12px;
        }
    }
    .purchase-option__img{
        width: 120px;
        margin: 0 8px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
    }
    .purchase-option__info{
        display: inline-flex;
        color: #fff;
        width: 80%;
        flex-direction: column;
        margin-left: 8px;
    }
</style>
