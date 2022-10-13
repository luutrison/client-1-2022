<script setup>
import { _cname } from "~~/giaodien/giaodien";
import { Button } from "ant-design-vue";
</script>

<template>
    <div :class="_cname('item-mntb')" v-for="item, index in topbarStore.data">
        <NuxtLink :to="item.url" :class="_cname('link')">
            <button v-on:click="clickMenu(index)" :class="checkActive(index)">
                <div :class="_cname('icon-mntb')" v-html="item.icon"></div>
                <div>{{translate.sub(item.name)}}</div>
            </button>
        </NuxtLink>
    </div>
</template>

<script>

import topbarStore from "./menuTopBar.store";
export default {
    inject: {
        translate: "translate",
    },

    data() {
        topbarStore.getThemeData()
        return {
            topbarStore, currentActive: 0
        }
    },

    methods: {
        clickMenu(i) {
            this.currentActive = i;
        },
        checkActive(i) {
            if (this.currentActive === i) {
                return "active";
            }
        },
        change() {
            this.translate.changeLang("en")
        }
    },

    mounted() {
        console.log(this.translate);
    }
}
</script>