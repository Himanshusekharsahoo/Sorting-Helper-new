function sortArray() {
    const inputArray = document.getElementById('inputArray').value;
    const numbers = inputArray.split(',').map(Number);

    if (numbers.some(isNaN)) {
        alert('Please enter valid numbers separated by commas.');
        return;
    }

    const sortedArray = numbers.sort((a, b) => a - b);
    document.getElementById('output').innerText = 'Sorted Array: ' + sortedArray.join(', ');
}

           