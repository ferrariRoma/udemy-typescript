const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

// 새로운 js기능 써보기
class Color {
  #atArr = ['0', '1', '2', '3'];
  #callText() {
    console.log(this.#atArr.at(-1));
  }
  console() {
    this.#callText();
  }
}

const red = new Color();
red.console();
