<template>
    <ul
        id="myTab"
        class="nav custom-tabs w-100"
        role="tablist">
        <li
            v-for="(item, index) in list"
            v-if="index <= 3"
            :key="index"
            class="nav-item">
            <a
                :id="`step${index}-tab`"
                class="nav-link"
                :class="[ index === 0 ? 'active' : '' ]"
                :href="`#tab_${index}`"
                :aria-controls="`step${index}-tab`"
                aria-expanded="true"
                data-toggle="tab">
                <div class="img" v-if="item.image">
                    <Img :src="item.image" />
                </div>
                <div class="text">
                    <h4>{{ item.heading }}</h4>
                    <p>{{ item.developer }}</p>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
    .custom-tabs {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        li {
            width: 25%;
            min-width: 200px;
            overflow: hidden;
            a {
                display: flex;
                width: 100%;
                padding: 15px;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                .img {
                    width: 50px;
                    img {
                        width: 100%;
                        height: auto;
                    }
                }
                .text {
                    width: calc(100% - 65px);
                    color: #fff;
                    h4 {
                        font-weight: bold;
                        padding: 0;
                        margin: 0 0 4px;
                        color: #fff;
                    }
                    p {
                        padding: 0;
                        margin: 0;
                    }
                }
                &.active {
                    background: #3D3E5D;
                }
            }
        }
    }
</style>
