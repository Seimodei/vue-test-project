import moment from 'moment';
import api from '../../api/chartData';


const state = {
  chartData: {
    labels: [],
    datasets: [{
      data: []
    }]
  },
  chartDisclaimer: '',
  chartUpdated: ''
};

const getters = {
  allChartData: state => state.chartData,
  disclaimer: state => state.chartDisclaimer,
  updated: state => state.chartUpdated
};

const actions = {
  fetchChartData: async ({ commit }) => {
    const response = await api.fetchChartData();

    let labels = Object.keys(response.data.bpi);
    let datasets = [{
      data: Object.values(response.data.bpi)
    }]

    const chartDataSet = {
      labels,
      datasets
    }

    commit('setChartData', chartDataSet);
    commit('setChartDisclaimer', response.data.disclaimer);
    commit('setChartUpdated', moment(response.data.time.updatedISO).format('MMMM Do YYYY, h:mm:ss a'));
  }
};

const mutations = {
  setChartData: (state, chartData) => {
    state.chartData = chartData;
  },
  setChartDisclaimer: (state, disclaimer) => {
    state.chartDisclaimer = disclaimer;
  },
  setChartUpdated: (state, updated) => {
    state.chartUpdated = updated;
  },
};

export default {
  state, getters, actions, mutations
};