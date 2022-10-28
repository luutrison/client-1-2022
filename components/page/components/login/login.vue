

<template>
    <div :class="[_c(['login-container']), _nc([''])]">
        <div :class="[_c(['login-left']), _nc([''])]">login left</div>
        <div :class="[_c(['login-right']), _nc([''])]">login right</div>
    </div>
</template>

<script>
import { _cname, _nc } from '~~/giaodien/giaodien';

export default {

    setup() {
        return {
            _nc,
        }
    },
    data() {
        return {
            _c: _cname(this.$style)
        }
    },
   
}
</script>
<style lang="scss" module>
@import "./login.scss";
</style>