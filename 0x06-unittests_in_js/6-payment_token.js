const getPaymentTokenFromAPI = (success) => {
  if (success) {
    const myObject = {data: 'Successful response from the API' };
    return Promise.resolve(myObject);
  } else {
    return Promise.reject(new Error('API request failed'));
  }
};

module.exports = getPaymentTokenFromAPI;
