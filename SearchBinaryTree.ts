class Node_bt {
  value: string
  left: Node_bt | null = null;
  right: Node_bt | null = null;

  add(newValue: string): void {
    if (newValue === this.value) throw new Error('No admit dupes')
    if (!this.value) this.value = newValue
    else
      newValue < this.value
        ? (this.left ??= new Node_bt()).add(newValue)
        : (this.right ??= new Node_bt()).add(newValue)
  }

  has(value: string): boolean {
    if (value === this.value) return true
    if (value < this.value && this.left) return this.left.has(value)
    if (value > this.value && this.right) return this.right.has(value)
    return false
  }

  get(value: string): Node_bt | undefined {
    if (value === this.value) return this
    if (value < this.value && this.left) return this.left.get(value)
    if (value > this.value && this.right) return this.right.get(value)
    return undefined
  }

  get isLeaf(): boolean {
    return this.value && !this.left && !this.right ? true : false
  }

  get isEmpty(): boolean {
    return !this.value && !this.left && !this.right ? true : false
  }

  delete(value: string): boolean {
    const node = this.get(value)

    if (!node) return false
    if (node.isLeaf) return delete this.value

    //directions === from left to more right || from right to more left
    const directions = node.left ? ['left', 'right'] : ['right', 'left']
    let subTree: Node_bt = node[directions[0]]

    if (!subTree[directions[1]]) {
      node.value = subTree.value
      subTree = subTree[directions[0]]
      return true
    }

    while (subTree[directions[1]][directions[1]]) subTree = subTree[directions[1]]
    node.value = subTree[directions[1]].value
    subTree[directions[1]] = subTree[directions[1]][directions[0]]
    return true
  }

  preorden() {}
  postOrden() {}
  inOrden() {}
}

const movies = new Node_bt()

movies.add('captain')
movies.add('batman')
movies.add('zzzz')
movies.add('batman 23')
movies.add('batman 2')
movies.add('batma')
console.log(movies.delete('captain'))
console.log(movies)

movies.add('spiderman')
movies.add('thor')
movies.add('spide 2')
movies.add('spide 3')
movies.add('spide 4')
movies.add('spide 5')
movies.add('avengers')

console.log(movies.has('thor'))
console.log(movies.get('spiderman'))

console.log(JSON.stringify(movies))
