
<script setup>
import { _cname } from '~~/giaodien/giaodien';
import MenuTopBar from './components/menuTopBar/menuTopBar.vue';
</script>

<template>
    <div :class="_cname(['topbar'])">
        <div :class="_cname(['left-topbar'])">Ho So Ca Nhan</div>
        <div :class="_cname(['tab-bar'])">
            <MenuTopBar></MenuTopBar>
        </div>
        <div :class="_cname(['right-topbar'])">Branch</div>
    </div>

</template>

<script>
import { Button, Input, Grid, Row, Col } from 'ant-design-vue';

export default {

    components: {
        Button, Input, Grid, Row, Col
    },
}
</script>

<style module lang="scss">

</style>
