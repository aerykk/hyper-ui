<template>
    <component
        :is="tag"
        :href="href"
        :target="target"
        class="landing-btn"
        :class="['Button-' + size]"
        style="font-size: 14px"
        :style="{ 'font-size': fontSize + 'px', 'width' : width + 'px' }"
        @click="$emit('click')">
        <slot />
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'a'
        },
        href: {
            type: String,
            default: 'javascript:;'
        },
        target: {
            type: String,
            default: '_self'
        },
        status: {
            type: String,
            default: 'default'
        },
        fontSize: {
            type: String,
            default: '14'
        },
        width: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin gradient( $first, $second ) {
        background: $first; /* Old browsers */
        background: linear-gradient(to bottom, $first 0%, $second 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }

    .landing-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 25px 0;
        line-height: 50px;
        font-weight: bold;
        border-style: none;
        border-radius: 1px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        text-decoration: none;
        cursor: pointer;
        transition: all 200ms ease-in-out;
        white-space: nowrap;
        @include gradient(#5c5759, #c2b9af);
        color: #000;
        text-transform: uppercase;
        font-size: 18px;
        position: relative;
        text-align: center;
        &:before{
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            height: 4px;
            background: rgba(255, 255, 255, .6);
            -webkit-clip-path: polygon(0 0, 100% 0, 99% 100%, 1% 100%);
            clip-path: polygon(0 0, 100% 0, 99% 100%, 1% 100%);
        }
        &:hover{
            @include gradient(#c2b9af, #c2b9af);
            cursor: pointer;
        }
    }
</style>
