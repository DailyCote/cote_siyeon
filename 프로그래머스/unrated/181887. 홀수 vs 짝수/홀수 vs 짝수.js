function solution(num_list) {
    let odd = 0;
    let even = 0;
    for(let i = 0; i < num_list.length; i++){
        if(i % 2 === 1){
            even += num_list[i]
        }else if(i % 2 === 0){
            odd += num_list[i]
        }
    }
    
    if(odd > even){
        return odd;
    }else if(even > odd){
        return even
    }else if(even === odd){
        return even
    }
}