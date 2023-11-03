//basic types

let id: number = 5
let company: string = 'darshil'
let isPublished: boolean = true
let x: any = 'hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,'hello']

// Tuple
let person: [number, string, boolean] = [1, 'hello', true]
// Tuple array
let employee: [number, string][]

employee = [
    [1, 'darshil'],
    [2, 'vansh'],
    [3, 'kimaya'],
]

//Union
let eid: string | number 
eid = 22
eid = '22'

// Enum
enum Direction1 {
    Up = 5,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction1.Up, Direction1.Left)
console.log(Direction2.Up, Direction2.Left)

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Darshil'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y:number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Darshil'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string) {
       this.id = id
       this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const darshil = new Person(9, 'Darshil')

// console.log(darshil)
// console.log(darshil.register)


// Sub-classes
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position:  string) {
        super (id, name)
        this.position = position
    }
}

const emp = new Employee(1, 'Darshil', 'Developer')

// console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(['Darshil', 'Vansh', 'Kimaya'])

