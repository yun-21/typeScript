let test:{
    firstName : string
    lastName : string
} = {
    firstName : 'john',
    lastName : 'barrowman'
}

class Person {
    constructor(
        public firstName : string,
        public lastName : string
    ){}
}
test = new Person('matt','smith')