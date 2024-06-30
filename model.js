class Model {
  constructor() {
    this.w = this.#prep();
    this.h = 150;
    this.posx = 0;
    this.posy = 0;
    this.rot = 0;
  }
  #prep() {
    if (Math.random() < 0.5) {
      return 400;
    } else {
      return 150;
    }
  }
  #calcColor() {
    return Math.round(Math.random() * 255 - 120 + 80);
  }

  render() {
    return {
      place: "beforeend",
      style: `<div class="obj" style="
      transform:  translate(0px, 0px) rotate(0deg);
        width: ${this.w}px;
        height: ${this.h}px;
        box-sizing: border-box;
        margin: .2em;
        border-radius:10rem;
        border: .1em, solid, black;
        background-color: rgb(${this.#calcColor()},${this.#calcColor()},${this.#calcColor()})
        "></div>
        `,
    };
  }
  updatePosRot(x = 0, y = 0, value = 0) {
    this.posx += x;
    this.posy += y;
    this.rot += value;
    return `translate(${this.posx}px, ${this.posy}px) rotate(${this.rot}deg)`;
  }
}

export { Model };
