<template>
    <div class="create-review text-white">
        <div class="w-100 mb-4">
            <div class="h5 font-weight-bold">
                Write a review for this game
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non pulvinar nulla. Praesent ac justo
                orci. Quisque ac leo id neque rhoncus convallis. Curabitur congue quam nec elit sagittis sollicitudin.
            </p>
        </div>
        <div class="create-review__user-avatar">
            <img src="https://image.freepik.com/free-vector/skull-with-beard-wear-headphones-gamer-music-mascot_8169-140.jpg">
        </div>
        <div class="create-review__content pl-4">
            <div class="invert">
                <textarea
                    placeholder="Type here"
                    class="form-control w-100"
                    rows="6" />
            </div>
            <div class="create-review__options">
                <div class="invert mr-5">
                    <label class="mb-0">
                        Visibility
                    </label>
                    <select
                        v-model="reviewVisibility"
                        class="form-control form-control-sm"
                        @change="onVisibility">
                        <option value="public">
                            Public
                        </option>
                        <option value="friends-only">
                            Friends Only
                        </option>
                    </select>
                </div>
                <div class="invert mr-5">
                    <label class="mb-0">
                        Language
                    </label>
                    <select class="form-control form-control-sm">
                        <option>English</option>
                        <option>Polish</option>
                        <option>Germany</option>
                    </select>
                </div>
                <div>
                    <Checkbox>
                        Allow comments
                    </Checkbox>
                </div>
                <div class="ml-auto">
                    <Button
                        status="plain"
                        @click=" textFormatting = true ">
                        Formatting Help
                    </Button>
                </div>
            </div>
            <div class="create-review__action mt-4">
                <div>
                    <div class="mb-2">
                        Do you recommend this game?
                    </div>
                    <Button
                        status="second-info"
                        size="sm"
                        icon="thumbs-up">
                        Yes
                    </Button>
                    <Button
                        status="second-info"
                        size="sm"
                        icon="thumbs-down"
                        class="ml-2">
                        No
                    </Button>
                </div>
                <div>
                    <Button
                        status="second-warning"
                        size="md"
                        class="mr-3"
                        @click="$emit('cancel')">
                        Cancel
                    </Button>
                    <Button
                        status="second-success"
                        size="md">
                        Post review
                    </Button>
                </div>
            </div>
        </div>
        <BasicPopup
            :activated="textFormatting"
            @close=" textFormatting = false ">
            <template slot="body">
                <TextFormatting />
            </template>
        </BasicPopup>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Checkbox': () => import('../../').then(m => m.Checkbox),
        'TextFormatting': () => import('../../').then(m => m.TextFormatting),
        'BasicPopup': () => import('../../').then(m => m.BasicPopup)
    },
    props: {

    },
    data() {
        return {
            textFormatting: false,
            reviewVisibility: 'public'
        }
    },
    methods: {
        onVisibility() {
            this.$emit('visibility', this.reviewVisibility)
        }
    }
}
</script>

<style lang="scss" scoped>
    .create-review {
        /*padding: 20px;*/
        /*border-radius: 5px;*/
        /*background: rgba(0, 0, 0, .2);*/
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .create-review__user-avatar {
        width: 100px;
        img {
            width: 100%;
            height: auto;
        }
    }
    .create-review__content{
        width: calc( 100% - 100px );
    }
    .create-review__options{
        width: 100%;
        display: flex;
        align-items: center;
        padding:  5px 10px;
        margin-top: 10px;
        background: rgba(0, 0, 0, .1);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        div{
            display: flex;
            align-items: center;
            label{
                margin-right: 8px;
            }
            select{
                width: 80px;
            }
        }
    }
    .create-review__action{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
