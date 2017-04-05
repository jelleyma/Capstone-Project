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
            'url': "ModelValues.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    
    
    var allVals = [   
                      [ "Intercept", json[0].Estimate ],
                      [ "Total_Bsmt_SF", document.getElementById("Total_Bsmt_SF").value * json[1].Estimate ],
                      [ "Bsmt_Full_Bath", document.getElementById("Bsmt_Full_Bath").value * json[2].Estimate ],
                      [ "Full_Bath", document.getElementById("Full_Bath").value * json[3].Estimate ],
                      [ "Half_Bath", document.getElementById("Half_Bath").value * json[4].Estimate ],
                      [ "Bedroom_AbvGr", document.getElementById("Bedroom_AbvGr").value * json[5].Estimate ],
                      [ "TotRms_AbvGrd", document.getElementById("TotRms_AbvGrd").value * json[6].Estimate ],
                      [ "Fireplaces", document.getElementById("Fireplaces").value * json[7].Estimate ],
                      [ "Garage_Cars", document.getElementById("Garage_Cars").value * json[8].Estimate ],
                      [ "Wood_Deck_SF", document.getElementById("Wood_Deck_SF").value * json[9].Estimate ],
                      [ "Open_Porch_SF", document.getElementById("Open_Porch_SF").value * json[10].Estimate ],
                      [ "Screen_Porch", document.getElementById("Screen_Porch").value * json[11].Estimate ],
                      [ "Year_Built", document.getElementById("Year_Built").value * json[12].Estimate ],
                      [ "Year_Remod_Add", document.getElementById("Year_Remod_Add").value * json[13].Estimate ] 
                  ];
    
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