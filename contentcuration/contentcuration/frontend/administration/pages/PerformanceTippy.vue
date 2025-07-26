<template>

  <div>
    <h1>Tippy</h1>
    <br >

    <span
      v-for="n in 1000"
      :key="`tooltip-${n}`"
    >
      <span
        :id="`tooltip-${n}`"
        style="display: inline-block; width: 100px"
      >
        Tooltip {{ n }}
      </span>
      <div
        :id="`tooltip-text-${n}`"
        style="display: none"
      >
        Tooltip text {{ n }}
      </div>
    </span>
  </div>

</template>


<script>

  import tippy from 'tippy.js';

  export default {
    name: 'PerformanceTippy',
    mounted() {
      for (let n = 1; n <= 1000; n++) {
        tippy(`#tooltip-${n}`, {
          content: document.getElementById(`tooltip-text-${n}`).innerHTML,
        });
      }
    },
  };

</script>
