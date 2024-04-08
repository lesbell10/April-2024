const yearSelector = document.getElementById("yearSelector");
const SG = document.getElementById("SG");
const SG2 = document.getElementById("SG2");
const PG = document.getElementById("PG");
const PG2 = document.getElementById("PG2");
const SF = document.getElementById("SF");
const SF2 = document.getElementById("SF2");
const PF = document.getElementById("PF");
const PF2 = document.getElementById("PF2");
const C = document.getElementById("C");
const C2 = document.getElementById("C2");
const smallpic = document.getElementById("smallpic");

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear === "0") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "1") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "2") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "3") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "4") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "5") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "6") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "7") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "8") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "9") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "10") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "11") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "12") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "13") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "14") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "15") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "16") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "17") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "18") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }

    if (selectedYear === "19") {

        PG.textContent = "";
        SG.textContent = "";
        SF.textContent = "";
        PF.textContent = "";
        C.textContent = "";

        PG2.src = "/Basket/img/players/" + PG.textContent + ".png";
        SG2.src = "/Basket/img/players/" + SG.textContent + ".png";
        SF2.src = "/Basket/img/players/" + SF.textContent + ".png";
        PF2.src = "/Basket/img/players/" + PF.textContent + ".png";
        C2.src = "/Basket/img/players/" + C.textContent + ".png";

        smallpic.src = "";
    }
}