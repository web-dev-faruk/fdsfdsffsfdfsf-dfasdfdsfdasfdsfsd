
let arrayOne=[];
let numArray=[];
let arrayLoop=[7];

function moveCircle(){
    let input= parseInt(document.getElementById("input").value);
    let inputValue=input;  
    // delete
    // delete
    // delete
    // delete
    // delete fruits[0];

    arrayOne.push(inputValue);
    
    console.log(arrayOne); 
    while (arrayLoop[0]>1) {
        if (arrayOne[0]==1) { break; }
         
        if (arrayOne[0]%2==0) {
            let evenNum= arrayOne[0]/2;
            numArray.push(evenNum);

            arrayOne[0]=evenNum;

            if(evenNum==1){
                arrayLoop.push(evenNum);
            } 

        }else if(arrayOne[0]%2!=0){ 
            let odd= arrayOne[0]*3; 
            let oddNum= odd+1
            numArray.push(oddNum);

            arrayOne[0]=oddNum;
            
            if(oddNum==1){
                arrayLoop.push(oddNum); 
            } 
        } 

    }
    console.log(numArray);
    let arrayLength= numArray.length;
    for (let index = 0; index <= arrayLength; index++){
        // if (index>arrayLength) {
        //     break;
        // }
        // if (index<=arrayLength) {
            
        // console.log(index);
        // setTimeout(() => {
        //     document.getElementById(`outPut`).innerHTML=index;
        // }, 2000);
        // }
        function waitforme(ms)  {
            return new Promise( resolve => {
             setTimeout(()=> {resolve('')} ,ms );
            })
            }
            async function printy()  {
            for (let index= 0; index < arrayLength ; index++)    {
                await waitforme(100);
                document.getElementById(`circle`).style.transform=`translate(${index*5}px, -${numArray[index]/2}px)`;
                document.getElementById(`circle`).style.transition=`100ms`;
                console.log(numArray[index]);
            }
            }
            printy();
        
            document.getElementById(`demoArea`).innerHTML+=`${numArray[index]}`+"|";
        // setInterval(() => {
        //         console.log(index);
        //     },
        //     1000
        //   ); 
        //   setInterval(
        //     widget.Rotator.rotate.bind(widget.Rotator),
        //     1000
        //   );
    }
 
}
