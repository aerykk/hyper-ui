<template>
    <div
        :id="`tab_${index}`"
        class="tab-pane"
        :class="[ index === 0 ? 'show active' : '' ]"
        :aria-labelledby="`tab_${index}-tab`"
        role="tabpanel">
        <ul class="home-tabs__news-list">
            <NewsArticle
                v-for="(article, index) in articles"
                :key="index"
                :heading="article.heading"
                :date="article.date"
                :url="article.url"
                :content="article.content" />
        </ul>
    </div>
</template>

<script>
export default {
    components: {
        NewsArticle: () => import('../../').then(m => m.NewsArticle)
    },
    props: {
        articles: {
            type: Array,
            required: true,
            default: () => []
        },
        index: {
            type: Number,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>

.tab-pane {
    padding: 15px 5px 5px;
    background: #3D3E5D;
    width: 100%;
}

.home-tabs__news-list {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    color: #fff;
}

</style>
