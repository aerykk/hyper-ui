<template>
    <div class="row product-grid">
        <Block
            :noGutter="true"
            :bgGradient="true"
            :onlyContentBg="true">
            <HeadingBar
                slot="title"
                class="mb-0"
                :headingTabs="[
                    { title: 'Top Games', category: 'topSelling' },
                    { title: 'New Releases', category: 'newReleases' },
                    { title: 'Upcoming', category: 'upcoming' }
                ]"
                :showActions="true"
                @changeTab="category = $event; clearFilters()">
                <template slot="additional-action">
                    <span
                        class="sort-title"
                        hidden>Sort by:</span>
                    <HeadingBarFields
                        v-for="(opt, index) in sortOptions"
                        :key="index"
                        :name="opt.title"
                        :icon="opt.icon"
                        :activeUp="sortBy.property === opt.property ? sortBy.asc : null"
                        @clickUp="setSort(opt.property, true)"
                        @clickDown="setSort(opt.property, false)" />
                </template>
            </HeadingBar>
            <div class="product-grid__filters align-items-center">
                <div class="d-flex align-items-center">
                    <Dropdown
                        id="product-genres"
                        name="Filter by Genre"
                        :showBg="true"
                        class="product-genre">
                        <div class="product-genre__content">
                            <a
                                v-for="genre in availableGenres"
                                :key="genre"
                                :href="`#${genre}`"
                                :class="{ 'product-genre__btn--active': selectedGenres.includes(genre) }"
                                @click.prevent="setGenre(genre)">{{ genre }}</a>
                        </div>
                    </Dropdown>
                    <InputSearcher
                        v-model="phrase" />
                </div>
                <Button
                    status="lightpurple"
                    iconHide>
                    All New Releases
                </Button>
            </div>
            <transition name="slide-in">
                <div
                    v-if="filtersActive"
                    class="active-filters">
                    <div class="active-filters__content">
                        <OptionTag
                            v-if="phrase.length"
                            title="NAME:"
                            :text="phrase"
                            @delete="phrase = ''" />
                        <OptionTag
                            v-if="selectedGenres.length"
                            title="GENRES:"
                            isParent
                            @delete="selectedGenres = []">
                            <OptionTag
                                v-for="(genre, index) in selectedGenres"
                                :key="index"
                                :text="genre"
                                isChildren
                                @delete="selectedGenres.splice(index, 1)" />
                        </OptionTag>
                        <OptionTag
                            v-if="sortBy.property"
                            title="SORT BY:"
                            @delete="sortBy.property = null">
                            <OptionTag
                                title="Property:"
                                isChildren
                                :isParent="false"
                                @delete="sortBy.property = null">
                                <select v-model="sortBy.property">
                                    <option
                                        v-for="opt in sortOptions"
                                        :key="opt.property"
                                        :value="opt.property">
                                        {{ opt.title }}
                                    </option>
                                </select>
                            </OptionTag>
                            <OptionTag
                                title="Direction:"
                                isChildren
                                :isParent="false"
                                hideButton
                                @delete="sortBy.asc = !sortBy.asc">
                                {{ sortBy.asc ? 'Ascending' : 'Descending' }}
                                <Icon
                                    name="arrow-up"
                                    class="sort-button"
                                    :class="{ 'desc': !sortBy.asc }"
                                    @click="sortBy.asc = !sortBy.asc" />
                            </OptionTag>
                        </OptionTag>
                    </div>
                </div>
            </transition>
            <ContentNavigation
                v-if="filteredProducts.length"
                :items="filteredProducts">
                <GameGrid
                    slot-scope="{ items }"
                    :itemInRow="2"
                    :showRating="false"
                    :items="items"
                    showTime
                    itemBg="transparent"
                    pricePosition="right" />
            </ContentNavigation>
            <div v-else-if="filtersActive">
                <p>
                    No products were found using these filters. Want to <Button
                        status="plain"
                        @click="$store.commit('application/activeModal', 'comingSoon')">
                        Check for updates
                    </Button>?
                </p>
                <Button
                    status="info"
                    size="md"
                    iconHide
                    @click="clearFilters()">
                    Clear filters
                </Button>
            </div>
            <p v-else>
                Nothing could be found. Want to <Button
                    status="plain"
                    @click="$store.commit('application/activeModal', 'comingSoon')">
                    Check for updates
                </Button>?
            </p>
        </Block>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Block': () => import('../../').then(m => m.Block),
        'HeadingBar': () => import('../../').then(m => m.HeadingBar),
        'HeadingBarFields': () => import('../../').then(m => m.HeadingBarFields),
        'InputSearcher': () => import('../../').then(m => m.InputSearcher),
        'Dropdown': () => import('../../').then(m => m.Dropdown),
        'GameGrid': () => import('../../').then(m => m.GameGrid),
        'ContentNavigation': () => import('../../').then(m => m.ContentNavigation),
        'OptionTag': () => import('../../').then(m => m.OptionTag)
    },
    props: {
        products: {
            type: Object,
            default: () => ({
                topSelling: [],
                newReleases: [],
                upcoming: []
            })
        }
    },
    data() {
        return {
            category: 'topSelling',
            phrase: '',
            selectedGenres: [],
            sortBy: {
                property: null,
                asc: true
            },
            sortOptions: [
                { title: 'Name', property: 'name', icon: 'language' },
                { title: 'Price', property: 'price', icon: 'dollar-sign' }
            ]
        }
    },
    computed: {
        filteredProducts() {
            const { property, asc } = this.sortBy
            const sortDir = dir => asc ? dir : dir * -1
            return this.products[this.category]
                .filter(product =>
                    product.name.toLowerCase().includes(this.phrase.toLowerCase()))
                .filter(product => this.selectedGenres.length
                    ? product.meta.developerTags.some(genre => this.selectedGenres.includes(genre))
                    : true)
                .sort((a, b) => property
                    ? a[property] > b[property]
                        ? sortDir(1)
                        : a[property] < b[property] ? sortDir(-1) : 0
                    : 0)
        },
        availableGenres() {
            return this.products[this.category].reduce((tags, product) => [
                ...tags,
                ...(product.meta.developerTags || []).filter(tag =>
                    !tags.includes(tag))
            ], []).sort()
        },
        filtersActive() {
            const { phrase, selectedGenres, sortBy: { property } } = this
            return Boolean(phrase.length || selectedGenres.length || property)
        }
    },
    methods: {
        setGenre(genre) {
            const genreKey = this.selectedGenres.indexOf(genre)
            genreKey > -1
                ? this.selectedGenres.splice(genreKey, 1)
                : this.selectedGenres.push(genre)
        },
        clearFilters() {
            this.selectedGenres = []
            this.phrase = ''
            this.sortBy.property = null
            this.sortBy.asc = true
        },
        setSort(prop, direction) {
            const { property, asc } = this.sortBy
            this.sortBy.property = property === prop && direction === asc
                ? null
                : prop
            this.sortBy.asc = direction
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-grid {
        margin: 30px 0;
    }
    .product-grid__filters {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .sort-title {
        font-weight: 700;
        margin-right: 20px;
    }
    .product-genre__content {
        max-height: 260px;
        overflow-y: auto;
    }
    .product-genre__btn--active {
        background: rgba(255,255,255,.1);
    }

    .slide-in-enter-active {
        transition: transform .25s ease, opacity .25s ease;
    }
    .slide-in-enter, .slide-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }

    .active-filters {
        margin: 20px 0;
    }
    .active-filters__content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .sort-button {
        color: rgba(1,1,1,.8);
        margin-left: 6px;
        transition: transform .2s ease;
        cursor: pointer;
        &.desc {
            transform: rotate(180deg);
        }
    }
    @media (max-width: 768px) {
        .product-grid__filters{
            display: none;
        }
    }
</style>
