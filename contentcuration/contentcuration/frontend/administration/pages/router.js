import VueRouter from 'vue-router';
import { RouteNames } from './constants';
import ChannelTable from './pages/Channels/ChannelTable';
import ChannelDetails from './pages/Channels/ChannelDetails';
import UserTable from './pages/Users/UserTable';
import UserDetails from './pages/Users/UserDetails';
import PerformanceKTooltip from './pages/PerformanceKTooltip';
import PerformanceKTooltipNext from './pages/PerformanceKTooltipNext';
import PerformanceKTooltipNextLazy from './pages/PerformanceKTooltipNextLazy';
import PerformanceVTooltip from './pages/PerformanceVTooltip';
import PerformanceVTooltipLazy from './pages/PerformanceVTooltipLazy';
import PerformanceTippy from './pages/PerformanceTippy';
import PerformanceUiTooltip from './pages/PerformanceUiTooltip.vue';

const router = new VueRouter({
  routes: [
    {
      name: RouteNames.CHANNELS,
      path: '/channels/',
      component: ChannelTable,
    },
    {
      name: RouteNames.CHANNEL,
      path: '/channels/:channelId',
      props: true,
      component: ChannelDetails,
    },
    {
      name: RouteNames.USERS,
      path: '/users/',
      component: UserTable,
    },
    {
      name: RouteNames.USER,
      path: '/users/:userId',
      props: true,
      component: UserDetails,
    },
    {
      name: 'performance-k-tooltip',
      path: '/performance/k-tooltip',
      props: true,
      component: PerformanceKTooltip,
    },
    {
      name: 'performance-k-tooltip-next',
      path: '/performance/k-tooltip-next',
      props: true,
      component: PerformanceKTooltipNext,
    },
    {
      name: 'performance-k-tooltip-next-lazy',
      path: '/performance/k-tooltip-next-lazy',
      props: true,
      component: PerformanceKTooltipNextLazy,
    },
    {
      name: 'performance-v-tooltip',
      path: '/performance/v-tooltip',
      props: true,
      component: PerformanceVTooltip,
    },
    {
      name: 'performance-v-tooltip-lazy',
      path: '/performance/v-tooltip-lazy',
      props: true,
      component: PerformanceVTooltipLazy,
    },
    {
      name: 'performance-tippy',
      path: '/performance/tippy',
      props: true,
      component: PerformanceTippy,
    },
    {
      name: 'performance-uitooltip',
      path: '/performance/uitooltip',
      props: true,
      component: PerformanceUiTooltip,
    },
    // Catch-all redirect to channels tab
    {
      path: '*',
      redirect: { name: RouteNames.CHANNELS },
    },
  ],
});

export default router;
