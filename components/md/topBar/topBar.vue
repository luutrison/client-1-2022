<template>
    <div :class="_c(['topbar'])">
        <div :class="_c(['left-topbar'])">My</div>
        <div :class="_c(['tab-bar'])">
            <MenuTopBar></MenuTopBar>
        </div>
        <div :class="_c(['right-topbar'])">Branch</div>
    </div>

</template>

<script>
import { Button, Input, Grid, Row, Col } from 'ant-design-vue';
import { _cname } from '~~/giaodien/giaodien';
import MenuTopBar from './components/menuTopBar/menuTopBar.vue';

export default {

    data(){
        return {
            _c: _cname(this.$style)
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


