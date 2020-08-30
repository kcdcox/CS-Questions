
// =================================BUBBLE SORT
function bubbleSort(a) {
    let len = a.length, temp, swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 1; i <= len; i++){
            if(a[i-1]>a[i]){
                temp = a[i-1];
                a[i-1] = a[i];
                a[i] = temp;
                swapped = true;
            }
        }
        len--;
    }
    return a;
}
// =================================SELECTION SORT
function insertionSort(a){
    let k, i;
    for(let j = 1 ; j < a.length; j++){
        k = a[j];
        i = j-1;
        while(i>-1 && a[i]>k){
            a[i+1] = a[i];
            i--;
        }
        a[i+1] = k;
    }
    return a;
}

module.exports = {bubbleSort, insertionSort}
  
/*
Implement selection sort
Implement insertion sort
Implement merge sort
Implement quick sort
*/