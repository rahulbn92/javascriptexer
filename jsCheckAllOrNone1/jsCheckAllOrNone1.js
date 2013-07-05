// function for checking all and unchecking all checkboxes
function checkAllOrNone(checkTrueOrCheckFalse)       
{
  var myInputTagElements = document.getElementsByTagName("input");
  for(var i = 0 ; i < myInputTagElements.length ; i++)
  {
    if (myInputTagElements[i].type == "checkbox")
    {
      myInputTagElements[i].checked = checkTrueOrCheckFalse;
    }
    else
    {
      alert("sorry not a checkbox");
    }
   
  }
}
