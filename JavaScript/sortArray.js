function sortArrayDescending (arr) {
    arr.sort((a, b) => {
        return b - a;
    })
}


const num = [5, 3, 7, 6, 8, 1];
sortArrayDescending(num);
console.log(num);