<template>

  <span class="hover-icon">
    <KIcon
      :icon="outlineIcon"
      :color="$themePalette.blue.v_500"
      class="outline"
    />
    <KIcon
      :icon="filledIcon"
      :color="$themePalette.blue.v_500"
      class="filled"
    />
  </span>

</template>


<script>

  /**
   * Displays an outline icon that smoothly
   * transitions to a filled icon on hover.
   *
   * Icon is blue and 16px by default (for current
   * usages, customization is not needed).
   **/
  export default {
    name: 'HoverIcon',
    props: {
      /**
       * (`KIcon` compatible) name of the outline icon
       **/
      outlineIcon: {
        type: String,
        required: true,
      },
      /**
       * (`KIcon` compatible) name of the filled icon
       **/
      filledIcon: {
        type: String,
        required: true,
      },
    },
  };

</script>


<style lang="scss" scoped>

  /* https://www.w3.org/TR/WCAG21/#target-size */
  $toucharea-min-width: 44px;

  .hover-icon {
    position: relative;
    display: inline-block;
    width: $toucharea-min-width;
    height: $toucharea-min-width;
    cursor: pointer;
  }

  .outline,
  .filled {
    position: absolute;
    top: 50%;
    left: 50%;

    /*
      Few extra pixels needed for 'width' and 'height' to achieve
      16px icon size due to extra padding in source svg
      (TODO open and link KDS issue)
    */
    width: 19.2px;
    height: 19.2px;
    transition: opacity 0.4s ease;
    transform: translate(-50%, -50%);
  }

  .filled {
    z-index: 1;
    opacity: 0;
  }

  .hover-icon:hover {
    .filled {
      opacity: 1;
    }

    .outline {
      opacity: 0;
    }
  }

</style>
