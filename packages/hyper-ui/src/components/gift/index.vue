<template>
    <div class="gift-box">
        <div class="gift-box__preview">
            <div class="gift-box__img">
                <img :src="gift.image"/>
            </div>
            <div class="gift-box__divider"></div>
            <div class="gift-box__preview-content text-center">
                <div class="h3 text-white margin-bottom-20">
                    {{ gift.name }}
                </div>
                <p v-html="gift.description"></p>
            </div>
        </div>
        <div class="gift-box__content">
            <div class="gift-box_msg">
                <Block title="You have a gift">
                    <div v-html="text"></div>
                </Block>
            </div>
            <div class="gift-box_action text-center text-white mt-auto mb-auto">
                <div class="h5">
                    From <strong>{{ user }}</strong> on 4 May
                </div>
                <div>
                    Status: {{ status }}
                </div>
                <Button status="second-success" @click="$emit('accept')" size="md" class="margin-top-10 mx-2">
                    Accept gift
                </Button>
                <Button status="second-warning" @click="$emit('decline')" size="md" class="margin-top-10 mx-2">
                    Decline gift
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button)
    },
    props: {
        status: String,
        user: String,
        date: String,
        text: String,
        gift: Object
    }
}
</script>

<style lang="scss" scoped>
    .gift-box {
        display: flex;
        width: 100%;
    }
    .gift-box__preview {
        width: 35%;
        max-width: 100%;
        display: inline-flex;
        background: #26263d;
        padding: 15px;
        border-radius: 5px;
        color: #fff;
        flex-direction: column;
        border: 1px solid #00aeff;
    }

    .gift-box__divider {
        width: 90%;
        margin: 20px 5%;
        height: 2px;
        border-radius: 100%;
        background: #00aeff;
        filter: blur(3px);
    }

    .gift-box__img {
        width: 100%;
        img {
            width: 100%;
            height: auto;
            max-height: 200px;
            object-fit: cover;
        }
    }

    .gift-box__preview-content {
        display: inline-flex;
        flex-direction: column;
    }

    .gift-box__content {
        display: inline-flex;
        flex-direction: column;
        padding-left: 20px;
        width: 65%;
        flex-basis: content;
    }

    .gift-box_msg {
    }
</style>
