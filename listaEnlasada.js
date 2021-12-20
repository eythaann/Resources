class ListaEnlazada {
  constructor(data) {
    this.head = data ? new Node(data) : null
    this.total = data ? 1 : 0
  }

  add(value) {
    if (this.head == null) this.head = new Node(value)
    else {
      let last = this.getLastNode()
      last.next = new Node(value)
    }
    this.total++
  }

  getNodeAt(pos) {
    if (this.head === null || this.total - 1 < pos) return null
    let x = 0
    let control = this.head
    while (control != null) {
      if (x == pos) break
      x++
      control = control.next
    }
    return control
  }

  append(pos, data) {
    if (this.head === null || this.total - 1 < pos) return null
    let newNode = new Node(data)

    let Actual = this.getNodeAt(pos - 1)
    let next = Actual.next

    Actual.next = newNode
    newNode.next = next
    this.total++
  }

  delete(pos) {
    if (this.head === null || this.total - 1 < pos || typeof pos != 'number') return null

    if (pos === 0) {
      this.head = this.head.next
    } else {
      let actual = this.getNodeAt(pos - 1)
      actual.next = actual.next.next
    }
    this.total--
  }

  getLastNode() {
    let last = this.head
    let control = this.head

    while (control != null) {
      last = control
      control = control.next
    }

    return last
  }

  printf() {
    let control = this.head

    while (control != null) {
      console.log(control.value)
      control = control.next
    }
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

let Compras = new ListaEnlazada('pepino')
Compras.add('cebollas')
Compras.add('aji')
Compras.add('tomate')
Compras.add('perejil')
Compras.add('coca cola')
Compras.add('coca cola3')
Compras.add('coca cola4')

console.log(Compras.getNodeAt(4))
console.log(Compras.getNodeAt(4).value)

Compras.append(4, 'pepe')
Compras.delete(3)

console.log(Compras.getLastNode())
Compras.printf()
console.log(JSON.stringify(Compras))
