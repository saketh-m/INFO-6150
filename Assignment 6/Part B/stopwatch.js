$(document).ready(()=>{
    var hrs=0;
    var min=0;
    var sec=0;
    var timerrun=false; 

   async function time(phrs,pmin,psec){
        var starttime = Date.now()
        updatetime = setInterval(()=>{
            var runtime = Date.now()-starttime
            sec=psec + (runtime/1000) % 60
            min=(pmin + (runtime/60000)) % 60
            hrs=(phrs + (runtime/3600000)) 
        },1);
    }
    
    function display(num) {
        num = '' + (num | 0);
        while (num.length < 2) num = '0' + num;
        return num;
    }

    function updatestopwatch(){
        time(hrs,min,sec).then(
            setInterval(()=>{
                $('#hrs').html(display(hrs)+":")
                $('#min').html(display(min)+":")
                $('#sec').html(display(sec))
            },1000)
        )
    }

    $('#start').on('click',async ()=>{
       if(!timerrun)
       {
            timerrun=true;
            updatestopwatch()
       }
    });

    $('#stop').on('click',async ()=>{
       if(timerrun)
       {
            timerrun=false;
            clearInterval(updatetime);
       }
     });

     $('#reset').on('click', async()=>{
        
        timerrun=false;
        clearInterval(updatetime);
        hrs=min=sec=0;
        $('#hrs').html(display(hrs)+":")
        $('#min').html(display(min)+":")
        $('#sec').html(display(sec))
        
      });
});