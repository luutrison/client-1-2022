<script setup>
import { _cname } from '../giaodien/giaodien'
import TopBar from '~~/components/md/topBar/topBar.vue';
import _giaodien from '../giaodien/giaodien';
import MenuLeft from '~~/components/md/menuLeft/menuLeft.vue';
import Translate from '../components/page/handle/translate/translate.vue';

</script>

<template>
    <Translate>
        <main :class="[viewMode, _cname('main')]">
            <aside :class="_cname(['mode'])">
                <TopBar></TopBar>
                <MenuLeft></MenuLeft>
                <NuxtPage></NuxtPage>
                <!-- <slot></slot> -->
            </aside>
            <div :class="classTest">

            </div>
        </main>
    </Translate>
</template>

<script>
const a = true
if (a) {
    import("@/giaodien/modes/dark.scss")

}
else {
    import("@/giaodien/modes/simple.scss")

}

export default {
    data() {
        return {
            viewMode: _giaodien.modes[_giaodien.md].name,
        }
    },

    mounted() {
        console.log(this.classTest);
    },

    computed(){
        return {
            class: gen
        }
    }


}
</script>

