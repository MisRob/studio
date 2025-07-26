<template>

  <div>
    <h1>VTooltip Lazy</h1>
    <br >

    <span
      v-for="n in 1000"
      :key="`tooltip-${n}`"
    >
      <VTooltip
        lazy
        bottom
      >
        <template #activator="{ on }">
          <span
            style="display: inline-block; width: 100px"
            v-on="on"
          >Tooltip {{ n }}</span>
        </template>
        <span>Tooltip text {{ n }}</span>
      </VTooltip>
    </span>
  </div>

</template>


<script>

  export default {
    name: 'PerformanceVTooltipLazy',
  };

</script>
