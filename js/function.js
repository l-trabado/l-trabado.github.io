
/*
<script language="javascript"> 
function toggle(elementId) {
    var ele = document.getElementById(elementId);
    if(ele.style.display == "block") {
            ele.style.display = "none";
    }
    else {
        ele.style.display = "block";
    }
} 
</script>
*/

function ocultarSeccion(elementId) {
    var ele = document.getElementById(elementId);
    if(ele.style.display == "none") {
            ele.style.display = "block";
    }
    else {
        ele.style.display = "none";
    }
}
