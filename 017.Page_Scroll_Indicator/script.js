const indicator = document.querySelector(".scroll-indicator .progress");
const counter = document.getElementById("counter");

function onScroll() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  indicator.style.width = pct.toFixed(1) + "%";
  counter.textContent = Math.round(pct) + "%";

  // counter glows cyan at 100%
  counter.style.color = pct >= 99 ? "var(--accent-1)" : "var(--muted)";
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
