function putValue(n){
    n.toString();
    document.getElementById('calc').value += n;
    return exp;
}
function result(){
    var res = document.getElementById('calc').value;
    document.getElementById('calc').value = eval(res);
}