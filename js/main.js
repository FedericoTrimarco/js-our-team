/* 
    Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:

    - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

    - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

    - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.


    Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

*/
//array di oggetti
const userImg = [
    // 1
    {
        pic : 'img/wayne-barnett-founder-ceo.jpg',
        userName : 'Wayne Barnett',
        work : 'Founder & CEO',
    },
    // 2
    {
        pic : 'img/angela-caroll-chief-editor.jpg',
        userName : 'Angela Caroll',
        work : 'Founder & CEO',
    },
    // 3
    {
        pic : 'img/walter-gordon-office-manager.jpg',
        userName : 'Walter Gordon',
        work : 'Founder & CEO',
    },
    // 4
    {
        pic : 'img/angela-lopez-social-media-manager.jpg',
        userName : 'Angela Lopez',
        work : 'Founder & CEO',
    },
    // 5
    {
        pic : 'img/scott-estrada-developer.jpg',
        userName : 'Scott Estrada',
        work : 'Founder & CEO',
    },
    // 6
    {
        pic : 'img/barbara-ramos-graphic-designer.jpg',
        userName : 'Barbara Ramons',
        work : 'Founder & CEO',
    },
];

console.table(userImg);
const addMemberSection = document.getElementById('add-member');

