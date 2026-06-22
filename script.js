function counter(id, start, end, speed){

    let obj = document.getElementById(id);

    let current = start;

    let timer = setInterval(function(){

        current++;

        obj.textContent = current + "+";

        if(current >= end){
            clearInterval(timer);
        }

    }, speed);
}

counter("customers",0,5000,1);
counter("branches",0,250,10);
counter("transactions",0,10000,1);