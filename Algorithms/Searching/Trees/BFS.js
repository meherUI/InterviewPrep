/* https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-pt-1-breadth-first-search-67ae4653dbec
        10
      /    \
     4      17
   /  \    /  \
  1    9  12   18
*/

let tree = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};
let BreadthFirstSearch = (tree, rootNode, searchValue) => {
	// make a queue array
	let queue = [];
	// populate it with the node that will be the root of your search
	queue.push(rootNode);

	// search the queue until it is empty
	while (queue.length > 0) {
	// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
		console.log("Current node is:" + currentNode.value);

		// if currentNode is the node we're searching for, break & alert
		if (currentNode.value === searchValue) {
			console.log("Found it!");
			return;
		}

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
		}
		// remove the currentNode from the queue.
		queue.shift();	
    }
	console.log("Sorry, no such node found :(");	
}

BreadthFirstSearch(tree, tree[10], "12");
BreadthFirstSearch(tree, tree[10], "42");


let alternateBreadthFirstSearch = (tree, rootNode, searchValue) => {
	// make a queue array
	let queue = [];
  	let path = [];
	// populate it with the node that will be the root of your search
	queue.push(rootNode);

	// search the queue until it is empty
	while (queue.length > 0) {
		// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
		path.push(currentNode.value);

		// if currentNode is the node we're searching for, break & alert
		if (currentNode.value === searchValue) {
			return path;
		}

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
		}
		// remove the currentNode from the queue.
		queue.shift();
	}
	console.log("Sorry, no such node found :(");
};


alternateBreadthFirstSearch(tree, tree[10], "12")
alternateBreadthFirstSearch(tree, tree[10], "42")
alternateBreadthFirstSearch(tree, tree[17], "18")