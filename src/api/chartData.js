import axios from 'axios';

const ROOT_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31';

export default {
  fetchChartData: () => axios.get(ROOT_URL)
}