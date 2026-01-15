document.addEventListener("DOMContentLoaded", () => {
  const quote = document.querySelector(".quote");
  const person = document.querySelector(".person");
  const btn = document.querySelector("#new-quote");

  const url = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = () => {
    document.querySelector(".main-content").style.opacity = "0.4";

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          quote.textContent = data.setup;
          person.textContent = data.punchline;
          document.querySelector(".main-content").style.opacity = "1";
        }, 300);
      })
      .catch(() => {
        quote.textContent = "Oops! Couldn't load a joke 😅";
        person.textContent = "";
        document.querySelector(".main-content").style.opacity = "1";
      });
  };

  getJoke();
  btn.addEventListener("click", getJoke);
});
