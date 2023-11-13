function solution(arr, flag) {
    let str = "";
    for(let i = 0; i < arr.length; i++){
        if(flag[i]){
            str += arr[i].toString().repeat(arr[i] * 2)
        }else{
            str = str.slice(0, -arr[i])
        }
    }
    return str.split('').map((i)=>Number(i));
}