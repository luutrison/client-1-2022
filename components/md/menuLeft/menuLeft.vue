
<template>
    <div :class="_c(['menu-left'])">

    </div>
</template>
<script>
import { _cname } from '~~/giaodien/giaodien';

export default {
    data() {
        const style = this.$style

        return {
            _c: _cname(style)
        }
    }
}
</script>


<style module lang="scss">
@import "./menuLeft.scss";
</style>

