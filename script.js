
window.addEventListener("DOMContentLoaded", init);

function init(){

    document.querySelector("#createramdomstring").addEventListener("click", randomString);
    document.querySelector("#submitform").addEventListener("click" , submitForm);

        $(function () {
            $("#selectcity").change(function () {
                if ($(this).val() == "elsewhere") {
                    $("#enternewcity").show();
                } else {
                    $("#enternewcity").hide();
                }
            });
        });




       



        

       

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


    function submitForm(){
            // event.preventDefault();
            // var interviewername = document.querySelector("#interviewername").value;
            // localStorage.setItem('interviewer' , interviewername);

            var interviewer = document.querySelector("#interviewername").value;
            var data = {interviewer};
           
            localStorage.setItem('Data', JSON.stringify(data));
            clearData();




             // var array = JSON.parse(localStorage.getItem('Data') || '[]');
            // array.push(dataObject);
            // localStorage.setItem('Data', JSON.stringify(array));
           
    }