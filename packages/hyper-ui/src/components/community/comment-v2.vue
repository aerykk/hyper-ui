<template>
    <div>
        <div
            class="community-item__comment"
            :class="{ 'is-reply': reply }">
            <ButtonArrows
                size="xl"
                colored>
                <span
                    :class="{
                        'up': rate > 400,
                        'down': rate < 0
                    }">{{ rate }}</span>
            </ButtonArrows>
            <div class="comment-container">
                <Dropdown-menu
                    dropPosition="right"
                    style="right: 5px; top: 10px;" />
                <div class="comment-content">
                    <div class="user-info">
                        <Img :src="authorImg" />
                        <div>
                            <h6>{{ authorName }}</h6>
                            <!--<span class="time">{{ comment.date | timeAgoShort }}</span>-->
                        </div>
                    </div>
                    <div class="text">
                        {{ text }}
                    </div>
                </div>
                <div class="sub-comments-list">
                    <slot />
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <EmojiPicker
                    v-model="emojiList"
                    @reaction="onReaction"
                    @emojiClick="onEmojiClick" />
            </div>
            <CommunityReply
                @replyMode="reply = $event" />
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import VueEmojiReact from 'vue-emoji-react'

export default {
    components: {
        'Dropdown-menu': () => import('../../').then(m => m.Dropdown-menu),
        'CommunityReply': () => import('../../').then(m => m.CommunityReply),
        'Button': () => import('../../').then(m => m.Button),
        'ButtonArrows': () => import('../../').then(m => m.ButtonArrows),
        'EmojiPicker': VueEmojiReact
    },
    props: {
        rate: Number,
        authorImg: String,
        authorName: String,
        text: String,
    },
    data() {
        return {
            reply: false,
            emojiList: [],
            showPicker: false
        }
    },
    methods: {
        onReaction(name, index) {
            this.emojiList[index].count++
        },
        onEmojiClick(name) {
            if (this.emojiList.findIndex(emo => emo.name === name) === -1) {
                this.emojiList.push({
                    name,
                    count: 1
                })
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.community-item__comment {
    display: flex;
    justify-content: space-between;
    align-items: self-start;
    padding: 0 10px;
    margin: 30px 0 10px;
    transition: background-color .3s ease;
    .comment-container {
        width: calc(100% - 65px);
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .4);
        position: relative;
        @media (max-width: 767px) {
            width: 100%;
            margin-left: 15px;
            flex-direction: column;
        }
        .comment-content{
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            @media (max-width: 767px) {
                flex-direction: column;
            }
            .user-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: auto;
                max-width: 30%;
                margin-right: 20px;
                img {
                    width: 30px;
                    height: 30px;
                    object-fit: cover;
                    border-radius: 100%;
                    margin-right: 10px;
                }
                h6 {
                    padding: 0;
                    margin: 0;
                    font-weight: bold;
                    font-size: 14px;
                    color: #fff;
                }
                .time {
                    float: right;
                }
                @media (max-width: 767px) {
                    margin-bottom: 10px;
                }
            }
            .text {
                width: auto;
                font-size: 14px;
                line-height: 17px;
            }
        }
        .sub-comments-list {
            border-top: 1px solid rgba(255, 255, 255, .1);
        }
    }
    .up {
        color: #43C981;
    }
    .down {
        color: #F75D5D;
    }
}
</style>

