// function for displaying child after checking parent checkbox
function clickParentDisplayChild(childNodeListId)
{
  var childNodeList  =document.getElementById(childNodeListId);
  var innerChild = childNodeList.getElementsByTagName('input') ;

    if(childNodeList.style.display  == 'block')
    {  
      childNodeList.style.display = 'none';
      for(var i = 0 ; i < innerChild.length ; i++)
      {
        innerChild[i].checked = false;
      }     
    }
    else
    {
      childNodeList.style.display = 'block';
      for(var i = 0 ; i < innerChild.length ; i++)
      {
        innerChild[i].checked = true;
      }
    }
  childNodeList.scrollIntoView(true);
}