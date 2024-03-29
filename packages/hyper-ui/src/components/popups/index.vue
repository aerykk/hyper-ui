<template>
    <transition
        name="fade"
        :duration="100">
        <div
            v-if="activated"
            class="popup"
            @click.self.prevent="$emit('close')">
            <div
                class="popup__item"
                :style="{ 'width': + width + dimension}">
                <h3 v-if="title">
                    {{ title }}
                </h3>
                <div class="position-relative">
                    <div
                        v-if="!customClose"
                        class="popup__close"
                        @click="$emit('close')">
                        <i class="fas fa-times" />
                    </div>
                    <slot
                        v-else
                        name="customClose" />
                    <div
                        v-if="!this.$slots.customContent"
                        class="popup__content">
                        <div
                            v-if="subTitle"
                            class="popup__content-header"
                            :class="[ 'popup-type-' + type ]">
                            <div class="popup-icon">
                                <i
                                    v-if=" type == ['warning', 'danger'] "
                                    class="fas fa-exclamation-triangle" />
                                <i
                                    v-if=" type == 'success' "
                                    class="fas fa-check" />
                                <i
                                    v-else
                                    class="fas fa-info-circle" />
                            </div>
                            <div class="subTitle">
                                {{ subTitle }}
                            </div>
                        </div>
                        <div class="popup__content-body">
                            <p class="m-0">
                                <slot />
                            </p>
                            <slot name="body" />
                        </div>
                        <div
                            v-if="this.$slots.footer"
                            class="popup__content-footer">
                            <slot name="footer" />
                        </div>
                    </div>

                    <slot
                        v-else
                        name="customContent" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        type: {
            default: 'default'
        },
        title: {
            type: String,
            default: null
        },
        subTitle: {
            type: String,
            default: null
        },
        activated: {
            type: Boolean
        },
        width: {
            default: '400px'
        },
        dimension: {
            type: String,
            default: 'px'
        }
    },
    computed: {
        customClose() {
            return this.$slots.customClose
        }
    }
}
</script>

<style lang="scss" scoped>
    .popup {
        display: flex;
        width: 100%;
        height: 100vh;
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background: rgba(0, 0, 0, 0.7);
    }

    .popup__close {
        position: absolute;
        top: -25px;
        right: 0px;
        opacity: .5;
        -webkit-transition: 0.1s ease-out;
        -moz-transition:  0.1s ease-out;
        transition:  0.1s ease-out;
        font-size: 22px;
        z-index: 999;
        color: #fff;
        img {
            width: 24px;
        }
        &:hover {
            opacity: 1;
            cursor: pointer;
            -webkit-transform: rotateZ(180deg);
            -moz-transform: rotateZ(180deg);
            transform: rotateZ(180deg);
        }
    }

    .popup__item {
        display: flex;
        position: relative;
        z-index: 30;
        flex-direction: column;
        width: 400px;
        max-width: 90%;
        @media (max-width: 768px) {
            max-width: 80%!important;
            max-height: 70vh;
        }
        h3 {
            color: #C6C6D6;
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;
            padding: 0;
            text-transform: uppercase;
        }
    }

    .popup__content {
        background: #1C2032;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }

    .popup__content-header {
        display: flex;
        width: 100%;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 10px;
        border-radius: 5px;
        text-align: left;
        &.popup-type-warning {
            background: #FADC72;
            color: #3D3E5D;
        }
        &.popup-type-danger {
            background: #F75D5D;
        }
        &.popup-type-info {
            background: #5D75F7;
        }
        &.popup-type-success {
            background: #43C981;
        }
        &.popup-type-default {
            background: rgba(255, 255, 255, .3)
        }
        .popup-icon {
            width: 45px;
            font-size: 40px;
        }
        .subTitle {
            width: calc(100% - 55px);
            font-size: 18px;
            font-weight: bold;
            line-height: 22px;
        }
    }

    .popup__content-body {
        color: #fff;
        padding: 10px 0;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        width: 100%;
    }

    .popup__content-footer {
        margin-top: 15px;
        display: flex;
        width: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
    {
        opacity: 0;
    }
</style>
