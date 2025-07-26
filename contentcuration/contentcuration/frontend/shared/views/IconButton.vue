<template>

  <span>
    <KIconButton
      v-bind="$attrs"
      :data-floating-id="text ? `tooltip-iconbtn-${_uid}` : undefined"
      :icon="icon"
      :ariaLabel="text"
      :color="color"
      :size="size"
      :class="{ 'rtl-flip': rtlFlip }"
      v-on="$listeners"
    />
    <KTooltipNext
      v-if="text"
      :id="`tooltip-iconbtn-${_uid}`"
      :text="text"
      lazy
      delegateTo="root"
    />
  </span>

</template>


<script>

  import KTooltipNext from 'kolibri-design-system/lib/KTooltip/next';
  import { themeTokens } from 'kolibri-design-system/lib/styles/theme.js';

  export default {
    name: 'IconButton',
    components: {
      KTooltipNext,
    },
    props: {
      text: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: false,
        default: null,
      },
      color: {
        type: String,
        required: false,
        default: themeTokens.text,
      },
      rtlFlip: {
        type: Boolean,
        default: false,
      },
    },
  };

</script>
