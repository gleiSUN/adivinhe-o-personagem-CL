(function(){"use strict";var o={4749:function(o,i,e){var a=e(9963),n=e(6252);function t(o,i,e,a,t,s){const r=(0,n.up)("router-view"),l=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),(0,n.Wm)(l)],64)}const s=o=>((0,n.dD)("data-v-cbaa3e58"),o=o(),(0,n.Cn)(),o),r=s((()=>(0,n._)("p",null,"Site criado por Henrique Souza",-1))),l=s((()=>(0,n._)("br",null,null,-1))),u=s((()=>(0,n._)("p",null,"O jogo em que este se baseia é de propriedade de Studio Trois Private Limited",-1))),h=[r,l,u];function p(o,i,e,a,t,s){return(0,n.wg)(),(0,n.iD)("footer",null,h)}var d={name:"Footer"},c=e(3744);const m=(0,c.Z)(d,[["render",p],["__scopeId","data-v-cbaa3e58"]]);var v=m,g={components:{Footer:v}};const y=(0,c.Z)(g,[["render",t]]);var _=y,C=e(2201);const k={id:"home"},A={id:"title"},M={id:"games"};function f(o,i,e,a,t,s){const r=(0,n.up)("home-title"),l=(0,n.up)("home-games");return(0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("div",A,[(0,n.Wm)(r)]),(0,n._)("div",M,[(0,n.Wm)(l)])])}const S=o=>((0,n.dD)("data-v-fabc7a44"),o=o(),(0,n.Cn)(),o),w={id:"content"},L=S((()=>(0,n._)("h1",null,[(0,n._)("span",null,"ADIVINHE"),(0,n.Uk)(),(0,n._)("br"),(0,n.Uk)(" O PERSONAGEM")],-1))),N=[L];function b(o,i,e,a,t,s){return(0,n.wg)(),(0,n.iD)("div",w,N)}var R={name:"HomeTitle"};const O=(0,c.Z)(R,[["render",b],["__scopeId","data-v-fabc7a44"]]);var W=O;const B={id:"main"},x={id:"options"};function E(o,i,e,a,t,s){const r=(0,n.up)("game-option");return(0,n.wg)(),(0,n.iD)("div",B,[(0,n._)("div",x,[(0,n.Wm)(r,{text:"Adivinhar Pelas Falas",action:()=>s.redirectToGame1()},null,8,["action"]),(0,n.Wm)(r,{text:"Adivinhar Pelas Skins",action:()=>s.redirectToGame2()},null,8,["action"])])])}e(560);var G=e(3577);function J(o,i,e,a,t,s){return(0,n.wg)(),(0,n.iD)("button",{onClick:i[0]||(i[0]=(...o)=>e.action&&e.action(...o))},(0,G.zw)(e.text),1)}var V={name:"GameOption",props:{text:String,action:Function}};const I=(0,c.Z)(V,[["render",J],["__scopeId","data-v-338df7f7"]]);var T=I,K={name:"HomeGames",data(){return{isModalVisible:!1}},components:{GameOption:T},methods:{redirectToGame1(){this.$router.push({name:"game1"})},redirectToGame2(){this.$router.push({name:"game2"})}}};const D=(0,c.Z)(K,[["render",E],["__scopeId","data-v-50d38a88"]]);var H=D,Z={name:"HomeView",components:{HomeTitle:W,HomeGames:H}};const j=(0,c.Z)(Z,[["render",f],["__scopeId","data-v-27f1d9df"]]);var q=j;const z={id:"main"},X={id:"game-box"},P={id:"box-header"},F={id:"link"},Q={id:"div-voice-line"},Y={id:"div-options-list"};function $(o,i,e,t,s,r){const l=(0,n.up)("small-button"),u=(0,n.up)("voice-line-box"),h=(0,n.up)("options-list"),p=(0,n.up)("game-over-modal");return(0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("div",X,[(0,n._)("div",P,[(0,n._)("span",F,[(0,n.Wm)(l,{close:!0})]),(0,n._)("span",null,(0,G.zw)(s.challenge)+"/"+(0,G.zw)(s.challenges.length),1)]),(0,n._)("div",Q,[(0,n.Wm)(u,{voiceline:s.voiceline},null,8,["voiceline"])]),(0,n._)("div",Y,[(0,n.Wm)(h,{imgs:s.imgs,rightAnswer:s.right_option,onMistake:r.gameOver,onHit:r.gameContinue},null,8,["imgs","rightAnswer","onMistake","onHit"])])]),(0,n.wy)((0,n.Wm)(p,{text:"DERROTA",receiver:"game1"},null,512),[[a.F8,s.showGameOverModal]]),(0,n.wy)((0,n.Wm)(p,{text:"VITÓRIA",receiver:"game1"},null,512),[[a.F8,s.showGameWinnerModal]])])}var U=JSON.parse('{"e":[{"voiceline":"“Tchu Tcha Tcha Ru Tchu Tcha...”","options":["Styx","Valena","Chloe","Winona","Memphis"],"rightoption":"Winona"},{"voiceline":"“Eu sou a protetora da floresta.”","options":["Renee","Tigria","Judith","Idony","Orsour"],"rightoption":"Tigria"},{"voiceline":"“Ascenda a minha alma!”","options":["Scorpius","Kyouya","Styx","Wulfric","Morus"],"rightoption":"Styx"},{"voiceline":"“Venham, irmãos corvos! Eu trouxe comida para vocês.”","options":["Zoya","Clawdia","Scorpius","Hagen","Raven"],"rightoption":"Raven"},{"voiceline":"“Você é petulante!”","options":["Loth","Reisa","Salome","Nivan","Oboro"],"rightoption":"Salome"},{"voiceline":"“Não haverá nada além de desespero!”","options":["Keth","Brando","Scorpius","Clawdia","Zoya"],"rightoption":"Keth"},{"voiceline":"“Se a gente não for agora a gente vai ter que brincar sozinho!”","options":["Mina","Chloe","Idony","Winona","Joy"],"rightoption":"Mina"},{"voiceline":"“Eu vim de ~censurado~, da escuridão sem fim.”","options":["Brunhild","Reisa","Chloe","Clawdia","Naraku"],"rightoption":"Naraku"},{"voiceline":"“Isso não é demais?”","options":["Judith","Oboro","Idony","Eida","Joy"],"rightoption":"Eida"},{"voiceline":"“Cuidado! Os ursos estão chegando.”","options":["Austeja","Orsour","Winona","Keth","Nivan"],"rightoption":"Orsour"},{"voiceline":"“Rin Pyo To Sha Kai Jin Retsu Zai Zen.”","options":["Naraku","Oboro","Winona","Joy","Natasha"],"rightoption":"Oboro"},{"voiceline":"“Para de fazer bullying comigo!”","options":["Idony","Aramis","Keth","Brando","Austeja"],"rightoption":"Idony"},{"voiceline":"“Boooom!”","options":["Christine","Renee","Reisa","Eida","Lars"],"rightoption":"Eida"},{"voiceline":"“Eu sou a espada da luz!”","options":["Judith","Christine","Mikal","Cleo","Norah"],"rightoption":"Mikal"},{"voiceline":"“A minha lâmina arrebata almas.”","options":["Austeja","Kyouya","Styx","Valena","Orsour"],"rightoption":"Styx"},{"voiceline":"“A minha lança causará destruição!”","options":["Brunhild","Brando","Cleo","Mikal","Zoya"],"rightoption":"Cleo"},{"voiceline":"“Como todas as mulheres, eu sou uma guerreira!”","options":["Christine","Brunhild","Valena","Winona","Tigria"],"rightoption":"Brunhild"},{"voiceline":"“Sinta o poder do Deus da Guerra!”","options":["Renee","Salome","Brunhild","Memphis","Valena"],"rightoption":"Brunhild"},{"voiceline":"“Kamuy, pega ele!”","options":["Mina","Wulfric","Lars","Reisa","Christine"],"rightoption":"Mina"},{"voiceline":"“Neve, gelo!”","options":["Brunhild","Mina","Natasha","Chloe","Loth"],"rightoption":"Natasha"},{"voiceline":"“A alquimia oferece conhecimento e poder.”","options":["Winona","Joy","Natasha","Reisa","Loth"],"rightoption":"Reisa"},{"voiceline":"“Contemple a sombra da lua!”","options":["Valena","Mina","Hagen","Norah","Nivan"],"rightoption":"Valena"},{"voiceline":"“Voadora!”","options":["Brunhild","Cleo","Wulfric","Orsour","Garsea"],"rightoption":"Garsea"},{"voiceline":"“Deusa Abelha ao seu dispôr.”","options":["Austeja","Chloe","Loth","Tigria","Salome"],"rightoption":"Austeja"},{"voiceline":"“Os hackers vivem escondidos, mas você não precisa.”","options":["Aramis","Renee","Clawdia","Brando","Lars"],"rightoption":"Renee"},{"voiceline":"“Todos somos fantoches no final!”","options":["Naraku","Hagen","Oboro","Natasha","Morus"],"rightoption":"Morus"},{"voiceline":"“Vivemos em um ciclo sem fim.”","options":["Orsour","Nivan","Garsea","Wulfric","Joy"],"rightoption":"Nivan"},{"voiceline":"“Voltei!”","options":["Styx","Lars","Cleo","Brando","Scorpius"],"rightoption":"Lars"},{"voiceline":"“Não é culpa sua. Eles estão te atormentando por ser gentil.”","options":["Brando","Lars","Judith","Mikal","Reisa"],"rightoption":"Brando"},{"voiceline":"“Mirarei apenas em quem merecer a morte.”","options":["Austeja","Tigria","Aramis","Adele","Scorpius"],"rightoption":"Adele"},{"voiceline":"“Homúnculo!”","options":["Styx","Raven","Lars","Reisa","Natasha"],"rightoption":"Reisa"},{"voiceline":"“Essa cruel missão nunca acaba.”","options":["Norah","Wulfric","Scorpius","Hagen","Morus"],"rightoption":"Scorpius"},{"voiceline":"“Eu sou demais!”","options":["Aramis","Lars","Raven","Cleo","Garsea"],"rightoption":"Aramis"},{"voiceline":"“Que tal um presentinho? PÁ!”","options":["Xenon","Raven","Adele","Winona","Salome"],"rightoption":"Adele"},{"voiceline":"“Eu sou a sombra que vai te matar.”","options":["Oboro","Kyouya","Clawdia","Zoya","Naraku"],"rightoption":"Zoya"},{"voiceline":"“Sinta as minhas garras!”","options":["Orsour","Raven","Tigria","Clawdia","Norah"],"rightoption":"Clawdia"},{"voiceline":"“O gigante voltou!”","options":["Wulfric","Mikal","Memphis","Cleo","Garsea"],"rightoption":"Memphis"},{"voiceline":"“Sangue! Quero mais sangue!”","options":["Styx","Clawdia","Brando","Morus","Kyouya"],"rightoption":"Clawdia"},{"voiceline":"“Perderam a cabeça, foi?”","options":["Mina","Natasha","Reisa","Salome","Joy"],"rightoption":"Salome"},{"voiceline":"“Eu me vingarei de todos vocês!”","options":["Brando","Xenon","Keth","Adele","Reisa"],"rightoption":"Keth"},{"voiceline":"“Ajoelhe-se! É uma ordem!”","options":["Adele","Xenon","Austeja","Salome","Loth"],"rightoption":"Loth"},{"voiceline":"“Estou cansado de tantas mortes, preciso de férias.”","options":["Xenon","Styx","Scorpius","Hagen","Morus"],"rightoption":"Hagen"},{"voiceline":"“Eu luto em nome da luz!”","options":["Mikal","Christine","Norah","Hagen","Judith"],"rightoption":"Christine"},{"voiceline":"“Confesse!”","options":["Judith","Reisa","Adele","Joy","Salome"],"rightoption":"Judith"},{"voiceline":"“Eu sou forte como um urso.”","options":["Wulfric","Orsour","Memphis","Zoya","Naraku"],"rightoption":"Orsour"},{"voiceline":"“Meu coração é mais forte do que o metal.”","options":["Xenon","Adele","Lars","Memphis","Norah"],"rightoption":"Norah"},{"voiceline":"“É guerra que você quer? Então prepare-se!”","options":["Wulfric","Mina","Memphis","Valena","Austeja"],"rightoption":"Wulfric"},{"voiceline":"“Isso não é uma dança e sim um combate!”","options":["Garsea","Salome","Oboro","Zoya","Brunhild"],"rightoption":"Garsea"},{"voiceline":"“Melhor você não me entendiar, senão...”","options":["Cleo","Raven","Winona","Renee","Xenon"],"rightoption":"Xenon"},{"voiceline":"“Siga a Ordem da Meia-Noite!”","options":["Zoya","Oboro","Valena","Kyouya","Mikal"],"rightoption":"Oboro"},{"voiceline":"“Curioso com a minha maleta? Quer ver o que tem dentro?”","options":["Brunhild","Mina","Joy","Aramis","Loth"],"rightoption":"Joy"},{"voiceline":"“Você não tem autoridade para falar comigo!”","options":["Styx","Xenon","Scorpius","Nivan","Eida"],"rightoption":"Xenon"},{"voiceline":"“Gelo e neve marcarão a sua ruína!”","options":["Natasha","Lars","Raven","Cleo","Garsea"],"rightoption":"Natasha"},{"voiceline":"“Se me encarar muito, vai se apaixonar.”","options":["Zoya","Aramis","Adele","Oboro","Salome"],"rightoption":"Salome"},{"voiceline":"“Eu te levarei às trevas!”","options":["Raven","Lars","Brando","Zoya","Reisa"],"rightoption":"Raven"},{"voiceline":"“A bateria é o instrumento mais descolado e eu sou o baterista mais descolado!”","options":["Styx","Kyouya","Lars","Clawdia","Norah"],"rightoption":"Lars"},{"voiceline":"“Eu sou o estopim de uma nova era!”","options":["Cleo","Mikal","Memphis","Renee","Garsea"],"rightoption":"Renee"},{"voiceline":"“Novos figurinos e adereços pro show! Ai, não são lindos?”","options":["Renee","Chloe","Idony","Winona","Joy"],"rightoption":"Chloe"},{"voiceline":"“Decodificado!”","options":["Valena","Reisa","Renee","Naraku","Mikal"],"rightoption":"Renee"},{"voiceline":"“Tô com fome... vamo acabar com isso.”","options":["Aramis","Wulfric","Raven","Clawdia","Reisa"],"rightoption":"Reisa"},{"voiceline":"“Ah... finalmente...”","options":["Brunhild","Lars","Scorpius","Raven","Styx"],"rightoption":"Styx"},{"voiceline":"“Dessa vez, me deixe acabar com você meu amor...”","options":["Naraku","Oboro","Kyouya","Styx","Zoya"],"rightoption":"Naraku"},{"voiceline":"“O vento me disse, que havia uma tempestade chegando.”","options":["Natasha","Nivan","Reisa","Brando","Garsea"],"rightoption":"Natasha"},{"voiceline":"“A lua... escureceu...”","options":["Zoya","Valena","Adele","Christine","Judith"],"rightoption":"Valena"},{"voiceline":"“Querem ser meus mascotes? Tenho bastante comida.”","options":["Raven","Lars","Brando","Winona","Idony"],"rightoption":"Idony"},{"voiceline":"“Ajoelhe-se para a alquimia, ela vale mais do que você!”","options":["Lars","Chloe","Reisa","Clawdia","Joy"],"rightoption":"Reisa"},{"voiceline":"“A glória se foi, deixando apenas tristeza e luto.”","options":["Cleo","Mikal","Wulfric","Adele","Brando"],"rightoption":"Brando"},{"voiceline":"“Não precisa dar um chilique, é só o espaço se dobrando!”","options":["Renee","Chloe","Winona","Hagen","Joy"],"rightoption":"Joy"},{"voiceline":"“Vagar por aí pode ser perigoso, as vezes eu trabalho de... dançarino, pra ter dinheiro pra viagem.”","options":["Cleo","Lars","Garsea","Aramis","Kyouya"],"rightoption":"Garsea"},{"voiceline":"“Vou dar-lhes um tormento pior do que a morte.”","options":["Garsea","Norah","Raven","Brando","Valena"],"rightoption":"Brando"},{"voiceline":"“Cortem-lhe a cabeça!”","options":["Salome","Loth","Brunhild","Christine","Clawdia"],"rightoption":"Loth"},{"voiceline":"“Eu estou sentindo uma presença.”","options":["Adele","Valena","Tigria","Idony","Eida"],"rightoption":"Adele"},{"voiceline":"“Mercenário? Eu sou um visconde!”","options":["Lars","Aramis","Scorpius","Cleo","Garsea"],"rightoption":"Aramis"},{"voiceline":"“Eu? Pareço um inseto? Caramba! Essa é a aparência da superioridade?!”","options":["Brando","Orsour","Wulfric","Xenon","Memphis"],"rightoption":"Xenon"},{"voiceline":"“A morte é um presente das sombras.”","options":["Raven","Clawdia","Renee","Zoya","Styx"],"rightoption":"Zoya"},{"voiceline":"“Luz e escuridão caminham lado a lado.”","options":["Styx","Kyouya","Hagen","Nivan","Norah"],"rightoption":"Hagen"},{"voiceline":"“Eu não gosto de palhaços, eles roubam o nosso trabalho!”","options":["Chloe","Idony","Reisa","Joy","Winona"],"rightoption":"Chloe"},{"voiceline":"“Não perca a fé.”","options":["Judith","Mikal","Christine","Scorpius","Norah"],"rightoption":"Mikal"},{"voiceline":"“A destruição faz parte da harmonia.”","options":["Valena","Nivan","Renee","Naraku","Mikal"],"rightoption":"Nivan"},{"voiceline":"“Apareça, covarde!”","options":["Aramis","Wulfric","Cleo","Mikal","Garsea"],"rightoption":"Wulfric"},{"voiceline":"“Sigam a bandeira!”","options":["Brunhild","Renee","Christine","Wulfric","Loth"],"rightoption":"Wulfric"},{"voiceline":"“Ataque de língua!”","options":["Eida","Clawdia","Mina","Natasha","Idony"],"rightoption":"Mina"},{"voiceline":"“É proibido se separar, principalmente no dia dos namorados.”","options":["Salome","Oboro","Renee","Naraku","Brando"],"rightoption":"Oboro"},{"voiceline":"“Atrás de você imbecil!”","options":["Zoya","Aramis","Adele","Raven","Kyouya"],"rightoption":"Raven"},{"voiceline":"“Sutil, como o vento.”","options":["Judith","Kyouya","Nivan","Mina","Styx"],"rightoption":"Kyouya"},{"voiceline":"“Lembre-se: O mel é mais doce do que o sangue.”","options":["Austeja","Idony","Eida","Clawdia","Norah"],"rightoption":"Austeja"},{"voiceline":"“Eu te perdoo. Estou de volta!”","options":["Judith","Brando","Memphis","Chloe","Garsea"],"rightoption":"Judith"},{"voiceline":"“Isso é pelo meu mestre!”","options":["Styx","Garsea","Kyouya","Norah","Joy"],"rightoption":"Norah"},{"voiceline":"“Sinta a força do vento!”","options":["Valena","Nivan","Tigria","Oboro","Garsea"],"rightoption":"Tigria"},{"voiceline":"“A cura que a morte trás não pode ser explicada.”","options":["Scorpius","Brunhild","Tigria","Hagen","Reisa"],"rightoption":"Scorpius"},{"voiceline":"“Que rufem os tambores!”","options":["Brunhild","Mina","Joy","Aramis","Loth"],"rightoption":"Brunhild"},{"voiceline":"“Tão fraco e inútil...”","options":["Styx","Xenon","Naraku","Nivan","Valena"],"rightoption":"Naraku"},{"voiceline":"“Que foi, Big White, farejou alguma coisa?”","options":["Natasha","Lars","Raven","Cleo","Tigria"],"rightoption":"Tigria"},{"voiceline":"“Não esquece de mim!”","options":["Idony","Joy","Cleo","Reisa","Eida"],"rightoption":"Eida"},{"voiceline":"“Farei com que haja justiça!”","options":["Christine","Lars","Brando","Zoya","Reisa"],"rightoption":"Christine"},{"voiceline":"“Lança mortal!”","options":["Styx","Cleo","Kyouya","Mikal","Wulfric"],"rightoption":"Cleo"},{"voiceline":"“Venha luz sagrada!”","options":["Xenon","Mikal","Memphis","Renee","Judith"],"rightoption":"Judith"},{"voiceline":"“Vou te estraçalhar!”","options":["Adele","Natasha","Clawdia","Winona","Brunhild"],"rightoption":"Clawdia"},{"voiceline":"“Vamo lá, gente! Vamos sacudir esse lugar!”","options":["Lars","Winona","Chloe","Eida","Aramis"],"rightoption":"Lars"},{"voiceline":"“Antes morrer pela luz, do que ser consumido pelas trevas.”","options":["Aramis","Christine","Raven","Joy","Reisa"],"rightoption":"Christine"},{"voiceline":"“De um em um...”","options":["Chloe","Morus","Lars","Brando","Zoya"],"rightoption":"Morus"},{"voiceline":"“Cadê aquele inseto com as lâminas gêmeas?”","options":["Brando","Clawdia","Valena","Tigria","Xenon"],"rightoption":"Brando"},{"voiceline":"“Isso que dá não seguir as regras!”","options":["Morus","Hagen","Mikal","Brando","Styx"],"rightoption":"Brando"},{"voiceline":"“Eu descerei como um deus!”","options":["Morus","Raven","Aramis","Valena","Xenon"],"rightoption":"Morus"},{"voiceline":"“Estou aqui respondendo ao seu chamado.”","options":["Tigria","Reisa","Natasha","Kyouya","Austeja"],"rightoption":"Austeja"},{"voiceline":"“O abismo de ~censurado~ te aguarda...”","options":["Lars","Orsour","Morus","Styx","Wulfric"],"rightoption":"Styx"},{"voiceline":"“Corram! O protetor da floresta chegou!”","options":["Garsea","Orsour","Idony","Eida","Tigria"],"rightoption":"Orsour"},{"voiceline":"“10 pontos pro meu grimório!”","options":["Chloe","Winona","Judith","Nivan","Eida"],"rightoption":"Winona"},{"voiceline":"“Excesso de bondade é sinal de fraqueza.”","options":["Renee","Judith","Mikal","Christine","Nivan"],"rightoption":"Nivan"},{"voiceline":"“Hoje a vitória será nossa!”","options":["Wulfric","Brunhild","Mikal","Cleo","Orsour"],"rightoption":"Wulfric"},{"voiceline":"“Ha-Ia!”","options":["Chloe","Winona","Oboro","Natasha","Naraku"],"rightoption":"Natasha"},{"voiceline":"“Auuuuuu Auuuu...”","options":["Orsour","Raven","Clawdia","Lars","Aramis"],"rightoption":"Clawdia"},{"voiceline":"“Nenhum firewall me mantém de fora.”","options":["Renee","Joy","Reisa","Valena","Tigria"],"rightoption":"Renee"},{"voiceline":"“Atiradores não devem se expôr.”","options":["Memphis","Mina","Judith","Morus","Adele"],"rightoption":"Adele"},{"voiceline":"“Minha mira é fatal.”","options":["Scorpius","Oboro","Adele","Renee","Orsour"],"rightoption":"Adele"},{"voiceline":"“Lutarei em nome de meu Deus.”","options":["Memphis","Norah","Mikal","Judith","Christine"],"rightoption":"Memphis"},{"voiceline":"“Fácil como caçar coelhinhos.”","options":["Idony","Adele","Eida","Brunhild","Memphis"],"rightoption":"Adele"},{"voiceline":"“Ah.. que gosto bom...”","options":["Lars","Loth","Austeja","Salome","Naraku"],"rightoption":"Salome"},{"voiceline":"“Eu tenho esperança!”","options":["Brando","Judith","Winona","Oboro","Norah"],"rightoption":"Judith"},{"voiceline":"“É humilhante andar nessa terra imunda.”","options":["Styx","Morus","Loth","Adele","Kyouya"],"rightoption":"Loth"},{"voiceline":"“Adagas das sombras.”","options":["Naraku","Zoya","Loth","Oboro","Valena"],"rightoption":"Zoya"},{"voiceline":"“Machadada!”","options":["Mina","Raven","Memphis","Wulfric","Aramis"],"rightoption":"Wulfric"},{"voiceline":"“Chegou a hora! Sejam bem-vindos ao grande funeral!”","options":["Wulfric","Cleo","Hagen","Lars","Raven"],"rightoption":"Raven"},{"voiceline":"“Avançar!”","options":["Tigria","Cleo","Wulfric","Valena","Aramis"],"rightoption":"Cleo"},{"voiceline":"“Pintarei minhas garras com o seu sangue.”","options":["Clawdia","Raven","Loth","Renee","Salome"],"rightoption":"Clawdia"},{"voiceline":"“Minha coleção só aumenta.”","options":["Clawdia","Oboro","Idony","Valena","Loth"],"rightoption":"Loth"},{"voiceline":"“Eu sou a rainha das trevas.”","options":["Renee","Brunhild","Naraku","Loth","Natasha"],"rightoption":"Loth"},{"voiceline":"“Sinto o cheiro de sangue...”","options":["Tigria","Clawdia","Wulfric","Keth","Scorpius"],"rightoption":"Clawdia"},{"voiceline":"“Kamuy, acho que a gente devia ir por ali.”","options":["Mina","Orsour","Norah","Aramis","Tigria"],"rightoption":"Mina"},{"voiceline":"“Eu sou imparável!”","options":["Orsour","Cleo","Norah","Clawdia","Austeja"],"rightoption":"Norah"},{"voiceline":"“Meu escudo me protegerá das trevas.”","options":["Clawdia","Adele","Mikal","Judith","Norah"],"rightoption":"Norah"},{"voiceline":"“A vida é curta demais, e o mundo é muito cruel...”","options":["Renee","Scorpius","Keth","Cleo","Christine"],"rightoption":"Scorpius"},{"voiceline":"“Não tenho mais medo de vocês!”","options":["Eida","Chloe","Idony","Valena","Adele"],"rightoption":"Idony"},{"voiceline":"“Morra em nome da lua!”","options":["Memphis","Brunhild","Naraku","Austeja","Valena"],"rightoption":"Valena"},{"voiceline":"“Eu sou mais forte do que aparento...”","options":["Memphis","Keth","Mina","Joy","Morus"],"rightoption":"Memphis"},{"voiceline":"“Eu esmagarei a vossa fé.”","options":["Xenon","Keth","Morus","Hagen","Styx"],"rightoption":"Keth"},{"voiceline":"“O que dói mais?”","options":["Austeja","Salome","Adele","Brando","Wulfric"],"rightoption":"Brando"},{"voiceline":"“Pipoco mágico!”","options":["Nivan","Reisa","Winona","Morus","Keth"],"rightoption":"Winona"},{"voiceline":"“Não haverá piedade!”","options":["Hagen","Winona","Judith","Christine","Xenon"],"rightoption":"Hagen"},{"voiceline":"“A bainha é o meu juízo, a lâmina a minha loucura...","options":["Kyouya","Styx","Cleo","Wulfric","Scorpius"],"rightoption":"Styx"},{"voiceline":"“Morra!”","options":["Garsea","Keth","Cleo","Memphis","Zoya"],"rightoption":"Cleo"},{"voiceline":"“Dança da morte.”","options":["Raven","Morus","Zoya","Nivan","Winona"],"rightoption":"Zoya"},{"voiceline":"“Prepare-se para a sua purificação!”","options":["Norah","Scorpius","Mikal","Judith","Christine"],"rightoption":"Christine"},{"voiceline":"“Tá com medo? Ha! Por que se molhou inteiro então?”","options":["Norah","Morus","Lars","Cleo","Xenon"],"rightoption":"Cleo"},{"voiceline":"“Ouvi dizer que tem um cara bom o suficiente pra minha banda no reino das trevas.”","options":["Loth","Natasha","Lars","Hagen","Keth"],"rightoption":"Lars"},{"voiceline":"“Na verdade eu não ganho um centavo, eu sou só um artista de rua solitário.”","options":["Garsea","Lars","Chloe","Winona","Xenon"],"rightoption":"Lars"},{"voiceline":"“Todo funeral precisa de uma bateria, não vou deixar você morrer sem isso!”","options":["Judith","Garsea","Lars","Chloe","Brunhild"],"rightoption":"Lars"},{"voiceline":"“Não esqueça Arieo!”","options":["Garsea","Styx","Kyouya","Oboro","Renee"],"rightoption":"Garsea"},{"voiceline":"“Cuidado, a bolha grande tá vindo!”","options":["Judith","Reisa","Idony","Joy","Chloe"],"rightoption":"Chloe"},{"voiceline":"“Vamos brincar na sombra?”","options":["Eida","Idony","Winona","Christine","Zoya"],"rightoption":"Idony"},{"voiceline":"“Iiih, molezinha!”","options":["Eida","Winona","Clawdia","Brando","Xenon"],"rightoption":"Eida"},{"voiceline":"“Tão molóide!”","options":["Memphis","Orsour","Joy","Loth","Mina"],"rightoption":"Joy"},{"voiceline":"“Os elementos vão reagir... agora!”","options":["Austeja","Joy","Nivan","Reisa","Mina"],"rightoption":"Reisa"},{"voiceline":"“A vossa fé é inútil!”","options":["Brando","Memphis","Keth","Xenon","Mikal"],"rightoption":"Keth"},{"voiceline":"“Que comece o banquete!”","options":["Keth","Loth","Mina","Clawdia","Orsour"],"rightoption":"Keth"}]}');const oo={id:"voice-line-div"};function io(o,i,e,a,t,s){return(0,n.wg)(),(0,n.iD)("div",oo,(0,G.zw)(e.voiceline),1)}var eo={name:"VoiceLineBox",props:{voiceline:String}};const ao=(0,c.Z)(eo,[["render",io],["__scopeId","data-v-078f7c00"]]);var no=ao;const to={id:"list"},so=["src","alt","onClick"];function ro(o,i,e,a,t,s){return(0,n.wg)(),(0,n.iD)("div",to,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.imgs,(o=>((0,n.wg)(),(0,n.iD)("img",{src:o.link,alt:o.name,onClick:i=>s.checkAnswer(o.name)},null,8,so)))),256))])}var lo={name:"OptionsList",props:{imgs:Array,rightAnswer:String},emits:["hit","mistake"],methods:{checkAnswer(o){o===this.rightAnswer?this.$emit("hit"):this.$emit("mistake")}}};const uo=(0,c.Z)(lo,[["render",ro],["__scopeId","data-v-173d47ff"]]);var ho=uo;const po={id:"backdrop"},co={id:"main-modal"},mo={id:"button-div"};function vo(o,i,e,a,t,s){const r=(0,n.up)("small-button");return(0,n.wg)(),(0,n.iD)("div",po,[(0,n._)("div",co,[(0,n._)("h1",null,(0,G.zw)(e.text),1),(0,n._)("div",mo,[(0,n.Wm)(r,{retry:!0}),(0,n.Wm)(r,{close:!0})])])])}function go(o,i,e,t,s,r){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("button",{onClick:i[0]||(i[0]=(...o)=>r.reloadPage&&r.reloadPage(...o))},"↻",512),[[a.F8,e.retry]]),(0,n.wy)((0,n._)("button",{onClick:i[1]||(i[1]=(...o)=>r.redirectToHome&&r.redirectToHome(...o))},"←",512),[[a.F8,e.close]])],64)}var yo={name:"SmallButton",props:{retry:Boolean,close:Boolean},methods:{reloadPage(){location.reload()},redirectToHome(){this.$router.push({name:"home"})}}};const _o=(0,c.Z)(yo,[["render",go],["__scopeId","data-v-afe5c250"]]);var Co=_o,ko={name:"GameOverModal",props:{id:Number,text:String},components:{SmallButton:Co}};const Ao=(0,c.Z)(ko,[["render",vo],["__scopeId","data-v-5a8f59f8"]]);var Mo=Ao,fo={name:"Game1",components:{VoiceLineBox:no,OptionsList:ho,GameOverModal:Mo,SmallButton:Co},data(){return{voicelinesList:null,challenges:[],challenge:0,voiceline:null,options:null,right_option:null,imgs:[],showGameOverModal:!1,showGameWinnerModal:!1,audioWinner:!1,audioLoss:!1,audioBtn:!1}},methods:{setupVoiceLinesList(){this.voicelinesList=U.e},setupChallenges(){for(let o=0;o<15;o++){const o=Math.floor(Math.random()*this.voicelinesList.length);this.challenges.push(this.voicelinesList[o]),this.voicelinesList.splice(o,1)}},setupVoiceLines(){this.voiceline=this.challenges[this.challenge].voiceline},setupOptions(){this.options=this.challenges[this.challenge].options,this.right_option=this.challenges[this.challenge].rightoption},setupImgs(){this.imgs=[],setTimeout((()=>this.options.map((o=>{this.imgs.push({link:"/heroes_portrait/"+o+".png",name:o})}))),300)},setupAudios(){this.audioWinner=new Audio("/audio/winner-sound.mp3"),this.audioLoss=new Audio("/audio/loss-sound.mp3"),this.audioBtn=new Audio("/audio/button-sound.wav"),this.audioWinner.load(),this.audioLoss.load(),this.audioBtn.load()},gameOver(){this.playAudio(this.audioLoss),this.showGameOverModal=!0},gameContinue(){this.challenge+=1,this.challenge===this.challenges.length?(this.playAudio(this.audioWinner),this.showGameWinnerModal=!0):(this.playAudio(this.audioBtn),this.updateGameState())},updateGameState(){this.setupVoiceLines(),this.setupOptions(),this.setupImgs()},playAudio(o){o.play()}},created(){this.setupVoiceLinesList(),this.setupChallenges(),this.updateGameState(),this.setupAudios()}};const So=(0,c.Z)(fo,[["render",$],["__scopeId","data-v-e8a1ad40"]]);var wo=So;const Lo={id:"main"},No={id:"game-box"},bo={id:"skin"},Ro=["src"],Oo={id:"input"},Wo={id:"champions"},Bo=["value"],xo={id:"health-bar"},Eo=["src"],Go={id:"link"};function Jo(o,i,e,t,s,r){const l=(0,n.up)("small-button"),u=(0,n.up)("game-over-modal");return(0,n.wg)(),(0,n.iD)("div",Lo,[(0,n._)("div",No,[(0,n._)("div",bo,[(0,n._)("img",{src:s.skin_link,class:(0,G.C_)(s.scaleClass)},null,10,Ro)]),(0,n._)("div",Oo,[(0,n.wy)((0,n._)("input",{type:"text",list:"champions",placeholder:"Digite o nome do personagem...","onUpdate:modelValue":i[0]||(i[0]=o=>s.input_champion=o),onKeydown:i[1]||(i[1]=(0,a.D2)(((...o)=>r.checkAnswer&&r.checkAnswer(...o)),["enter"]))},null,544),[[a.nr,s.input_champion]]),(0,n._)("datalist",Wo,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.championsList,(o=>((0,n.wg)(),(0,n.iD)("option",{value:o},null,8,Bo)))),256))]),(0,n._)("button",{type:"submit",onClick:i[2]||(i[2]=(...o)=>r.checkAnswer&&r.checkAnswer(...o))},"Confirmar")]),(0,n._)("div",xo,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.health_points,(o=>((0,n.wg)(),(0,n.iD)("img",{src:s.health_point_link,alt:"Coração Azul"},null,8,Eo)))),256))]),(0,n._)("span",Go,[(0,n.Wm)(l,{close:!0})])]),(0,n.wy)((0,n.Wm)(u,{text:"DERROTA",receiver:"game2"},null,512),[[a.F8,s.showGameOverModal]]),(0,n.wy)((0,n.Wm)(u,{text:"VITÓRIA",receiver:"game2"},null,512),[[a.F8,s.showGameWinnerModal]])])}var Vo=JSON.parse('{"Y":[{"name":"Adele","skins":["Adele","Adele_Guardia_do_Oceano"]},{"name":"Aramis","skins":["Aramis","Aramis_Caçador_Purpura","Aramis_Mosqueteiro_Abençoado"]},{"name":"Austeja","skins":["Austeja"]},{"name":"Brando","skins":["Brando"]},{"name":"Brunhild","skins":["Brunhild","Brunhild_Marinheira"]},{"name":"Chloe","skins":["Chloe","Chloe_Estrela_do_Circo"]},{"name":"Christine","skins":["Christine","Christine_Inquisidora_do_Mal"]},{"name":"Clawdia","skins":["Clawdia","Clawdia_Baile_do_Despertar"]},{"name":"Cleo","skins":["Cleo","Cleo_Vanguarda_Real"]},{"name":"Eida","skins":["Eida","Eida_Defensora_da_Floresta"]},{"name":"Garsea","skins":["Garsea"]},{"name":"Hagen","skins":["Hagen","Hagen_O_Setimo_Apostolo"]},{"name":"Idony","skins":["Idony","Idony_Atiradora_Ciano","Idony_Lua_Nova","Idony_Princesa_Aventureira"]},{"name":"Joy","skins":["Joy"]},{"name":"Judith","skins":["Judith","Judith_Donzela_Inocente"]},{"name":"Keth","skins":["Keth","Keth_Fogo_Fatuo"]},{"name":"Kyouya","skins":["Kyouya","Kyouya_Assassino_Frio"]},{"name":"Lars","skins":["Lars"]},{"name":"Loth","skins":["Loth","Loth_Rainha_Tirana"]},{"name":"Memphis","skins":["Memphis","Memphis_Cavaleiro_Romantico"]},{"name":"Mikal","skins":["Mikal","Mikal_Centuriao_Lendario","Mikal_Nascer_do_Sol_Glorioso"]},{"name":"Mina","skins":["Mina"]},{"name":"Morus","skins":["Morus","Morus_Feiticeiro_de_Magma"]},{"name":"Naraku","skins":["Naraku"]},{"name":"Natasha","skins":["Natasha"]},{"name":"Nivan","skins":["Nivan","Nivan_Mestre Dharma"]},{"name":"Norah","skins":["Norah","Norah_Quebra-Gelo"]},{"name":"Oboro","skins":["Oboro","Oboro_Kunoichi"]},{"name":"Orsour","skins":["Orsour","Orsour_Druida_das_Runas"]},{"name":"Raven","skins":["Raven","Raven_Principe_Exotico"]},{"name":"Reisa","skins":["Reisa","Reisa_ Aprendiz_Argente"]},{"name":"Renee","skins":["Renee"]},{"name":"Salome","skins":["Salome","Salome_Diva_Dançante"]},{"name":"Scorpius","skins":["Scorpius","Scorpius_Caçador_de_Bruxas"]},{"name":"Styx","skins":["Styx","Styx_Draconico","Styx_Lamina_Corrompida"]},{"name":"Tigria","skins":["Tigria","Tigria_Guardia_da_Floresta"]},{"name":"Valena","skins":["Valena","Valena_Loira","Valena_Miko_Lunar"]},{"name":"Winona","skins":["Winona","Winona_Dama_do_Mal"]},{"name":"Wulfric","skins":["Wulfric","Wulfric_Lutador_Letal"]},{"name":"Xenon","skins":["Xenon","Xenon_ Arauto_Cataclismico"]},{"name":"Zoya","skins":["Zoya","Zoya_Lamina_Espectral"]}]}'),Io={components:{GameOverModal:Mo,SmallButton:Co},data(){return{skinsList:Vo.Y,selectedChampion:null,skins_options:null,selectedSkin:null,skin_link:null,championsList:null,input_champion:"",showGameOverModal:!1,showGameWinnerModal:!1,health_points:[1,1,1],health_point_link:"/extra_media/coracao-azul.png",scaleClass:"scale9",audioWinner:!1,audioLoss:!1}},methods:{setupSkin(){const o=Math.floor(Math.random()*this.skinsList.length);this.selectedChampion=this.skinsList[o],this.skins_options=this.selectedChampion.skins;const i=Math.floor(Math.random()*this.skins_options.length);this.selectedSkin=this.skins_options[i],this.skin_link="/heroes_skins/"+this.selectedSkin+".jpg"},setupChampionsList(){this.championsList=this.skinsList.map((o=>o.name))},checkAnswer(){this.input_champion&&(this.input_champion.toLowerCase()===this.selectedChampion.name.toLowerCase()?(this.input_champion="",this.audioWinner.play(),this.showGameWinnerModal=!0):(this.health_points.pop(),this.input_champion="",this.health_points.length?this.setupSkinScale():(this.showGameOverModal=!0,this.audioLoss.play())))},setupSkinScale(){switch(this.health_points.length){case 2:this.scaleClass="scale8";break;case 1:this.scaleClass="scale7";break;default:break}},setupAudios(){this.audioWinner=new Audio("/audio/winner-sound.mp3"),this.audioLoss=new Audio("/audio/loss-sound.mp3"),this.audioWinner.load(),this.audioLoss.load()}},created(){this.setupSkin(),this.setupChampionsList(),this.setupAudios()}};const To=(0,c.Z)(Io,[["render",Jo],["__scopeId","data-v-feafa1b8"]]);var Ko=To;const Do=[{path:"/",name:"home",component:q},{path:"/game/1",name:"game1",component:wo},{path:"/game/2",name:"game2",component:Ko}],Ho=(0,C.p7)({history:(0,C.PO)(),routes:Do});var Zo=Ho;(0,a.ri)(_).use(Zo).mount("#app")}},i={};function e(a){var n=i[a];if(void 0!==n)return n.exports;var t=i[a]={exports:{}};return o[a].call(t.exports,t,t.exports,e),t.exports}e.m=o,function(){var o=[];e.O=function(i,a,n,t){if(!a){var s=1/0;for(h=0;h<o.length;h++){a=o[h][0],n=o[h][1],t=o[h][2];for(var r=!0,l=0;l<a.length;l++)(!1&t||s>=t)&&Object.keys(e.O).every((function(o){return e.O[o](a[l])}))?a.splice(l--,1):(r=!1,t<s&&(s=t));if(r){o.splice(h--,1);var u=n();void 0!==u&&(i=u)}}return i}t=t||0;for(var h=o.length;h>0&&o[h-1][2]>t;h--)o[h]=o[h-1];o[h]=[a,n,t]}}(),function(){e.d=function(o,i){for(var a in i)e.o(i,a)&&!e.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:i[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)}}(),function(){var o={143:0};e.O.j=function(i){return 0===o[i]};var i=function(i,a){var n,t,s=a[0],r=a[1],l=a[2],u=0;if(s.some((function(i){return 0!==o[i]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(l)var h=l(e)}for(i&&i(a);u<s.length;u++)t=s[u],e.o(o,t)&&o[t]&&o[t][0](),o[t]=0;return e.O(h)},a=self["webpackChunkjogos_cl"]=self["webpackChunkjogos_cl"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(4749)}));a=e.O(a)})();
//# sourceMappingURL=app.81bf3d1a.js.map