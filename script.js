const userInput = document.getElementById("userInput");
const consol = document.getElementById("consol");
const userName =document.getElementById("userName");
const submitBtn =document.getElementById("submitBtn");
const nameBtn =document.getElementById("nameHolder");
const netxPage =document.getElementById("nextPage");

const nval = nameHolder.value;
const val = userInput.value;


function UserName(nval){



const StoredData = ["Rahul Hati","Debnath Hati","Suman Mondal","Riya Roy","Ram","Piu Hati","Piu Sar","Kartick Sar"];
if(StoredData.includes(nval)){
    console.log("Name Matched");
    userName.innerHTML=`${nval}`;
    nameHolder.style.border="2px solid green";

}else if(nval==0){
    nameHolder.style.border="2px solid red";

    return 0;
}

else{
    console.log("No Match Found!!!");
    userName.innerHTML="No Match Found!!!";
    nameHolder.style.border="2px solid red";
}

}


function checkPassword(val) {
    // Define the four different password combinations
    const passwordCombinations = [
        "Password123",
        "12345678",
        "mypassword",
        "qwerty",
        "piusar"
    ];
    let name ="";


    // Check if the input password matches any of the combinations
    if (passwordCombinations.includes(val)) {
        console.log("Access granted!");
        consol.innerHTML="Access granted!";
        consol.style.color="green";
        consol.style.fontWeight="300";
        consol.style.border="1px solid green";
        consol.style.borderRadius="10px";
        submitBtn.style.border="2px solid green";
        userInput.style.border="2px solid green";
        let aTag =document.createElement("a");
        aTag.href="userlogin/user.html"alt=
            "_blanck";
        aTag.innerHTML = "Click here";

        let parent = document.getElementById("para");
        parent.appendChild(aTag);
        return aTag;
       
    }
    
    else if(userInput.value==0){
        userInput.style.border="2px solid red"
      return 0;
   }else {
        console.log("Access denied! Incorrect password.");
        consol.innerHTML="Access denied!";
        consol.style.fontWeight="300";
        consol.style.borderRadius="10px";
        consol.style.color="red";
        submitBtn.style.border="2px solid red";
        userInput.style.border="2px solid red"

    }
  
}

// Example usage
// const userInput = prompt("Enter your password:"); // For browsers
// checkPassword(userInput);
