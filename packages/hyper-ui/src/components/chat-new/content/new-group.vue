<template>
    <div class="new-group">
        <a
            href="#"
            class="close-btn">
            <i class="fas fa-times" />
        </a>
        <div class="new-group__wrapper">
            <div class="new-group__nav">
                <Button
                    status="plain"
                    size="lg"
                    tag="button"
                    :class="{ 'active': create_new }"
                    @click="selectNew">
                    Create New
                </Button>
                <Button
                    status="plain"
                    size="lg"
                    tag="button"
                    :class="{ 'active': join }"
                    @click="selectJoin">
                    Join Group
                </Button>
            </div>
            <div
                v-if="join"
                class="new-group__join-group">
                <div class="form-group invert w-100">
                    <label>Enter group invitation link or code</label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter link or code"
                        name="group_name">
                </div>
                <div class="text-right w-100">
                    <Button status="opacity-info">
                        Join
                    </Button>
                </div>
            </div>
            <div
                v-if="create_new"
                class="new-group__create-group">
                <div class="create-group__avatar">
                    <img src="https://cdn1.iconfinder.com/data/icons/people-std/512/customers-512.png">
                    <Button status="plain">
                        Select
                    </Button>
                </div>
                <div class="create-group__info">
                    <div class="form-group invert w-100">
                        <label>Group name</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter a name for your group"
                            name="group_name">
                    </div>
                    <div class="form-group invert w-100">
                        <label>Description</label>
                        <textarea
                            class="form-control"
                            placeholder="Enter a name for your group"
                            name="group_description" />
                    </div>
                    <div class="w-100 text-right margin-top-20">
                        <Button
                            status="opacity-success"
                            class="ml-2">
                            Create
                        </Button>
                        <Button
                            status="opacity-warning"
                            class="ml-2">
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            join: false,
            create_new: true
        }
    },
    components: {
        'Button': () => import('../../').then(m => m.Button),
    },
    methods: {
        selectJoin() {
            this.join = true
            this.create_new = false
        },
        selectNew() {
            this.join = false
            this.create_new = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .new-group{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(61, 62, 93, .9);
    }
    .close-btn{
        position: absolute;
        font-size: 20px;
        color: #fff;
        top: 15px;
        right: 15px;
    }
    .new-group__wrapper{
        width: 90%;
        max-width: 600px;
    }
    .new-group__nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        .button{
            padding: 5px 0;
            border-radius: 0;
            border-bottom: 2px solid transparent;
            &.active{
                border-color: #fff;
            }
        }
    }
    .new-group__create-group,
    .new-group__join-group{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .create-group__avatar{
        text-align: center;
        width: 200px;
        img{
            width: 170px;
        }
    }
    .create-group__info{
        width: calc( 100% - 200px );
        padding-left: 25px;
    }
</style>
