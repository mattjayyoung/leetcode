// Reverse Linked List - Easy - August 8th

function reverseList(head){
    let [prev, curr, next] = [null, 1, null]

    while (curr){
        next = curr.next
        curr.next = prev

        prev = curr
        curr = next
    }

    return head
}