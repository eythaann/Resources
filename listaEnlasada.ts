class Nodo {
  value: any
  next: Nodo

  constructor(data: any) {
    this.value = data
    this.next = null
  }
}

class ListaEnlazada {
  head: Nodo
  #length: number
  #lastNode: Nodo

  constructor(data?: any) {
    this.#length = 0
    if (data != undefined) {
      this.head = new Nodo(data)
      this.#length++
      this.#lastNode = this.head
    }
  }

  get length(): number {
    return this.#length
  }

  get lastNode(): Nodo {
    return this.#lastNode
  }

  push(...values: any): void {
    //add a node in the last for each argument
    for (let item of values) {
      if (!this.head) {
        this.head = new Nodo(item)
        this.#lastNode = this.head
      } else {
        this.#lastNode.next = new Nodo(item)
        this.#lastNode = this.#lastNode.next
      }
      this.#length++
    }
  }

  pop(): any {
    //delete the last node and return its value
    const deleted = this.deleteAt(this.#length - 1, 1)?.[0]
    return deleted
  }

  getNodeAt(index: number): Nodo {
    if (index == undefined) return
    if (index < 0) index = this.#length - Math.abs(index)
    if (index < 0 || index > this.#length - 1) return

    let control = this.head

    for (let i = 0; i !== index; i++) {
      control = control.next
    }

    return control
  }

  append(index: number, data: any): void {
    //This method is for add a new Node in any Part of the List
    if (this.head == null || this.#length - 1 < index) return
    let newNodo = new Nodo(data)

    let Actual = this.getNodeAt(index - 1)
    let next = Actual.next

    Actual.next = newNodo
    newNodo.next = next
    this.#length++
  }

  deleteAt(index: number, count: number = 1): any[] {
    if (index == undefined) return null
    if (index < 0) index = this.#length - Math.abs(index)
    if (index < 0 || index > this.#length - 1) return null

    const deletedValues: any[] = []

    if (index === 0) {
      for (let i = 0; i < count && this.head != null; i++) {
        if (this.head.next == null) {
          this.#lastNode = null
        }
        deletedValues.push(this.head.value)
        this.head = this.head.next
        this.#length--
      }
    } else {
      let actual = this.getNodeAt(index - 1)
      for (let i = 0; i < count; i++) {
        if (actual.next.next == null) {
          this.#lastNode = actual
        }
        deletedValues.push(actual.next.value)
        actual.next = actual.next.next
        this.#length--
      }
    }
    return deletedValues
  }

  printf(): void {
    let control = this.head
    while (control != null) {
      console.log(control.value)
      control = control.next
    }
  }
}

let Compras = new ListaEnlazada()
console.log(Compras, Compras.length)
console.log(Compras.pop())
//console.log(Compras.deleteAt(0), Compras.length)
Compras

Compras.push('soy1')
console.log(Compras.deleteAt(0, 5))
console.log(Compras.length, Compras)
Compras.push('soy2')
console.log(Compras.length, Compras)
Compras.push('soy3')
console.log(Compras.length, Compras)

console.log(Compras.lastNode)
Compras.push('cebollas')
Compras

Compras.push('tomate')

Compras.push(...['perejil', 'coca1', 'coca2', 'coca3', 'coca4'])
console.log(Compras.deleteAt(1), Compras.length)
console.log(Compras.pop())
console.log(Compras.pop())

console.log(Compras)
console.log(Compras.getNodeAt(-1))

Compras.append(4, 'pepe')

console.log(Compras.lastNode)
Compras.printf()
