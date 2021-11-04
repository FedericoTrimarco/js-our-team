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
        work : 'Chief Editor',
    },
    // 3
    {
        pic : 'img/walter-gordon-office-manager.jpg',
        userName : 'Walter Gordon',
        work : 'Office Manager',
    },
    // 4
    {
        pic : 'img/angela-lopez-social-media-manager.jpg',
        userName : 'Angela Lopez',
        work : 'Social Media Manager',
    },
    // 5
    {
        pic : 'img/scott-estrada-developer.jpg',
        userName : 'Scott Estrada',
        work : 'Developer',
    },
    // 6
    {
        pic : 'img/barbara-ramos-graphic-designer.jpg',
        userName : 'Barbara Ramons',
        work : 'Graphic Designer',
    },
];

console.table(userImg);

const addMemberContainer = document.querySelector('.team-container');

genCard(addMemberContainer, userImg);





/**************************************
             F U N Z I O N I
***************************************/

// Generazione Card
function genCard(container, array){
    for(let i = 0; i < array.length; i++){


        container.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="${array[i].pic}" alt="${array[i].userName}"/>
            </div>
                <div class="card-text">
                  <h3>${array[i].userName}</h3>
                  <p>${array[i].work}</p>
            </div>
        </div>
        `;
    }
}