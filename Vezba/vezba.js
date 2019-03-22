const myName="Ivana Franciskovic";




const myNameReverse=myName.split("").reverse().join("");
const output=`${myName} / ${myNameReverse}`;
document.getElementById("myName").innerHTML = output;

function showList(){
let list='';
for (let i = 0; i < myNameReverse.length; i++) {
    list=list + `<li>${myNameReverse[i]} </li>`
  }
  document.getElementById("list").innerHTML = list;
}



//povrsina trougla
function proveri(a,b,c){
				
    if(isNaN(a) || isNaN(b) || isNaN(c)){
            window.alert("Niste uneli brojcane vrednosti!");
            return false;
    }
            
    if(a<=0 || b<=0|| c<=0){
            window.alert("Duzina stranice mora biti pozitivan broj!");
            return false;
    }
    
    if(a>b+c || b>a+c || c>a+b){
            window.alert("Za unete vrednosti ne vazi nejednakost trougla!");
            return false;
    }       
    return true; 

}

function izracunaj(){

    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var c=parseInt(document.getElementById("c").value);


    if (proveri(a,b,c)){

        var s=(a+b+c)/2;
        var povrsina=Math.sqrt(s*(s-a)*(s-b)*(s-c));

        document.getElementById("povrsina").value=povrsina;
        //console.log(povrsina);
       
    }
    else
        document.getElementById("povrsina").value="";
         console.log(povrsina);
}


function obim() {
    var a=parseInt(document.getElementById("a").value);
    var b=parseInt(document.getElementById("b").value);
    var c=parseInt(document.getElementById("c").value);


    if (proveri(a,b,c)){
       
        var obim=a+b+c;

        document.getElementById("aaa").innerHTML=obim;
        console.log(obim);
    } 
}

const telephones = [
        {"brand": "Apple", "type": "S8", "country": "USA", "price": 800, "battery": 2000 },
        {"brand": "Huawei", "type": "P20", "country": "CHI", "price": 750, "battery": 3500},
        {"brand": "Nokia", "type": "9", "country": "FIN", "price": 400, "battery": 2100},
        {"brand": "Siemens", "type": "P20", "country": "GER", "price": 150, "battery": 1000},
        {"brand": "Alcatel", "type": "1S", "country": "FRA", "price": 240, "battery": 1300},
        {"brand": "Samsung", "type": "Galaxy S10", "country": "KOR", "price": 780, "battery": 2800}
        ]

//lista telefona
listTelephones="";
for (let i = 0; i < telephones.length; i++) {
    listTelephones +=`<div class="card"><h4>Telephone  ${i + 1}: ${telephones[i].brand}</h4> 
    <p>Type: ${telephones[i].type}</p><p>Country: ${telephones[i].country}</p> <p>Price: ${telephones[i].price}</p><p>Battery: ${telephones[i].battery}</p> </div>`;
    //console.log(` Telephone  ${i + 1}: ${telephones[i].brand}, Type: ${telephones[i].type}, Country: ${telephones[i].country}, Price: ${telephones[i].price}, Battery: ${telephones[i].battery} `);  
}
document.getElementById("listTelephones").innerHTML = listTelephones;

//Average battery
 
function showAverageBattery() {
    let sumBattery=telephones.map(item => item.battery).reduce((prev, next) => prev + next);
    let average=sumBattery/telephones.length;  
    document.getElementById("average").innerHTML = `Prosecna jacina baterije je: ${average}`;
    console.log(average);
 }

//Najniza cena telefona
function theCheapestPhone() {
    let values  = telephones.map(function(v) {
        return v.price;
      });
      var min = Math.min.apply( null, values );
      console.log(min)
      output2 =`Najjeftiniji telefon kosta ${min} dinara.`
      document.getElementById('cheapest').innerHTML = output2;
    }

 
/*
    function addNewUser() {
        var name=document.getElementById('firstName').value;
        var surname = document.getElementById('lastName').value; 
        let newUser2 = `${name}  ${surname}`;
        if(name.length && surname.length>=2) {
        var ol = document.createElement('ol');
            document.getElementById('new').appendChild(ol);
                var li = document.createElement('li');
                ol.appendChild(li);
                li.innerHTML += newUser2;  
                console.log(newUser2); 
            }
            else alert('Morate uneti vise od 2 karaktera!');
    }
*/
    function addNewUser(){

        let list='';
        var name=document.getElementById('firstName').value;
        var surname = document.getElementById('lastName').value; 
        let newUser = `${name}  ${surname}`;
        if(name.length && surname.length>=2) {  
            list2=`<li>${newUser} </li>`
            }
          document.getElementById("new").innerHTML += list2;
          console.log(list2)
        }






/*function showTelephone() {
    return telephones.reduce(function(previous, entry) {
        return previous === undefined || entry.price < previous ? entry.price : previous;
    }, undefined);
}

showTelephone(); 

//document.getElementById("cheapest").innerHTML = 'najniza cena telefona je ';


function finder(cmp, arr, attr) {
    var val = arr[0][attr];
    for(var i=1;i<arr.length;i++) {
        val = cmp(val, arr[i][attr])
    }
    return val;
}


//console.log(finder(Math.min, telephones,  "price"));



*/


/*
function showCheapestTelephone() {

    var lowestNumber = telephones[0].price;

    telephones.forEach(function (keyValue, index, telephones) {
      if(index > 0) {
        if(keyValue.price < lowestNumber){
          lowestNumber = keyValue.price;
        }
      }
    });
    console.log('lowest number' , lowestNumber);
    document.getElementById("cheapest").innerHTML = 'najniza cena telefona je '+lowestNumber;
}
*/
 

/*function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString =str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"*/
    
//}

/*
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString(myName);
console.log("Ivana Franciskovic");
//console.log(reverseString(myName));
var reverseName=reverseString(myName);
console.log(reverseName);
document.getElementById("myName").innerHTML=reverseName;
let list='';
for (let i = 0; i < reverseName.length; i++) {
    list=list + `<li>${reverseName[i]} </li>`
  }
document.getElementById("list").innerHTML = list;
*/