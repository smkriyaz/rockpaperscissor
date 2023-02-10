let rock=$(".btn1").click(rocks);
let paper=$(".btn2").on("click",papers);
let scissor=$(".btn3").on("click",scissors)

function rocks(){
    let a=Math.random();
let b= (a*3)+1;
 let c=Math.floor(b);
 console.log(c);
 $("p").text("rock is selected");

    if(c==1){
            alert("draw, computer choice is rock ");
            
          }else if(c==2){
            alert("u lost, computer choice is paper");
            
          }else{
            alert("won, computer choice is scissors");
        
          }
        }

function papers(){
    let a=Math.random();
        let b= (a*3)+1;
        let c=Math.floor(b);
        console.log(c);
        $("p").text("paper is selected");
        if(c==1){
            alert("won,computer choic is rock");
            
        }else if(c==2){
            alert("Draw ,computer choice is paper");
            
        }else{
            alert(" u lost,computer choice is scissors");
            
        }
    }  

function scissors(){
    let a=Math.random();
    let b= (a*3)+1;
    let c=Math.floor(b);
    console.log(c);
    $("p").text("scissor is selected")
    if(c==1){
        alert(" u lost,computer choice is rock");
        
    }else if(c==2){
        alert("win ,computer choice is paper");
       
    }else{
        alert(" Draw,computer choice is scissors");
       
    }
}



