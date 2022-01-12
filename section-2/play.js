const person = {
    name: 'Carlos',
    age: 26,
    greet:() => {
         console.log('Hi my name is ' + this.name);
    },
    greet2(){
        console.log('Hi my name is ' + this.name);
    }
}

person.greet();
person.greet2();