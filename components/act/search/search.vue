<template>
    <div>
        <input type="text" :class="_c('search')" />
    </div>
</template>
<script>
import { _cname } from '@/giaodien/giaodien';
export default {
    data() {
        return {
            _c: _cname(this.$style)
        }
    }
}
</script>

<style lang="scss" module>
@import "./search.scss";
</style>