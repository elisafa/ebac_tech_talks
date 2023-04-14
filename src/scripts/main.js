AOS.init();

const dataDoEvento = new Date('Apr 14, 2024 11:14:00')
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMS = 1000 * 60
    
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual
    const diasAteEvento = Math.floor(distanciaAteOEvento / (diaEmMs)) 
    const horasAteEvento = Math.floor((distanciaAteOEvento % (diaEmMs)) / (horaEmMs))
    const minutosAteOEvent = Math.floor((distanciaAteOEvento % (horaEmMs)) / (minutoEmMS))
    const segundoAteEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteOEvent}min ${segundoAteEvento}s`

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000) 