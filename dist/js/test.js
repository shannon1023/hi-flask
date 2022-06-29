//import CONFIG from "../../js/config.json" assert { type: "json" };

//var userHost = CONFIG.userHost;
//var userPort = CONFIG.userPort;


//import CONFIG from "../../js/config.json" assert { type: "json" };

//var userHost = CONFIG.userHost;
//var userPort = CONFIG.userPort;

$(function(){
    //預測
    $("#hiBtn").on("click",function(){
        $.ajax({
		    type: "POST",
		    url: "http://0.0.0.0:9527/hello",
		    dataType: "json",
		    data: JSON.stringify({
				"name": "Money"
            }),
            contentType: "application/json",
            success: function(response){
				alert("Hi" + response.returnValue);
		    }
        });
    })
})
