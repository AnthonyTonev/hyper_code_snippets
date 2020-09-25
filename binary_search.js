const arr =["Alex", "Anne", "Brian", "Chris", "David", "Elan", "Frank", "Hellen", "Ivan", "James"];
const binarySearch = (array, target, start, end) => {
	const mid = Math.floor(((end - start) / 2) + start);
	if (end <= start && array[mid] !== target) return -1;
	else if (array[mid] === target) return mid;
	else if (array[mid] < target) return binarySearch(array, target, mid + 1, end);
	else if (array[mid] > target) return binarySearch(array, target, start, mid - 1);
}
const target = 'David';
const index = binarySearch(arr, target, 0, arr.length);
