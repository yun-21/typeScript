"use strict";
class Animal {
    static speak(speaking) {
        return `I can speak ${speaking}`;
    }
    constructor(type, sound, gender) {
        this.type = type;
        this.sound = sound;
        this.gender = gender;
    }
    Maketype() {
        return `I am a ${this.type}`;
    }
}
class Cat extends Animal {
}
const dog = new Animal("dog", "왈", 0);
console.log(dog.Maketype());
const cat = new Cat("cat", "냥", 1);
//class 안의 static함수를 가져오기 위해서는 직접 클래스를 불러와야한다. (Cat)
//인스턴스로는 불러올 수 없다 (cat)
console.log(Cat.speak("안녕"));
//# sourceMappingURL=classTypeScript.js.map