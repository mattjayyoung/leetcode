 // 235. Lowest Common Ancestor of a Binary Search Tree (Easy) - July 28th

 
 function lowestCommonAncestor(root,p,q){
     

     if (p.val < root.val && q.val < root.val){
         return lowestCommonAncestor(root.left, p, q)
     } else if (p.val > root.val && q.val > root.val){
         return lowestCommonAncestor(root.right,p,q)
     } else {
         return root
     }
 }