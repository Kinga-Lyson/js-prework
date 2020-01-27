//zadeklarowanie zmiennych
var computerInput, playerInput;

//zwrócony tekst z funkcji GETMOVENAME przypisujemy do zmiennych playerMoveName i computerMoveName


function test(testID) {
    if (canWePlay() === true) {
//ruch gracza ID numerowe
    playerInput = testID; 
     
    
//wywołujemy funkcję, która określa na podstawie ID- czy kamień, czy papier, czy nożyce i wyświetla RUCH GRACZA
    var playerMoveName = getMoveName(playerInput);
   // printMessage("Ruch gracza to: " + playerMoveName + ".");

    
//wywołujemy funkcję losowania ruchu komputera 
    computerInput = Math.floor(Math.random() * 3 + 1);
    
    //wywołujemy funkcję, która określa na podstawie ID komputera- czy kamień, czy papier, czy nożyce i wyświetla RUCH KOMPUTERA 
    var computerMoveName = getMoveName(computerInput);
    setComputerClass(computerMoveName);
    //printMessage("Ruch komputera to: " + computerMoveName + ".");
    
//wywołujemy funkcję, która porównuje RUCH KOMPUTERA I GRACZA i zwraca wynik gry
    ktoWygral(computerMoveName, playerMoveName);    
    }
    else {
        alert("Jeżeli chcesz nadal grać, odśwież stronę.");
    }
}







//na podstawie wyniku komputera, przypisuje odpowiednią klasę do icon, która wyświetla iconę z wyborem komputera
function setComputerClass(moveName) {
    var iconElement = document.getElementById("computerMove");
    iconElement.classList = '';
    switch(moveName) {
        case "kamień":
            iconElement.classList.add("fas", "fa-hand-rock");
            break;
        case "papier":
            iconElement.classList.add("fas", "fa-hand-paper");
            break;
        case "nożyce":
            iconElement.classList.add("fas", "fa-hand-scissors");
            break;    
    }
}






//przypisanie wyboru do numeru i zamiana ID numerowe na TEKSTOWE; zwraca tekst
function getMoveName(inputNumber) {
	if (inputNumber == 1) {
		return 'kamień';
	}
	else if (inputNumber == 2) {
		return 'papier';
	}
	else if (inputNumber == 3) {
		return 'nożyce';
	}
	else {
		printMessage('Nie znam ruchu o id ' + inputNumber + '. Zakładam, że chodziło o "kamień".');
		return 'kamień';
	}
}






//porównuje wybory gracza i komputera w danej rundzie i rozstrzyga kto wygrał daną rundę
function ktoWygral(computerMove, playerMove) {
    var winner = document.getElementById("theWinnerIs");
	if (playerMove == computerMove) {
		winner.innerHTML = "Remis, bez punktu";
	}
    else if (playerMove == 'kamień' && computerMove == 'nożyce') {
		winner.innerHTML = "Wygrałeś! Punkt dla Ciebie.";
        setScore('gracz');
	}
	else if (playerMove == 'papier' && computerMove == 'kamień') {
		winner.innerHTML = "Wygrałeś! Punkt dla Ciebie.";
        setScore('gracz');
	}
	else if (playerMove == 'nożyce' && computerMove == 'papier') {
		winner.innerHTML = "Wygrałeś! Punkt dla Ciebie.";
        setScore('gracz');
	}
	else {
		winner.innerHTML = "Przegrałeś! Punkt dla komputera.";
        setScore('komputer');
	}
}



//zadeklarowanie zmiennych przechowujących punkty graczy
var playerScore = 0, computerScore = 0, koniecGry = 3;



//przypisuje punkty po wygranej rundzie
function setScore(winnerName) {
    
    if (winnerName == 'komputer') {
        var element = document.getElementById("computerScore");
        computerScore++;
        element.innerHTML = computerScore;
    }
    else {
        var element = document.getElementById("playerScore");
        playerScore++;
        element.innerHTML = playerScore;
    }
    isGameOver();
}



//funkcja kończąca grę po zdobyciu maksymalnej zadeklarowanej ilości punktów przez jednego z graczy
function isGameOver() {
    if (playerScore === koniecGry) 
    {
        printMessage("Koniec gry! Całą rozgrywkę wygrywa: GRACZ. " + "Jest godzina: " +  new Date());
        showRefresh();
        
    }
    else if (computerScore === koniecGry) 
    {
        printMessage("Koniec gry! Całą rozgrywkę wygrywa: KOMPUTER. " + "Jest godzina: " +  new Date());
        showRefresh();
        
    }
}







function showRefresh() {
    var iconRefresh = document.getElementById("refresh-icon");
    iconRefresh.classList.add("fas", "fa-redo-alt");
}





function canWePlay() {
    if (computerScore < koniecGry && playerScore < koniecGry) {
        return true;
    }
    else {
        return false;
    }
}



