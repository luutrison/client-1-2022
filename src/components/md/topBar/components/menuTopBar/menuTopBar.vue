<template>
    <!-- <div v-show="!resdata.length > 0" :class="[mc('skeleton-topbar-o'), nc('skeleton')]"></div> -->
    <div :class="[mc('item-mntb'), nc('d-flex ai-center'), checkActive(index)]" v-for="item, index in resdata">
        <div :class="[mc('skeleton-topbar-place')]" v-if="!langConfig.sub(item.name)">
            <div :class="[mc('skeleton-topbar-icon'), nc('skeleton')]"></div>
            <div :class="[mc('skeleton-topbar-title'), nc('skeleton')]"></div>
        </div>
        <NuxtLink :to="item.url" :class="nc('link')" v-if="langConfig.sub(item.name)">
            <button v-on:click="clickMenu(index)">
                <div :class="mc('icon-mntb')" v-html="item.icon"></div>
                <div :class="mc('cate-name')">{{langConfig.sub(item.name)}}</div>
            </button>
            <!-- <button v-if="index != currentActive" v-on:click="clickMenu(index)">
                <div :class="mc('icon-mntb')" v-html="item.icon"></div>
                <div :class="mc('cate-name')">{{langConfig.sub(item.name)}}</div>
            </button> -->
            
        </NuxtLink>
    </div>
    
</template>

<script>

import { Button, Skeleton } from "ant-design-vue";

import {langConfig} from '@/src/module/underscore/translate/translate'

import {topbarData} from "./menuTopBar.store";


import { cname, nc } from "@/src/giaodien/giaodien";

// import topbarStore from "./menuTopBar.store";
export default {

    async setup() {
        const resdata = await topbarData.getThemeData()
        return {
            Button, Skeleton, nc, resdata, langConfig
        }
    },



    data() {
        return {
            // topbarStore,
            currentActive: 0,
            mc: cname(this.$style),
        }
    },

    mounted(){
        this.resdata.forEach((v, i) => {
            if (v.url == this.$route.fullPath) {
                this.currentActive = i;
            }
        });

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
            this.langConfig.changeLang("en")
        }
    },
}
</script>


<style lang="scss" module>
@import"./menuTopBar.scss";
</style>