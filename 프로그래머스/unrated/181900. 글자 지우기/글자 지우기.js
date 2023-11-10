function solution(my_string, indices) {
    indices = indices.sort((a, b)=>{return b - a});
    my_string = my_string.split('')
    for(let i = 0; i < indices.length; i++){
        my_string.splice(indices[i], 1)
    }
    return my_string.join('')
}