import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer jCsdyK6MuIDd--F55VxqkDMA_m9SzQGzKHYzgt2BrnnGQyOH-3sJ7vrMWlzc0UQvcUTs7W9EQygmOCNiOcSZ3SE8vIcWQGSCpBRnnGS2xEQ4CfzOHCfzZkASA-YyX3Yx'
  }
});
