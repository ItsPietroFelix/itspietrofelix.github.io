// GUIA BEM MERDA DE COMO USAR ESSA JOÇA:
// o primeiro argumento é o unix timestamp, cinco segundos de google tu acha um gerador
// o segundo é o formato: 1 é o mais bonitinho com todos os frufrus, o 2 é o mais simples, te mostrando o que você quer.
// (caso o formato seja diferente ou nulo, ele vai ir pro dois direto)
// o terceiro é o formato das horas, true deixa no formato 12 horas, false ou em branco deixa em 24 horas
// aproveite essa porra ai jão - [ipf]

function timeystampey(ut, format, h12c){
  let sornoth, horas, minutos, segundos, t, h12; // variáveis em branco
  
  var d = new Date(ut * 1000); // converte o timestamp
  var h = d.getHours(); // pega as horas
  var m = "0" + d.getMinutes(); // pega os minutos
  var s = "0" + d.getSeconds(); // pega os segundos
  var dia = d.getDate(); // pega a data
  var mes = d.getMonth() + 1; // pega o mês e adiciona um pq essa porra começa no zero n me pergunte o porquê, eu tbm não sei
  var ano = d.getFullYear(); // pega o ano
  
  if (format == 2){
    if ( h12c == true ){
      horas = h + 'h';
      minutos = m + 'm';
      segundos = s + 's'; // deixa com os sinais de horas, minutos e segundos
    }
    else {
      horas = h + ':';
      minutos = m + ':';
      segundos = s; // deixa um sinal de dois pontos bem simples
    }
    
    t = dia + '/' + mes + '/' + ano + ' às ' + horas + minutos + segundos; // basicamente printa as variáveis com quase nada de markdown
  }
  else if (format == 1){
  	if(mes == 1){ mes = 'janeiro'; }
    else if(mes == 2){ mes = 'fevereiro'; }
    else if(mes == 3){ mes = 'março'; }
    else if(mes == 4){ mes = 'abril'; }
    else if(mes == 5){ mes = 'maio'; }
    else if(mes == 6){ mes = 'junho'; }
    else if(mes == 7){ mes = 'julho'; }
    else if(mes == 8){ mes = 'agosto'; }
    else if(mes == 9){ mes = 'setembro'; }
    else if(mes == 10){ mes = 'outubro'; }
    else if(mes == 11){ mes = 'novembro'; }
    else if(mes == 12){ mes = 'dezembro'; } // converte os meses pra o formato em extenso
    
    if (h <= 1){ sornoth = '' }
    else if (s >= 2){ sornoth = 's' }
    
    if (m == 0) { minutos = '';}
    else if (m <= 1){ minutos = ', ' + m.substr(-2) + ' minuto'}
    else if (m >= 2){ minutos = ', ' + m.substr(-2) + ' minutos'}
    
    if (s == 0) { segundos = '';}
    else if (s <= 1){ segundos = ' e ' + s.substr(-2) + ' segundo'}
    else if (s >= 2){ segundos = ' e ' + s.substr(-2) + ' segundos'} // se for maior que um, bota um s na frente, se for nulo, ignore
    
    if ( h12c == true ){
      if (h >= 13) { h12 = h-12 }
      else { h12 = h } // se h12 for true, as horas vão ficar no formato de 12 horas (duh)
      
      if (h == 0){ horas = 'à meia-noite' }
      
      if (h > 0 && h <= 11){ horas = 'às ' + h12 + ' hora' + sornoth + ' da manhã' }
      
      if (h == 12){ horas = 'ao meio-dia' }

      if (h >= 13 && h <= 18){ horas = 'às ' + h12 + ' horas da tarde' }

      if (h >= 19 && h <= 24){ horas = 'às ' + h12 + ' horas da noite' }
    // arrumar os bagui pro formato 12 horas, categorizando se é de manhã, tarde, noite, meio-dia ou meia-noite.
    }
    else {
    	horas = 'às ' + h + ' horas' // se o padrão de 12 horas for falso ele deixa simples
    }
    
    t = dia + ' de ' + mes + ' de ' + ano + ' ' + horas + minutos + segundos + '.';
  }
    else{
      format = 2
    }
  document.getElementById('lastupdated').innerHTML = t; // vc n precisa usar isso aqui, mas eu deixei pra os meus próprios códigos
}

// NOTA PRA MIM MESMO: deve ter um jeito de reduzir esses else if da vida, mas eu to com mta preguiça de ir atrás
