let obj = (()=> {
	let objInstance;
	
	let create = () => {
		let _isRunning = false;
		let toggle = () => {
			_isRunning = !objInstance.currentState();
		}
		let currentState = () => _isRunning;
		return {
			currentState,
			toggle
		}
	}	
	
	return {
		getInstance: () => {
			if(!objInstance) objInstance = create();
			return objInstance;
		}
	}
})();

let obj1 = obj.getInstance();
console.log(obj1.currentState());
obj1.toggle();
let obj2 = obj.getInstance();
console.log(obj2.currentState());
