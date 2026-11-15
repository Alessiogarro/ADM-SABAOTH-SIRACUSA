// Per ogni dipartimento inserisci nome e email del responsabile.
// Chiavi Web3Forms: una per ogni email di responsabile (si crea su web3forms.com inserendo quella email).
var KEYS={"garalessio@gmail.com":"","Visfit@yahoo.it":"","lucaorofino@hotmail.it":"","lidia.bizzini@gmail.com":"","ivana.cavaliere03@gmail.com":"","valentinapatania12@gmail.com":"","samuelferrara05@gmail.com":""};
var DEPS=[
  {n:"Sociale",r:"Alessio Garro",e:"garalessio@gmail.com",w:"393207436379"},
  {n:"Accoglienza",r:"Lidia",e:"lidia.bizzini@gmail.com",w:"393496363338"},
  {n:"Media Production",r:"Alessio Garro",e:"garalessio@gmail.com",w:"393207436379"},
  {n:"Worship",r:"Luca Orofino e Anna Russo",e:"lucaorofino@hotmail.it",w:"393920613832"},
  {n:"Kids",r:"Valentina Patania",e:"valentinapatania12@gmail.com",w:"393481711007"},
  {n:"Giovani e Adolescenti",r:"Ester, Alessandro e Carlotta",e:"",w:"393518754346"},
  {n:"Preadolescenti",r:"Samuel, Aurora, Timoteo e Jennifer",e:"samuelferrara05@gmail.com",w:"393893120812"},
  {n:"Proiezione",r:"Manuela Bellassai",e:""},
  {n:"Mixer",r:"Luca Orofino",e:"lucaorofino@hotmail.it",w:"393920613832"},
  {n:"Generazione di Mezzo",r:"Valentina e Daniele",e:"valentinapatania12@gmail.com",w:"393481711007"},
  {n:"Migliore Età",r:"Maria, Salvo, Lucia e Pino",e:"",w:"393496829028"},
  {n:"Donne",r:"Anna Sannino e Roberta Caschetto",e:""},
  {n:"Uomini",r:"Nome del responsabile",e:""},
  {n:"Eventi",r:"Lidia",e:"lidia.bizzini@gmail.com",w:"393496363338"},
  {n:"Fede nell’arte",r:"Ivana Cavaliere",e:"ivana.cavaliere03@gmail.com",w:"393929605378"}
];
var DESC={"Sociale": {"t": "L’amore che diventa azione", "x": "Un dipartimento dedicato ad aiutare chi attraversa momenti di difficoltà. Attraverso raccolte alimentari, sostegno alle famiglie e iniziative solidali, portiamo un aiuto concreto a chi ne ha bisogno. Perché servire il prossimo significa anche testimoniare l’amore di Gesù."}, "Accoglienza": {"t": "Un sorriso può fare la differenza", "x": "Il primo sorriso, il primo saluto, il primo gesto di attenzione. Questo dipartimento ha il compito di far sentire ogni persona amata, accolta e parte di una famiglia. Perché nessuno dovrebbe entrare in chiesa sentendosi un estraneo."}, "Media Production": {"t": "Raccontare ciò che Dio sta facendo", "x": "Attraverso video, fotografia e contenuti multimediali, raccontiamo le testimonianze, le attività e ciò che Dio compie nella nostra comunità. Un modo creativo per raggiungere persone anche al di fuori delle mura della chiesa e portare il messaggio di Cristo ovunque."}, "Worship": {"t": "Adorare Dio con tutto il cuore", "x": "La musica è uno strumento per elevare il nome di Gesù e accompagnare la chiesa nell’adorazione. Attraverso il canto e gli strumenti musicali, creiamo uno spazio in cui ogni persona possa incontrare Dio. Non si tratta soltanto di cantare, ma di adorare con il cuore."}, "Kids": {"t": "Seminare oggi per il futuro di domani", "x": "Un dipartimento dedicato ai più piccoli, per accompagnarli nella scoperta dell’amore di Gesù attraverso storie bibliche, giochi e attività. Investire nei bambini significa seminare nel loro cuore valori e insegnamenti che potranno accompagnarli per tutta la vita."}, "Giovani e Adolescenti": {"t": "Una generazione che fa la differenza", "x": "Uno spazio per crescere nella fede, costruire amicizie autentiche e scoprire il proprio rapporto con Dio. Vogliamo accompagnare giovani e adolescenti in un cammino che li aiuti a vivere la propria fede con coraggio, diventando una generazione che porta la luce di Cristo nel mondo."}, "Preadolescenti": {"t": "Crescere con radici profonde", "x": "Un dipartimento pensato per i ragazzi nel passaggio tra l’infanzia e l’adolescenza. Attraverso momenti di gruppo, giochi e insegnamenti biblici, li aiutiamo a conoscere Gesù, costruire amicizie sane e porre basi solide per la loro fede. Perché gli anni di mezzo sono preziosi e meritano un cammino su misura."}, "Proiezione": {"t": "Rendere la Parola visibile a tutti", "x": "Attraverso la gestione delle presentazioni, dei versetti biblici e dei testi dei canti, aiutiamo tutta la comunità a seguire e vivere al meglio ogni momento del culto. Un servizio spesso dietro le quinte, ma fondamentale per permettere a tutti di partecipare."}, "Mixer": {"t": "Dare voce a ogni messaggio", "x": "Attraverso la gestione dell’audio, ci assicuriamo che ogni parola, preghiera, canto e strumento possa essere ascoltato chiaramente. Un servizio di precisione, attenzione e responsabilità che contribuisce a rendere ogni incontro un’esperienza di qualità."}, "Migliore Età": {"t": "Un tesoro di esperienza e fede", "x": "Un dipartimento dedicato alle persone della terza età, per vivere momenti di comunione, amicizia, condivisione e crescita spirituale. Ogni stagione della vita ha un valore speciale e ogni esperienza può diventare una benedizione per gli altri. Perché non si smette mai di crescere, servire e testimoniare l’amore di Dio."}, "Donne": {"t": "Donne di fede, forti insieme", "x": "Uno spazio dedicato alle donne della chiesa per crescere nella fede, condividere esperienze e sostenersi a vicenda attraverso incontri, preghiera e momenti di comunione. Perché ogni donna ha un valore unico agli occhi di Dio."}, "Uomini": {"t": "Uomini che costruiscono sulla Roccia", "x": "Un dipartimento per gli uomini della chiesa, per crescere nella fede, nella responsabilità e nell’amicizia. Attraverso incontri, confronto e preghiera, vogliamo essere uomini che amano Dio e guidano con l’esempio le proprie famiglie e la comunità."}, "Eventi": {"t": "Momenti che ci uniscono", "x": "Un dipartimento che organizza e cura gli eventi della chiesa, dalle conferenze alle giornate speciali. Perché ogni incontro diventi un’occasione per stare insieme, crescere nella fede e invitare chi non ci conosce ancora."}, "Fede nell’arte": {"t": "Creatività al servizio di Dio", "x": "Uno spazio dove i talenti artistici diventano un dono per la comunità. Attraverso espressione creativa, allestimenti e linguaggi artistici, comunichiamo la bellezza e l’amore di Dio."}, "Generazione di Mezzo": {"t": "Camminare insieme nella pienezza della vita", "x": "Un dipartimento per chi vive la stagione di mezzo della vita, tra famiglia, lavoro e responsabilità. Attraverso incontri, condivisione e preghiera, ci sosteniamo a vicenda per crescere nella fede e vivere ogni giorno con equilibrio e speranza."}};
// Eventi di dicembre: sostituisci i segnaposto con date e titoli reali.
var EVENTS=[{d:"Sabato 21 novembre",t:"Escursione del gruppo Over 50",w:"Una giornata da trascorrere insieme, all’insegna della condivisione, delle chiacchiere tra amici, della fratellanza e dell’amicizia!<br><b>Partenza:</b> ore 8:30 dalla chiesa ADM Sabaoth Church Siracusa<br><b>Pranzo:</b> presso Agriturismo Bellaera, Modica<br><b>Rientro:</b> previsto per le ore 17:00<br>Organizzato dal gruppo Over 50."},{d:"Martedì 8 dicembre",t:"Big Life con il Past. Giuseppe Punto",w:"Un appuntamento speciale con i Life Group, ospite il Past. Giuseppe Punto."},
 {d:"Sabato 12 dicembre",t:"Serata di Natale",w:"Una serata speciale da vivere insieme, condividendo la gioia del Natale e il piacere di stare in famiglia come comunità.<br><b>Inizio:</b> ore 19:00"},{d:"Giovedì 31 dicembre",t:"Capodanno insieme",w:"Concludiamo il 2026 e accogliamo il nuovo anno insieme come chiesa!<br><b>Ore 20:00:</b> cena insieme alla chiesa.<br><b>Ore 22:00:</b> lode, adorazione e preghiera.<br>Un momento speciale per ringraziare Dio per l’anno trascorso e affidare a Lui il nuovo anno 2027, iniziandolo insieme nella Sua presenza."}];
var SHOP=[{n:"Magliette",x:"Le magliette della chiesa."},{n:"Bibbie",x:"Bibbie per leggere e studiare."},{n:"Libri",x:"Libri per crescere nel cammino."}];
document.getElementById("events").innerHTML=EVENTS.map(function(e){return '<li><span class="day">'+e.d+'</span><span class="what">'+e.t+'</span><span class="when">'+e.w+'</span></li>';}).join("");
document.getElementById("shop").innerHTML=SHOP.map(function(s){return '<article class="dep"><h3>'+s.n+'</h3><p class="desc">'+s.x+'</p><p class="lead-name">Prezzo: <b>da inserire</b></p></article>';}).join("");
var LIFE=[{z:'Pizzuta',g:[['Gruppo 1','Pastor Vinicius e Pastor Antonella'],['Gruppo 2','Augusto e Lidia']]},{z:'Villaggio Miano',g:[['Gruppo 1','Valentina e Daniele'],['Gruppo 2','Giusy Calì']]},{z:'Viale Tica',g:[['Gruppo 1','Salvo e Maria']]},{z:'Mazzarrona',g:[['Gruppo 1','Roberta Bellassai']]},{z:'Parco Robinson, quartiere Tiche',g:[['Gruppo 1','Luca Orofino e Anna']]},{z:'Città Giardino Belvedere',g:[['Gruppo 1','Alessio e Giuliana']]}];
// Email dei responsabili, es. LEM['Pizzuta Gruppo 1']='nome@email.it'
var LEM={'Città Giardino Belvedere Gruppo 1':'garalessio@gmail.com','Pizzuta Gruppo 1':'Visfit@yahoo.it','Parco Robinson, quartiere Tiche Gruppo 1':'lucaorofino@hotmail.it','Villaggio Miano Gruppo 1':'valentinapatania12@gmail.com'};var LWA={'Città Giardino Belvedere Gruppo 1':'393207436379','Pizzuta Gruppo 1':'393476870698','Parco Robinson, quartiere Tiche Gruppo 1':'393920613832','Villaggio Miano Gruppo 1':'393481711007','Viale Tica Gruppo 1':'393496829028'};var LG=[];
document.getElementById('life').innerHTML=LIFE.map(function(z){return '<article class="dep"><h3>'+z.z+'</h3>'+z.g.map(function(g){var id=LG.length,n=z.z+' '+g[0];LG.push({n:n,z:z.z+' ('+g[1]+')'});return '<div class="grp"><p class="lead-name">Responsabili: <b>'+g[1]+'</b></p><details><summary>Voglio iscrivermi</summary><div class="f"><div><label for="ln'+id+'">Nome e cognome</label><input id="ln'+id+'" autocomplete="name"></div><div><label for="lt'+id+'">Email</label><input id="lt'+id+'" type="email" autocomplete="email"></div><div><label for="lp'+id+'">Cellulare</label><input id="lp'+id+'" type="tel" autocomplete="tel"></div><div><label for="lm'+id+'">Messaggio</label><textarea id="lm'+id+'">Ciao, vorrei iscrivermi al Life Group di '+z.z+' (responsabili: '+g[1]+').</textarea></div><button type="button" data-l="'+id+'" data-k="w">Invia su WhatsApp</button><button type="button" class="alt" data-l="'+id+'" data-k="e">Invia via email</button><p class="msg" id="ls'+id+'" role="status"></p></div></details></div>';}).join('')+'</article>';}).join('');
document.getElementById('life').addEventListener('click',function(ev){
  var b=ev.target.closest('button[data-l]');if(!b)return;
  var i=b.getAttribute('data-l'),k=b.getAttribute('data-k'),n=LG[i].n,s=document.getElementById('ls'+i);
  var nome=document.getElementById('ln'+i).value.trim(),rec=document.getElementById('lt'+i).value.trim(),tel=document.getElementById('lp'+i).value.trim(),msg=document.getElementById('lm'+i).value.trim();
  if(!nome||!rec||!tel){s.textContent='Inserisci nome e cognome, email e cellulare, così i responsabili possono risponderti.';return;}
  if(!(k=='w'?LWA[n]:LEM[n])){s.textContent='Il contatto dei responsabili non è ancora configurato.';return;}
  if(k=='e'&&KEYS[LEM[n]]){post(KEYS[LEM[n]],'Iscrizione Life Group '+LG[i].z,nome,rec,tel,msg,s,b);return;}
  var body=msg+'\n\nNome: '+nome+'\nEmail: '+rec+'\nCellulare: '+tel;go(k=='w'?'https://wa.me/'+LWA[n]+'?text='+encodeURIComponent('Iscrizione Life Group '+LG[i].z+'\n\n'+body):'mailto:'+LEM[n]+'?subject='+encodeURIComponent('Iscrizione Life Group '+LG[i].z)+'&body='+encodeURIComponent(body),true);
  s.textContent=k=='w'?'Si apre WhatsApp: premi invio per mandare il messaggio.':'Si apre la tua email: premi invio per mandare il messaggio. Se non si apre, scrivi a '+LEM[n]+'.';
});
function post(key,subject,nome,rec,tel,msg,s,b){
  b.disabled=true;s.textContent="Invio in corso…";
  fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:key,subject:subject,from_name:"Sito ADM Sabaoth Church",name:nome,email:rec,phone:tel,message:msg+"\n\nNome: "+nome+"\nEmail: "+rec+"\nCellulare: "+tel})})
  .then(function(r){return r.json();}).then(function(j){b.disabled=false;s.textContent=j.success?"Richiesta inviata! Il responsabile la riceverà via email.":"Invio non riuscito. Riprova oppure usa WhatsApp.";})
  .catch(function(){b.disabled=false;s.textContent="Invio non riuscito. Riprova oppure usa WhatsApp.";});
}
var MENT={w:"393936701679",e:""};// numero WhatsApp con prefisso, es. 393331234567
document.getElementById("mt-b").addEventListener("click",function(){
  var n=document.getElementById("mt-n").value.trim(),e=document.getElementById("mt-e").value.trim(),p=document.getElementById("mt-p").value.trim(),s=document.getElementById("mt-s");
  if(!n||!e){s.textContent="Inserisci nome e cognome ed email.";return;}
  if(!MENT.w){s.textContent="Il contatto non è ancora configurato.";return;}
  if(KEYS[MENT.e]){post(KEYS[MENT.e],"Richiesta di un mentore",n,e,p,"Richiesta di un mentore",s,document.getElementById("mt-b"));return;}
  go("https://wa.me/"+MENT.w+"?text="+encodeURIComponent("Richiesta di un mentore\n\nNome: "+n+"\nEmail: "+e+(p?"\nCellulare: "+p:"")),true);
  s.textContent="Si apre WhatsApp: premi invio per mandare la richiesta.";
});
var INTER={w:"393400861233"};
document.getElementById("in-b").addEventListener("click",function(){
  var n=document.getElementById("in-n").value.trim(),p=document.getElementById("in-p").value.trim(),e=document.getElementById("in-e").value.trim(),s=document.getElementById("in-s");
  if(!n||!p){s.textContent="Inserisci nome e cognome e cellulare.";return;}
  go("https://wa.me/"+INTER.w+"?text="+encodeURIComponent("Iscrizione a Intercessione\n\nNome: "+n+"\nCellulare: "+p+(e?"\nEmail: "+e:"")),true);
  s.textContent="Si apre WhatsApp: premi invio per mandare l’iscrizione.";
});
function go(u,blank){var a=document.createElement("a");a.href=u;if(blank){a.target="_blank";a.rel="noopener";}document.body.appendChild(a);a.click();a.remove();}
var root=document.getElementById("deps");
DEPS.forEach(function(d,i){
  var c=document.createElement("article");c.className="dep";
  c.innerHTML='<h3>'+d.n+'</h3>'+(DESC[d.n]&&DESC[d.n].t?'<p class="tag">'+DESC[d.n].t+'</p>':'')+'<p class="desc">'+(DESC[d.n]?DESC[d.n].x:"")+'</p><p class="lead-name">'+(/,| e /.test(d.r)?'Responsabili':'Responsabile')+': <b>'+d.r+'</b></p>'+
  '<details><summary>Voglio iscrivermi</summary><div class="f">'+
  '<div><label for="n'+i+'">Nome e cognome</label><input id="n'+i+'" autocomplete="name"></div>'+
  '<div><label for="t'+i+'">Email</label><input id="t'+i+'" type="email" autocomplete="email"></div>'+
  '<div><label for="p'+i+'">Cellulare</label><input id="p'+i+'" type="tel" autocomplete="tel"></div>'+
  '<div><label for="m'+i+'">Messaggio</label><textarea id="m'+i+'">Ciao, vorrei iscrivermi al dipartimento '+d.n+'.</textarea></div>'+
  '<button type="button" data-i="'+i+'" data-k="w">Invia su WhatsApp</button>'+
  '<button type="button" class="alt" data-i="'+i+'" data-k="e">Invia via email</button>'+
  '<p class="msg" id="s'+i+'" role="status"></p></div></details>';
  root.appendChild(c);
});
root.addEventListener("click",function(ev){
  var b=ev.target.closest("button[data-i]");if(!b)return;
  var i=b.getAttribute("data-i"),k=b.getAttribute("data-k"),d=DEPS[i];
  var nome=document.getElementById("n"+i).value.trim();
  var rec=document.getElementById("t"+i).value.trim(),tel=document.getElementById("p"+i).value.trim();
  var msg=document.getElementById("m"+i).value.trim();
  var s=document.getElementById("s"+i);
  if(!nome||!rec||!tel){s.textContent="Inserisci nome e cognome, email e cellulare, così il responsabile può risponderti.";return;}
  if(!(k=="w"?d.w:d.e)){s.textContent="Il contatto del responsabile non è ancora configurato.";return;}
  if(k=="e"&&KEYS[d.e]){post(KEYS[d.e],"Iscrizione "+d.n,nome,rec,tel,msg,s,b);return;}
  var body=msg+"\n\nNome: "+nome+"\nEmail: "+rec+"\nCellulare: "+tel;
  go(k=="w"?"https://wa.me/"+d.w+"?text="+encodeURIComponent("Iscrizione "+d.n+"\n\n"+body):"mailto:"+d.e+"?subject="+encodeURIComponent("Iscrizione "+d.n)+"&body="+encodeURIComponent(body),true);
  s.textContent=k=="w"?"Si apre WhatsApp: premi invio per mandare il messaggio.":"Si apre la tua email: premi invio per mandare il messaggio. Se non si apre, scrivi a "+d.e+".";
});
