function bubbleSort(arr) {
	const swap = (arr, idx1, idx2) => {
		;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
	}

	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}

	return arr
}

function merge(arr1, arr2) {
	let results = []
	let i = 0
	let j = 0

	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			results.push(arr1[i])
			i++
		} else {
			results.push(arr2[j])
			j++
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i])
		i++
	}

	while (j < arr2.length) {
		results.push(arr2[j])
		j++
	}

	return results
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr
	const mid = Math.floor(arr.length / 2)
	const left = mergeSort(arr.slice(0, mid))
	const right = mergeSort(arr.slice(mid))

	return merge(left, right)
}
