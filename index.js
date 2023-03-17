(function(){
    var hourInp = document.querySelector(".hour")
    var minInp = document.querySelector(".minutes")
    var secInp = document.querySelector(".seconds")
    var startBtn = document.querySelector(".start-btn")
    var stopBtn = document.querySelector(".stop-btn")
    var resetBtn = document.querySelector(".reset-btn")

    var timer = null;
    //Start btn function 
    
    startBtn.addEventListener("click", function(){
        if(hourInp.value == 0 && minInp.value == 0 && secInp.value == 0) return ;

        function onStart() {
            startBtn.style.display = "none"
            stopBtn.style.display = "initial"

            timer = setInterval(()=>{
                countDown()
            }, 1000)
        }
        onStart()

        function countDown() {
            if(secInp.value>60){
                minInp.value++;
                secInp.value =  parseInt(secInp.value)-59
            }
            if(minInp.value>60){
                hourInp.value++;
                minInp.value =  parseInt(minInp.value)-60
            }

            if(hourInp.value == 0 && minInp.value == 0 && secInp.value == 0){
                hourInp.value = ""
                minInp.value = ""
                secInp.value = ""
                onStop()
            }
            else if(secInp.value != 0 ){
                secInp.value = `${secInp.value<=10 ? "0" : ""}${secInp.value-1}`
            }
            else if(minInp.value != 0 && secInp.value == 0){
                secInp.value = 59
                minInp.value = `${minInp.value<=10 ? "0" : ""}${minInp.value-1}`
            }
            else if(hourInp.value != 0 && minInp.value == 0){
                minInp.value = 60
                hourInp.value = `${hourInp.value<=10 ? "0" : ""}${hourInp.value-1}`
            }
        }          
    })

    function onStop(state){
        startBtn.innerHTML = state === "pause" ? "Continue" : "Start";
        startBtn.style.display = "initial"
        stopBtn.style.display = "none"
        clearInterval(timer)
    }

    stopBtn.addEventListener("click", function(){
        onStop("pause")
    })

    resetBtn.addEventListener("click", function(){
        hourInp.value = ""
        minInp.value = ""
        secInp.value = ""

        onStop()
    })
})();