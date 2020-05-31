// script
function Red2Green(e)
{
                    event = e || window.event;
                    var t = event.target || event.srcElement;
                    var color = t.style.backgroundColor;
                    if (t.style.backgroundColor == 'red') {
                        t.style.backgroundColor = 'green';
                        xcolor = color;
                    }
                    else t.style.backgroundColor = xcolor;
                }
Red2Green(document.getElementsByClassName("rect"))

function Red2Green2()
{
    var rectangle=document.getElementsByClassName("rect")
    if(rectangle.backgroundColor=="red")
    {
        rectangle.backgroundColor="green"
    }
}
Red2Green2()