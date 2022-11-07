<script setup>
import { cname, nc } from '../src/giaodien/giaodien'
import TopBar from '~~/src/components/md/topBar/topBar.vue';
import MenuLeft from '~~/src/components/md/menuLeft/menuLeft.vue';
import Translate from '../src/components/current/handle/translate/translate.vue';
import SimpleContainer from '../src/components/md/container/simple-container.vue';

</script>

<template>
    <div>
        <Translate>
            <NuxtLoadingIndicator></NuxtLoadingIndicator>
            <TopBar></TopBar>

            <!-- <MenuLeft></MenuLeft> -->
            <main :class="nc('main-view')">
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
@import "@/src/giaodien/modes/mode-normal.scss";
</style>