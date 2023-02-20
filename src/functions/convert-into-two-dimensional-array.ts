type ConvertIntoTwoDimensionalArrayParams<T> = {
	array: T[];
	rowsLength: number;
};

export function convertIntoTwoDimensionalArray<T>(
	params: ConvertIntoTwoDimensionalArrayParams<T>
) {
	const { array, rowsLength } = params;
	const twoDimensionalArray: T[][] = [];

	for (
		let firstIndexRow = 0;
		firstIndexRow < array.length;
		firstIndexRow += rowsLength
	) {
		const lastIndexRow = firstIndexRow + rowsLength;
		const row = array.slice(firstIndexRow, lastIndexRow);
		twoDimensionalArray.push(row);
	}
	return twoDimensionalArray;
}
