let billett=[];
let ut = "";
function kjopbillett() {
    let bol=true;

    billett.film = document.getElementById("velgFilm").value;
    if (billett.film === "") {
        document.getElementById("nullFilm").innerHTML = " Må velge en film";
        bol=false;
    }else{
        ut+=billett.film+" ";
        document.getElementById("nullFilm").innerHTML = "";
    }
    billett.Antall = document.getElementById("antall").value;
    if (billett.Antall === "") {
        document.getElementById("nullAntall").innerHTML = " Må skrive noe inn i antall";
        bol=false;
    }else{
        ut+=billett.Antall+" ";
        document.getElementById("nullAntall").innerHTML = "";
    }

    billett.Fornavn = document.getElementById("fornavn").value;
    if (billett.Fornavn === "") {
        bol=false;
        document.getElementById("nullFornavn").innerText = " Må skrive noe inn i fornavn";
    }else{
        ut+=billett.Fornavn+" ";
        document.getElementById("nullFornavn").innerText = "";
    }
    billett.Etternavn = document.getElementById("etternavn").value;
    if (billett.Etternavn === "") {
        bol=false;

        document.getElementById("nullEtternavn").innerText = " Må skrive noe inn i etternavn";
    }else{
        ut+=billett.Etternavn+" ";
        document.getElementById("nullEtternavn").innerText = "";
    }

    billett.telefonnr = document.getElementById("telefonnr").value;
    if (billett.telefonnr === "") {
        bol=false;
        document.getElementById("nullTelefonnr").innerText = " Må skrive noe inn i telefonnr";
    }
    else{
        ut+=billett.telefonnr+" ";
        document.getElementById("nullTelefonnr").innerText = "";
    }


    billett.Epost = document.getElementById("epost").value;
    if (billett.Epost === "") {
        bol=false;
        document.getElementById("nullEpost").innerText = " Må skrive noe inn i epost";
    }else{
        ut+=billett.Epost+".\n";
        document.getElementById("nullEpost").innerText = "";
    }
    if(bol){

        console.log(ut);
        document.getElementById("reset").reset();
        document.getElementById("Ut").innerHTML = ut;
    }
    else{ut="";}
}
function slett(){
    for(let i=0;i<billett.length;i++){
        billett.splice(billett[i]);
    }
    document.getElementById("nullFilm").innerText="";
    document.getElementById("nullAntall").innerText="";
    document.getElementById("nullFornavn").innerText="";
    document.getElementById("nullEtternavn").innerText="";
    document.getElementById("nullTelefonnr").innerText="";
    document.getElementById("nullEpost").innerText="";
    document.getElementById("Ut").innerText="";
    document.getElementById("reset").reset();

}

