
window.addEventListener("DOMContentLoaded", init);

function init(){

    document.querySelector("#createramdomstring").addEventListener("click", randomString);
    // document.querySelector("#submitform").addEventListener("click" , submitForm);

        $(function () {
            $("#selectcity").change(function () {
                if ($(this).val() == "elsewhere") {
                    $("#enternewcity").show();
                } else {
                    $("#enternewcity").hide();
                }
            });
        });

// *****************************************************************************************************
        $(document).ready(function() {
            if (!window.localStorage) {
                alert('Your browser does not support HTML5 localStorage. Try upgrading.');
            } else {
                $("#applicationform").submit(function(){
                                        setAllItems();
                });						
                    }
        });



        var setAllItems = function(){
								
            var newDate, itemId, formSave;
                                    
            newDate = new Date();
            itemId = newDate.getTime();
            formSave = {
                          
                            interviewpurpose: $("select[name='interviewpurpose']").val(),
                            selectcity: $("select[name='selectcity']").val(),
                            address: $("textarea[name='address']").val(),
                            interviewername: $("input[name='interviewername']").val(),
                            intervieweename: $("input[name='intervieweename']").val(),
                            email: $("input[name='email']").val(),
                            phonenumber: $("input[name='phonenumber']").val(),
                            date: $("input[name='date']").val(),
                            randomnumber: $("input[name='randomnumber']").val(),
                          
                        };
                            
                        // turn data into JSON string
                        localStorage.setItem( itemId, JSON.stringify(formSave));
        };




       



        

       

    }
        
    function randomString() {
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	document.querySelector("#randomnumber").value = "#" +randomstring;
    }

