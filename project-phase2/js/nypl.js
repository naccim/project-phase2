function clickhandler(){
	
	var text=  $("#header").text()
	
	
	if(text == "2"){
		("#header").text("1");
		
}else{
	
$("#header").text('2')
	
}
	
	
}
function makeABunchOfBlocks(){
    var count = $('#block-count').val()
    
    for(var i = 0; i < count; i++){
        var block = $('<div></div>');
        block.text(i+1);
        block.addClass('block');
        $('#block-target').append(block)
    }
}