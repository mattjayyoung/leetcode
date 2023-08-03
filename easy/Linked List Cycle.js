// 141. Linked List Cycle

function hasCycle(head){
    let slowptr = head
    let fastptr = head

    while (slowptr != null && fastptr != null){
        slowptr = slowptr.next
        fastptr = fastptr.next.next

        if (slowptr == fastptr){
            return true
        }
        return false
    
    }
}