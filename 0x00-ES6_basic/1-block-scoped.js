export default function taskBlock(trueOrFalse)
{
	const task = false;
	const task2 = true;

	if (trueOrFalse) {
		let task = true;
		let task2 = false;
		task = task2;
		task2 = task;
		const task = true;
		const task2 = false;
	}

  	return [task, task2];
}
