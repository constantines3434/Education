class Animal 
{
    constructor (name, age, weight)
    {
        if (this.constructor.name == 'Animal')
        {
            throw new Error (`${this.constructor.name}: can not create instance of 
                            abstract class`)
        }
        this.name = name
        this.age = age
        this.weight = weight
    }

    printInfo() 
    {
        console.log(`Имя: ${this.name}\nВозраст: 
        ${this.age}\nВес:${this.weight}`)
    }

    talk()
    {

    }
}

class Dog extends Animal
{
    talk()
    {
        console.log('Bark')
    }
}

class Cat extends Animal
{
    talk()
    {
        console.log('Meow')
    }
}

// try
// {
//     var animal = new Animal('Шарик', 3, 20)
// }
// catch(e)
// {
//     console.log('Error: ' + e.message)
// }


var dog = new Dog('Шарик', 3, 20)
//dog.printInfo()
//dog.talk()

var cat = new Cat('Animal', 4, 10)
//cat.talk()