//110. Balanced Binary Tree - Easy - July 29th

function isBalanced(root){
    if (root == null) return true
    if (height(root) == -1) return false
    return true
}

function height(root){
    if (root == null) return 0

    let leftHeight = height(root.left)
    let rightHeight = height(root.right)

    if (leftHeight == -1 || rightHeight == -1){
        return -1
    }

    if (Math.abs(leftHeight - rightHeight) > 1){
        return -1
    }

    return Math.max(leftHeight, rightHeight) +1
}