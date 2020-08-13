let testArr = [5, 1, 4, 2, 8, 0, 2]

function cocktailSort(arr) {
	let start = 0, end = arr.length, swapped = true;

	while (swapped) {
		swapped = false;

		for (let i = start; i < end - 1; i++)
		{
			if (arr[i] > arr[i+1]) {
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}

		end--;

		if (!swapped)
		{
			break;
		}

		swapped = false;

		for (let i = end - 1; i > start; i--)
		{
			if (arr[i - 1] > arr[i])
			{
				let temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
				swapped = true;
			}
		}
	}

	return arr;
}
