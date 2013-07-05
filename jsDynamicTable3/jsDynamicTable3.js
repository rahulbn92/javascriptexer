// function for adding new rows and columns dynamically
function addTableRow() 
{
  var myTable = document.getElementById('table');
  var lastRow = myTable.rows.length;
  var uniqueId = new Date().getTime();
  var newRowId= "newrow" + uniqueId;
// creating new row at end of the table  
  var newRow = myTable.insertRow(lastRow);
  newRow.setAttribute("id" , newRowId);
// creating new column1    
  var newCell0 = newRow.insertCell(0);
  var uniqueId0 = uniqueId + "0";
  newCell0.setAttribute("id" , uniqueId0);
  newCell0.innerHTML = "<input id ='uniqueId0' />";
// creating new column2  
  var newCell1 = newRow.insertCell(1);
  var uniqueId1 = uniqueId + "1";
  newCell1.setAttribute("id" , uniqueId1);
  newCell1.innerHTML = "<input id ='uniqueId1' />";
// creating new column3
  var newCell2 = newRow.insertCell(2);
  var uniqueId2 = uniqueId + "2";
  newCell2.setAttribute("id" , uniqueId2);
  newCell2.innerHTML = "<input type='button'  id ='uniqueId2' value ='save' onclick = 'save(\"" + newRowId + "\")'/>";
}
// function for saving the new row data
function save(newRowId)
{ 
  var newRow = document.getElementById(newRowId);
  newRow.cells[0].innerHTML = "<p>" + document.getElementById('uniqueId0').value + "</p>";
  newRow.cells[1].innerHTML = "<p>" + document.getElementById('uniqueId1').value + "</p>";
  newRow.cells[2].innerHTML = "<a id = 'uniqueId2' value = 'edit' onclick = 'editRow(\"" + newRowId+ "\")'>edit /</a><a id = 'button'  onclick = 'deleteRow(\"" + newRowId+ "\")'>  delete</a>";
}
// function for deleting the new row
function deleteRow(newRowId)
{ 
  document.getElementsByTagName('tbody')[0].removeChild(document.getElementById(newRowId));
}
// function for editing the new row data
function editRow(newRowId)
{
  var newRow = document.getElementById(newRowId);
  newRow.cells[0].innerHTML = "<input  id = 'uniqueId0' value = '" + newRow.cells[0].textContent + " '/>";
  newRow.cells[1].innerHTML = "<input  id = 'uniqueId1'  value = '" + newRow.cells[1].textContent + " '/>";
  newRow.cells[2].innerHTML = "<input  id = 'uniqueId2' type = 'button'  value = 'save' onclick = 'save(\"" + newRowId + "\")'/>";
}