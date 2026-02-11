
  const serviceItems = document.querySelectorAll(".services > div");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // ավելացնում ենք երբ մտնում է
      } else {
        entry.target.classList.remove("show"); // հեռացնում ենք երբ դուրս է գալիս
      }
    });
  }, {
    threshold: 0.2
  });

  serviceItems.forEach(item => observer.observe(item));

