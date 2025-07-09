<template>

  <button
    :class="$computedClass(buttonStyle)"
    :aria-label="ariaLabel"
    @click.stop.prevent="$emit('click')"
  >
    <HelpIcon
      iconOutlineName="helpOutline"
      iconFullName="help"
    />
  </button>

</template>


<script>

  import HelpIcon from './HelpIcon.vue';

  export default {
    name: 'HelpButton',
    components: {
      HelpIcon,
    },
    props: {
      ariaLabel: {
        type: String,
        required: true,
      },
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
    /* Ensure HelpIcon inherits button's hover state for its own hover effects */
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
