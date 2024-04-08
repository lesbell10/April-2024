const yearSelector = document.getElementById("yearSelector");
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const FC = document.getElementById("FC");
const FC2 = document.getElementById("FC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const G = document.getElementById("G");
const G2 = document.getElementById("G2");
const smallpic = document.getElementById("smallpic");

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "0") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "1") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "2") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "3") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "4") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "5") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "6") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "7") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "8") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "9") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "10") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "11") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "12") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "13") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "14") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "15") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "16") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "17") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "18") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }

    if (selectedYear === "19") {

        FL.textContent = "";
        FC.textContent = "";
        FR.textContent = "";
        DL.textContent = "";
        DR.textContent = "";
        G.textContent = "";

        FL2.src = "/Hockey/img/players/" + FL.textContent + ".jpg";
        FC2.src = "/Hockey/img/players/" + FC.textContent + ".jpg";
        FR2.src = "/Hockey/img/players/" + FR.textContent + ".jpg";
        DL2.src = "/Hockey/img/players/" + DL.textContent + ".jpg";
        DR2.src = "/Hockey/img/players/" + DR.textContent + ".jpg";
        G2.src = "/Hockey/img/players/" + G.textContent + ".jpg";

        smallpic.src = "";
    }
}