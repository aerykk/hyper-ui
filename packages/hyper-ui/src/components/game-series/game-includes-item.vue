<template>
    <div class="game-includes__item">
        <nuxt-link :to="`/product/${id}`">
            <Img :src="image" />
        </nuxt-link>
        <nuxt-link :to="`/product/${id}`">
            <h4>{{ name }}</h4>
        </nuxt-link>
        <p>{{ developer }}</p>
        <div class="rating-stars">
            <Rating :number="rating" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Rating': () => import('../../').then(m => m.Rating),
        'Img': () => import('../../').then(m => m.Img)
    },
    props: {
        id: Number,
        name: String,
        developer: String,
        rating: Number,
        image: String
    }
}
</script>

<style lang="scss" scoped>
    .game-includes__item {
        display: flex;
        flex-direction: column;
        max-width: 350px;
        color: #fff;
        width: 100%;
        min-width: 140px;
        img {
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            border-radius: 3px;
        }
        h4 {
            color: #fff;
            font-size: 18px;
            margin: 0 0 3px;
            font-weight: bold;
        }
        .rating-stars {
            margin-top: auto;
        }
    }
</style>
