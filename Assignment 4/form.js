//docum'=.addEventListener("submit", submitted);
//document.getElementById("mySubmit").addEventListener("click", submitted);

//populate function

    function populate(Options){
        document.getElementById("addfieldText").style.display='block';
            var mod = document.getElementById("Options").value;
            var extraCheckBox = document.getElementById("suboption");
            document.getElementById('suboption').style.display = "block";
            switch(mod){
                case 'Choice1': document.getElementById("addfieldText").innerHTML = "Extra Cheese";
                extraCheckBox.checked=false;
                addfield(extraCheckBox);
                break;
                case 'Choice2': document.getElementById("addfieldText").innerHTML = "Add Soda";
                extraCheckBox.checked=false;
                addfield(extraCheckBox);
                break;
                case 'Choice3': document.getElementById("addfieldText").innerHTML = "Peri Peri Seasoning";
                extraCheckBox.checked=false;
                addfield(extraCheckBox);
                break;
                case 'Choice4': document.getElementById("addfieldText").innerHTML = "Add Chocolate Chips";
                extraCheckBox.checked=false;
                addfield(extraCheckBox);
                break;
                case 'Choice5': document.getElementById("addfieldText").innerHTML = "Add a Cookie";
                extraCheckBox.checked=false;
                addfield(extraCheckBox);
                break;
                default: document.getElementById('suboption').style.display = "none";
                document.getElementById("addfieldText").innerHTML = "";
                extraCheckBox.checked=false;
                addfield(extraCheckBox);
                break;
            }
        }

    function addfield(Options) {
        console.log("oncheck");
        if (Options.checked){
            console.log("checked");
            ischecked = true;
            document.getElementById('extra').style.display = "block";
            document.getElementById('extras').style.display = "block";
        }else{
            ischecked = false;
            document.getElementById('extra').style.display = "none";
            document.getElementById('extras').style.display = "none";
        }
    }   
 

    //validation
	var form = document.getElementById("myForm");

        // initially we are setting to false 
        var validName = false;
        var validlastName = false;
        var validEmail = false;
        var validPhone = false;
        var validZip = false;
        var validCity = false;
        var validState = false;
        var validtitle = false;
        var validhear =  false;
        var vaildcomments = false;
        var validAdd1 = false;

        // regular expressions for name, email and phone
        var regExName = /^[a-zA-Z]+$/;
        var regExEmail = /([\w\.]+)@(northeastern\.edu)/;
        var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
        var regExZip = /^\d{5}$/;
        var regExAdd = /^[#.0-9a-zA-Z\s,-]+$/;

        //values
        var firstName = document.getElementById("firstName");
        firstName.addEventListener("input", validate)

        var emailId = document.getElementById("emailId");
        emailId.addEventListener("input", validate)

        var phoneNumber = document.getElementById("phoneNumber");
        phoneNumber.addEventListener("input", validate)

        var zipcode = document.getElementById("zipcode");
        zipcode.addEventListener("input", validate)

        var lastName = document.getElementById("lastName");
        lastName.addEventListener("input", validate)

        var city = document.getElementById("city");
        city.addEventListener("input", validate)

        var state = document.getElementById("state");
        state.addEventListener("input",validate)

        var streetAddress1 = document.getElementById("streetAddress1");
        streetAddress1.addEventListener("input",validate)

        // write a funcyion for validate
        function validate(e){
            var value = e.target.value;
            var type = this.id; // we are getting ID of the field
            var em = "error_" + type;

            switch(type){
                case "firstName":
                    if(!value.trim().match(regExName)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validName = false;
                        console.log("validname", validName)
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validName = true;
                        console.log("validname", validName)
                    }
                    break;
                case "emailId":
                    if(!value.trim().match(regExEmail)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validEmail = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validEmail = true;
                    }
                    break;
                case "phoneNumber":
                    if(!value.trim().match(regExPhone)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validPhone = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validPhone = true;
                    }
                    break;
                case "zipcode":
                    if(!value.trim().match(regExZip)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validZip = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validZip = true;
                    }
                    break;
                case "lastName":
                    if(!value.trim().match(regExName)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validlastName = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validlastName = true;
                    }
                    break;
                case "city":
                    if(!value.trim().match(regExName)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validCity = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validCity = true;
                    }
                    break;
                case "state":
                    if(!value.trim().match(regExName)){
                        document.getElementById(em).style.display = "block";
                        this.style.border = "2px solid red";
                        validState = false;
                    }
                    else{
                        document.getElementById(em).style.display = "none";
                        this.style.border = "";
                        validState = true;
                    }
                    break;
                case "streetAddress1":
                        if(!value.trim().match(regExAdd)){
                            document.getElementById(em).style.display = "block";
                            this.style.border = "2px solid red";
                            validAdd1 = false;
                        }
                        else{
                            document.getElementById(em).style.display = "none";
                            this.style.border = "";
                            validAdd1 = true;
                        }
                        break;
            }

        }

        function valid()
        {  
            if(document.getElementById("comments").value.length != 0)
            {
               vaildcomments=true;    
            }
            var titleArr = document.getElementsByName("title")
            var title = "NULL"
            for(i=0;i<titleArr.length;i++)
            {
                if(titleArr[i].checked)
                {
                    title=titleArr[i].getAttribute('value')
                    break;
                }
            }
            if(title!="NULL")
                validtitle=true
            
            var hearArr = document.getElementsByName("source")
            var hear = ""
            for(i=0;i<hearArr.length;i++)
            {
                if(hearArr[i].checked)
                {
                    hear=hear + hearArr[i].getAttribute('value') +","
                }
            }
            if(hear != "")
                validhear = true

            if(validName && validEmail && validPhone && validZip && validtitle && validhear && validlastName && validCity && validState && vaildcomments && validAdd1)
                return true
            else
                return false
        }

        // write a function submitted
        function submitted(){
           // e.preventDefault();
           // console.log("validname", validName)
            if(valid()){
            
               // event.preventDefault();
                //localStorage.setItem( title , document.getElementsById("Title").value)
                //localStorage.setItem( firstName , document.getElementById("firstName").value)
                var titleArr = document.getElementsByName("title")
                var title = "NULL"
                for(i=0;i<titleArr.length;i++)
                {
                    if(titleArr[i].checked)
                    {
                        title=titleArr[i].getAttribute('value')
                        break;
                    }
                }
                var firstName = document.getElementById("firstName").value
                var lastName = document.getElementById("lastName").value
                var phoneNumber = document.getElementById("phoneNumber").value
                var email = document.getElementById("emailId").value
                var city = document.getElementById("city").value
                var state = document.getElementById("state").value
                var zipCode = document.getElementById("zipcode").value
                var hearArr = document.getElementsByName("source")
                var hear = ""
                for(i=0;i<hearArr.length;i++)
                {
                    if(hearArr[i].checked)
                    {
                        hear=hear + hearArr[i].getAttribute('value') +","
                    }
                }
                hear = hear.substring(0,hear.length-1)              
                var comments = document.getElementById("comments").value
                var add1 = document.getElementById("streetAddress1").value
                var add2 = document.getElementById("streetAddress2").value == "" ? "" : document.getElementById("streetAddress2").value
                
                var Choice = document.getElementById("Options").value 
                var AddExtra = document.getElementById("suboption").checked ? document.getElementById("addfieldText").innerHTML : "NO"
                var extraComments = document.getElementById("extras").value 

                var table = document.getElementById("myTable");
                
                table.rows[0].style.display=''
                var addrow = table.insertRow(-1);
                addrow.outerHTML = `<tr>
                <td>`+title+`</td>
                <td>`+firstName+`</td>
                <td>`+lastName+`</td>
                <td>`+email+`</td>
                <td>`+phoneNumber+`</td>
                <td>`+add1+`</td>
                <td>`+add2+`</td>
                <td>`+city+`</td>
                <td>`+state+`</td>
                <td>`+zipCode+`</td>
                <td>`+hear+`</td>
                <td>`+comments+`</td>
                <td style="display:none">`+Choice+`</td>
                <td style="display:none">`+AddExtra+`</td>
                <td style="display:none">`+extraComments+`</td>
            </tr>`

                if(Choice!='Choice')
                {
                    table.rows[0].cells[12].style.display=''
                    table.rows[0].cells[13].style.display=''
                    table.rows[0].cells[14].style.display=''
                    table.rows[table.rows.length-1].cells[12].style.display=''
                    table.rows[table.rows.length-1].cells[13].style.display=''
                    table.rows[table.rows.length-1].cells[14].style.display=''                       
                }
                validName = false;
                validlastName = false;
                validEmail = false;
                validPhone = false;
                validZip = false;
                validCity = false;
                validState = false;
                validtitle = false;
                validhear =  false;
                vaildcomments = false;
                validAdd1 = false;
                alert("Data entered succesfull");
                document.getElementById("Reset").click();
                form.reset();

               
                document.getElementById("suboption").style.display='none';
                document.getElementById("addfieldText").style.display='none';
                document.getElementById("extra").style.display='none';
                document.getElementById("extras").style.display='none';


            }
            else{
                alert("Please check the errors and fill all * marked feilds")
            }
        }
