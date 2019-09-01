<template>
  <ul>
    <li v-for="(todo,index) in todos" :key="index"> {{ todo }}</li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    props: ['todos']
  }

</script>
