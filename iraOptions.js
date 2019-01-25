// This script focuses on the interactivity related to the IRA section of the page.

// This function's purpose is to determine the age of individuals to determine the maximum amount theu can contribute
function singleStatus() {
    ira_RemoveNodes();
    var boxIRA = document.getElementById("IRA");
    var b19 = document.createElement("br");
    var b20 = document.createElement("br");
    var b21 = document.createElement("br");
    var singleAgeOptions = document.createTextNode("are you 50 years old or older?");
    var singleUnder50 = document.createElement("button");
    var singleAtLeast50 = document.createElement("button");
    var singleStatusBoolean = true;

    singleUnder50.innerHTML = "Yes";
    singleUnder50.id = "single_At_Least_50";
    singleUnder50.onclick = function() {
        agiIncomeLimitDeterminator(singleStatusBoolean, 0, true);
    }

    singleAtLeast50.innerHTML = "No";
    singleAtLeast50.id = "single_Under_50";
    singleAtLeast50.onclick = function() {
        agiIncomeLimitDeterminator(singleStatusBoolean, 0, false)
    }

    boxIRA.appendChild(singleAgeOptions);
    boxIRA.appendChild(b19);
    boxIRA.appendChild(singleUnder50);
    boxIRA.appendChild(singleAtLeast50);
    boxIRA.appendChild(b20);
    boxIRA.appendChild(b21);

}

// This function's purpose is to determine the age of the individuals in the relationship to determine the maximum amount theu can contribute
function marriedStatus() {
    ira_RemoveNodes();
    var boxIRA = document.getElementById("IRA");
    var b19 = document.createElement("br");
    var b20 = document.createElement("br");
    var b21 = document.createElement("br");
    var b22 = document.createElement("br");
    var b23 = document.createElement("br");
    var marriedAgeOptions = document.createTextNode("Click one of the 3 options below.");
    var marriedBothUnder50 = document.createElement("button");
    var marriedBothOver50 = document.createElement("button");
    var marriedOneUnderOneOver50 = document.createElement("button");
    var singleStatusBoolean = false;
    var ageBoolean = "n/a";

    marriedBothUnder50.innerHTML = "Both under 50 years old";
    marriedBothUnder50.id = "married_Both_Under_50";
    marriedBothUnder50.onclick = function() {
        agiIncomeLimitDeterminator(singleStatusBoolean, 1, false);
    }

    marriedBothOver50.innerHTML = "Both at least 50 years old";
    marriedBothOver50.id = "married_Both_Over_50";
    marriedBothOver50.onclick = function() {
        agiIncomeLimitDeterminator(singleStatusBoolean, 2, true)
    }

    marriedOneUnderOneOver50.innerHTML = "One under, one at least 50 years old ";
    marriedOneUnderOneOver50.id = "married_One_Under_One_Over_50";
    marriedOneUnderOneOver50.onclick = function() {
        agiIncomeLimitDeterminator(singleStatusBoolean, 3, "n/a");
    }

    boxIRA.appendChild(marriedAgeOptions);
    boxIRA.appendChild(b19);
    boxIRA.appendChild(marriedBothUnder50);
    boxIRA.appendChild(b20);
    boxIRA.appendChild(marriedBothOver50);
    boxIRA.appendChild(b21);
    boxIRA.appendChild(marriedOneUnderOneOver50);
    boxIRA.appendChild(b22);
    boxIRA.appendChild(b23);
}


// This function determines if the user is under the income limit
function agiIncomeLimitDeterminator(singleStatusBool, senario, ageBool) {
    ira_RemoveNodes();
    var boxIRA = document.getElementById("IRA");
    var singleAgiLessThanLimit = document.createTextNode("Is your agi < $122,000?");
    var b19 = document.createElement("br");
    var b20 = document.createElement("br");
    var b21 = document.createElement("br");

    if (singleStatusBool == true) {
        var singleAgiLessThanLimit = document.createTextNode("Is your agi < $122,000?");
        var singleAgiLessThanLimitTrue = document.createElement("button");
        var singleAgiLessThanLimitFalse = document.createElement("button");

        singleAgiLessThanLimitTrue.innerHTML = "Yes";
        singleAgiLessThanLimitTrue.id = "single_Below_Limit";
        singleAgiLessThanLimitTrue.onclick = function() {
            adjustContribution(singleStatusBool, senario, ageBool);
        }
    
        singleAgiLessThanLimitFalse.innerHTML = "No";
        singleAgiLessThanLimitFalse.id = "single_Over_Limit";
        singleAgiLessThanLimitFalse.onclick = function() {
            agiPartialContributionLimit(singleStatusBool, senario, ageBool);
        }

        boxIRA.appendChild(singleAgiLessThanLimit);
        boxIRA.appendChild(b19);
        boxIRA.appendChild(singleAgiLessThanLimitTrue);
        boxIRA.appendChild(singleAgiLessThanLimitFalse);
        boxIRA.appendChild(b20);
        boxIRA.appendChild(b21);
    } else {
        var marriedAgiLessThanLimit = document.createTextNode("Is your agi < $193,000?");
        var marriedAgiLessThanLimitTrue = document.createElement("button");
        var marriedAgiLessThanLimitFalse = document.createElement("button");
    
        marriedAgiLessThanLimitTrue.innerHTML = "Yes";
        marriedAgiLessThanLimitTrue.id = "married_Below_Limit";
        marriedAgiLessThanLimitTrue.onclick = function() {
            adjustContribution(singleStatusBool, senario, ageBool)
        }
    
        marriedAgiLessThanLimitFalse.innerHTML = "No";
        marriedAgiLessThanLimitFalse.id = "married_Over_Limit";
        marriedAgiLessThanLimitFalse.onclick = function() {
            agiPartialContributionLimit(singleStatusBool, senario, ageBool)
        }
    
        boxIRA.appendChild(marriedAgiLessThanLimit);
        boxIRA.appendChild(b19);
        boxIRA.appendChild(marriedAgiLessThanLimitTrue);
        boxIRA.appendChild(marriedAgiLessThanLimitFalse);
        boxIRA.appendChild(b20);
        boxIRA.appendChild(b21);
    }
}

// This function serves to determine if users fall within the partial contribution range
function agiPartialContributionLimit(singleStatusBool, senario, ageBool) {
    ira_RemoveNodes();
    var boxIRA = document.getElementById("IRA");
    var b19 = document.createElement("br");
    var b20 = document.createElement("br");
    var b21 = document.createElement("br");

    if (singleStatusBool == true) {
        var singleAgiBetween122KAnd137K = document.createTextNode("Is your agi >= $122,000 or < $137,000?");
        var singleAgiIsBetween122KAnd137K = document.createElement("button");
        var singleAgiOver137K = document.createElement("button");

        singleAgiIsBetween122KAnd137K.innerHTML = "Yes";
        singleAgiIsBetween122KAnd137K.id = "single_Agi_Btw_122K_137K"
        singleAgiIsBetween122KAnd137K.onclick = function() {
            adjustContribution(singleStatusBool, senario, ageBool, true);
        }

        singleAgiOver137K.innerHTML = "No";
        singleAgiOver137K.id = "single_Agi_Over_137K"
        singleAgiOver137K.onclick = function() {
            notQualified();
        }

        boxIRA.appendChild(singleAgiBetween122KAnd137K);
        boxIRA.appendChild(b19);
        boxIRA.appendChild(singleAgiIsBetween122KAnd137K);
        boxIRA.appendChild(singleAgiOver137K);
        boxIRA.appendChild(b20);
        boxIRA.appendChild(b21);
    } else {
        console.log("agiPartialContribution function");
        var marriedAgiBetween193Kand203K = document.createTextNode("Is your agi >= $193,000 and < $203,000?");
        var marriedAgiIsBetween193Kand203K = document.createElement("button");
        var marriedAgiIsAtLeast203K = document.createElement("button");
    
        marriedAgiIsBetween193Kand203K.innerHTML = "Yes";
        marriedAgiIsBetween193Kand203K.id = "married_Agi_Btw_193K_203K";
        marriedAgiIsBetween193Kand203K.onclick = function() {
            adjustContribution(singleStatusBool, senario, ageBool, true);
        }
    
        marriedAgiIsAtLeast203K.innerHTML = "No";
        marriedAgiIsAtLeast203K.id = "married_Agi_Over_203K";
        marriedAgiIsAtLeast203K.onclick = function() {
            notQualified();
        }
    
        boxIRA.appendChild(marriedAgiBetween193Kand203K);
        boxIRA.appendChild(b19);
        boxIRA.appendChild(marriedAgiIsBetween193Kand203K);
        boxIRA.appendChild(marriedAgiIsAtLeast203K);
        boxIRA.appendChild(b20);
        boxIRA.appendChild(b21);
    }
}

// This function allows users to choose the amount they want to contribute using a slider
function adjustContribution(singleStatusBool, senario, ageBool, partialBool) {
    ira_RemoveNodes();
    console.log("adjust contribution function");
    console.log(singleStatusBool);
    console.log(senario);
    console.log(ageBool);
    console.log(partialBool);
    var boxIRA = document.getElementById("IRA");
    var adjustSlider = document.createTextNode("adjust the slider to set your contribution.");
    var slider = document.createElement("input");
    var showContributionLimit = document.createElement("p");
    var b19 = document.createElement("br");
    var b20 = document.createElement("br");

    showContributionLimit.id = "show_Contribution_Limit";
    showContributionLimit.style.color = "green";
    slider.type = "range";
    slider.id = "contribution_Range";

    if (singleStatusBool == true) {
        if (partialBool == true) {
            slider.min = 122000;
            slider.max = 137000;
            slider.oninput = function () {
                displayContribution(true, 0, true, ageBool);
            }
        } else {
            if (ageBool == true) {
                slider.min = 0;
                slider.max = 7000;
                slider.oninput = function() {
                    displayContribution(true, 0, false, ageBool);
                }        
            } else {
                slider.min = 0;
                slider.max = 6000;
                slider.oninput = function() {
                    displayContribution(true, 0, false, ageBool);
                }
            }
        }
    } else {
        if (partialBool == true) {
            slider.min = 193000;
            slider.max = 203000;
            slider.oninput = function() {
                displayContribution(false, senario, true, ageBool);
            }
        } else {
            if (senario == 1) {
                slider.min = 0;
                slider.max = 6000;
                slider.oninput = function() {
                    displayContribution(false, 1, false, ageBool);
                }
            } else if (senario == 2) {
                slider.min = 0;
                slider.max = 7000;
                slider.oninput = function() {
                    displayContribution(false, 2, false, ageBool);
                }
            } else if (senario == 3) {
                slider.min = 0;
                slider.max = 13000;
                slider.oninput = function() {
                    displayContribution(false, 3, false, "n/a");
                }
            }
        }
    } 

    boxIRA.appendChild(adjustSlider);
    boxIRA.appendChild(b19);
    boxIRA.appendChild(slider);
    boxIRA.appendChild(b20);
    boxIRA.appendChild(showContributionLimit);
}

//This function displays the contribution amount for those under the income limit
function displayContribution(singleStatusBool, senario, partialBool, ageBool) {
    console.log("displayContribution function");
    var output = document.getElementById("show_Contribution_Limit");
    var ira_slider = document.getElementById("contribution_Range");
    var each = " each";
    if (singleStatusBool == true && partialBool == false) {
        output.innerHTML = "$" + ira_slider.value;
    } else if (singleStatusBool == true && partialBool == true) {
        displayPartialContribution(singleStatusBool, senario, ageBool);
    }

    if (senario == 1 && partialBool == false) {
        output.innerHTML = "$" + ira_slider.value + each;
    } else if (senario == 2 && partialBool == false) {
        output.innerHTML = "$" + ira_slider.value + each;
    } else if (senario == 3 && partialBool == false) {
        output.innerHTML = "$" + ira_slider.value + " (jointed contribution)";
    } else if (senario == 1 && partialBool == true) {
        displayPartialContribution(singleStatusBool, 1, ageBool);
    } else if (senario == 2 && partialBool == true) {
        displayPartialContribution(singleStatusBool, 2, ageBool);
    } else if (senario == 3 && partialBool == true) {
        displayPartialContribution(singleStatusBool, 3, "n/a");
    }
}

// This function displays the contribution amount for those who qualify for a partial contribution
function displayPartialContribution(singleStatusBool, senario, ageBool) {
    console.log("displayPartialContribution function");
    var output = document.getElementById("show_Contribution_Limit");
    var ira_slider = document.getElementById("contribution_Range");
    var partialLimit;
    var underLimit;
    var division;
    var each = "";

    if (singleStatusBool == true && ageBool == false) {
        partialLimit = 6000;
        underLimit = 122000;
        division = 15000;
    } else if (singleStatusBool == true && ageBool == true) {
        partialLimit = 7000;
        underLimit = 122000;
        division = 15000;
    } else if (singleStatusBool == false && senario == 1) {
        partialLimit = 6000;
        underLimit = 193000;
        division = 10000;
        each = " each";
    } else if (singleStatusBool == false && senario == 2) {
        partialLimit = 7000;
        underLimit = 193000;
        division = 10000;
        each = " each";
    } else if (singleStatusBool == false && senario == 3) {
        partialLimit = 6500;
        underLimit = 193000;
        division = 10000;
        each = " each";
    }

    console.log(ira_slider.value);
    var ira_max = (ira_slider.value - underLimit);
    console.log(ira_max);
    ira_max = (ira_max / division);
    console.log(ira_max);
    ira_max = (1 - ira_max);
    console.log(ira_max);
    ira_max = (ira_max * partialLimit);
    console.log(ira_max);
    output.innerHTML = "$" + ira_slider.value + "<br>" + "Eligible Contribution: $" + Math.abs(ira_max).toFixed(2) + each;
}

// This function serves to notify the user that their income is beyind the limit to qualify to contribute
function notQualified() {
    ira_RemoveNodes();
    var boxIRA = document.getElementById("IRA");
    var didNotQualify = document.createTextNode("unfortunately, you don't qualify to contribute.")
    var b19 = document.createElement("br");
    var b20 = document.createElement("br");

    boxIRA.appendChild(didNotQualify);
    boxIRA.appendChild(b19);
    boxIRA.appendChild(b20);
}

// This function removes all content from the IRA box so that new elements won't collide with old ones
// Note: already have very similar function, possible solution: function takes in desired parent node ...
function ira_RemoveNodes() {
    var boxIRA = document.getElementById("IRA");
    var iraLength = boxIRA.childElementCount;
    while (iraLength > 1) {
        boxIRA.removeChild(boxIRA.lastChild);
        iraLength = iraLength - 1;
    }
}