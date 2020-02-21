// buat sebuah function yang me-return angka paling besar dari sebuah array of numbers;

function findLargestNum(arr){
    let palingBesar = 0
    for (let i=0; i<arr.length; i++){
        if(arr[i] > palingBesar){
            palingBesar=arr[i];
        }
    }
    console.log(palingBesar);
} 
//Udah di kerjain

// there are no negative numbers.
findLargestNum([4, 5, 1, 3]) // 5
findLargestNum([300, 200, 600, 150]) // 600
findLargestNum([1000, 1001, 857, 1]) // 1001

//sudah

