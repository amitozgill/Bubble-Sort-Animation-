
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
const bubbleSortBtn = document.querySelector(".sorting-btn");

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

async function bubbleSort() {
  let len = arr.length;
  let swapped;

  for (let i = 0; i < len; i++) {
    swapped = false;

    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await animateSwap(j, j + 1);
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }
}

regenerateBtn.addEventListener("click", () => {
  assignRandomValues();
  displayValues();
});

bubbleSortBtn.addEventListener("click", () => {
  bubbleSort();
});
