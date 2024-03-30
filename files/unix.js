function timeystampey(ut, format, h12){
  let sornoth, horas, minutos, segundos, t; // variáveis em branco
  
  var d = new Date(ut * 1000);
  var h = d.getHours();
  var m = "0" + d.getMinutes();
  var s = "0" + d.getSeconds();
  var dia = d.getDate();
  var mes = d.getMonth() + 1;
  var ano = d.getFullYear();
  if (format == 2){
  t = dia + '/' + mes + '/' + ano + ' às ' + h + ':' + m.substr(-2) + ':' + s.substr(-2); // basicamente printa as variáveis com quase nada de markdown
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
    else if(mes == 12){ mes = 'dezembro'; }
    
    if (h <= 1){ sornoth = '' }
    else if (s >= 2){ sornoth = 's' }
    
    if (m == 0) { minutos = '';}
    else if (m <= 1){ minutos = ', ' + m.substr(-2) + ' minuto'}
    else if (m >= 2){ minutos = ', ' + m.substr(-2) + ' minutos'}
    
    if (s == 0) { segundos = '';}
    else if (s <= 1){ segundos = ' e ' + s.substr(-2) + ' segundo'}
    else if (s >= 2){ segundos = ' e ' + s.substr(-2) + ' segundos'} // se for maior que um, bota um s na frente
    
    if ( h12 == true ){
      if (h >= 13) { h12 = h-12 }
      else { h12 = h }
      
      if (h == 0){ horas = 'à meia-noite' }
      
      if (h > 0 && h <= 11){ horas = 'às ' + h12 + ' hora' + sornoth + ' da manhã' }
      
    if (h == 12){ horas = 'ao meio-dia' }
    
    if (h >= 13 && h <= 18){ horas = 'às ' + h12 + ' horas da tarde' }
    
    if (h >= 19 && h <= 24){ horas = 'às ' + h12 + ' horas da noite' }
    } // se h12 for marcado como true, converter as horas pro padrão de 12 e deixar bunitinho
    
    t = dia + ' de ' + mes + ' de ' + ano + ' ' + horas + minutos + segundos + '.';
  }
  document.getElementById('lastupdated').innerHTML = t;
}
