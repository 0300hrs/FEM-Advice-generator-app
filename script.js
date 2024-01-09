document.addEventListener("DOMContentLoaded", () => {
  const diceElement = document.getElementById("dice");
  const adviceNumberElement = document.getElementById("adv-num");
  const adviceTextElement = document.getElementById("gadvice");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();


      const { id, advice } = data.slip;

      adviceNumberElement.textContent = id;
      adviceTextElement.textContent = advice;
      console.log(data.slip);
      console.log(id);
      console.log(advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };


  diceElement.addEventListener("click", fetchAdvice);

  fetchAdvice();
});
