<template>
    <div class="dropdown-vue">
        <button
            type="button"
            class="dropdown-vue__button"
            :class="{ 'dropdown-vue__button--active': showMenu }"
            @click.stop="showMenu = !showMenu">
            {{ title }}
            <Icon
                name="caret-down"
                class="dropdown-vue__icon"
                :class="{ 'dropdown-vue__icon--active': showMenu }" />
        </button>
        <transition name="slide-in-top">
            <div
                v-if="showMenu"
                v-click-outside.bool="showMenu"
                class="dropdown-vue__content"
                :data-title="title">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    components: {
        'List': () => import('../../').then(m => m.List)
    },
    props: {
        title: {
            type: String,
            default: null
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        closeMenu() {
            this.showMenu = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .dropdown-vue {
        position: relative;
    }
    .dropdown-vue__button {
        cursor: pointer;
        border-style: none;
        border-radius: 6px;
        background: rgba(53, 55, 87, 0.7);
        height: 30px;
        min-width: 140px;
        color: #fff;
        font-size: 11px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.dropdown-vue__button--active {
            text-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
        }
    }
    .dropdown-vue__icon {
        margin-left: 4px;
        transition: transform .2s ease;
        &.dropdown-vue__icon--active {
            transform: rotate(180deg);
        }
    }
    .dropdown-vue__content {
        border: 1px solid #565a8fb3;
        border-radius: 4px;
        width: 170px;
        z-index: 30;
        position: absolute;
        top: 35px;
        left: 0;
        box-shadow: 0 0 10px 0 rgba(27, 28, 48, 0.7);
    }
</style>
