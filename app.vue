<template>
  <NuxtLayout :name="giaodien.bocuc.current">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script>
import { _giaodien } from '@/src/store/store'
export default {
  setup() {
    return {
      _giaodien
    }
  },

  data() {
    return {
      giaodien: {
        bocuc: {
          current: "md"
        }
      }
    }
  },
  provide() {
    return {
      giaodien: _giaodien(this.giaodien)

    }

    // https_1.default.createServer(options, app).listen(443, () => {
    //   console.log(port + "...." + address)
    // });
  },
  mounted(){
  }

};
</script>


<style lang="scss">
@import "@/src/giaodien/modes/mode-normal.scss";
</style>
