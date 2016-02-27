function controle(form1) {
var name1 = document.form1.input.value;
var name2 = document.form1.input2.value;
$.getJSON({
    url: 'https://love-calculator.p.mashape.com/getPercentage?', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method
    data: {"fname": name1,"sname": name2}, // Additional parameters here
    datatype: 'json',
    success: function(data) {
      $("#reponse").html( "name1 : " + data.fname + "</br>" + "name2 : " + data.sname + "</br>" + "Pourcentage : " + data.percentage + "</br>" + "result : " + data.result);
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "8r4VxwjcMEmshZgG8oE8b873CkLAp1LaGQljsnbGt8aD5GY78L"); // Enter here your Mashape key
    }
});
}
