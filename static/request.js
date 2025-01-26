// Utility function to fetch data and update the DOM
function fetchAndUpdate(url, resultElementId) {
  return fetch(url, {
    method: "GET",
    credentials: "include", // Include cookies in the request
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Response from ${url}:`, data);

      // Update the corresponding result element
      const resultElement = document.getElementById(resultElementId);
      resultElement.textContent = `Response: ${JSON.stringify(data)}`;
    })
    .catch((error) => {
      console.error(`Error fetching from ${url}:`, error);

      // Update the corresponding result element with an error message
      const resultElement = document.getElementById(resultElementId);
      resultElement.textContent = "Error fetching response.";
    });
}

// Main function to orchestrate the requests
document.addEventListener("DOMContentLoaded", () => {
  const subdomainAUrl = "http://subdomaina.rootdomain.com:5000/set-cookie";
  const subdomainBUrl = "http://subdomainb.rootdomain.com:5001/";
  const rootdomainBUrl = "http://subdomain.rootdomainb.com:5002/";

  // Step 1: Set cookie from Subdomain A
  fetchAndUpdate(subdomainAUrl, "resulta").then(() => {
    // Step 2: Fetch data from Subdomain B after cookie is set
    return fetchAndUpdate(subdomainBUrl, "resultb");
  }).then(() => {
    // Step 3: Fetch data from Rootdomain B
    return fetchAndUpdate(rootdomainBUrl, "resultc");
  });
});
