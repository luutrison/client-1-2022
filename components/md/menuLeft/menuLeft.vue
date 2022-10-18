
<template>
    <div :class="_c(['menu-left'])">

    </div>
</template>
<script>
import { _cname } from '~~/giaodien/giaodien';

export default {
    data() {
        return {
            _c: _cname(this.$style)
        }
    }
}
</script>


<style module lang="scss">
@import "./menuLeft.scss";
</style>

