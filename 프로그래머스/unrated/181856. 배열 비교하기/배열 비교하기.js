function solution(arr1, arr2) {
    let total1 = 0;
    let total2 = 0;
    for(let i = 0; i < arr1.length; i++){
        total1 += arr1[i];
        total2 += arr2[i];
    }
    if(arr1.length > arr2.length){
            return 1;
        }else if(arr1.length < arr2.length || total2 > total1){
            return -1;
        }else if(arr1.length === arr2.length && total1 > total2){
            return 1;
        }else if(arr1.length === arr2.length && total1 < total2){
            return -1;
        }else if(arr1.length === arr2.length && total1 === total2){
            return 0;
        }
}