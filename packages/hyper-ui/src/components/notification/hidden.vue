<template>
    <transition name="fade">
        <div
            v-if="showNotification"
            class="inline-notification"
            :class="[ 'type-' + type, 'size-' + size ]">
            <div class="inline-notification__icon">
                <i :class="`fas fa-${notif_icon}`" />
            </div>
            <div class="inline-notification__text">
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'HiddenNotification',
    props: {
        visibleNotification: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'default'
        },
        size: String
    },
    data() {
        return {
        }
    },
    computed: {
        showNotification(){
            console.log('this.visibleNotification',this.visibleNotification)
            return this.visibleNotification;
        },
        notif_icon() {
            switch (this.type) {
            case 'info':
                return 'info'
            case 'success':
                return 'check-circle'
            case 'warning':
                return 'exclamation-triangle'
            case 'danger':
                return 'times-circle'
            default:
                return 'cog'
            }
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .inline-notification{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        color: #3D3E5D;
        position: relative;
        &.type-warning {
            background: #FADC72;
            color: #3D3E5D;
        }
        &.type-danger {
            background: #F75D5D;
            color: #fff;
            .close{
                color: #fff;
            }
        }
        &.type-info {
            background: #5D75F7;
            color: #fff;
        }
        &.type-success {
            background: #43C981;
        }
        &.type-default {
            background: rgba(255, 255, 255, .3);
            color: #f0f0f0;
        }
        &.size-sm{
            padding: 5px;
        }
        &.size-md{
            padding: 10px;
        }
    }
    .inline-notification__icon{
        width: 35px;
        font-size: 25px;
        text-align: center;
    }
    .inline-notification__text{
        margin: 0 20px 0 10px;
        width: calc( 100% - 35px );
        text-align: left;
    }
</style>
