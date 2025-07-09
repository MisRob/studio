<template>

  <span
    ref="tooltip"
    class="help-tooltip"
  >
    <span
      class="icons-wrapper"
      :aria-label="text"
    >
      <HelpIcon
        iconOutlineName="infoOutline"
        iconFullName="info"
      />
    </span>
    <KTooltip
      reference="tooltip"
      placement="bottom"
      maxWidth="450px"
      :refs="$refs"
    >
      {{ text }}
    </KTooltip>
  </span>

</template>


<script>

  import HelpIcon from './HelpIcon.vue';

  export default {
    name: 'HelpTooltip',
    components: {
      HelpIcon,
    },
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  };

</script>


<style lang="scss" scoped>

  $toucharea-min-width: 44px;

  .help-tooltip {
    display: inline-block;
    width: $toucharea-min-width;
    height: $toucharea-min-width;
    cursor: pointer;
  }

  .icons-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    /* Ensure HelpIcon inherits hover state for its own hover effects */
    &:hover .help-icon-wrapper {
      .icon-full {
        opacity: 1;
      }
      .icon-outline {
        opacity: 0;
      }
    }
  }

</style>
