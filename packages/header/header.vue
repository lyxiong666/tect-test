<template>
    <div>
        <div>header组件 {{ test }}</div>
        <div @click="handleTest">点击触发dispatch</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'IHeader',
    methods: {
        handleTest() {
            this.$store.dispatch('handleTest')
        }
    },
    computed: {
        ...mapGetters([
            'test'
        ]),
    },
}
</script>

<style lang="scss" scoped>

</style>