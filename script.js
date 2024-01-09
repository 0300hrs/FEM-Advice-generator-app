document.addEventListener("DOMContentLoaded", () => {
  const diceElement = document.getElementById("dice");
  const adviceNumberElement = document.getElementById("adv-num");
  const adviceTextElement = document.getElementById("gadvice");

  // Function to fetch advice from the https://api.adviceslip.com/advice endpoint
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      // Extracting slip_id and advice from the API response
      const { id, advice } = data.slip;

      // Update HTML elements with fetched data
      adviceNumberElement.textContent = id;
      adviceTextElement.textContent = advice;
      console.log(data.slip);
      console.log(id);
      console.log(advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  // Add click event listener to the dice element
  diceElement.addEventListener("click", fetchAdvice);

  // Initial advice fetch when the page loads
  fetchAdvice();
});
