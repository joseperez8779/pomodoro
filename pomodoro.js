window.onload = function() { /* timer */ ;
    /* Pomodoro */
    let workTime;
    let breakTime;
    let timesCompleted; /* cuantos tiempos completamos*/
    let cyclesGoal;
    let cyclesCompled = 0;

    function pomodoroController() {
        if (RestTime()) {;
            cyclesCompleted++;
            if (!goalReached()) {
                currentTime = resTime;
                timer();
                timesCompleted = 0;
            } else {
                console.log("PomodoroFinished!");
            }
            return;
        }

        function goalRechead() {
            return cyclesGoal == cyclesCompleted;
        }

        function isResTime() {
            return timesCompleted;
        }
    }

    /*Frontend Connection*/
    let clock = document.getElementById("clock");
    let cycles = document.getElementById("cyclesn-input");
    let startButtom = document.getElementById("start-buttom");
    let workTimeInput = document.getElementById("work-time");
    let breakTimeInput = document.getElementById("break-time");
    let restTimeInput = document.getElementById("rest-Time");
    /* button functionality */
    startButtom.onclick = () => {
        startPomodoro();
    };

    /*Button funcionality*/
    startButtom.onclick = () => {
        populateVariable();
        startPomodoro();
    };

    function startPomodoro() {
        console.log("started pomodoro")
        pomodoroController();
    }

    function populateVariable() {
        console.log("populated variables");
        workTime = workTimeInput.value; /* Minutos*/
        breakTime = breakTimeInput.Value; /*Minutos*/
        restTime = restTimeInput.value; /*Minutos*/
        cyclesGoal = cyclesGoalInput.Value; /*Minutos*/
        timesCompleted = 0;
    }
    /*clock*/
    let clockMinutes;
    let clockSeconds;

    function updateClock() {
        clockMinutes = formatNumbers(currentTime);
        clockSeconds = formatNumbers(seconds);
        clock.innerHTML = clockMinutes + ":" + clockSeconds;
    }

    function formatNumbers(time) {
        let formattedDigits = time;
        if (time < 10) {
            formattedDigits = "0" + time;
        } else {
            formattedDigits = time;
        }
        return formattedDigits;
    } /*Timer*/

    let currentTime; /* Minutos Seteados*/
    let seconds = 0;
};

function timer() {
    if (currentTime > 0 || seconds > 0) {

        if (seconds == 0) {
            seconds = 59;
            currentTime--;
        } else {
            seconds--;
        }
        updateClock();
        console.log(currentTime, seconds);
        interval = setTimeout(timer, 1000);
    } else {
        pomodoroController();
        /* console.log("El temporizador termino");*/
    }
};