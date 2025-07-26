<template>

  <div>
    <h1>UiTooltip</h1>
    <br >

    <span
      v-for="n in 1000"
      :key="`tooltip-${n}`"
    >
      <span
        :ref="`tooltip-span-${n}`"
        style="display: inline-block; width: 100px"
      >
        Tooltip {{ n }}

        <UiTooltip
          :zIndex="24"
          openOn="hover"
          position="top"
        >
          This is a KTooltip {{ n }}
        </UiTooltip>
      </span>
    </span>
  </div>

</template>


<script>

  import UiTooltip from 'kolibri-design-system/lib/keen/UiTooltip.vue';

  export default {
    name: 'PerformanceUiTooltip',
    components: {
      UiTooltip,
    },
  };

</script>
