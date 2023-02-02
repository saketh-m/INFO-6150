//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

//load page

var table = document.getElementById('myTable')

var main = table.getElementsByClassName('mainArea')

var dropdowns = table.getElementsByClassName('dropDownTextArea')

//add new row
function Add_Row(){  
  var row_len = table.rows.length;
  if(main.length!=0)
    var id = Number(main[main.length-1].getAttribute("id"))+1;
  else
    var id = 1
  table.insertRow(row_len).outerHTML=`<tr id="`+id+`" class="mainArea">
  <td><input type="checkbox" onclick="check(document.getElementById(`+id+`))"/><br /><br /><img onclick="dropdown(document.getElementById(`+id+`))" src="down.png" width="25px" /></td>
  <td>Student `+id+`</td>
  <td>Teacher `+id+`</td>
  <td>Approved</td>
  <td>Fall</td>
  <td>TA</td>
  <td>12345</td>
  <td>100%</td>
  <td style="display: none;"><button onclick="On_Delete(document.getElementById(`+id+`))">delete</button></td>
  <td style="display: none;"><button onclick="On_Edit()">edit</button></td>`
  table.insertRow(row_len+1).outerHTML=`<tr class="dropDownTextArea" style="display:none" ><td colspan="8">
  Advisor:<br /><br />
  Award Details<br />
  Summer 1-2014(TA)<br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:<br /><br /><br />
  Award Status:<br /><br /><br />
</td></tr>`
  //table.insertRow(row_len).setAttribute="id='"+(row_len-1)/2+"'"
  table.rows[row_len+1].style.display='none';
  alert("Added row Sucessfully!")
}

//dropdown toggle
function dropdown(number){
  let i = indexhelper(number)
  if(dropdowns[i].style.display=='none')
  {
    dropdowns[i].style.display=''
  }
  else
  {  
    dropdowns[i].style.display='none'
  }}

  
  //check 
  function check(number){
    let i = indexhelper(number)
    if(main[i].getAttribute("bgcolor")!="yellow")
    {
      main[i].setAttribute("bgcolor","yellow")
      main[i].cells[8].style.display='';
      main[i].cells[9].style.display='';
    }
    else
    {
      main[i].setAttribute("bgcolor","white")
      main[i].cells[8].style.display='none';
      main[i].cells[9].style.display='none';
    }
    EnableSubmit();
  }

  //enble submit 
  function EnableSubmit(){
  document.getElementById("header").cells[8].style.display='none';
  document.getElementById("header").cells[9].style.display='none';
  document.getElementById("button").style.backgroundColor="gray";
  document.getElementById("button").style.borderColor="gray";
  document.getElementById("button").disabled=true;
    for(let i=0;i<main.length;i++)
    {
  
      if (main[i].getAttribute('bgcolor')=="yellow")
      {
        document.getElementById("header").cells[8].style.display='';
        document.getElementById("header").cells[9].style.display='';
        document.getElementById("button").style.backgroundColor="orange";
        document.getElementById("button").style.borderColor="orange";
        document.getElementById("button").disabled=false;
        break;
      }
    }

  }

  //

  //submit
  function On_Submit(){
    alert("Submitted Scucessfully");
  }
  

  //edit
  function On_Edit(){
    prompt("Edit details:");
  }

  //delete
  function On_Delete(number){
    let i = indexhelper(number)
    main[i].remove();
    dropdowns[i].remove();
    EnableSubmit();
    alert("Row Deleted Sucessfully!")
  }

  //helper
  function indexhelper(number){
    var id = number.getAttribute("id")
    var i=0;
    for(let k=0;k<main.length;k++)
    {
      if(main[k].getAttribute("id")==id)
        i=k;
    }
    return i;
  }
