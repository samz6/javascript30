const arr1 = [1, 1, 1, 0, 1, 1, 1];

const Input = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
// Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

function segrgate(arr) {
  let a1 = [];
  let a2 = [];
  Input.forEach(i => {
    i === 1 ? a1.push(i) : a2.push(i);
  });
  return [...a2, ...a1];
}

console.log(segrgate(Input));
