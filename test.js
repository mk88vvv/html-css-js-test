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
	var mark = 2
	if (score >= 5){
		mark++
	}
	if (score >= 7){
		mark++
	}
	if (score >= 9){
		mark++
	}
	alert('Вы набрали '+score+" баллов из 10. Оценка: "+mark)
}