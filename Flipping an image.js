// 832. Flipping an Image (easy) - July 20th

function flipAndInvertImage(image) {
    let flipped = image.map(arr => invert(arr.reverse()))

    function invert(arr){
        let i = 0
        while (i < arr.length){
            
            if (arr[i] === 0){
                arr[i] = 1
            } else {
                arr[i] = 0
            }
            i++
        }
        return arr
    
    }

    return flipped
        
};


flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])





invert([1,0,0,1]) // [ 0,1,1,0 ]