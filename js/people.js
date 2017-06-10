var people = (function(){
			var people = ['will','Laura'];
			//cache DOM
			var $el = $('#peopleModule');
			var $button = $el.find('button');
			var $input = $el.find('input');
			var $ul = $el.find('ul');
			var template = $el.find('#people-template').html();
			//bind events
			$button.on('click', addPerson);
			$ul.delegate('i.del','click', deletePerson);

			_render();
			function _render(){
				$ul.html(Mustache.render(template, {people: people}));
				events.emit('peopleChanged', people.length);
			}

			function addPerson(value){
				var name = (typeof value === "string") ? value: $input.val();
				people.push(name);
				_render();
				$input.val('');
			}

			function deletePerson(event){
				var i;
				if(typeof event === "number"){
					//remove by API
					i = event;
				}else{
					// remove on click remove button
					var $remove = $(event.target).closest('li');
					 i = $ul.find('li').index($remove);
				}
				people.splice(i, 1);
				_render();
			}

			return{
				addPerson: addPerson,
				deletePerson: deletePerson
			};
})();

// (function(){
// 	$('#peopleModule').find('button').on('click', function(){
// 		people.push($('#peopleModule').find('input').val());
// 		$('#peopleModule').find('input').val('');
// 		//data for mustache template
// 		var data = {
// 			people:people,
// 		};
// 		$('#peopleModule').find('ul').html(Mustache.render(template,data));
// 	});
//
// 	$('#peopleModule').find('ul').delegate('i.del','click', function(e){
// 		var $remove = $(e.target).closest('li');
// 		var i = $('#peopleModule').find('ul').find('li').index($remove);
// 		$remove.remove();
// 		people.splice(i,1);
// 	});
// })()
