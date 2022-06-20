function choice(items) {
	const randIndex = Math.floor(Math.random() * items.length);
	return items[randIndex];
}

function remove(items, item) {
	const foundIndex = items.findIndex((value, index, array) => value === item);
	return foundIndex === -1 ? undefined : items.splice(foundIndex, 1)[0];
}

export { choice, remove };
