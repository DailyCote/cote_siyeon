function solution(num_list) {
    if(num_list.length >= 11){
        return num_list.reduce((acc, cur)=>{
            return acc + cur
        },0)
    }else{
        return num_list.reduce((acc, cur)=>{
            return acc * cur
        },1)
    }
    
}