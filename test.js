function result() {
	score = 0
	for (i = 1; i < 11; i++){
		var q = 'q'+i
		var value = document.getElementsByName(q);
		value.forEach((ans) => {
                if (ans.checked) {
                    if(ans.value=='1'){
                    	score++
                    }
                }
		});
	}
	console.log(score)
}