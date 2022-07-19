export function scrollToTarget(event, target) {
    event.preventDefault();
    const selectedTarget = document.querySelector(target) || document.querySelector(event.currentTarget.hash);
    // window.location.hash = event.currentTarget.hash

    selectedTarget.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }