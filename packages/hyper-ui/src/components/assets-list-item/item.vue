<template>
    <nuxt-link
        status="none"
        class="assets-list__item text-white"
        :class="{ 'transparent-bg' : isTransparent }"
        :to="`/asset/${id}`">
        <div class="thumb">
            <Img :src="image" />
        </div>
        <div class="info">
            <h5>{{ name }}</h5>
            <slot>
                <span class="float-left price">
                    {{ currentPrice }}
                </span>
                <span class="float-right box">
                    <Icon name="box" />
                    {{ count }}
                </span>
            </slot>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: null
        },
        name: {
            type: String,
            default: 'Name'
        },
        image: {
            type: String,
            default: null
        },
        currentPrice: {
            type: Number,
            default: 0
        },
        count: {
            type: String,
            default: null
        },
        isTransparent: {
            type: Boolean,
            default: false
        }
    },
    components: {
        'Img': () => import('../../').then(m => m.Img),
        'Icon': () => import('../../').then(m => m.Icon),
    },
}
</script>

<style lang="scss" scoped>
    .assets-list__item {
        border-radius: 5px;
        padding: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        text-decoration: none;
        transition: transform .3s ease;
        &:hover{
            cursor: pointer;
            will-change: transform;
            transform: perspective(300px) rotateX(0deg) rotateY(0deg) scale(1.03);
            box-shadow: 0 0 35px rgba(0, 0, 0, .2);
            transition: transform 200ms cubic-bezier(0.34, 1.01, 0.8, 0.24);
        }
        .thumb {
            display: inline-block;
            float: left;
            img {
                height: auto;
                width: 60px;
            }
        }
        .info {
            display: inline-block;
            width: calc(100% - 80px);
            float: right;
            h5 {
                color: #fff;
            }
            span {
                i {
                    margin-right: 5px;
                }
            }
        }
        &.transparent-bg {
            background: transparent;
            border: unset;
            box-shadow: unset;
            .thumb {
                padding: 5px;
                background: rgba(255, 255, 255, .1);
                border-radius: 5px;
            }
        }
    }
</style>
