let
    closem=document.querySelector('.close-menu'),
    showm=document.querySelector('.show-menu'),
    boxo=document.querySelector('.menu'),
    info=document.querySelector('.info'),
    wind=document.querySelector('.window'),
    xwind=document.querySelector('.close-window');
    
    showm.addEventListener('click',show);
    closem.addEventListener('click',close);
    info.addEventListener('click',infowind);
    xwind.addEventListener('click',closewind);

function show(){
    boxo.style.left=('0');
};
function close(){
    boxo.style.left=('-100%');
};
function infowind(){
    wind.style.display=('block');
};
function closewind(){
    wind.style.display=('none');
};
function error(){
    alert("No hay, No existe.")
}