<template>
    <div>
        <input type="text" :class="mc('search')" />
    </div>
</template>
<script>
import { cname } from '@/src/giaodien/giaodien';
export default {
    data() {
        return {
            mc: cname(this.$style)
        }
    }
}
</script>

<style lang="scss" module>
@import "./search.scss";
</style>