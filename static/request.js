// JavaScript: Makes a GET request to subdomainb and logs the response
document.addEventListener("DOMContentLoaded", () => {
    const subdomainBUrl = "http://subdomainb.rootdomain.com:5001/"; // Adjust port as needed
  
    fetch(subdomainBUrl, {
      method: "GET",
      credentials: "include", // Include cookies in the request
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from Subdomain B:", data);
  
        // Display the response in the page
        const resultElement = document.getElementById("result");
        resultElement.textContent = `Response: ${JSON.stringify(data)}`;
      })
      .catch((error) => {
        console.error("Error fetching from Subdomain B:", error);
  
        const resultElement = document.getElementById("result");
        resultElement.textContent = "Error fetching response.";
      });
  });
  