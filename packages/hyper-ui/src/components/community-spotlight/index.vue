<template>
    <Block
        title="Community Spotlight"
        :noGutter="true"
        :bgGradient="true"
        :onlyContentBg="true">
        <template slot="heading-bar">
            <Button
                status="none"
                :to="communityPath"
                class="title-icon text-white">
                <i
                    v-if="!activateElement"
                    class="fas fa-comments" />
                <i
                    v-else
                    class="fas fa-cog" />
            </Button>
        </template>
        <div
            v-if="discussions.length > 0"
            class="w-100">
            <div
                v-if="editing"
                class="editor-container editor-container--style-2">
                <p class="">
                    Set Up Community
                </p>
            </div>
            <ul class="community-spotlight__list">
                <li
                    v-for="(item, index) in discussions"
                    :key="index">
                    <a :href="item.link">
                        <span class="community-spotlight__name">{{ item.name }}</span>
                        <span class="community-spotlight__count">{{ item.count }}</span>
                    </a>
                </li>
            </ul>
            <Button
                status="outline-white"
                :to="communityPath"
                hide_icon>
                Go To Community
            </Button>
        </div>
        <div
            v-if="discussions.length === 0"
            class="w-100">
            <h4>No highlighted community activity yet.</h4>
        </div>
    </Block>
</template>


<script>
export default {
    name: 'CommunitySpotlight',
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Block': () => import('../../').then(m => m.Block)
    },
    props: {
        discussions: {
            type: Array,
            default: () => []
        },
        communityPath: {
            type: String,
            default: null
        },
        editing: {
            type: Boolean,
            default: false
        },
        activateElement: {
            type: Boolean,
            default: false
        }
    }
}
</script>


<style lang="scss" scoped>
    .editor-container {
        position: relative;
    }

    .editor-container--style-2 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 18px;
        font-weight: bold;

        i {
            display: block;
            font-size: 50px;
            margin-bottom: 20px;
        }
    }

    .editor-container--style-2 ~ * {
        opacity: 0.3;
    }

    .community-spotlight__list {
        padding: 0;
        margin: 10px 0;
        display: block;
        width: 100%;
        overflow: hidden;
        li {
            display: block;
            width: 100%;
            overflow: hidden;
            margin: 5px 0;
            padding-right: 20px;
            position: relative;
            &:after {
                position: absolute;
                right: 0px;
                top: 1px;
                bottom: 0;
                width: 20px;
                content: "\f086";
                font-family: 'Font Awesome 5 Free';
                color: #fff;
                text-align: right;
            }
            a {
                color: #fff;
            }
        }
    }

    .community-spotlight__name {
        float: left;
        max-width: 70%;
        font-weight: bold;
    }

    .community-spotlight__count {
        float: right;
        max-width: 30px;
    }

</style>
