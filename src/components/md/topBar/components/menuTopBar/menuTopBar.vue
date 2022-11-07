<template>
    <div v-show="!topbarData.data.length > 0" :class="[mc('skeleton-topbar-o'), nc('skeleton')]"></div>
    <div :class="mc('item-mntb')" v-if="topbarData.data.length > 0" v-for="item, index in topbarData.data">
        <div :class="[mc('skeleton-topbar-place')]" v-if="!translate.sub(item.name)">
            <div :class="[mc('skeleton-topbar-icon'), nc('skeleton')]"></div>
            <div :class="[mc('skeleton-topbar-title'), nc('skeleton')]"></div>
        </div>
        <NuxtLink :to="item.url" :class="nc('link')" v-show="translate.sub(item.name)">
            <button v-on:click="clickMenu(index)" :class="checkActive(index)">
                <div :class="mc('icon-mntb')" v-html="item.icon"></div>
                <div :class="mc('cate-name')">{{translate.sub(item.name)}}</div>
            </button>
        </NuxtLink>
    </div>

    <!-- <div>
        {{data?.data}}
    </div> -->
</template>

<script>

import { Button, Skeleton } from "ant-design-vue";

import {topbarData} from "./menuTopBar.store";


import { cname, nc } from "@/src/giaodien/giaodien";

// import topbarStore from "./menuTopBar.store";
export default {
    inject: {
        translate: "translate"
    },

    async setup() {
        topbarData.getThemeData()
        return {
            Button, Skeleton, nc
        }
    },



    data() {
        return {
            // topbarStore,
            currentActive: 0,
            mc: cname(this.$style),
            topbarData
        }
    },

    methods: {
        clickMenu(i) {
            this.currentActive = i;
        },
        checkActive(i) {
            if (this.currentActive === i) {
                return this.mc("active");
            }
        },
        change() {
            this.translate.changeLang("en")
        }
    },

}
</script>


<style lang="scss" module>
@import"./menuTopBar.scss";
</style>