                   // ler final da lista //
// telas
var tela = 1
var largura= 200;
var altura= 50;

 // timer
var clock;
var time = 10000;

  //*(OBS: Deve pressionar no speaker para ativar o som)*  
 // som
var som,afala;

 // dev
var prog;

 // fundos
var fundo, fundoC, fundoS, fundoI, fundoB, Fcreditos, fundoErro;

 // npc's
var curupira, saci, iara, boto;

 // botoes do menu
var xmenu= 200;
var ymenu1= 135;
var ymenu2= 185;
var ymenu3 = 235;

 // botoes fase
var x1fase11=110, y1fase11=320;
var x1fase12=110, y1fase12=370;
var x1fase21=305, y1fase21=320;
var x1fase22=305, y1fase22=370;
var xnext=110, ynext=160;

function preload(){
  setImages();
  
  soundFormats('mp3','ogg')
  som = loadSound('somJungle.mp3',som)
  
}

function setup() {
  createCanvas(600, 450);
  menu();
  reset();
  togglePlaying();
  iniciar();
}

function draw() {
  background(20);
  
  menu();
  reset();
  info();
  iniciar();
  creditos();
  music();
  timer();
}

function menu(){
  // menu do jogo
  
   if(tela==1) {
    background(fundo);
    
    clock = 100
     
    noStroke()
    fill(100,100,100,80)
    rect(110,70,400,250,12)
    
    textAlign(CENTER);
    textSize(23);
    //image(player, 170, 300);
    
  //escolha Iniciar
  if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura){
    stroke(30);
    fill(10,250,10,140);
    rect(xmenu, ymenu1, largura, altura, 15);
    if(mouseIsPressed){
      tela= 2;
    }
  }  
  // Iniciar
    fill(10);
    noStroke();
    text("Iniciar", 300, 170);
  
  //escolha Infos do jogo
  if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura){
    stroke(30);
    fill(10,250,10,140)
    rect(xmenu, ymenu2, largura, altura, 15);
    if(mouseIsPressed){
      tela= 3;
    }
  }
  // infos
    fill(10);
    noStroke();
    text("Informações", 300, 220);
     
  //escolha creditos do jogo
     if(mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura){
    stroke(30);
    fill(10,250,10,140)
    rect(xmenu, ymenu3, largura, altura, 15);
    if(mouseIsPressed){
      tela= 4;
    }
  }
  // creditos
     fill(10);
     noStroke();
     text("Créditos", 300, 270)
  
  //nome do jogo
    fill(10);
    noStroke();
    textSize(26);
    text("Desvendando o folclore", 300, 115);
  
  }
}

function iniciar(){
  // O jogo em si
  
   // fase1 Saci
  if(tela==2){
    background(fundoS)
    
    // Quadrados de cima
    noStroke();
    fill(100,100,100,80)
    rect(100,100,400,200,15)
    
    // Quadrados de baixo
    rect(100,310,400,110,15)
    fill(50,50,50,120)
    rect(x1fase11,y1fase11,185,42,15)
    rect(x1fase12,y1fase12,185,42,15)
    rect(x1fase21,y1fase21,185,42,15)
    rect(x1fase22,y1fase22,185,42,15)
    
    // Texto da questão
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(18);
    text("“Sou um homem negro, baixinho, de uma perna",110,130)
    text("só, uso um gorro vermelho e pulo pela floresta.",110,152);
    text("Sou brincalhão, agitado e travesso!”",110,174)
    text("Quem sou eu?",110,196)
    
     // botao de escolha A)
      if(mouseX > x1fase11 && mouseX < x1fase11 + 185 && mouseY > y1fase11 && mouseY < y1fase11 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase11, y1fase11, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // B)
          if(mouseX > x1fase21 && mouseX < x1fase21 + 185 && mouseY > y1fase21 && mouseY < y1fase21 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase21, y1fase21, 185, 42, 15);
    if(mouseIsPressed){
      tela= 5;
    }
  } 
    // C)
              if(mouseX > x1fase12 && mouseX < x1fase12 + 185 && mouseY > y1fase12 && mouseY < y1fase12 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase12, y1fase12, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // D) 
              if(mouseX > x1fase22 && mouseX < x1fase22 + 185 && mouseY > y1fase22 && mouseY < y1fase22 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase22, y1fase22, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 

    // texto da resposta
    textSize(17)
    textAlign(CENTER);
    fill(0);
    noStroke();
    text("A) Diabo da Tasmânia",200,347)
    text("B) Saci Pererê",395,347)
    text("C) Papa-Léguas",200,397)
    text("D) Mula sem cabeça",398,396)
    
}
  
  // confirmar prox nivel
  if(tela==5){
    background(fundoS)
    
    // personagem
    noStroke();
    image(saci,245,290,80,155)
    
    // quadrados
    noStroke();
    fill(100,100,100,80)
    rect(100,150,400,80,15)
    fill(50,50,50,120)
    rect(xnext,ynext,380,60,15)
    
    if(mouseX > xnext && mouseX < xnext + 380 && mouseY > ynext && mouseY < ynext + 60){
    stroke(30);
    fill(10,250,10,140);
    rect(xnext, ynext, 380, 60, 15);
    if(mouseIsPressed){
      tela= 6;
    }
   }
    // texto continuar
    noStroke()
    fill(0);
    textSize(23);
    text("PRÓXIMA FASE",300,200)
    
  }
  
  // fase2 Curupira
  if(tela==6){
    background(fundoC)

    // Quadrados de cima
    noStroke();
    fill(100,100,100,80)
    rect(100,100,400,200,15)
    
    // Quadrados de baixo
    rect(100,310,400,110,15)
    fill(50,50,50,120)
    rect(x1fase11,y1fase11,185,42,15)
    rect(x1fase12,y1fase12,185,42,15)
    rect(x1fase21,y1fase21,185,42,15)
    rect(x1fase22,y1fase22,185,42,15)
    
    // Texto da questão
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(18);
    text("“Sou baixinho, de cabelos vermelhos, tenho os",110,130)
    text("pés virados para trás e protejo a floresta!”",110,152);
    text("Quem sou eu?",110,174)
    
     // botao de escolha A)
      if(mouseX > x1fase11 && mouseX < x1fase11 + 185 && mouseY > y1fase11 && mouseY < y1fase11 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase11, y1fase11, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // B)
          if(mouseX > x1fase21 && mouseX < x1fase21 + 185 && mouseY > y1fase21 && mouseY < y1fase21 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase21, y1fase21, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // C)
              if(mouseX > x1fase12 && mouseX < x1fase12 + 185 && mouseY > y1fase12 && mouseY < y1fase12 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase12, y1fase12, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // D) 
              if(mouseX > x1fase22 && mouseX < x1fase22 + 185 && mouseY > y1fase22 && mouseY < y1fase22 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase22, y1fase22, 185, 42, 15);
    if(mouseIsPressed){
      tela= 7;
    }
  } 
    // texto das respostas
    noStroke();
    textSize(17)
    textAlign(CENTER);
    fill(0)
    text("A) Pica-Pau",200,347)
    text("B) Onça Pintada",395,347)
    text("C) Guarda Florestal",200,397)
    text("D) Curupira",398,396)
    
}
  
  // confirmar prox nivel
  if(tela==7){
    background(fundoC)
    
     // personagem
    noStroke();
    image(curupira,250,290,85,160)
    
    // quadrados
    noStroke();
    fill(100,100,100,80)
    rect(100,150,400,80,15)
    fill(50,50,50,120)
    rect(xnext,ynext,380,60,15)
    
    if(mouseX > xnext && mouseX < xnext + 380 && mouseY > ynext && mouseY < ynext + 60){
    stroke(30);
    fill(10,250,10,140);
    rect(xnext, ynext, 380, 60, 15);
    if(mouseIsPressed){
      tela= 8;
    }
   }
     // texto continuar
    noStroke();
    fill(0);
    textSize(23);
    text("PRÓXIMA FASE",300,200)
    
  }
  
  // fase3 Iara
  if(tela==8){
    background(fundoI)
    
    // Quadrados de cima
    noStroke();
    fill(100,100,100,80)
    rect(100,100,400,200,15)
    
    // Quadrados de baixo
    rect(100,310,400,110,15)
    fill(50,50,50,120)
    rect(x1fase11,y1fase11,185,42,15)
    rect(x1fase12,y1fase12,185,42,15)
    rect(x1fase21,y1fase21,185,42,15)
    rect(x1fase22,y1fase22,185,42,15)
    
    // Texto da questão
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(18);
    text("“Sou uma linda sereia. Gosto de cantar e tomar",110,130)
    text("banho nos rios. Os homens não conseguem",110,152);
    text("resistir e pulam na água para me encontrar!”",110,174)
    text("Quem sou eu?",110,196)
    
     // botao de escolha A)
      if(mouseX > x1fase11 && mouseX < x1fase11 + 185 && mouseY > y1fase11 && mouseY < y1fase11 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase11, y1fase11, 185, 42, 15);
    if(mouseIsPressed){
      tela= 9;
    }
  } 
    // B)
          if(mouseX > x1fase21 && mouseX < x1fase21 + 185 && mouseY > y1fase21 && mouseY < y1fase21 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase21, y1fase21, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // C)
              if(mouseX > x1fase12 && mouseX < x1fase12 + 185 && mouseY > y1fase12 && mouseY < y1fase12 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase12, y1fase12, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // D) 
              if(mouseX > x1fase22 && mouseX < x1fase22 + 185 && mouseY > y1fase22 && mouseY < y1fase22 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase22, y1fase22, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // texto da resposta
    noStroke();
    textSize(17)
    textAlign(CENTER);
    fill(0)
    text("A) Iara",200,347)
    text("B) Ariel",395,347)
    text("C) Dourado",200,397)
    text("D) Náufraga",398,396)
    
}
  
  // confirmar prox nivel
  if(tela==9){
    background(fundoI)
    
     // personagem
    noStroke();
    image(iara,240,290,120,160)
    
    // quadrados
    noStroke();
    fill(100,100,100,80)
    rect(100,150,400,80,15)
    fill(50,50,50,120)
    rect(xnext,ynext,380,60,15)
    
    if(mouseX > xnext && mouseX < xnext + 380 && mouseY > ynext && mouseY < ynext + 60){
    stroke(30);
    fill(10,250,10,140);
    rect(xnext, ynext, 380, 60, 15);
    if(mouseIsPressed){
      tela= 10;
    }
   }
     // texto continuar
    noStroke();
    fill(0);
    textSize(23);
    text("PRÓXIMA FASE",300,200)
    
  }
  
  // fase4 Boto-Rosa
  if(tela==10){
    background(fundoB)
    
    // Quadrados de cima
    noStroke();
    fill(100,100,100,80)
    rect(100,100,400,200,15)
    
    // Quadrados de baixo
    rect(100,310,400,110,15)
    fill(50,50,50,120)
    rect(x1fase11,y1fase11,185,42,15)
    rect(x1fase12,y1fase12,185,42,15)
    rect(x1fase21,y1fase21,185,42,15)
    rect(x1fase22,y1fase22,185,42,15)
    
    // Texto da questão
    fill(0);
    noStroke();
    textAlign(LEFT);
    textSize(18);
    text("“Moro nos rios, mas nas noites de lua cheia",110,130)
    text("me transformo em um jovem belo e elegante.",110,152);
    text("Me visto de branco e uso um grande chapéu”",110,174)
    text("Quem sou eu?",110,196)
        
     // botao de escolha A)
      if(mouseX > x1fase11 && mouseX < x1fase11 + 185 && mouseY > y1fase11 && mouseY < y1fase11 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase11, y1fase11, 185, 42, 15);
    if(mouseIsPressed){
      tela= 11;
    }
  } 
    // B)
          if(mouseX > x1fase21 && mouseX < x1fase21 + 185 && mouseY > y1fase21 && mouseY < y1fase21 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase21, y1fase21, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // C)
              if(mouseX > x1fase12 && mouseX < x1fase12 + 185 && mouseY > y1fase12 && mouseY < y1fase12 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase12, y1fase12, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // D) 
              if(mouseX > x1fase22 && mouseX < x1fase22 + 185 && mouseY > y1fase22 && mouseY < y1fase22 + 42){
    stroke(30);
    fill(10,250,10,140);
    rect(x1fase22, y1fase22, 185, 42, 15);
    if(mouseIsPressed){
      tela= 13;
    }
  } 
    // texto da resposta
    noStroke();
    textSize(17)
    textAlign(CENTER);
    fill(0)
    text("A) Boto-Cor-De-Rosa",200,347)
    text("B) Nadador solteiro",395,347)
    text("C) Peixe-Boi",200,397)
    text("D) Lobisomem",398,396)
    
  }
  
  // tela de vencedor
  if(tela==11){
    background(fundoB)
    
     // personagem
    noStroke();
    image(boto,240,290,115,160)
    
    // quadrados
    noStroke();
    fill(100,100,100,80)
    rect(90,70,430,200,12)
     // texto continuar
    fill(0);
    textSize(23);
    text("PARABÉNS! Você conseguiu salvar os",300,100)
    text("personagens do folclore brasileiro",300,125)
    text("Pressione F5 para reiniciar",300,160)
 }
  
  if(tela==13){
    gameover();
  }
}

function info(){
  // Instruções do jogo
  
   if(tela==3) {
    background(fundo)
    noStroke()
    fill(100,100,100,80)
    rect(90,50,420,280,12)
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(26);
    text("Informações do jogo:", 300, 85);
    //textAlign(LEFT);
    textSize(20);
    text("Desvendando o Folclore é um jogo de cunho", 300, 125);
    text("educativo, para testar o conhecimento dos", 300, 150);
    text("alunos do 1º ano do ensino fundamental,", 300, 175);
    text("sobre o folclore brasileiro.", 300, 200);
    
    text("Jogue usando o botão esquerdo do mouse", 300, 240);
    text("para selecionar as respostas corretas.", 300, 265);
    text("Seja o mais rápido entre seus amigos", 300, 290);
    text("para marcar a maior pontuação.", 300, 315);
     
    //text("Para iniciar a musica, aperte no", 110, 305);
   }
}

function creditos(){
  // creditos do jogo
  
 if(tela==4){
  background(fundo);
  noStroke()
  fill(100,100,100,80)
  rect(90,50,430,350,12)
  textSize(20);
  fill(0);
  noStroke();
  text("Programador: Pedro George Soares de Sousa ",310,80);
  fill(0);
  stroke(100);
  rect(249, 99, 107,127);
  image(prog,250,100,105,125);
  
  noStroke();
  fill(0);
  text("Educador: Desconhecido",212,260);
  
  }
}

function gameover(){
  // Tela de fim de jogo/perdeu
  
    background(fundoErro);
  
    noStroke()
    fill(100,100,100,80)
    rect(93,105,415,75,15)
    
    fill(0)
    textAlign(LEFT);
    textSize(23);
    text("Ops, você errou, mas não desanime,",100,135)
    text("tente novamente quantas vezes quiser.",100,160)
    
    noStroke();
    fill(100,100,100,80)
    rect(100,190,400,80,15)
    
    fill(0)
    textAlign(CENTER);
    text("Aperte F5 para reiniciar ou",300,225)
    text("ESC para ir ao menu do jogo",300,250)
  
}
  
function setImages(){
  // todas as imagens
  
  prog = loadImage('programador.png')
  
  afala = loadImage('afala.png')
  
  fundo = loadImage('fundo.jpg')
  fundoC = loadImage('fundoCurupira.png')
  fundoS = loadImage('fundoSaci.jpg')
  fundoI = loadImage('fundoIara.png')
  fundoB = loadImage('fundoBoto.jpg')
  fundoErro = loadImage('fundoErro.JPG')
  //Fcreditos = loadImage('assets/back/.')
  
  curupira = loadImage('curupira.png')
  saci = loadImage('saci.png')
  iara = loadImage('iara.png')
  boto = loadImage('boto.png')
}

//function mouseClicked(){
  
//}

function music(){
  // Botão da musica  
  
   if(mouseX > 10 && mouseX < 10 + 20 && mouseY > 12 && mouseY < 12 + 20){
    stroke(10,250,10);
    fill(10,10,10,50);
    rect(10, 12, 20, 20, 2);
    if(mouseIsPressed){
      togglePlaying();
    }
  }
  
  image(afala,8,10,25,25)
  
  // instrução reset
    textAlign(CENTER);
    noStroke();
    textSize(12);
    fill(0);
    text("ESC para voltar ao menu", 525, 440);
  
}

function togglePlaying(){
  // para ficar tocando
  
  som.setVolume(0.3);
  
  if(!som.isPlaying()){
    som.play();
     }
  else {
    som.pause();
  }
}

function timer(){
  // temporizador do jogo
  
  if(tela==2 || tela==5 || tela==6|| tela==7|| tela==8 || tela==9 || tela==10){
  time--;
  clock = int(time/100);
  t = clock 
  noStroke()
  fill(0)
  textSize(15)
  text(clock,575,30);
  }
  if(tela==11){
  noStroke()
  fill(0)
  textSize(22)
  text("Pontuação: "+t,300,185)
  }
  if(clock<=0){
    background(fundoErro)
    
  noStroke()
  fill(0)
  textSize(20)
  text("Seu tempo acabou, mas não desanime",300,200)
  text("você pode tentar quantas vezes quiser.",300,225)
  text('"F5" para reiniciar o jogo',300,225)
    
  }
}

function reset(){
  // voltar para o menu
  
  if(keyIsDown(27)){
    tela = 1
  }
}

/*

Não inseri colisão e vetor neste jogo, mas fiz um para a prova 2 que não funcionava como educativo, mas sim para lazer.

Links do jogo: 
Nº3- https://editor.p5js.org/pedro.george.060/full/hyhwZGTWs
Nº4- https://editor.p5js.org/pedro.george.060/sketches/hyhwZGTWs

*/