$(document).ready(function() {
    if (typeof(localStorage) === 'undefined' ) {
        alert('Your browser does not support HTML5 localStorage. Try upgrading.');
    } else {
                //load the items
        getItems(); 
    }
});


var getItems = function() {
	
    var timeLog, logLength, i;				
i = 0;
logLength = localStorage.length-1; //how many items are in the database starting with zero
    timeLog = '';

//now we are going to loop through each item in the database
for (i = 0; i <= logLength; i++) {
            var itemKey, value, values, InterviewPurpose, city, address,InterviewerName, IntervieweeName, email, phonenumber, date, randomnumber;
            //lets setup some variables for the key and values
            itemKey = localStorage.key(i);

            value = localStorage.getItem(itemKey);
            values = JSON.parse(value);
            InterviewPurpose = values.interviewpurpose;
            city = values.selectcity;
            address = values.address;
            InterviewerName = values.interviewername;
            IntervieweeName = values.intervieweename;
            email = values.email;
            phonenumber = values.phonenumber;
            date = values.date;
            randomnumber = values.randomnumber;
            

            //now that we have the item, lets add it to the table
            timeLog += '<tr id="'+itemKey+'" class="tableRow"><td>'+InterviewPurpose+'</td><td>'+city+'</td><td>'+address+'</td><td>'+InterviewerName+'</td><td>'+IntervieweeName+'</td><td>'+email+'</td><td>'+phonenumber+'</td><td>'+date+'</td><td>'+randomnumber+'</td></tr>';
            }
        

            $("#theLog").append(timeLog); //update the table with the list items
        }