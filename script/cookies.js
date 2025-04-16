
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("acceptCookies");
  const refuseBtn = document.getElementById("refuseCookies");

  window.onload = function () {
    const cookieChoice = localStorage.getItem("cookieAccepted");

    if (!cookieChoice) {
      cookieBanner.style.display = "block";
    }

    acceptBtn.onclick = function () {
      localStorage.setItem("cookieAccepted", "true");
      cookieBanner.style.display = "none";
    };

    refuseBtn.onclick = function () {
      localStorage.setItem("cookieAccepted", "false");
      cookieBanner.style.display = "none";
      window.location.href = "https://www.google.com"; // sau o pagină personalizată
    };
  };

