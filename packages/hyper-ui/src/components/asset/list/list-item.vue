<template>
    <li class="asset">
        <div class="asset__info">
            <Img
                :src="asset.image"
                class="asset__image" />
            <div class="asset__meta">
                <p>
                    <slot
                        name="link"
                        :asset="asset">
                        <nuxt-link :to="`/asset/${asset.id}`">
                            {{ asset.name }}
                        </nuxt-link>
                    </slot>
                </p>
                <span>{{ asset.productName }}</span>
            </div>
        </div>
        <div class="flex-center-between">
            <span
                v-if="asset.userName"
                class="asset__user">
                <Icon
                    name="user"
                    class="margin-right-5" />
                {{ asset.userName }}
            </span>
            <span class="asset__price">{{ asset.price.current | convertCurrency }}</span>
            <Button
                status="success"
                icon="cart-plus">
                Proceed to Purchase
            </Button>
        </div>
    </li>
</template>

<script>
export default {
    name: 'AssetListItem',
    components: {
        'Button': () => import('../../').then(m => m.Button)
    },
    props: {
        asset: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .asset {
        background-color: #343555;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        &--transitioned {
            transition: transform 1s, opacity 1s;
        }
        .asset__user {
            display: block;
            transform: translateY(-50px);
            transition: transform .2s ease;
        }
        &:hover {
            .asset__user {
                transform: translateY(0);
            }
        }
    }
    .asset__info {
        display: flex;
    }
    .asset__image {
        background: rgba(255,255,255,.1);
        padding: 4px;
        border-radius: 4px;
        width: 60px;
        height: 60px;
    }
    .asset__meta {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5px 0;
        margin-left: 14px;
    }
    .asset__price {
        background: rgba(1,1,1,.15);
        border-radius: 4px;
        padding: 10px;
        margin: 0 10px;
        box-shadow: inset 0 0 13px 0 rgba(1,1,1,.2);
    }
</style>

