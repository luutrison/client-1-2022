

<template>
    <div :class="[mc('login-container'), nc('')]">
        <div :class="[mc('login-left'), nc('')]">login left</div>
        <div :class="[mc('login-right'), nc('')]">login right</div>
    </div>
</template>

<script>
import { cname, nc } from '~~/src/giaodien/giaodien';

export default {

    setup() {
        return {
            nc,
        }
    },
    data() {
        return {
            mc: cname(this.$style)
        }
    },
   
}
</script>
<style lang="scss" module>
@import "./login.scss";
</style>