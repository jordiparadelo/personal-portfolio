export default class ScrollSlider {
  constructor(element, currentTranslation, speed) {
    this.element = element;
    this.currentTranslation = currentTranslation;
    this.speed = speed;

    this.lerp = {
        current: this.currentTranslation,
        target: this.currentTranslation,
        ease: 0.1
    }
  }

  lerpFunc(current, target, ease) {
    this.lerp.current = current * (1 - ease) + target * ease;
  }

  animate() {
    this.lerp.target  += this.speed
    this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.ease)

    this.element.style.transform = `translateX(${this.lerp.current}%)`
  }

  render() {
    this.animate()
    window.requestAnimationFrame(this.render)
  }
 }
