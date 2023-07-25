function invertTree(root){

    if (!root) return root

    let queue = [root]

    let i = 0
    let j = 1

    while (i < j){
        let current = queue[i++]

        let temp = current.left
        current.left = current.right
        current.right = temp

        if (current.left) queue[j++] = current.left
        if (current.right) queue[j++] = current.right
    }

    return root

}