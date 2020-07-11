import Vue from 'vue';
import VueRouter from 'vue-router';
import BarChartWrapper from '../views/barChart/BarChartWrapper.vue';
import LineChartWrapper from '../views/lineChart/LineChartWrapper.vue';
import LineChart1Wrapper from '../views/lineChart/LineChart1Wrapper.vue';
import LineChart2Wrapper from '../views/lineChart/LineChart2Wrapper.vue';
import RadarChartWrapper from '../views/radarChart/RadarChartWrapper.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'BarChart',
    component: BarChartWrapper
  },
  {
    path: '/line-chart',
    name: 'LineChart',
    component: LineChartWrapper
  },
  {
    path: '/line-chart-1',
    name: 'LineChart1',
    component: LineChart1Wrapper
  },
  {
    path: '/line-chart-2',
    name: 'LineChart2',
    component: LineChart2Wrapper
  },
  {
    path: '/radar-chart',
    name: 'RadarChart',
    component: RadarChartWrapper
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
