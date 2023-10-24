function solution(myString, pat) {
    return myString.replace(/(A|B)/g, function(item){
        switch(item){
            case "A" : return "B";
            case "B" : return "A";
        }
    }).includes(pat) ? 1 :0
}