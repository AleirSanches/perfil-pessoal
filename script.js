function verificar(){
    var data= new Date
    var ano= data.getFullYear()
    var fano=window.document.getElementById('ida')
    var res=window.document.querySelector('div#res')
    
    if (Number(fano.value.length)<=0 || Number(fano.value>ano) ){
        alert('[Erro] verifique os dado e tente novamente')
    }
    else{
        
       // res.innerHTML=` A pessoa tem ${idade}`
        var fsex= window.document.getElementsByName('dadsex')
        var idade=ano-Number(fano.value)
        var genero =''
        var img=window.document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero =' Masculino'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            }
            else if(idade<21){
                //jovem
                img.setAttribute('src','foto-jovem-m.png')

            }
            else if(idade<50){                                                                                                                                                      
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            }
            else{
                img.setAttribute('src','foto-idoso-m.png')
                //idoso
            }

        }
        else if(fsex[1].checked){
            genero ='Feminino'

            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            }
            else if(idade<21){
                //jovem
                img.setAttribute('src','foto-jovem-f.png')

            }
            else if(idade<50){
                //adulto
                img.setAttribute('src','foto-adulto-f.png')
            }
            else{
                //idoso
                img.setAttribute('src','foto-idoso-f.png')
            }

        }

        
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
       
        
    }
