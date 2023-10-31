function solution(a, b) {
    
    let aa = (a.toString() + b.toString()) * 1;
    let bb = (b.toString() + a.toString()) * 1;
    
    if(aa > bb){
        return aa
    }else if(bb > aa){
        return bb
    }else{
        return aa
    }
}