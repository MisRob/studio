<template>
  <span class="help-icon-wrapper">
    <KIcon
      :icon="iconOutlineName"
      :color="$themePalette.blue.v_500"
      class="icon-outline"
    />
    <KIcon
      :icon="iconFullName"
      :color="$themePalette.blue.v_500"
      class="icon-full"
    />
  </span>
</template>

<script>
  export default {
    name: 'HelpIcon',
    props: {
      iconOutlineName: {
        type: String,
        required: true,
      },
      iconFullName: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .help-icon-wrapper {
    position: relative;
    display: inline-block;
    width: 100%; /* Take width from parent */
    height: 100%; /* Take height from parent */
  }

  .help-icon-wrapper:hover {
    .icon-full {
      opacity: 1;
    }

    .icon-outline {
      opacity: 0;
    }
  }

  .icon-outline,
  .icon-full {
    position: absolute;
    top: 50%;
    left: 50%;
    /* few extra pixels needed to achieve 16px icon size
    due to extra padding in source svg */
    width: 19.2px;
    height: 19.2px;
    transition: opacity 0.4s ease;
    transform: translate(-50%, -50%);
  }

  .icon-full {
    z-index: 1;
    opacity: 0;
  }
</style>
