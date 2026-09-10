// Mock Database Records
const policyDatabase = {
    "FGG430XB": {
        name: "JOSEPH OMEJE",
        plate: "FGG430XB",
        policyNo: "CV260825006",
        make: "Mercedes-Benz",
        model: "914",
        chassis: "674022151109423",
        type: "Commercial",
        issueDate: "2026-08-25",
        expiryDate: "2027-08-25"
    },
    "ACA226ZL": {
        name: "PASTOR MIKE OGWUCHE",
        plate: "ACA226ZL",
        policyNo: "CV260825005",
        make: "Mitsubishi",
        model: "L300",
        chassis: "JMBP15VHLZLD04835",
        type: "Commercial",
        issueDate: "2026-08-25",
        expiryDate: "2027-08-25"
     },
    "RUM48XB": {
        name: "OBISON OGONNA KELECHI",
        plate: "RUM48XB",
        policyNo: "CV260825006",
        make: "Nissan",
        model: "Caravan",
        chassis: "VPE25009308",
        type: "Commercial",
        issueDate: "2026-09-01",
        expiryDate: "2027-09-01"
     },
    "ABN332SZ": {
        name: "PASTOR MRS AMAKA KELECHI",
        plate: "ABN332SZ",
        policyNo: "CV260825006",
        make: "Toyota",
        model: "Highlander",
        chassis: "JTEGF21A710005810",
        type: "Private",
        issueDate: "2026-09-05",
        expiryDate: "2027-09-05"
     },
    "WER992YD": {
        name: "ISAAC WONOR",
        plate: "WER992YD",
        policyNo: "CV260903020",
        make: "Nissan",
        model: "Caravan",
        chassis: "QE25030807",
        type: "Commercial",
        issueDate: "2026-09-05",
        expiryDate: "2027-09-05"
        
    }
};

function verifyPolicy() {
    const inputField = document.getElementById("plateInput");
    const searchKey = inputField.value.trim().toUpperCase().replace(/\s+/g, '');

    const emptyState = document.getElementById("emptyState");
    const resultState = document.getElementById("resultState");

    if (!searchKey) {
        alert("Please enter a valid plate number.");
        return;
    }

    // Lookup record
    const record = policyDatabase[searchKey];

    if (record) {
        // Populate DOM elements
        document.getElementById("resPlateHeader").innerText = record.plate;
        document.getElementById("resName").innerText = record.name;
        document.getElementById("resPlate").innerText = record.plate;
        document.getElementById("resPolicy").innerText = record.policyNo;
        document.getElementById("resMake").innerText = record.make;
        document.getElementById("resModel").innerText = record.model;
        document.getElementById("resChassis").innerText = record.chassis;
        document.getElementById("resType").innerText = record.type;
        document.getElementById("resIssue").innerText = record.issueDate;
        document.getElementById("resExpiry").innerText = record.expiryDate;

        // Hide empty placeholder & reveal results
        emptyState.style.display = "none";
        resultState.style.display = "block";
    } else {
        alert("No policy record found for plate: " + inputField.value);
        emptyState.style.display = "block";
        resultState.style.display = "none";
    }
}
