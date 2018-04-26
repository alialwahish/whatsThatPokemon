$(document).ready(function(){
    



    for(var i=1;i<151;i++){
    $('#dispPok').append('<img alt='+i+' src="https://pokeapi.co/media/img/'+i+'.png" />');
    }
    $('img').on("click",function(){
        $("#pokDetl").children().hide();
        var ni=$(this).attr("alt")
        $.get("https://pokeapi.co/api/v2/pokemon/"+ni+"/",function(res){
        // console.log(res);
        $('#pokDetl').append("<h1>"+res.name+"</h1>");
        $('#pokDetl').append('<img  src="https://pokeapi.co/media/img/'+ni+'.png" />');
        var html_str ="";
        html_str +="<h2>Types</h2><ul>";
        for(var j=0;j<res.types.length;j++){
            
            html_str+="<li>"+res.types[j].type.name;+"</li>";
        }
        html_str+="</ul>";
       
        html_str+="<h2>Height</h2><p>"+res.height+"</p>"+"<h2>Weight</h2>"+"<p>"+res.weight+"</p>";
        $('#pokDetl').append(html_str);
        
    },'json');
    })
});