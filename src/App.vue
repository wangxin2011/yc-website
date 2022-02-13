<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.print-table-view{
  position: absolute;
  z-index: -99;
  opacity: 0;
  top: 0;
  left: 0;
}
.text-esplice{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.tip-item{
    max-width: 600px;
}
</style>
