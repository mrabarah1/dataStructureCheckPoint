// Problem 1
 
// Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set.
// Example:
// Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
// Output: 13 (distinct elements 4, 7, 2 )
// Give a solutions to this problem, using arrays


function sumOfDistinctElements(set1, set2) {
  const combinedArray = [...set1, ...set2];
  const distinctElements = {};

  for (let i = 0; i < combinedArray.length; i++) {
    const element = combinedArray[i];

    if (!distinctElements.hasOwnProperty(element)) {
      distinctElements[element] = 1;
    } else {
      distinctElements[element]++;
    }
  }

  let sum = 0;

  for (let key in distinctElements) {
    sum += Number(key);
  }

  return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
// console.log("Sum of distinct elements:", result);




// Problem 2 
// You are asked to write an algorithm that fulfill the following: 

// Name: Dot product
// Description:
// Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.

// Procedure: dot_product
function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}

// Algorithm: CheckOrthogonality
function CheckOrthogonality(vectors) {
  for (let i = 0; i < vectors.length; i++) {
    const v1 = vectors[i][0];
    const v2 = vectors[i][1];
    const ps = dot_product(v1, v2);
    if (ps === 0) {
      console.log("Vectors v1 and v2 are orthogonal");
    } else {
      console.log("Vectors v1 and v2 are not orthogonal");
    }
  }
}

// Example usage:
const vectors = [
  [[3, 1, 7, 9], [2, 4, 1, 9, 3]],
  [[5, 6, 7], [1, 2, 3]],
  [[0, 1, 0], [0, 0, 1]]
];
CheckOrthogonality(vectors);
