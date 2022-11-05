<template>
  <NuxtLayout :name="giaodien.bocuc.current">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script>
import { _giaodien } from '@/store/store'
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
  }

};
</script>



<style>

</style>
