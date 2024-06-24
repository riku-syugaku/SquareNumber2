const question = document.getElementById('question');
const timescore = document.getElementById('timescore');
const choice1 = document.getElementById('choice1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p')
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modal4 = document.getElementById('modal4');
const No1 = document.getElementById('No1');
const No2 = document.getElementById('No2');
const No3 = document.getElementById('No3');
const No4 = document.getElementById('No4');
const okay = document.getElementById('okay');
const lose = document.getElementById('lose');
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const ten = document.getElementById('10');
const eleven = document.getElementById('11');
const twelve = document.getElementById('12');
const thirteen = document.getElementById('13');
const fourteen = document.getElementById('14');
const fifteen = document.getElementById('15');
const check = document.getElementById('check');
const clear = document.getElementById('clear');
const x = document.getElementById('x');
const time = document.getElementById('time');


const display = document.getElementById('display');
const ab = document.getElementById('ab');
const input = document.getElementById('yasnswer');
const exponent = 2;


let start = 0;
let end = 0;
let timeLimit = 60000;

let answer = document.getElementById('answer');
const isCorrected = document.getElementById('isCorrected');

yanswer.disabled = true;
one.disabled = true;
two.disabled = true;
three.disabled = true;
four.disabled = true;
five.disabled = true;
six.disabled = true;
seven.disabled = true;
eight.disabled = true;
nine.disabled = true;
zero.disabled = true;
check.disabled = true;
clear.disabled = true;


const q1 = [
//Level 1
{q:'11',c:'121'},
{q:'12',c:'144'},
{q:'13',c:'169'},
{q:'14',c:'196'},
{q:'15',c:'225'},
{q:'14',c:'196'},
{q:'12',c:'144'},
{q:'11',c:'121'},
{q:'15',c:'225'},
{q:'13',c:'169'},
//Level 2
{q:'16',c:'256'},
{q:'17',c:'289'},
{q:'18',c:'324'},
{q:'19',c:'361'},
{q:'20',c:'400'},
{q:'17',c:'289'},
{q:'19',c:'361'},
{q:'18',c:'324'},
{q:'16',c:'256'},
{q:'20',c:'400'},

      ];
      
     let a = 0;
      let b = 0;
    const arr = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20];

    let startTime;
    let endTime;

      function buttonClick1(){ 
         a = 0; b=10;  
        startTime = null;
        endTime = null; 
        timeGet();
        gamestart();
        
         }
      function buttonClick2(){ 
        a = 10; b=20;
        startTime = null;
        endTime = null;  
        timeGet();    
        gamestart();
         }
      function buttonClick3(){ 
       a=20;b=30;
       startTime = null;
       endTime = null;   
       timeGet();   
       gamestart();
         }
      function buttonClick4(){ 
       a=30;b=45;
       startTime = null;
       endTime = null;  
       timeGet();    
       gamestart();
         }


        function displayTime(time) {
          const seconds = Math.floor((time % timeLimit) / 1000);
          const timeString = `${padZero(seconds)}`;
          console.log(timeString); // 時間を表示する場合は、表示する要素に代入するなど適宜変更してください
          timescore.textContent = `あと${padZero(seconds)}秒`;
        }
        function padZero(number) {
          return number < 10 ? `0${number}` : number;
        }
        function startTimer(duration) {
          timeRemaining = duration;
        
          timer = setInterval(() => {
            timeRemaining -= 1000;
        
            if (timeRemaining < 0) {
              clearInterval(timer);
              displayTime(0);
              console.log("時間切れです");
              // 制限時間が終了した後の処理をここに追加する

              let z = 0;
              if(a === 10){z=1}
              else if(a === 20){z=2}
              else if(a === 30){z=3}
              else{z=4}

              
              lose.textContent = ` 時間切れです！`;

              
                modal4.classList.remove('hidden');

                lose.addEventListener('click',()=>{

                  console.log("こんにちは");      
              
                  modal4.classList.add('hidden');
                  choice1.removeEventListener('click',event);

             
                  location.reload();

      
                })




       


            } else {
              displayTime(timeRemaining);
            }
          }, 1000);
        }
        function stopTimer() {
          clearInterval(timer);
        }
        function restartTimer() {
          stopTimer();
          restartTimer(duration);
          startTimer(duration);
        }       
      function gamestart(){ 

        one.disabled = false;
        two.disabled = false;
        three.disabled = false;
        four.disabled = false;
        five.disabled = false;
        six.disabled = false;
        seven.disabled = false;
        eight.disabled = false;
        nine.disabled = false;
        zero.disabled = false;
        check.disabled = false;
        clear.disabled = false;

        No1.disabled = true;
        No2.disabled = true;
        // No3.disabled = true;
        // No4.disabled = true;

     
      start = performance.now();
      Qnum.textContent = `あと${b - a}問`;

      let base = q1[a].q;
      let exponent = 2;

    
       // 累乗を上付き文字で表示
       question.innerHTML = base + "<span class='exponent'>" + exponent + "</span> ";

                      }


 function timeGet(){ 
                        startTime = new Date();
                        let timer = null;
                        let timeRemaining = 0;
                        const duration = timeLimit;
                        // 初回のタイマースタート
                     startTimer(duration);                
                                      } 
                                      
  
                 
     function getNum(btn) {
          if(btn.value === "check"){
               

                if(yanswer.value === q1[a].c){
                  endTime = new Date();

                 a ++;
               modal3.classList.remove('hidden');


               isCorrected.textContent = `正解！`;  
               setTimeout(()=>{
                modal3.classList.add('hidden');
      
                choice1.removeEventListener('click',event);
      
                  if(a === 10 ||a === 20 ||a === 30 ||a === 45  ){

                    let z = 0;
                    if(a === 10){z=1}
                    else if(a === 20){z=2}
                    else if(a === 30){z=3}
                    else{z=4}

                    let end = performance.now();
                    

                  
                    win.textContent = ` Lv.${z} クリア！        「
                    ${(Math.round((timeLimit - timeRemaining)/1000))} 秒」`;
                    
                    clearInterval(timer);


                  modal.classList.remove('hidden');
                      
                    close.addEventListener('click',()=>{
                      location.reload();
                  })

                  }
                
                else{

                  Qnum.textContent = `あと${b - a}問`;

//
                  let base = q1[a].q;
                  let exponent = 2;
                  // 累乗を上付き文字で表示
                  question.innerHTML = base + "<span class='exponent'>" + exponent + "</span> ";
           
                }
      
              },500)
                  document.kotae.yanswer.value =  "";

                 }
                else{
                  
               
                  modal2.classList.remove('hidden');
  
                  let base = q1[a].q;
                  let exponent = 2;
                  
                  answer.innerHTML = 
`${base + "<span class='exponent'>" + exponent + "</span> "}= ${q1[a].c}`;

        //  answer.textContent = ` ${answer.innerHTML} = ${q1[a].c}`;

          okay.addEventListener('click',()=>{
            modal2.classList.add('hidden');
            choice1.removeEventListener('click',event);
            
            document.kotae.yanswer.value =  "";
  
            if(a<9){ a =0;b =10;timeRemaining = timeLimit;}
            else if(a>9 && a<19){ a =10;b =20;timeRemaining=timeLimit;}
            else if(a>19 && a<29){ a =20;b =30;timeRemaining=timeLimit;}
            else if(a>29 && a<45){ a =30;b =45;timeRemaining=timeLimit;}
            else{a =30;b =45;timeRemaining=timeLimit;}
            gamestart(); 

          })
          
              }   
            }
                else if(btn.value == "clear"){document.kotae.yanswer.value =  "";}
                else{document.kotae.yanswer.value +=  btn.value;
              let yanswer = document.getElementById("yanswer");
                 }
               }

         function endTimer() {
                endTime = performance.now();
                const elapsedTime = endTime - startTime;
                 function restartTimer() {
          stopTimer();
          restartTimer(duration);
          startTimer(duration);
        }   

        restartTimer();

                    let z = 0;
                    if(a === 10){z=1}
                    else if(a === 20){z=2}
                    else if(a === 30){z=3}
                    else{z=4}

                    let end = performance.now();

                    console.log("finish");
                    win.textContent = ` レベル  ${z} クリア！
                      「
                    ${(Math.round((elapsedTime)/1000))} 秒
                    」`
                    ;
                  modal.classList.remove('hidden');
                      
                    close.addEventListener('click',()=>{
                      location.reload();

                  })

              }



 function displayTimer() {
      const timerElement = document.getElementById("timer");
      const elapsedTime = endTime - startTime;
      timerElement.textContent = "経過時間: " + (elapsedTime / 1000) + "秒";
    }

      function displayQ(){
        Qnum.textContent = `あと${b - a}問`;
        question.textContent = q1[a].q;
        startTime = new Date();
      } 
function buttonClick5(){location.reload();}

let button = document.getElementById('reset');

 


