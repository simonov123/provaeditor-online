function salva(){
    var content=document.getElementById("editor").value;
    const blob=new Blob([content],{type:'text/plain'});
    const url=window.URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=document.getElementById("nomf").value + ".txt";
    document.body.appendChild(a);
    a.click();
}
function fonts(){ window.addEventListener("load",function(){
    var fontsel=document.getElementById("font");
    var allFonts=["Arial",
    "Helvetica",
    "Times New Roman",
    "Times",
    "Courier New",
    "Courier",
    "Verdana",
    "Georgia"];
    var fontun=Array.from(new Set(allFonts));
    fontsel.innerHTML="";
    fontun.forEach(function(font){
        var option=document.createElement("option");
        option.text=font.trim();
        option.value=font.trim();
        fontsel.appendChild(option);
    });
});


}
function dims(){window.addEventListener("load",function(){
    var dimsel=document.getElementById("dims");
    var allDims=[5,6,8,10,12,14,16,18,20,22,24,26,28,30,35,40,45,50];
    var dimin=Array.from(new Set(allDims));
    dimsel.innerHTML="";
    dimin.forEach(function(dims){
        var option=document.createElement("option");
        option.text=dims;
        option.value=dims;
        dimsel.appendChild(option);
    });
});

}
function cols(){window.addEventListener("load",function(){
    var colsel=document.getElementById("cols");
    var allCols=["black","red", "blue", "green", "yellow", "orange", "purple","white"];
    var colin=Array.from(new Set(allCols));
    colsel.innerHTML="";
    colin.forEach(function(cols){
        var option=document.createElement("option");
        option.text=cols.trim();
        option.value=cols.trim();
        colsel.appendChild(option);
    })
})


}
function backcols(){window.addEventListener("load",function(){
    var bsel=document.getElementById("backcols");
    var allCols=["black","red", "blue", "green", "yellow", "orange", "purple","white"];
    var colin=Array.from(new Set(allCols));
    bsel.innerHTML="";
    colin.forEach(function(cols){
        var option=document.createElement("option");
        option.text=cols.trim();
        option.value=cols.trim();
        bsel.appendChild(option);

    })


})

}
document.addEventListener("DOMContentLoaded",fonts);
document.addEventListener("DOMContentLoaded",dims);
document.addEventListener("DOMContentLoaded",cols);
document.addEventListener("DOMContentLoaded",backcols);
document.addEventListener("DOMContentLoaded",function(){
    var fontsel=document.getElementById("font");
    var dimsel=document.getElementById("dims");
    var colsel=document.getElementById("cols");
    var bsel=document.getElementById("backcols");
fontsel.addEventListener("change",function(event){
        setFont();
});
dimsel.addEventListener("change",function(event){
    setDim();
});
colsel.addEventListener("change",function(event){
    setCol(); 
});
bsel.addEventListener("change",function(event){
    setb();
})
});

function setFont(){
    var selectf=document.getElementById("font");
    var selectfont=selectf.value;
    var editor=document.getElementById("editor");
    editor.style.fontFamily=selectfont;
}
function setDim(){
    var selectd=document.getElementById("dims");
    var dimension=selectd.value;
    var editor=document.getElementById("editor");
    editor.style.fontSize=dimension;
}
function setCol(){
    var selectc=document.getElementById("cols");
    var color=selectc.value;
    var editor=document.getElementById("editor");
    editor.style.color=color;
}
function setb(){
    var bsel=document.getElementById("backcols");
    var color=bsel.value;
    var editor=document.getElementById("editor");
    editor.style.backgroundColor=color;
}
function doitalic(){
    var editor=document.getElementById("editor");
    if(editor.classList.contains("italic")===false){
    editor.classList.add("italic");}
    else{
        editor.classList.remove("italic");
    }
}
function dobold(){
    var editor=document.getElementById("editor");
    if(editor.classList.contains("bold")===false){
    editor.classList.add("bold");}
    else{
        editor.classList.remove("bold");
    }

}
function dounder(){
    var editor=document.getElementById("editor");
    if(editor.classList.contains("under")===false){
    editor.classList.add("under");}
    else{
        editor.classList.remove("under");
    }

}
function share(){
        var content=document.getElementById("editor").value;
        var title=document.getElementById("nomf").value+".txt";
        const file=new File([content],title,{type:'text/plain'});
        var url=window.URL.createObjectURL(file);
        alert("SHARING:"+'\n'+"url:"+url+'\n'+"name:"+file.name+'\n'+"size:"+file.size);
        var addr=url;
        navigator.share({
            title:title,
            files:[file]});
    
}