<template>
    <div class="featured-assets__list">
        <div
            v-for="(item, index) in items"
            v-if="items && items.length"
            :key="index"
            class="featured-assets__item-container"
            :style="{ width: 'calc( 100% / ' + itemInRow + ')'}">
            <div class="featured-assets__list-item">
                <div class="img">
                    <Img :src="item.image" />
                </div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.subTitle }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Img': () => import('../../').then(m => m.Img)
    },
    props: ['items', 'itemInRow']
}
</script>

<style lang="scss" scoped>
    .featured-assets__list{
        display: flex;
        width: 100%;
    }
    .featured-assets__item-container{
        width: calc(100%/4);
        padding: 5px;
    }
    .featured-assets__list-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 25px;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: #27283E;
        color: #C6C6D6;
        text-align: center;
        .img{
            position: relative;
            margin-bottom: 20px;
            padding-bottom: 30px;
            display: inline-block;
            width: 100%;
            img{
                width: 100%;
                max-width: 160px;
            }
            &:after{
                position: absolute;
                bottom: 10px;
                width: 80%;
                left: 10%;
                content: "";
                height: 3px;
                background: rgba(0, 0, 0, .2);
                border-radius: 100%;
                box-shadow: 0 0 20px rgba(0, 0, 0, .9);
                filter: blur(2px);
            }
        }
        h3{
            font-weight: bold;
            font-size: 18px;
            color: #C6C6D6;
            padding: 0px;
            margin: auto 0 0;
        }
        p{
            margin: 0;
        }
    }
    @media (max-width: 768px) {
        .featured-assets__item-container{
            width: 100%!important;
        }
    }
</style>
