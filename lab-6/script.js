function sortArray() {
    const input = document.getElementById("inputArray").value;
    const numbers = input.split(",").map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    // Bubble Sort
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }

    document.getElementById("result").innerText = numbers.join(", ");
}
