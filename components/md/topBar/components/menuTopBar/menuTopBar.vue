<template>
    <div v-show="!topbarData.data.length > 0" :class="[_c('skeleton-topbar-o'), _nc('skeleton')]"></div>
    <div :class="_c('item-mntb')" v-if="topbarData.data.length > 0" v-for="item, index in topbarData.data">
        <div :class="[_c('skeleton-topbar-place')]" v-if="!translate.sub(item.name)">
            <div :class="[_c('skeleton-topbar-icon'), _nc('skeleton')]"></div>
            <div :class="[_c('skeleton-topbar-title'), _nc('skeleton')]"></div>
        </div>
        <NuxtLink :to="item.url" :class="_nc('link')" v-show="translate.sub(item.name)">
            <button v-on:click="clickMenu(index)" :class="checkActive(index)">
                <div :class="_c('icon-mntb')" v-html="item.icon"></div>
                <div :class="_c('cate-name')">{{translate.sub(item.name)}}</div>
            </button>
        </NuxtLink>
    </div>

    <!-- <div>
        {{data?.data}}
    </div> -->
</template>

<script>

import { Button, Skeleton } from "ant-design-vue";

import { sortData, topbarData } from "./menuTopBar.store";


import { _cname, _nc } from "@/giaodien/giaodien";

// import topbarStore from "./menuTopBar.store";
export default {
    inject: {
        translate: "translate"
    },

    async setup() {
        topbarData.getThemeData()
        return {
            Button, Skeleton, _nc
        }
    },



    data() {
        return {
            // topbarStore,
            currentActive: 0,
            _c: _cname(this.$style),
            topbarData
        }
    },

    methods: {
        clickMenu(i) {
            this.currentActive = i;
        },
        checkActive(i) {
            if (this.currentActive === i) {
                return this._c("active");
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