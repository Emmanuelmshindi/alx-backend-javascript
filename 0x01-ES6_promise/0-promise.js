function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("https://example.com");
    }, 1000);
  });
}

export default getResponseFromAPI;
