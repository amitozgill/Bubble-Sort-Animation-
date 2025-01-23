
// const Display = document.querySelector(".display");
// const regenerateBtn = document.querySelector(".regenerate-btn");
// const bubbleSortBtn = document.querySelector(".sorting-btn");

// let arr = new Array(9);
// function assignRandomValues() {
//   for (let i = 0; i < 9; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//   }
// }

// function displayValues() {
//   Display.innerHTML = "";

//   for (let i = 0; i < 9; i++) {
//     let element = document.createElement("div");
//     element.innerHTML = `<b>${arr[i]}</b>`;
//     Display.appendChild(element);
//   }
// }

// assignRandomValues();
// displayValues();
// function bubbleSort() {
//   let len = arr.length;
//   let swapped;
  
//   // Outer loop to traverse through all elements
//   for (let i = 0; i < len; i++) {
//     swapped = false; // Track if a swap is made in this iteration
    
//     // Inner loop for comparing adjacent elements
//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap the elements if they are in the wrong order
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true; // A swap was made
//       }
//     }
    
//     // If no swaps were made in the inner loop, the array is already sorted
//     if (!swapped) {
//       break;
//     }
//   }
  
//   // Display the sorted array after sorting
//   displayValues();
// }

// regenerateBtn.addEventListener("click", () => {
//   assignRandomValues();
//   displayValues();
// });
// bubbleSortBtn.addEventListener("click", () => {
//   bubbleSort();
// });
//*************************************************** */
// const Display = document.querySelector(".display");
// const regenerateBtn = document.querySelector(".regenerate-btn");
// const bubbleSortBtn = document.querySelector(".sorting-btn");

// let arr = new Array(9);
// function assignRandomValues() {
//   for (let i = 0; i < 9; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//   }
// }

// function displayValues() {
//   Display.innerHTML = "";

//   for (let i = 0; i < 9; i++) {
//     let element = document.createElement("div");
//     element.innerHTML = `<b>${arr[i]}</b>`;
//     element.style.position = "relative";
//     element.style.transition = "all 0.5s ease";
//     element.style.display = "inline-block";
//     element.style.margin = "5px";
//     element.style.padding = "10px";
//     element.style.backgroundColor = "#9418fd";
//     element.style.color = "#fff";
//     element.style.textAlign = "center";
//     element.style.borderRadius = "5px";
//     element.id = `element-${i}`;
//     Display.appendChild(element);
//   }
// }

// assignRandomValues();
// displayValues();

// function animateSwap(idx1, idx2) {
//   return new Promise((resolve) => {
//     const elem1 = document.getElementById(`element-${idx1}`);
//     const elem2 = document.getElementById(`element-${idx2}`);

//     const rect1 = elem1.getBoundingClientRect();
//     const rect2 = elem2.getBoundingClientRect();

//     const deltaX = rect2.left - rect1.left;
//     const deltaY = rect2.top - rect1.top;

//     elem1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
//     elem2.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;

//     setTimeout(() => {
//       elem1.style.transform = "";
//       elem2.style.transform = "";

//       // Swap elements in DOM
//       const temp = arr[idx1];
//       arr[idx1] = arr[idx2];
//       arr[idx2] = temp;

//       displayValues(); // Update DOM with new order
//       resolve();
//     }, 500); // Match with CSS transition duration
//   });
// }

// async function bubbleSort() {
//   let len = arr.length;
//   let swapped;

//   for (let i = 0; i < len; i++) {
//     swapped = false;

//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         await animateSwap(j, j + 1);
//         swapped = true;
//       }
//     }

//     if (!swapped) {
//       break;
//     }
//   }
// }

// regenerateBtn.addEventListener("click", () => {
//   assignRandomValues();
//   displayValues();
// });

// bubbleSortBtn.addEventListener("click", () => {
//   bubbleSort();
// });
//*****   ************************************************** */
// HTML and CSS are as provided, except for adding animation styles if necessary.

const Display = document.querySelector(".display");
const regenerateBtn = document.querySelector(".regenerate-btn");
//const bubbleSortBtn = document.querySelector(".sorting-btn");

let arr = new Array(9);
function assignRandomValues() {
  for (let i = 0; i < 9; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
}

function displayValues() {
  Display.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    let element = document.createElement("div");
    element.innerHTML = `<b>${arr[i]}</b>`;
    element.style.position = "relative";
    element.style.transition = "all 0.5s ease";
    element.style.display = "inline-block";
    element.style.margin = "5px";
    element.style.padding = "10px";
    element.style.backgroundColor = "#9418fd";
    element.style.color = "#fff";
    element.style.textAlign = "center";
    element.style.borderRadius = "5px";
    element.id = `element-${i}`;
    Display.appendChild(element);
  }
}
// function displayValues() {
//   Display.innerHTML = "";

//   for (let i = 0; i < 9; i++) {
//     let element = document.createElement("div");
//     element.innerHTML = `<b>${arr[i]}</b>`;
//     element.style.position = "relative";
//     element.style.transition = "all 0.5s ease";
//     element.style.display = "inline-block";
//     element.style.margin = "5px";
//     element.style.padding = "10px";
//     element.style.backgroundColor = "#9418fd";
//     element.style.color = "#fff";
//     element.style.textAlign = "center";
//     element.style.borderRadius = "5px";
//     element.id = `element-${i}`;

//     // Set the height based on the value
//     element.style.height = `${arr[i] * 10 + 20}px`; // Adjust multiplier for desired scaling

//     Display.appendChild(element);
//   }
// }
// function displayValues() {
//   Display.innerHTML = "";

//   for (let i = 0; i < 9; i++) {
//     let element = document.createElement("div");
//     element.innerHTML = `<b>${arr[i]}</b>`;
//     element.style.position = "relative";
//     element.style.transition = "all 0.5s ease";
//     element.style.display = "inline-block";
//     element.style.margin = "5px";
//     element.style.padding = "10px";
//     element.style.backgroundColor = "#9418fd";
//     element.style.color = "#fff";
//     element.style.textAlign = "center";
//     element.style.borderRadius = "5px";
//     element.id = `element-${i}`;

//     // Set the height based on the value
//     const height = arr[i] * 10 + 20; // Adjust multiplier for desired scaling
//     element.style.height = `${height}px`;
//     element.style.transform = `translateY(-${height}px)`; // Move the element upwards
//     element.style.marginBottom = `${height}px`; // Maintain alignment at the bottom

//     Display.appendChild(element);
//   }
// }



assignRandomValues();
displayValues();

function animateSwap(idx1, idx2) {
  return new Promise((resolve) => {
    const elem1 = document.getElementById(`element-${idx1}`);
    const elem2 = document.getElementById(`element-${idx2}`);

    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();

    const deltaX = rect2.left - rect1.left;
    const deltaY = rect2.top - rect1.top;

    // Add a curved movement path using keyframe-like logic
    const controlY = -50; // Control point for the curve (height adjustment)

    elem1.style.transition = "transform 0.5s ease";
    elem2.style.transition = "transform 0.5s ease";

    elem1.style.transform = `translate(${deltaX / 2}px, ${controlY}px)`;
    elem2.style.transform = `translate(${-deltaX / 2}px, ${-controlY}px)`;

    setTimeout(() => {
      elem1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      elem2.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;

      setTimeout(() => {
        elem1.style.transform = "";
        elem2.style.transform = "";

        // Swap elements in DOM
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;

        displayValues(); // Update DOM with new order
        resolve();
      }, 500); // Second phase of the animation
    }, 250); // First phase of the animation
  });
}

// function animateSwap(idx1, idx2) {
//   return new Promise((resolve) => {
//     const elem1 = document.getElementById(`element-${idx1}`);
//     const elem2 = document.getElementById(`element-${idx2}`);

//     const deltaX = (idx2 - idx1) * 40; // Approximate horizontal distance
//     const deltaY = -10; // Fixed vertical movement for the curve

//     elem1.style.transition = "transform 0.5s ease";
//     elem2.style.transition = "transform 0.5s ease";

//     elem1.style.transform = `translate(${deltaX / 2}px, ${deltaY}px)`;
//     elem2.style.transform = `translate(${-deltaX / 2}px, ${-deltaY}px)`;

//     setTimeout(() => {
//       elem1.style.transform = `translate(${deltaX}px, 0)`;
//       elem2.style.transform = `translate(${-deltaX}px, 0)`;

//       setTimeout(() => {
//         elem1.style.transform = "";
//         elem2.style.transform = "";

//         // Swap elements in DOM
//         const temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;

//         displayValues(); // Update DOM with new order
//         resolve();
//       }, 500); // Complete the animation
//     }, 250); // Midway adjustment
//   });
// }

// async function bubbleSort() {
//   let len = arr.length;
//   let swapped;

//   for (let i = 0; i < len; i++) {
//     swapped = false;

//     for (let j = 0; j < len - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         await animateSwap(j, j + 1);
//         swapped = true;
//       }
//     }

//     if (!swapped) {
//       break;
//     }
//   }
// }

// regenerateBtn.addEventListener("click", () => {
//   assignRandomValues();
//   displayValues();
// });
//************************************* */
// bubbleSortBtn.addEventListener("click", () => {
//   bubbleSort();
// });

// let sortingInProgress = false;
// async function bubbleSort() {
//   let len = arr.length;
//   let swapped;

//   sortingInProgress = true; // Sorting starts
//   bubbleSortBtn.disabled = true; // Disable the button

//   for (let i = 0; i < len; i++) {
//     if (!sortingInProgress) break; // Stop sorting if flag is false

//     swapped = false;

//     for (let j = 0; j < len - i - 1; j++) {
//       if (!sortingInProgress) break; // Stop sorting if flag is false

//       if (arr[j] > arr[j + 1]) {
//         await animateSwap(j, j + 1);
//         swapped = true;
//       }
//     }

//     if (!swapped) {
//       break;
//     }
//   }

//   sortingInProgress = false; // Sorting ends
//   bubbleSortBtn.disabled = false; // Re-enable the button
// }

// regenerateBtn.addEventListener("click", () => {
//   sortingInProgress = false; // Stop sorting
//   bubbleSortBtn.disabled = false; // Ensure the button is enabled after stopping

//   const allElements = document.querySelectorAll(".display div");
//   allElements.forEach((elem) => {
//     elem.style.transition = ""; // Remove any transition effects
//     elem.style.transform = "";  // Reset transformations
//   });

//   assignRandomValues();
//   displayValues();
// });

//**********\\\ */
const bubbleSortBtn = document.getElementById("bubbleSortBtn");
const selectionSortBtn = document.getElementById("selectionSortBtn");
const insertionSortBtn = document.getElementById("insertionSortBtn");
//const mergeSortBtn = document.getElementById("mergeSortBtn");
//const quickSortBtn = document.getElementById("quickSortBtn");

let sortingInProgress = false;

function disableAllButtons() {
    bubbleSortBtn.disabled = true;
    selectionSortBtn.disabled = true;
    insertionSortBtn.disabled = true;
    // mergeSortBtn.disabled = true;
    // quickSortBtn.disabled = true;
}

function enableAllButtons() {
    bubbleSortBtn.disabled = false;
    selectionSortBtn.disabled = false;
    insertionSortBtn.disabled = false;
    // mergeSortBtn.disabled = false;
    // quickSortBtn.disabled = false;
}

// Bubble Sort (Already Implemented)
async function bubbleSort() {
    disableAllButtons();
    sortingInProgress = true;

    let len = arr.length;
    let swapped;

    for (let i = 0; i < len; i++) {
        if (!sortingInProgress) break;

        swapped = false;

        for (let j = 0; j < len - i - 1; j++) {
            if (!sortingInProgress) break;

            if (arr[j] > arr[j + 1]) {
                await animateSwap(j, j + 1);
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    sortingInProgress = false;
    enableAllButtons();
}

// Selection Sort
async function selectionSort() {
    disableAllButtons();
    sortingInProgress = true;

    let len = arr.length;

    for (let i = 0; i < len; i++) {
        if (!sortingInProgress) break;

        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            await animateSwap(i, minIndex);
        }
    }

    sortingInProgress = false;
    enableAllButtons();
}

// Insertion Sort
async function insertionSort() {
    disableAllButtons();
    sortingInProgress = true;

    let len = arr.length;

    for (let i = 1; i < len; i++) {
        if (!sortingInProgress) break;

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            await animateSwap(j + 1, j);
            j--;
        }

        arr[j + 1] = key;
    }

    displayValues();
    sortingInProgress = false;
    enableAllButtons();
}

// Merge Sort Helper Functions
// async function merge(start, mid, end) {
//     let left = arr.slice(start, mid + 1);
//     let right = arr.slice(mid + 1, end + 1);

//     let i = 0,
//         j = 0,
//         k = start;

//     while (i < left.length && j < right.length) {
//         if (!sortingInProgress) return;

//         if (left[i] <= right[j]) {
//             arr[k++] = left[i++];
//         } else {
//             arr[k++] = right[j++];
//         }

//         displayValues();
//         await new Promise((resolve) => setTimeout(resolve, 300));
//     }

//     while (i < left.length) {
//         if (!sortingInProgress) return;

//         arr[k++] = left[i++];
//         displayValues();
//         await new Promise((resolve) => setTimeout(resolve, 300));
//     }

//     while (j < right.length) {
//         if (!sortingInProgress) return;

//         arr[k++] = right[j++];
//         displayValues();
//         await new Promise((resolve) => setTimeout(resolve, 300));
//     }
// }

// async function mergeSort(start = 0, end = arr.length - 1) {
//     disableAllButtons();
//     sortingInProgress = true;

//     if (start >= end) {
//         enableAllButtons();
//         return;
//     }

//     let mid = Math.floor((start + end) / 2);

//     await mergeSort(start, mid);
//     await mergeSort(mid + 1, end);
//     await merge(start, mid, end);

//     if (start === 0 && end === arr.length - 1) {
//         sortingInProgress = false;
//         enableAllButtons();
//     }
// }

// Quick Sort Helper Functions
// async function partition(low, high) {
//     let pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//         if (!sortingInProgress) return i;

//         if (arr[j] < pivot) {
//             i++;
//             await animateSwap(i, j);
//         }
//     }

//     await animateSwap(i + 1, high);
//     return i + 1;
// }

// async function quickSort(low = 0, high = arr.length - 1) {
//     disableAllButtons();
//     sortingInProgress = true;

//     if (low < high) {
//         let pi = await partition(low, high);

//         await quickSort(low, pi - 1);
//         await quickSort(pi + 1, high);
//     }

//     if (low === 0 && high === arr.length - 1) {
//         sortingInProgress = false;
//         enableAllButtons();
//     }
// }

// Event Listeners for Buttons
bubbleSortBtn.addEventListener("click", bubbleSort);
selectionSortBtn.addEventListener("click", selectionSort);
insertionSortBtn.addEventListener("click", insertionSort);
// mergeSortBtn.addEventListener("click", () => mergeSort());
// quickSortBtn.addEventListener("click", () => quickSort());
regenerateBtn.addEventListener("click", () => {
    sortingInProgress = false;
    enableAllButtons();

    const allElements = document.querySelectorAll(".display div");
    allElements.forEach((elem) => {
        elem.style.transition = "";
        elem.style.transform = "";
    });

    assignRandomValues();
    displayValues();
});
