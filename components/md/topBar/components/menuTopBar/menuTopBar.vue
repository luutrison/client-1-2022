<template>
    <div :class="_c('item-mntb')" v-for="item, index in dataout">
        <div :class="[_c('skeleton-topbar'), _nc('skeleton')]" v-show="!translate.sub(item.name)"></div>
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

import { sortData } from "./menuTopBar.store";


import { _cname, _nc} from "@/giaodien/giaodien";

// import topbarStore from "./menuTopBar.store";
export default {
    inject: {
        translate: "translate"
    },
  
    async setup() {
        const items = await sortData()
        return {
            items, Button, Skeleton, _nc
        }
    },



    data() {

        return {
            // topbarStore,
            currentActive: 0,
            dataout: this.items,
            _c: _cname(this.$style)
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

    mounted() {
        console.log(this.translate, "translate");

    }
}
</script>


<style lang="scss" module>
@import"./menuTopBar.scss";
</style>