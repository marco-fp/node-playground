const { Queue } = require('./queue')

class AnimalShelter {
    constructor() {
        this.catQueue = new Queue();
        this.dogQueue = new Queue();
        this.time = 0;
    }

    enqueue(animal) {
        if (animal.kind === 'CAT') {
            this.catQueue.add({ ...animal, age: this.time++ });
        } else if (animal.kind === 'DOG') {
            this.dogQueue.add({ ...animal, age: this.time++ });
        } else {
            throw new Error('Unknown kind of animal');
        }
    }

    dequeueDog() {
        return this.dogQueue.remove();
    }

    dequeueCat() {
        return this.catQueue.remove();
    }

    dequeueAny() {

        if (this.catQueue.isEmpty()) {
            return this.dequeueDog();
        }

        if (this.dogQueue.isEmpty()) {
            return this.dequeueCat();
        }

        const catAge = this.catQueue.peek().age;
        const dogAge = this.dogQueue.peek().age;

        return catAge > dogAge ? this.dequeueCat() : this.dequeueDog();
    }
}

const test = () => {
    const shelter = new AnimalShelter();

    const dog = { kind: 'DOG' };
    const cat = { kind: 'CAT' };

    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(cat);
    shelter.enqueue(dog);
    shelter.enqueue(cat);

    console.log(shelter.dequeueCat());
    console.log(shelter.dequeueAny());
    console.log(shelter.dequeueDog());
    console.log(shelter.dequeueAny());
}

test();