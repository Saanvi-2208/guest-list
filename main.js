student=[];
function sumbit()
{
    var n1=document.getElementById("name1").value;
    student.push(n1);
    document.getElementById("name").innerHTML=student;
    document.getElementById("name1").value="";
}
function show()
{
    var i=student.join("<br>");
    document.getElementById("p1").innerHTML=i;
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    student.sort();
    var i=student.join("<br>");
    document.getElementById("sorted").innerHTML=i;
}
