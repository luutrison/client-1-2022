<script setup>
import { _cname, _nc } from '../giaodien/giaodien'
import TopBar from '~~/components/md/topBar/topBar.vue';
import _giaodien from '../giaodien/giaodien';
import MenuLeft from '~~/components/md/menuLeft/menuLeft.vue';
import Translate from '../components/page/handle/translate/translate.vue';
import SimpleContainer from '../components/md/container/simple-container.vue';

</script>

<template>
    <Translate>
        <main :class="_nc('main-view')">
            <NuxtLoadingIndicator></NuxtLoadingIndicator>
            <TopBar></TopBar>
            <MenuLeft></MenuLeft>
            <SimpleContainer></SimpleContainer>
            <!-- <NuxtPage></NuxtPage> -->
            <slot></slot>
            <div>

            </div>
        </main>
    </Translate>
</template>

<script>

export default {
    data() {
        return {
            scss: this.$style
        }
    },

    provide() {
        return {
            _c: _cname(this.scss)
        }
    },


    updated() {
        this.scss = this.$style
    }

}
</script>


<style lang="scss">
@import "@/giaodien/modes/mode-normal.scss";
</style>