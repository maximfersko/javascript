//* data structure


//* Array [1, 2, 3]
//* object
//* set 
//* Map 
//* Weak , weakset

//* linked list

//* [value, next] -> [value, next] -> [value, next] 

//* [].push(43);

//* [1, 2, 3, 4].unshift(45);



class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = {
            data,
            next: null
        }

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node

    }

    prepend(data) {
        const node = {
            data,
            next: this.head
        }


        this.head = node

        if (this.tail) {
            this.tail = node
        }
    }
}

const list = new LinkedList();
list.append('hi')