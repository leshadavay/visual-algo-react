const mergeSort = (data) => {
  //Collect corresponding indices for animation
  const animations = [];
  //Create two arrays for sorting
  let sorted = Array.from(data);
  let n = sorted.length;
  let buffer = new Array(n);

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      //Get the two sub arrays
      let left = leftStart,
        right = Math.min(left + size, n),
        leftLimit = right,
        rightLimit = Math.min(right + size, n);

      //Merge the sub arrays
      proceedMergeSort(
        left,
        right,
        leftLimit,
        rightLimit,
        sorted,
        buffer,
        animations
      );
    }

    //Swap the sorted sub array and merge them
    let temp = sorted;
    sorted = buffer;
    buffer = temp;
  }

  return [sorted, animations];
};

const proceedMergeSort = (
  left,
  right,
  leftLimit,
  rightLimit,
  sorted,
  buffer,
  animations
) => {
  let i = left;

  //Compare the two sub arrays and merge them in the sorted order
  while (left < leftLimit && right < rightLimit) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([left, right]);

    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([left, right]);

    if (sorted[left] <= sorted[right]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([i, sorted[left]]);
      buffer[i++] = sorted[left++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([i, sorted[right]]);
      buffer[i++] = sorted[right++];
    }
  }

  //If there are elements in the left sub arrray then add it to the result
  while (left < leftLimit) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([left, left]);

    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([left, left]);

    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([i, sorted[left]]);
    buffer[i++] = sorted[left++];
  }

  //If there are elements in the right sub array then add it to the result
  while (right < rightLimit) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([right, right]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([right, right]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([i, sorted[right]]);
    buffer[i++] = sorted[right++];
  }
};

export { mergeSort };
