let accounts = [];

function saveAccount(){

    let name = document.getElementById("name").value;
    let balance = Number(document.getElementById("balance").value);
    let editIndex = document.getElementById("editIndex").value;

    if(name==="" || balance<0){
        alert("Please Enter Valid Details");
        return;
    }

    if(editIndex===""){

        let account = {
            accNo: Math.floor(100000 + Math.random()*900000),
            name:name,
            balance:balance
        };

        accounts.push(account);

        alert("Account Opened Successfully");

    }else{

        accounts[editIndex].name = name;
        accounts[editIndex].balance = balance;

        document.getElementById("editIndex").value="";
        alert("Account Updated Successfully");
    }

    document.getElementById("name").value="";
    document.getElementById("balance").value="";

    displayAccounts();
}

function displayAccounts(){

    let data="";

    accounts.forEach((acc,index)=>{

        data += `
        <tr>
            <td>${acc.accNo}</td>
            <td>${acc.name}</td>
            <td>₹${acc.balance}</td>
            <td>

                <button class="btn btn-warning btn-sm"
                onclick="editAccount(${index})">
                Edit
                </button>

                <button class="btn btn-danger btn-sm"
                onclick="deleteAccount(${index})">
                Delete
                </button>

            </td>
        </tr>`;
    });

    document.getElementById("tableBody").innerHTML=data;
}

function editAccount(index){

    document.getElementById("name").value=
    accounts[index].name;

    document.getElementById("balance").value=
    accounts[index].balance;

    document.getElementById("editIndex").value=index;
}

function deleteAccount(index){

    if(confirm("Delete this account?")){
        accounts.splice(index,1);
        displayAccounts();
    }
}

function deposit(){

    let accNo = Number(document.getElementById("accNo").value);
    let amount = Number(document.getElementById("amount").value);

    let account = accounts.find(acc=>acc.accNo===accNo);

    if(account){
        account.balance += amount;
        alert("Amount Deposited Successfully");
        displayAccounts();
    }else{
        alert("Account Not Found");
    }
}

function withdraw(){

    let accNo = Number(document.getElementById("accNo").value);
    let amount = Number(document.getElementById("amount").value);

    let account = accounts.find(acc=>acc.accNo===accNo);

    if(account){

        if(account.balance >= amount){

            account.balance -= amount;
            alert("Withdrawal Successful");

            displayAccounts();

        }else{
            alert("Insufficient Balance");
        }

    }else{
        alert("Account Not Found");
    }
}

function searchAccount(){

    let search = Number(document.getElementById("searchAcc").value);

    let account = accounts.find(acc=>acc.accNo===search);

    if(account){

        document.getElementById("searchResult").innerHTML=
        `Name : ${account.name}<br>
         Balance : ₹${account.balance}`;

    }else{

        document.getElementById("searchResult").innerHTML=
        "Account Not Found";

    }
}
