<script setup>
import { _cname, _nc } from '../giaodien/giaodien'
import TopBar from '~~/components/md/topBar/topBar.vue';
import MenuLeft from '~~/components/md/menuLeft/menuLeft.vue';
import Translate from '../components/page/handle/translate/translate.vue';
import SimpleContainer from '../components/md/container/simple-container.vue';

</script>

<template>
    <Translate>
        <NuxtLoadingIndicator></NuxtLoadingIndicator>
        <TopBar :container="containerRef"></TopBar>

        <!-- <MenuLeft></MenuLeft> -->
        <main ref="containerRef" :class="_nc('main-view')">
            <SimpleContainer>
                <slot></slot>
            </SimpleContainer>
        </main>

        <!-- <NuxtPage></NuxtPage> -->
        <div>

        </div>
    </Translate>
</template>

<script>

export default {
    data() {
        return {
            containerRef: null
        }
    },

    provide() {
        return {
            _c: _cname(this.scss)
        }
    },

    mounted() {
    }

}
</script>


<style lang="scss">
@import "@/giaodien/modes/mode-normal.scss";
</style>