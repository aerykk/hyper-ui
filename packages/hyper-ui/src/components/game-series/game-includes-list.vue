<template>
    <div class="game-includes">
        <div class="game-includes__title">
            <h3>What's included</h3>
        </div>
        <div
            class="game-includes__list">
            <div
                v-for="(item) of limitedList(limit)"
                :key="item.id"
                class="game-includes__item-container"
                :style="{ width: 'calc(100% / ' + showNumber + ')'}">
                <IncludesItem
                    :id="item.id"
                    :name="item.name"
                    :developer="item.developer"
                    :rating="item.rating ? item.rating.overall : 0"
                    :image="item.meta ? item.meta.images.mediumTile : null" />
            </div>
        </div>
        <!--Show buttons-->
        <LoadMore
            v-if="showMore && list.length > showNumber - 1"
            @click="showAll">
            Load More <span class="ml-3">+{{ hiddenCount() }}</span>
        </LoadMore>

        <!--Hide buttons-->
        <LoadMore
            v-if="!showMore"
            @click="hideAll">
            Hide
        </LoadMore>
    </div>
</template>

<script>
export default {
    components: {
        'IncludesItem': () => import('../../').then(m => m.IncludesItem),
        'LoadMore': () => import('../../').then(m => m.LoadMore)
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        showNumber: {
            type: Number,
            default: 4
        }
    },
    data() {
        return {
            hiddenItems: '',
            limit: this.showNumber,
            showMore: true
        }
    },
    computed: {
        products() {
            return this.list.map(item => this.$store.state.marketplace.products[item])
        }
    },
    methods: {
        hiddenCount() {
            return this.list.length - this.showNumber
        },
        showAll() {
            this.limit = this.list.length
            this.limitedList(this.limit)
            this.showMore = false
        },
        hideAll() {
            this.limit = this.showNumber
            this.limitedList(this.limit)
            this.showMore = true
        },
        limitedList(limit) {
            const list = this.list
            const newList = []

            list.forEach((item, i) => {
                if (i <= limit - 1) {
                    newList.push(item)
                }
            })

            return newList
        }
    }
}
</script>

<style lang="scss" scoped>
    .game-includes__title{
        display: flex;
        width: 100%;
        margin: 15px 0;
        justify-content: center;
        overflow: hidden;
        h3{
            display: inline-block;
            color: #fff;
            font-size: 21px;
            padding: 0;
            position: relative;
            margin: 15px 0 5px;
            &:before,
            &:after{
                content: "";
                position: absolute;
                top: 50%;
                background: #fff;
                height: 1px;
                width: 600px;
            }
            &:before{
                left: -30px;
                transform: translateX(-600px);
            }
            &:after{
                right: -30px;
                transform: translateX(600px);
            }
        }
    }
    .game-includes__list{
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
        margin: 0 -10px;
        transition: all 200ms ease-in-out;
    }
    .game-includes__list-more{
        width: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        padding: 0 10px 0 15px;
        color: #fff;
        cursor: pointer;
        i{
            font-size: 68px;
        }
        span{
            margin-left: 15px;
        }
    }
    .game-includes__item-container{
        width: calc(100%/5 - 20px);
        padding: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
    @media (max-width: 767px) {
        .game-includes__list{
            flex-direction: column;
        }
        .game-includes__item-container{
            width: 100%!important;
        }
    }
</style>
