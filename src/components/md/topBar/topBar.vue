<template>
    <div :class="mc('topbar')">
        <div :class="mc('left-topbar')">LifeTree</div>
        <div :class="mc('tab-bar')">
            <MenuTopBar></MenuTopBar>
        </div>
        <div :class="mc('right-topbar')">
            <NuxtLink to="/account/login">
                <button>account</button>
            </NuxtLink>
        </div>
    </div>

</template>

<script>
import { Button, Input, Grid, Row, Col } from 'ant-design-vue';
import { cname } from '~~/src/giaodien/giaodien';
import MenuTopBar from './components/menuTopBar/menuTopBar.vue';

export default {

    data() {
        return {
            mc: cname(this.$style)
        }
    },
    components: {
        Button, Input, Grid, Row, Col, MenuTopBar
    }

}
</script>

<style lang="scss" module>
@import "./topBar.scss";
</style>


