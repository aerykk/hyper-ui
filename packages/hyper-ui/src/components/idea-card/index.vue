<template>
    <div
        class="idea-card__item"
        :class="customClass">
        <div
            v-if="parentName"
            class="head">
            <div
                v-if="parentImage"
                class="img">
                <Img :src="parentImage" />
            </div>
            <div class="text">
                <Button
                    status="none"
                    :to="`/idea/${id}`">
                    <h4>{{ parentName }}</h4>
                </Button>
                <Button
                    v-if="parentDeveloperName"
                    status="none"
                    :to="`/profile/${parentDeveloperId}`">
                    <p>{{ parentDeveloperName }}</p>
                </Button>
            </div>
        </div>
        <Button
            status="none"
            :to="`/idea/${id}`">
            <Img :src="image" />
            <div class="description">
                {{ description }}
            </div>
        </Button>
        <div class="item-action">
            <Button
                status="info"
                :to="`/idea/${id}`"
                iconHide>
                Check it out
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
    },
    filters: {
        currencySign(cur_name) {
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
        image: String,
        description: String,
        funds: {
            obtained: Number,
            goal: Number
        },
        parentImage: String,
        parentName: String,
        parentDeveloperName: String,
        parentDeveloperId: Number,
        id: Number,
        customClass: {
            type: String,
            default: null
        }
    },
    computed: {
        goalProgress() {
            if (!this.funds) return 0

            const { obtained, goal } = this.funds

            return Math.round(obtained / goal * 100)
        }
    }
}
</script>

<style lang="scss">
    .idea-card__item {
        padding: 15px;
        border-radius: 5px;
        width: 100%;
        color: #fff;
        .head {
            display: flex;
            width: 100%;
            padding: 0px;
            margin-bottom: 15px;
            justify-content: space-between;
            align-items: center;
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
        }
        img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            border-radius: 5px;
        }
        .description {
            margin: 15px 0;
            font-weight: bold;
            font-size: 16px;
        }
        .item-action {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>
