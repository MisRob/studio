<template>

  <div>
    <h1>KTooltipNext</h1>
    <br >

    <span
      v-for="n in 1000"
      :key="`tooltip-${n}`"
    >
      <span
        :data-floating-id="`tooltip-${n}`"
        style="display: inline-block; width: 100px"
      >
        Tooltip {{ n }}
      </span>
      <KTooltipNext
        :id="`tooltip-${n}`"
        placement="top"
      >
        Tooltip text {{ n }}
      </KTooltipNext>
    </span>
  </div>

</template>


<script>

  import KTooltipNext from 'kolibri-design-system/lib/KTooltip/next';

  export default {
    name: 'PerformanceKTooltipNext',
    components: {
      KTooltipNext,
    },
  };

</script>
