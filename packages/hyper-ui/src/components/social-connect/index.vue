<template>
    <div class="social-connect__item">
        <div class="social-connect__item-icon">
            <img :src="icon">
        </div>
        <div class="social-connect__item-text">
            <div class="h5 font-weight-bold mb-0 pb-0">
                {{ name }}
            </div>
            <div v-if="description">
                {{ description }}
            </div>
        </div>
        <div class="social-connect__item-action">
            <Button
                v-if="connected"
                status="second-warning"
                @click="disconnect">
                Disconnect
            </Button>
            <Button
                status="second-info"
                @click="connect">
                Connect
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
    },
    props: ['icon', 'name', 'description', 'connected'],
    methods: {
        connect() {
            this.$store.commit('application/activeModal', 'comingSoon')
        },
        disconnect() {
            this.$store.commit('application/activeModal', 'comingSoon')
        }
    }
}
</script>

<style lang="scss" scoped>
    .social-connect__item{
        display: flex;
        width: 100%;
        align-items: center;
    }
    .social-connect__item-icon{
        width: 40px;
        img{
            width: 100%;
            border-radius: 4px;
            overflow: hidden;
        }
    }
    .social-connect__item-text{
        padding: 0 15px;
        display: flex;
        flex-direction: column;
    }
    .social-connect__item-action{
        margin-left: auto;
    }
</style>
