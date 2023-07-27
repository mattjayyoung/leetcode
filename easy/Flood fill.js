// 733. Flood Fill (easy) - July 27th

function floodFill (image, sr, sc, color) {

    if (image[sr][sc] == color) return image

    fill(image,sr,sc,color,image[sr][sc])
    return image
}

function fill(image,sr,sc,color,cur){
    if (sr < 0 || sr >= image.length || sc < 0 || sc > image[0].length) return
    if (cur !== image[sr][sc]) return

    image[sr][sc] = color

    fill(image,sr+1,sc,color,cur)
    fill(image,sr-1,sc,color,cur)
    fill(image,sr,sc+1,color,cur)
    fill(image,sr,sc-1,color,cur)
}


function floodFill (image, sr, sc, color) {

   if (image[sr][sc] == color) return image

   fill(image,sr,sc,color, image[sr][sc])
   return image

};

function fill(image,sr,sc,color,cur){
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return
    if (cur !== image[sr][sc]) return

    image[sr][sc] = color

    fill(image,sr-1,sc,color,cur)
    fill(image,sr+1,sc,color,cur)
    fill(image,sr,sc+1,color,cur)
    fill(image,sr,sc-1,color,cur)
}


floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)