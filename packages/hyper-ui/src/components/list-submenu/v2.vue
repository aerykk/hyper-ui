<template>
    <ul>
        <li
            v-for="(value, prop) in list"
            :key="prop">
            <span>{{ prop }}</span> -
            <span>{{ subListLength(value) }}</span>
            <slot
                :listLength="subListLength(value)"
                :title="prop"
                :item="value">
                <list-submenu-v2
                    v-for="(value, prop) in value"
                    v-if="value instanceof Object && !Array.isArray(value)"
                    :key="prop"
                    :list="value" />
            </slot>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ListSubmenuV2',
    props: ['list'],
    methods: {
        subListLength: val => Array.isArray(val) ? val.length : Object.keys(val).length
    }
}
</script>

<style>

</style>
