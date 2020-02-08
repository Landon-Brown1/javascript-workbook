function getStockData() {

    let inputbox = document.getElementById("tickr");
    let tickr = inputbox.value;

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=US&lang=en&symbol="+tickr, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": "aa58a61455msh9a74d8a8fc41f2fp1c9e39jsn6213f7c23f2a"
        }
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(myjson => {
        console.log(myjson)
        let industry = summaryProfile.indusrty;
        let sector = summaryProfile.sector;
        let website = Object.summaryProfile.website;
        let totalRevenue = Object.financialData.totalRevenue.fmt;
        let totalEBITDA = Object.financialData.ebitda.fmt;
        let grossMargin = Object.financialData.grossMargins.fmt;
        let totalCash = Object.financialData.totalCash.fmt;
        let totalDebt = Object.financialData.totalDebt.fmt;
        let debtTwoEquity = Object.financialData.debtToEquity.fmt;

        console.log(industry);




    })
    .catch(err => {
        console.log(err);
    });


  
}

// Define the Important Company Return Metrics
// Defining the values of the variables collected to be updated
    let companyName = myjson.Object.price.shortName;
    let marketCap = Object.price.marketCap.fmt;

    //which of these is correct, above format, or below...?





// Get the Element from the HTML by the defined ID
// set the inner text of the element to be the return metric value
function updatePage() {

    // Summary Profile
    let nameElement = document.getElementById("comapnyName");
    nameElement.innerText = companyName;
    let marketCapElement = document.getElementById("marketCap");
    marketCapElement.innerText = marketCap;
    let industryElement = document.getElementById("industry");
    industryElement.innerText = industry;
    let sectorElement = document.getElementById("sector");
    sectorElement.innerText = sector;
    let websiteElement = document.getElementById("website");
    websiteElement.innerText = website;

    //  Income Statement
    let totalRevenueElement = document.getElementById("totalRevenue");
    totalRevenueElement.innerText = totalRevenue;
    let totalEBITDAElement = document.getElementById("ebitda");
    totalEBITDAElement.innerText = totalEBITDA;
    let grossMarginElement = document.getElementById("grossMargin");
    grossMarginElement.innerText = grossMargin;

    //  Balance Sheet Info
    let totalCashElement = document.getElementById("totalCash");
    totalCashElement.innerText = totalCash;
    let totalDebtElement = document.getElementById("totalDebt");
    totalDebtElement.innerText = totalDebt;
    let debtTwoEquityElement = document.getElementById("debtTwoEquity");
    debtTwoEquityElement.innerText = debtTwoEquity;

}









