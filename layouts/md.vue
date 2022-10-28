<script setup>
import { _cname, _nc } from '../giaodien/giaodien'
import TopBar from '~~/components/md/topBar/topBar.vue';
import MenuLeft from '~~/components/md/menuLeft/menuLeft.vue';
import Translate from '../components/page/handle/translate/translate.vue';
import SimpleContainer from '../components/md/container/simple-container.vue';

</script>

<template>
    <div>
        <Translate>
            <NuxtLoadingIndicator></NuxtLoadingIndicator>
            <TopBar></TopBar>

            <!-- <MenuLeft></MenuLeft> -->
            <main :class="_nc('main-view')">
                <SimpleContainer>
                    <slot></slot>
                </SimpleContainer>
            </main>
        </Translate>
    </div>

</template>

<script>

export default {
}
</script>


<style lang="scss">
@import "@/giaodien/modes/mode-normal.scss";
</style>