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
     },
    "EBM940XA": {
        name: "EDU EZEUGO MOTORS",
        plate: "EBM940XA",
        policyNo: "CV260900230",
        make: "Daihatsu",
        model: "Mini Bus",
        chassis: "S200V0075327",
        type: "Commercial",
        issueDate: "2026-09-18",
        expiryDate: "2027-09-18"
     },
    "ABN325SZ": {
        name: "ANIEROBI TOCHUKWU",
        plate: "ABN325SZ",
        policyNo: "CV260825006",
        make: "Toyota",
        model: "Sienna",
        chassis: "5TDZA23C85S345738",
        type: "Private",
        issueDate: "2026-09-21",
        expiryDate: "2027-09-21"
     },
    "WER998YD": {
        name: "ISAAC WONOR",
        plate: "WER998YD",
        policyNo: "CV260903111",
        make: "Nissan",
        model: "Caravan",
        chassis: "VPE25079685",
        type: "Commercial",
        issueDate: "2026-09-25",
        expiryDate: "2027-09-25"
     },
    "JJT686ZG": {
        name: "IKENNA SOLOMON",
        plate: "JJT686ZG",
        policyNo: "CV260903111",
        make: "Nissan",
        model: "Caravan",
        chassis: "VPE25802185",
        type: "Commercial",
        issueDate: "2026-09-16",
        expiryDate: "2027-09-16"
     },
    "NWA322XB": {
        name: "CHIMAOBI ONYEMA",
        plate: "NWA322XB",
        policyNo: "CV260900230",
        make: "Daihatsu",
        model: "Hijet",
        chassis: "S211P0004034",
        type: "Commercial",
        issueDate: "2026-09-30",
        expiryDate: "2027-09-30"
     },
    "LSR70XN": {
        name: "MR ODIONU JOHNSON",
        plate: "LSR70XN",
        policyNo: "CV260911230",
        make: "Mitsubishi",
        model: "L300",
        chassis: "JMBLZP03VKA102678",
        type: "Commercial",
        issueDate: "2026-09-30",
        expiryDate: "2027-09-30"
     },
    "FGG989HC": {
        name: "EVANGELIST OFFOR PECULIAR",
        plate: "FGG989HC",
        policyNo: "CV260825006",
        make: "Toyota",
        model: "Corolla",
        chassis: "2T1BR12E42C534558",
        type: "Private",
        issueDate: "2026-09-25",
        expiryDate: "2027-09-25"
     },
    "RLU228ZV": {
        name: "UPLA PAUL TIGISHOR",
        plate: "RLU228ZV",
        policyNo: "CV260911230",
        make: "Daihatsu",
        model: "Mini Bus",
        chassis: "S220G0048550",
        type: "Commercial",
        issueDate: "2026-09-30",
        expiryDate: "2027-09-30"
     },
    "ABJ510TQ": {
        name: "ONYEISHI PATRICK CHINWEIKE",
        plate: "ABJ510TQ",
        policyNo: "CV260825006",
        make: "Toyota",
        model: "Sienna",
        chassis: "4T3ZF13C92U428620",
        type: "Private",
        issueDate: "2026-09-30",
        expiryDate: "2027-09-30"
     },
    "EBM408XA": {
        name: "OLLOM GODWIN",
        plate: "EBM408XA",
        policyNo: "CV260911231",
        make: "Daihatsu",
        model: "Hijet",
        chassis: "S200V00115364",
        type: "Commercial",
        issueDate: "2026-09-30",
        expiryDate: "2027-09-30"
     },
    "RSH950HX": {
        name: "EZEMA CHINEDU",
        plate: "RSH950HX",
        policyNo: "CV260825006",
        make: "Lexus",
        model: "RX 300",
        chassis: "JTJHF10U110219655",
        type: "Private",
        issueDate: "2026-10-05",
        expiryDate: "2027-10-05"
     },
    "FKJ309XW": {
        name: "MR JEHHY NIGERIA LTD OKAM",
        plate: "FKJ309XW",
        policyNo: "CV260911231",
        make: "Mitsubishi",
        model: "L300",
        chassis: "JMBZP01VLA993412",
        type: "Commercial",
        issueDate: "2026-10-05",
        expiryDate: "2027-10-05"
     },
    "FKJ854DU": {
        name: "MR OBIJACKSON HOSPITAL LIMITED",
        plate: "FKJ854DU",
        policyNo: "CV260365422",
        make: "Toyota",
        model: "Coaster",
        chassis: "JTGFK518104023398",
        type: "Commercial",
        issueDate: "2026-10-08",
        expiryDate: "2027-10-08"
     },
    "WER994YD": {
        name: "ISAAC WONOR",
        plate: "WER994YD",
        policyNo: "CV260808012",
        make: "Nissan",
        model: "Caravan",
        chassis: "VPE25079029",
        type: "Commercial",
        issueDate: "2026-10-17",
        expiryDate: "2027-10-17"
     },
    "FGG681LM": {
        name: "CHUKWUDOZIE CLETUS",
        plate: "FGG681LM",
        policyNo: "CV260825006",
        make: "Toyota",
        model: "Highlander",
        chassis: "5TDDK3EH4AS018530",
        type: "Private",
        issueDate: "2026-10-20",
        expiryDate: "2027-10-20"
     },
    "NSH962FF": {
        name: "NGOZI JENNIFER CHUKWUDOZIE",
        plate: "NSH962FF",
        policyNo: "CV260623511",
        make: "Kia",
        model: "Soul",
        chassis: "KNAJT811BB7342806",
        type: "Private",
        issueDate: "2026-10-20",
        expiryDate: "2027-10-20"
     },
    "JJT260SA": {
        name: "Okpetta Charles",
        plate: "JJT260SA",
        policyNo: "CV260623511",
        make: "Lexus",
        model: "E300",
        chassis: "JTHBF30G200074685",
        type: "Private",
        issueDate: "2026-10-19",
        expiryDate: "2027-10-19"
     },
    "JJT195CQ": {
        name: "BASIL IKENNA",
        plate: "JJT195CQ",
        policyNo: "CV260365422",
        make: "Mitsubishi",
        model: "L300",
        chassis: "022299QQQQ",
        type: "Commercial",
        issueDate: "2026-10-20",
        expiryDate: "2027-10-20"
     },
    "NEN15NZ": {
        name: "NWACHUKWU UGOCHUKWU",
        plate: "NEN15NZ",
        policyNo: "CV260365422",
        make: "Toyota",
        model: "Nadia",
        chassis: "5XN100039553",
        type: "Private",
        issueDate: "2026-10-23",
        expiryDate: "2027-10-23"
     },
    "NNE675TF": {
        name: "MR ASIKA CHIKWADO",
        plate: "NNE675TF",
        policyNo: "CV260365422",
        make: "Mitsubishi",
        model: "Delica",
        chassis: "20010303",
        type: "Private",
        issueDate: "2026-10-23",
        expiryDate: "2027-10-23"
     },
    "JJT218AL": {
        name: "IGNATUS AJIDE",
        plate: "JJT218AL",
        policyNo: "CV260365422",
        make: "Honda",
        model: "HRV",
        chassis: "JHMGH3750YS201680",
        type: "Private",
        issueDate: "2026-10-23",
        expiryDate: "2027-10-23"
     },
    "HAL88AG": {
        name: "EDWIN ILOH",
        plate: "HAL88AG",
        policyNo: "CV260365300",
        make: "Mercedez-Benz",
        model: "V-Class",
        chassis: "WDB6114181P111305",
        type: "Private",
        issueDate: "2026-10-28",
        expiryDate: "2027-10-28"


        
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
