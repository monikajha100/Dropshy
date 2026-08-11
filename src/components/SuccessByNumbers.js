export const initSuccessByNumbers = () => {

  function animateCount(el, target) {
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);

      const val = Math.floor(eased * target);

      el.textContent = val.toLocaleString("en-IN");

      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString("en-IN");
      }
    }

    requestAnimationFrame(step);
  }

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;

          card.classList.add("in-view");

          const target = parseInt(card.dataset.target, 10);

          const countEl = card.querySelector(".count");

          animateCount(countEl, target);

          cardObserver.unobserve(card);
        }
      });
    },
    {
      threshold: 0.35,
    }
  );

  document.querySelectorAll(".stat-card").forEach((card) => {
    cardObserver.observe(card);
  });

  const itemObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          itemObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  document.querySelectorAll(".check-item").forEach((item, index) => {
    item.style.animationDelay = `${index * 0.08}s`;

    itemObserver.observe(item);
  });

};