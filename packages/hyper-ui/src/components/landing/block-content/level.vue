<template>
    <div
        class="landing-level"
        :class="['level-size-' + size]"
        :style="{'color' : textColor}">
        <div
            v-if="textPosition == 'left'"
            class="landing-level__text-left">
            <slot />
        </div>
        <div class="landing-level__number">
            <span>
                {{ number }}
            </span>
        </div>
        <div
            v-if="textPosition == 'right'"
            class="landing-level__text-right">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        textPosition: {
            type: String,
            default: null
        },
        textColor: {
            type: String,
            default: '#fff'
        },
        number: {
            type: [Number, String],
            default: 0
        },
        size: {
            type: String,
            default: 'sm'
        }
    }
}
</script>

<style lang="scss" scoped>
    .landing-level{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        &.level-size-sm{
            font-size: 14px;
            .landing-level__number{
                width: 70px;
                height: 70px;
                font-size: 16px;
            }
        }
        &.level-size-md{
            font-size: 18px;
            .landing-level__number{
                width: 90px;
                height: 90px;
                font-size: 20px;
            }
        }
        &.level-size-lg{
            font-size: 20px;
            .landing-level__number{
                width: 110px;
                height: 110px;
                font-size: 22px;
            }
        }
    }
    .landing-level__number{
        background: url("../../../assets/img/landing/shield.png") no-repeat center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #036c35;
        font-weight: bold;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, .7);
    }
</style>
