<template>

  <div>
    <h1>KTooltip</h1>
    <br >

    <span
      v-for="n in 1000"
      :key="`tooltip-${n}`"
    >
      <KTooltip
        :reference="`tooltip-span-${n}`"
        :refs="$refs"
      >
        This is a KTooltip {{ n }}
      </KTooltip>
      <span
        :ref="`tooltip-span-${n}`"
        style="display: inline-block; width: 100px"
      >
        Tooltip {{ n }}
      </span>
    </span>
  </div>

</template>


<script>

  export default {
    name: 'PerformanceKTooltip',
  };

</script>
