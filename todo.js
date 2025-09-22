window.onload = function() {

const voeg_toe_knop = document.getElementById('addTaskButton');
voeg_toe_knop.addEventListener('click', taakToevoegen);

const nieuwe_taak = document.getElementById('taskInput');
nieuwe_taak.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
            event.preventDefault();

            taakToevoegen();
        }
    });

nieuwe_taak.addEventListener('focus', () => {
divAlert.textContent = '';
})
function taakToevoegen() {
        
      
        const taak_tekst = nieuwe_taak.value.trim();

        if (taak_tekst === '') {
            document.getElementById('divAlert').textContent = 'Voer een taak in' ;
            return;
        }
        
    
        if (taak_tekst !== '') { 

        const taak_lijst = document.getElementById('taskList'); //ul element
                
        const lijst_item = document.createElement('li'); //li element aanmaken
        

        const lijst_tekst = document.createElement('span'); //span element aanmaken
        lijst_tekst.textContent = taak_tekst; //tekst inhoud van li element (span)
        
        
        const check_box = document.createElement('input'); //checkbox aanmaken
        check_box.type = 'checkbox'; //type checkbox
        lijst_item.prepend(check_box); //checkbox toevoegen aan li voor de tekst
        
        check_box.addEventListener('change', function() {
            if (check_box.checked) {
                lijst_tekst.classList.add('voltooid'); //voeg voltooid class toe als checkbox is aangevinkt
                
            } else {
                lijst_tekst.classList.remove('voltooid'); //verwijder voltooid class als checkbox is uitgevinkt
            }
        })
        


        const remove_link = document.createElement('a');
         //a element aanmaken
        remove_link.href = '#'; //link naar niets
        
        remove_link.textContent = ' ' + ' Verwijderen'; //tekst inhoud van a element
        
        remove_link.addEventListener('click', takenWissen); //event listener voor verwijderen
        
        
        lijst_item.appendChild(lijst_tekst); //span toevoegen aan li
        lijst_item.appendChild(remove_link); //a toevoegen aan li
        taak_lijst.appendChild(lijst_item); //li toevoegen aan ul


        nieuwe_taak.value = '';
        

        function takenWissen(e) {
            e.preventDefault(); 
            lijst_item.remove(); //verwijder het li element
        
        }

        
        
    } 
    
}



}