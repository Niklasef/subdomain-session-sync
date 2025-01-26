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


      const rootdomainBUrl = "http://subdomain.rootdomainb.com:5002/"; // Adjust port as needed
  
      fetch(rootdomainBUrl, {
        method: "GET",
        credentials: "include", // Include cookies in the request
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from Rootdomain B:", data);
    
          // Display the response in the page
          const resultElementb = document.getElementById("resultb");
          resultElementb.textContent = `Response: ${JSON.stringify(data)}`;
        })
        .catch((error) => {
          console.error("Error fetching from Rootdomain B:", error);
    
          const resultElementb = document.getElementById("resultb");
          resultElement.textContent = "Error fetching response.";
        });
  });
  