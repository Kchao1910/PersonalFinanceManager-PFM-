function investPop() {
    removeAllNodes();

    // parent node
    var body = document.getElementById("parent");

    // other main elements
    var portfolio = document.createElement("div");
    var pHeader = document.createElement("h1");
    var box401K = document.createElement("div");
    var boxIRA = document.createElement("div");
    var boxStocks = document.createElement("div");
    var boxMF = document.createElement("div");
    var boxBonds = document.createElement("div");
    var boxRE = document.createElement("div");

    // Styling main boxes
    pHeader.innerHTML = "Portfolio";
    pHeader.style.fontSize = "1.5vw";

    // 401K
    box401K.style.width = "90%";
    box401K.style.marginLeft = "5%";
    box401K.style.marginRight = "5%";
    box401K.style.borderStyle = "solid";
    box401K.innerHTML = "401k"
    var income = document.createTextNode("income");
    var inp401K = document.createElement("input");
    var cont401K = document.createTextNode("employer match");
    var inp401K2 = document.createElement("input");
    var contributionTxt = document.createTextNode("contribution" );
    var inp401K3 = document.createElement("input");
    inp401K.style.width = "17.5%";
    inp401K.style.textAlign = "center";
    inp401K2.style.width = "17.5%";
    inp401K2.style.textAlign = "center";
    inp401K3.style.width = "17.5%";
    inp401K3.style.textAlign = "center";

    // IRA
    boxIRA.style.width = "90%";
    boxIRA.style.marginLeft = "5%";
    boxIRA.style.marginRight = "5%";
    boxIRA.style.borderStyle = "solid";
    boxIRA.innerHTML = "roth ira";
    boxIRA.id = "IRA";
    var relationQ = document.createTextNode("are you single or married?");
    var singleBtn = document.createElement("button");
    var marriedBtn = document.createElement("button");

    singleBtn.innerHTML = "Single";
    singleBtn.onclick = function() {
        singleStatus();
    }
    marriedBtn.innerHTML = "Married";
    marriedBtn.onclick = function() {
        marriedStatus();
    }

    // Stocks
    boxStocks.style.width = "90%";
    boxStocks.style.marginLeft = "5%";
    boxStocks.style.marginRight = "5%";
    boxStocks.style.borderStyle = "solid";
    boxStocks.innerHTML = "stocks";
    var stockQ = document.createTextNode("principle amount");
    var stockQ2 = document.createTextNode("annual contribution");
    var inpStocks = document.createElement("input");
    var inpStocks2 = document.createElement("input");

    // Mutual Funds
    boxMF.style.width = "90%";
    boxMF.style.marginLeft = "5%";
    boxMF.style.marginRight = "5%";
    boxMF.style.borderStyle = "solid";
    boxMF.innerHTML = "Mutual Funds";

    // Bonds
    boxBonds.style.width = "90%";
    boxBonds.style.marginLeft = "5%";
    boxBonds.style.marginRight = "5%";
    boxBonds.style.borderStyle = "solid";
    boxBonds.innerHTML = "Bonds";

    // Real Estate
    boxRE.style.width = "90%";
    boxRE.style.marginLeft = "5%";
    boxRE.style.marginRight = "5%";
    boxRE.style.borderStyle = "solid";
    boxRE.innerHTML = "real estate";
    var houseTxt = document.createTextNode("current house value");
    var rentTxt = document.createTextNode("annual rental income");
    var propertyTxt = document.createTextNode("avg. annual appreciation")
    var inpRE = document.createElement("input");
    var inpRE2 = document.createElement("input");
    var inpRE3 = document.createElement("input");
    
    // Instruction text
    var IP = document.createTextNode("page is still in development.");
    var investDisclaimer = document.createTextNode("note: this is for education and not your financial planner.");
    var optionTxt = document.createTextNode("Click on a option below to add to your portfolio.")

    // Button creation
    //var btn401K = document.createElement("button");
    //var btnIRA = document.createElement("button");
    //var btnStocks = document.createElement("button");
    //var btnMF = document.createElement("button");
    //var btnBonds = document.createElement("button");
    //var btnRE = document.createElement("button");

    // break creation
    var b1 = document.createElement("br");
    var b2 = document.createElement("br");
    var b3 = document.createElement("br");
    var b4 = document.createElement("br");
    var b5 = document.createElement("br");
    var b6 = document.createElement("br");
    var b7 = document.createElement("br");
    var b8 = document.createElement("br");
    var b9 = document.createElement("br");
    var b10 = document.createElement("br");
    var b11 = document.createElement("br");
    var b12 = document.createElement("br");
    var b13 = document.createElement("br");
    var b14 = document.createElement("br");
    var b15 = document.createElement("br");

    // ira breaks
    var b16 = document.createElement("br");
    var b17 = document.createElement("br");
    var b18 = document.createElement("br");

    // stocks breaks
    var b27 = document.createElement("br");
    var b28 = document.createElement("br");
    var b29 = document.createElement("br");
    var b30 = document.createElement("br");
    var b31 = document.createElement("br");
    var b32 = document.createElement("br");

    // real estate breaks
    var b33 = document.createElement("br");
    var b34 = document.createElement("br");
    var b35 = document.createElement("br");
    var b36 = document.createElement("br");
    var b37 = document.createElement("br");
    var b38 = document.createElement("br");
    var b39 = document.createElement("br");
    var b40 = document.createElement("br");
    var b41 = document.createElement("br");
    var b42 = document.createElement("br");
    var b43 = document.createElement("br");

    // innerHTML for buttons
    /* btn401K.innerHTML = "401K";
    btnIRA.innerHTML = "IRA";
    btnStocks.innerHTML = "Stocks";
    btnMF.innerHTML = "Mutual Funds";
    btnBonds.innerHTML = "Bonds";
    btnRE.innerHTML = "Real Estate"; */

    // class declaration
    /* btn401K.className = "401K";
    btnIRA.className = "IRA";
    btnStocks.className = "Stocks";
    btnMF.className = "Mutual Funds";
    btnBonds.className = "Bonds";
    btnRE.className = "Real Estate"; */

    // appending to DOM
    body.appendChild(IP);
    body.appendChild(b43);
    body.appendChild(investDisclaimer);
    /* body.appendChild(b1);
    body.appendChild(optionTxt);
    body.appendChild(b2);
    body.appendChild(b3);
    body.appendChild(btn401K);
    body.appendChild(btnIRA);
    body.appendChild(btnStocks);
    body.appendChild(btnMF);
    body.appendChild(btnBonds);
    body.appendChild(btnRE); */
    body.appendChild(portfolio);

    // start of portfolio section
    portfolio.appendChild(pHeader);
    portfolio.appendChild(box401K);
    portfolio.appendChild(boxIRA);
    portfolio.appendChild(boxStocks);
    //portfolio.appendChild(b4);
    //portfolio.appendChild(boxMF);
    //portfolio.appendChild(boxBonds);
    portfolio.appendChild(boxRE);

    // 401K
    box401K.appendChild(b5)
    box401K.appendChild(b6)
    box401K.appendChild(income);
    box401K.appendChild(b7);
    box401K.appendChild(inp401K);
    box401K.appendChild(b8);
    box401K.appendChild(cont401K);
    box401K.appendChild(b9);
    box401K.appendChild(inp401K2);
    box401K.appendChild(b10);
    box401K.appendChild(contributionTxt);
    box401K.appendChild(b11);
    box401K.appendChild(inp401K3);
    box401K.appendChild(b12);
    box401K.appendChild(b13);

    // IRA
    boxIRA.appendChild(b14);
    boxIRA.appendChild(b15);
    boxIRA.appendChild(relationQ);
    boxIRA.appendChild(b16);
    boxIRA.appendChild(singleBtn);
    boxIRA.appendChild(marriedBtn);
    boxIRA.appendChild(b17);
    boxIRA.appendChild(b18);

    // Stocks
    boxStocks.appendChild(b27);
    boxStocks.appendChild(b28);
    boxStocks.appendChild(stockQ);
    boxStocks.appendChild(b29);
    boxStocks.appendChild(inpStocks);
    boxStocks.appendChild(b30);
    boxStocks.appendChild(stockQ2);
    boxStocks.appendChild(b31);
    boxStocks.appendChild(inpStocks2);
    boxStocks.appendChild(b32);
    boxStocks.appendChild(b33);

    // Real Estate
    boxRE.appendChild(b34);
    boxRE.appendChild(b35);
    boxRE.appendChild(houseTxt);
    boxRE.appendChild(b36);
    boxRE.appendChild(inpRE);
    boxRE.appendChild(b37);
    boxRE.appendChild(rentTxt);
    boxRE.appendChild(b38);
    boxRE.appendChild(inpRE2);
    boxRE.appendChild(b39);
    boxRE.appendChild(propertyTxt);
    boxRE.appendChild(b40);
    boxRE.appendChild(inpRE3);
    boxRE.appendChild(b41);
    boxRE.appendChild(b42);

}