const Selectors = {
  Icon: ".social-links__icon",
};

const ClassNames = {
  IconAnimation: "social-links__animation",
};
export function animateSocialLinks({ initialDelaySeconds = 0 } = {}) {
  const allIcons = document.querySelectorAll(Selectors.Icon);
  allIcons.forEach((iconEl, index) => {
    const addedDelay = Math.log(index + 1) / 10;
    iconEl.style.animationDelay = `${initialDelaySeconds + addedDelay}s`;
    iconEl.classList.add(ClassNames.IconAnimation);
  });
}
