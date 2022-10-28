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
  }

};
</script>



<style>

</style>
