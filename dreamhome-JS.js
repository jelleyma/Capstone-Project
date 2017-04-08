function numberWithCommas(x) {
    x = x.toFixed(0);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPrice() {
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "NewestModelValues.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    
    //Combining the JSON values with the user input
    // Stored as ["Parameter Name", Value]
    var allVals = [ ["Intercept", json[0].Estimate] ];
    for (i = 1; i < json.length; i++) {
        allVals.push([ json[i].Parameter, document.getElementById(json[i].Parameter).value * json[i].Estimate ]);
    }
    
    //Combining all the values to find the final price
    //Delete testing to remove the for testing text
    var finalPrice = 0;
    var testing = "";
    for (i = 0; i < allVals.length; i++) { 
        finalPrice += allVals[i][1];
        testing += allVals[i][0] + ": " + allVals[i][1] + " <br>";
    }
    
    var html = "Expected Price: $";
    html += numberWithCommas(finalPrice);
    document.getElementById("insertPrice").innerHTML = html + "<br>" + testing;
}
