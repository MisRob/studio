<template>

  <button
    :class="$computedClass(buttonStyle)"
    :aria-label="ariaLabel"
    @click.stop.prevent="$emit('click')"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <KIcon
      icon="helpOutline"
      :color="$themePalette.blue.v_500"
      class="icon-outline"
    />
    <KIcon
      icon="help"
      :color="$themePalette.blue.v_500"
      class="icon-full"
    />
  </button>

</template>


<script>

  export default {
    name: 'HelpButton',
    props: {
      ariaLabel: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        hovered: false,
      };
    },
    computed: {
      buttonStyle() {
        return {
          ':focus': { ...this.$coreOutline },
        };
      },
    },
  };

</script>


<style lang="scss" scoped>

  $toucharea-min-width: 44px;

  button {
    position: relative;
    display: inline-block;
    width: $toucharea-min-width;
    height: $toucharea-min-width;
    cursor: pointer;
  }

  button:hover {
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
