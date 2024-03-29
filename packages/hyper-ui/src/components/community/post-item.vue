<template>
    <div
        class="community-item"
        :class="{ 'is-reply': reply }">
        <div class="community-item__header">
            <div class="icon">
                <i
                    class="fas"
                    :class="postIcon" />
            </div>
            <div class="text">
                <nuxt-link :to="`/community/discussion/${id}`">
                    {{ title }}
                </nuxt-link>
            </div>
            <div class="statistic">
                <div
                    class="rating"
                    :class="[ rate < 0 ? 'down' : 'up' ]">
                    <i
                        class="fas"
                        :class="[ rate < 0 ? 'fa-chevron-down' : 'fa-chevron-up' ]" />
                    {{ rate < 0 ? rate * -1 : rate }}
                </div>
                <div class="commentsCount">
                    <i class="fas fa-comment" />
                    {{ commentsCount }}
                </div>
                <div v-if="author" class="user">
                    <div>
                        <Img :src="author.img" />
                        <span class="name">{{ author.name }}</span>
                    </div>
                    <div class="time">
                        25 min
                    </div>
                </div>
            </div>
        </div>
        <div v-if="contentText" class="community-item__post">
            <p>{{ contentText }}</p>
            <Img :src="contentImg" />
        </div>
        <div v-if="contentText" class="community-item__action text-right">
            <a
                v-if="!reply"
                href="#"
                class="btn btn-sm btn-icon">
                <i class="fas fa-thumbs-down" />
            </a>
            <CommunityReply
                :class="{ 'w-100' : reply }"
                @replyMode="reply = $event" />
        </div>

        <PostComment
            v-for="(comment, index) in comments"
            v-if="comments"
            :key="index"
            :rate="comment.rate"
            :author="comment.author"
            :date="comment.date"
            :text="comment.text">
            <PostComment
                v-for="(subcomment, index) in comment.replies"
                v-if="comment.replies"
                :key="index"
                :rate="subcomment.rate"
                :author="subcomment.author"
                :date="subcomment.date"
                :text="subcomment.text" />
        </PostComment>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    components: {
        'PostComment': import('../../').then(m => m.PostComment),
        'CommunityReply': () => import('../../').then(m => m.CommunityReply)
    },
    props: {
        id: {
            type: Number,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        actionStatus: {
            type: String,
            default: null
        },
        rate: {
            type: Number,
            default: 0
        },
        author: {
            img: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            }
        },
        contentImg: {
            type: String,
            default: null
        },
        contentText: {
            type: String,
            default: null
        },
        commentsCount: {
            type: Number,
            default: 0
        },
        comments: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            reply: false
        }
    },
    computed: {
        postIcon() {
            switch (this.actionStatus) {
            case 'pinned':
                return 'fa-map-pin'
            case 'locked':
                return 'fa-lock'
            case 'starred':
                return 'fa-star'
            default:
                return 'fa-comments'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .community-item {
        background: rgba(0, 0, 0, .16);
        border: 1px solid rgba(112, 112, 112, .2);
        border-radius: 5px;
        color: #fff;
        &.is-reply {
            /*background: rgba(255, 255, 255, .1);*/
        }
    }
    .community-item__header {
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .position {
            width: 50px;
            text-align: center;
            padding: 13px 0 15px;
            position: relative;
            margin-right: 10px;
            span {
                display: block;
                position: relative;
                z-index: 4;
                &.up {
                    color: #43C981;
                }
                &.down {
                    color: #F75D5D;
                }
            }
            i {
                font-size: 26px;
                position: absolute;
                left: 0;
                right: 0;
                z-index: 3;
                cursor: pointer;
                color: #C6C6D6;
                &.fa-sort-up {
                    top: 0;
                    &:hover {
                        color: #43C981;
                    }
                }
                &.fa-sort-down {
                    bottom: 0;
                    &:hover {
                        color: #F75D5D;
                    }
                }
            }
        }
        .icon {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            line-height: 40px;
            text-align: center;
            background: rgba(0, 0, 0, .13);
            font-size: 18px;
            .fa-map-pin {
                color: #5D75F7;
            }
            .fa-lock {
                color: #F75D5D;
            }
            .fa-star {
                color: #FADC72;
            }
            .fa-comments {
                color: #3D3E5D;
            }
        }
        .text {
            width: calc(70% - 70px);
            font-weight: bold;
            font-size: 16px;
            a{
                color: #fff;
            }
            @media (max-width: 767px) {
                width: calc( 100% - 60px);
            }
        }
        .statistic {
            width: 30%;
            min-width: 250px;
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: 767px) {
                width: 100%;
                margin: 15px 0 0;
            }
            .rating {
                width: 40px;
                text-align: center;
                i {
                    margin-right: 5px;
                }
                &.down {
                    color: #F75D5D;
                }
                &.up {
                    color: #43C981;
                }
            }
            .user {
                display: inline-flex;
                flex-direction: column;
                text-align: right;
                img {
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    margin: 0 5px;
                    float: unset;
                }
                .time{
                    line-height: 16px;
                }
            }
            .commentsCount {
                width: 60px;
                text-align: left;
                i {
                    margin-right: 5px;
                }
            }
        }
        @media (max-width: 767px) {
            flex-wrap: wrap;
            padding-bottom: 0;
        }
    }
    .community-item__post {
        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(112, 112, 112, .5);
        border-radius: 5px;
        margin: 21px 10px 10px;
        padding: 10px 30px 10px 10px;
        font-size: 14px;
        line-height: 16px;
        max-height: 350px;
        overflow-y: auto;
        position: relative;
        overflow-x: hidden;
        img {
            max-width: 100%;
            max-height: 300px;
        }
        &::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, .3);
            border-radius: 0;
        }
        &::-webkit-scrollbar {
            width: 4px;
            background: rgba(0, 0, 0, .3);
        }
        &::-webkit-scrollbar-thumb {
            background-color: #5D75F7;
            border-radius: 0;
            border: none;
        }
    }
    .community-item__post-menu {
        position: absolute;
        right: 0;
        top: 5px;
        width: 20px;
        height: 20px;
        .dropmenu_container {
            .rw-btn--card {
                padding: 0;
                border: none;
                width: 20px;
                height: 20px;
                div {
                    border-color: #fff;
                    &:before,
                    &:after {
                        border-color: #fff;
                    }
                }
                &:hover {
                    background: transparent;
                }
            }
            &.show {
                .rw-btn--card {
                    background: transparent;
                    color: #fff;
                    div {
                        border-color: #fff;
                        &:before,
                        &:after {
                            background: #fff;
                        }
                    }
                }
            }
            .dropdown-menu {
                width: auto;
                min-width: 80px;
                padding: 0;
                background: #151824;
                &:before {
                    width: 10px;
                    height: 10px;
                    display: inline-block;
                    content: "";
                    position: absolute;
                    top: -5px;
                    right: 5px;
                }
                ul {
                    padding: 0;
                    margin: 0;
                    li {
                        width: 100%;
                        padding: 3px;
                        a {
                            width: 100%;
                            text-align: center;
                            text-transform: uppercase;
                            color: #fff;
                            padding: 0;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
    .community-item__action {
        margin: 10px 7px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .btn-icon {
            color: #F75D5D;
            font-size: 16px;
        }
    }
    .community-item__post-reply {
        margin: 0 10px;
        h4 {
            font-weight: bold;
        }
        textarea {
            background: rgba(0, 0, 0, .1);
        }
    }
    .community-item__comment {
        display: flex;
        justify-content: space-between;
        align-items: self-start;
        padding: 0 10px;
        margin: 30px 0 10px;
        .position {
            width: 50px;
            text-align: center;
            padding: 13px 0 15px;
            position: relative;
            margin-right: 10px;
            span {
                display: block;
                position: relative;
                z-index: 4;
                &.up {
                    color: #43C981;
                }
                &.down {
                    color: #F75D5D;
                }
            }
            i {
                font-size: 26px;
                position: absolute;
                left: 0;
                right: 0;
                z-index: 3;
                cursor: pointer;
                color: #C6C6D6;
                &.fa-sort-up {
                    top: 0;
                    &:hover {
                        color: #43C981;
                    }
                }
                &.fa-sort-down {
                    bottom: 0;
                    &:hover {
                        color: #F75D5D;
                    }
                }
            }
        }
        .comment-container {
            width: calc(100% - 65px);
            background: rgba(0, 0, 0, .16);
            border: 1px solid rgba(112, 112, 112, .4);
            position: relative;
            .comment-content{
                padding: 15px 20px;
                display: flex;
                justify-content: space-between;
                .user_info {
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
                    h6{
                        padding: 0;
                        margin: 0;
                        font-weight: bold;
                        font-size: 14px;
                    }
                    .time{
                        float: right;
                    }
                }
                .text{
                    width: auto;
                    font-size: 14px;
                    line-height: 17px;
                }
            }
            .sub_comments_list{
                display: block;
                width: 100%;
                border-top: 1px solid rgba(255, 255, 255, .1);
            }
        }
    }
</style>
