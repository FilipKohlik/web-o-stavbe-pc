(this["webpackJsonpweb-o-pc"]=this["webpackJsonpweb-o-pc"]||[]).push([[0],{139:function(e,t,o){},140:function(e,t,o){},142:function(e,t,o){},441:function(e,t,o){"use strict";o.r(t);var a=o(2),n=o.n(a),r=o(26),i=o.n(r),s=(o(139),o(4)),c=o(5),j=o(7),l=o(6),p=[{title:"\xfavod ",url:"opening",cName:"nav-links"},{title:"Procesor ",url:"cpu",cName:"nav-links"},{title:"Po\u010d\xedta\u010dov\xe1 sk\u0159\xed\u0148 ",url:"case",cName:"nav-links"},{title:"Z\xe1kladn\xed deska ",url:"motherboard",cName:"nav-links"},{title:"RAM ",url:"ram",cName:"nav-links"},{title:"Grafick\xe1 karta ",url:"gpu",cName:"nav-links"},{title:"Disky ",url:"disks",cName:"nav-links"},{title:"Opera\u010dn\xed syst\xe9m ",url:"system",cName:"nav-links"},{title:"chladi\u010de",url:"coolers",cName:"nav-links"},{title:"zdroj",url:"supply",cName:"nav-links"}],d=(o(140),o(1)),u=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){var e;Object(s.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"NavbarItems",children:[Object(d.jsxs)("h1",{className:"navbar-logo",children:["Web o stavb\u011b pc",Object(d.jsx)("i",{className:"fab fa-react"})]}),Object(d.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(d.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:p.map((function(e,t){return Object(d.jsx)("li",{ley:t,children:Object(d.jsx)("a",{className:e.cName,href:e.url,children:e.title})})}))})]})}}]),o}(n.a.Component),h=(o(142),o(8)),k=(o(24),function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"opening",children:[Object(d.jsx)("h1",{children:"autor: Filip Kohl\xedk"}),Object(d.jsx)("h2",{children:"Chcete si postavit PC, ale nev\xedte jak na to? Zde se dozv\xedte, podle \u010deho vyb\xedrat sou\u010d\xe1stky a jak PC stav\u011bt. Tento web je jak pro program\xe1tory \u010di hr\xe1\u010de, tak pro b\u011b\u017en\xe9 u\u017eivatele."})]})}}]),o}(a.Component)),b=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Cpu",children:[Object(d.jsx)("h1",{children:"Procesor"}),Object(d.jsx)("p",{children:"Procesory do po\u010d\xedta\u010d\u016f vyr\xe1b\xed 2 firmy, jimi\u017e jsou AMD a Intel. Prov\xe1d\xed se na n\u011bm v\xfdpo\u010dty po\u010d\xedta\u010de. jeho z\xe1kladn\xed parametry jsou po\u010det jader, vl\xe1ken, takt a mezipam\u011b\u0165. Po\u010det jader zn\xe1zor\u0148uje kolik m\xe1 procesor jednotliv\xfdch sou\u010d\xe1st\xed na v\xfdpo\u010det \xfaloh. Vl\xe1kno m\u016f\u017ee b\xfdt v jednom j\xe1dru jedno nebo 2. Pokud jsou dv\u011b, znamen\xe1 to \u017ee je procesor v\xfdkonn\u011bj\u0161\xed ne\u017e kdyby m\u011bl v j\xe1dru jen jedno. Takt je v\xfdkon, kter\xfdm jednotliv\xe1 j\xe1dra b\u011b\u017e\xed. mezipam\u011bt zna\u010d\xed kolik m\xe1 procesor m\xedsta na ukl\xe1d\xe1n\xed meziv\xfdpo\u010dt\u016f. M\xe1 na procesor celkem mal\xfd vliv, tak\u017ee j\xed v\u011bt\u0161inou nemus\xedte \u0159e\u0161it. Minim\xe1ln\xed po\u010det jader u po\u010d\xedta\u010dov\xe9ho procesoru jsou 2 j\xe1dra 2 vl\xe1kna a takt asi 2ghz. U v\xfdb\u011bru by jste si je\u0161t\u011b m\u011bli d\xe1vat pozor na typ socketu procesoru, a podle n\u011bj pak vybrat kompatibiln\xed desku."}),Object(d.jsx)("h2",{children:"Jak vybrat Procesor"}),Object(d.jsx)("h3",{children:"Pro hr\xe1\u010de"}),Object(d.jsx)("p",{children:"U v\u011bt\u0161iny nov\xfdch her je v minim\xe1ln\xedch po\u017eadavc\xedch \u010dty\u0159\xe1drov\xfd procesor. Pokud m\xe1te napnut\xfd rozpo\u010det doporu\u010duji po\u0159\xeddit si ho. Pokud ale m\xe1te v\xedce pen\u011bz doporu\u010d\xedm \u0161estij\xe1drov\xfd ide\xe1ln\u011b s 12ti vl\xe1kny. Ohledn\u011b taktu Je ide\xe1ln\xed m\xedt 3 a v\xedce ghz. \u0160estij\xe1drov\xfd procesor s 12ti vl\xe1kny koup\xedte od 3 000. "}),Object(d.jsx)("h3",{children:"pro program\xe1tory a st\u0159iha\u010de"}),"Zde jsou parametry velice podobn\xe9 jako v kolonce pro hr\xe1\u010de. Rozd\xedl v\u0161ak je, \u017ee pokud se budete v\u011bnovat nap\u0159\xedklad profesion\xe1ln\xedmu st\u0159ihu vide\xed, nebo konvertov\xe1n\xed \u010di rendrov\xe1n\xed r\u016fzn\xfdch soubor\u016f. doporu\u010duje se 12ti j\xe1drov\xfd procesor ide\xe1ln\u011b s 24mi vl\xe1kny. Po\u0159\xe1d v\xe1m ale sta\u010d\xed 6ti j\xe1drov\xfd. Ohledn\u011b taktu Je ide\xe1ln\xed m\xedt 3 a v\xedce ghz. 12 ti j\xe1drov\xfd processor koup\xedte od 10 000.",Object(d.jsx)("h3",{children:"pro b\u011b\u017en\xe9 u\u017eivatele"}),Object(d.jsx)("p",{children:"B\u011b\u017en\xfdm u\u017eivatel\u016fm sta\u010d\xed dvouj\xe1drov\xfd processor. Ten je dobr\xfd na hran\xed star\u0161\xedch her, psan\xed dokument\u016f, brouzd\xe1n\xed na internetu a sledov\xe1n\xed vide\xed. pokud ale chcet m\xedt po\u010d\xedta\u010d rychlej\u0161\xed a v\xfdkonn\u011bj\u0161\xed doporu\u010duji \u010dty\u0159\xe1drov\xfd procesor. Ohledn\u011b taktu sta\u010d\xed m\xedt 2 a v\xedce ghz. Takov\xfd dvouj\xe1drov\xfd procesor stoj\xed kolem tis\xedce a\u017e dvou."})]})}}]),o}(a.Component),m=o.p+"static/media/pc_case.15c2af58.jpg",v=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Case",children:[Object(d.jsx)("h1",{children:"Po\u010d\xedta\u010dov\xe1 sk\u0159\xed\u0148"}),Object(d.jsx)("p",{children:"(na t\xe9to str\xe1nce nejsou sekce, proto\u017ee v\xfdb\u011br sk\u0159\xedn\u011b se do nich ned\xe1 za\u0159adit) Z\xe1kladn\xed parametry p\u0159i v\xfdb\u011bru po\u010d\xedta\u010dov\xe9 sk\u0159\xedn\u011b jsou velikost sk\u0159\xedn\u011b, pro jak\xfd typ desek je sk\u0159\xed\u0148 ur\u010dena a zda jsou v n\xed zabudovan\xe9 chladi\u010de, nebo ne. Tak\xe9 se zam\u011b\u0159te na to, zda budete pot\u0159ebovat n\u011b\xe1kou mechaniku CD, DVD, BluRay, nebo t\u0159eba \u010dte\u010dku SD karet. N\u011bkter\xe9 sk\u0159\xedn\u011b na ni toti\u017e nemaj\xed otvor. Doporu\u010duj\xed se zam\u011b\u0159it t\u0159eba i na desing, jeliko\u017e se prod\xe1v\xe1j\xed sk\u0159\xedn\u011b s prosklenou bo\u010dnic\xed, kter\xe9 se hod\xed, kdy\u017e si koup\xedte sv\xedtic\xed komponenty v\xfdsledek pak vypad\xe1 n\u011b\xe1k tako."}),Object(d.jsx)("img",{src:m,alt:"PC case",width:"900",height:"900"}),Object(d.jsx)("p",{children:"U ka\u017ed\xe9 sk\u0159\xedn\u011b m\xe1te napsanou velikost a podporovan\xe9 typy desek. D\xe1vejte si pozor, aby jste si nevybrali n\u011b\xe1kou nekompatibiln\xed. Tak\xe9 se zam\u011b\u0159te na maximaln\xed mo\u017enou velikost karet a maxim\xe1ln\xed v\xfd\u0161ku Procesoru."})]})}}]),o}(a.Component),y=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"supply",children:[Object(d.jsx)("h1",{children:"zdroj"}),"Prod\xe1vaj\xed se r\u016fzn\u011b v\xfdkonn\xe9 zdroje, kter\xe9 si vyberete podle toho, jak\xf3u spot\u0159ebu bude v\xe1\u0161 po\u010d\xedta\u010d m\xedt to zjist\xedte se\u010dten\xedm spot\u0159eby jednotliv\xfdch sou\u010d\xe1stek, nebo si to m\u016f\u017eete spo\u010d\xedtat pomoc\xed tohoto kalkul\xe1toru. ",Object(d.jsx)("a",{href:"https://www.coolermaster.com/power-supply-calculator/",target:"blank",children:"kalkul\xe1tor"})]})}}]),o}(a.Component),O=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Coolers",children:[Object(d.jsx)("h1",{children:"chladi\u010de"}),Object(d.jsx)("h3",{children:"Pro hr\xe1\u010de"}),Object(d.jsx)("h3",{children:"Pro program\xe1tory a st\u0159iha\u010de"}),Object(d.jsx)("h3",{children:"Pro b\u011b\u017en\xe9 u\u017eivatele"})]})}}]),o}(a.Component),x=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Motherboard",children:[Object(d.jsx)("h1",{children:"Z\xe1kladn\xed deska"}),Object(d.jsx)("p",{children:"Z\xe1kladn\xed deska je komponent, do kter\xe9ho se zapoj\xed v\u0161echny sou\u010d\xe1stky. P\u0159i jeho v\xfdb\u011bru je d\u016fle\u017eit\xe9 ujasnit si j\xe1k\xe9 konektory pot\u0159ebujete, a jak\xfd procesor si kupujete, kv\u016fli typu socketu. Tak\xe9 se zam\u011b\u0159te na typ pam\u011bti RAM. Dal\u0161\xed na co by jste je po\u010det a typ konektor\u016f na disky a SSD."}),Object(d.jsx)("h3",{children:"Pro hr\xe1\u010de"}),"U desky pro hr\xe1\u010de je pot\u0159ebn\xe9, aby podporovala DDR4 pam\u011bti ram ide\xe1ln\u011b s frekvenc\xed alespo\u0148 3000mhz. Dal\u0161\xed co se u n\xed m\u016f\u017ee hodit je podpora SLI \u010di crossfire, co\u017e jsou prost\u0159edky k propojen\xed dvou grafick\xfdch karet. D\u016fle\u017eit\xe1 je taky konektorov\xe1 v\xfdbava. Tak\xe9 by jste si m\u011bli zjistit jak\xe9 disky do desk m\u016f\u017eete zapojit.",Object(d.jsx)("h3",{children:"Pro program\xe1tory a st\u0159iha\u010de"}),Object(d.jsx)("p",{children:"Pokud jste program\xe1tor \u010di st\u0159iha\u010d zam\u011b\u0159te se hlavn\u011b na to, aby deska podporovala vysokofrekven\u010dn\xed pam\u011bti RAM(3000mhz a v\xedce) ostatn\xed je podobn\xe9 jako v kolonce pro hr\xe1\u010de. "}),Object(d.jsx)("h3",{children:"Pro b\u011b\u017en\xe9 u\u017eivatele"}),Object(d.jsx)("p",{children:"Pokud jste b\u011b\u017en\xfd u\u017eivatel nemus\xedte si d\u011blat starosti s pam\u011btmi ram m\u016f\u017eete si t\u0159eba po\u0159\xeddit desku, kter\xe1 m\xe1 i ddr3. Doporu\u010duji ale sp\xed\u0161 pam\u011bti ddr4 s frekvenc\xed kolem 2000mhz ta v\xe1m bude \xfapln\u011b sta\u010dit. Ohledn\u011b slot\u016f na pam\u011bti ram posta\u010d\xed v\xe1m 2. U konektor\u016f v\xe1m bude sta\u010dit jen z\xe1kladn\xed v\xfdbava."})]})}}]),o}(a.Component),f=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"RAM",children:[Object(d.jsx)("h1",{children:"RAM"}),Object(d.jsx)("p",{children:"Pameti ram jsou d\u016fle\u017eit\xe9 na odkl\xe1d\xe1n\xed soubor\u016f\u016f, kter\xe9 jsou rozpracovan\xe9, ale v po\u010d\xedta\u010di nejsou ulo\u017een\xe9. (nap\u0159. kdy\u017e p\xed\u0161ete dokument neulo\u017eil/a jste si ho je ulo\u017een v pam\u011bti ram.) Jejich parametry jsou pm\u011b\u0165 a frekvence zna\u010den\xe1 v mhz. Jejich druhy se zna\u010d\xed ddr a \u010d\xedslo generace ramky ddr1, ddr2,ddr3 a ddr4 Pro hr\xe1\u010de program\xe1tory a st\u0159iha\u010de doporu\u010duji ddr4. Pro b\u011b\u017en\xe9 u\u017eivatele posta\u010d\xed i ddr3, ale i p\u0159esto bych doporu\u010dil ddr4 klidn\u011b s ni\u017e\u0161\xed frekvenc\xed."}),Object(d.jsx)("h3",{children:"Pro hr\xe1\u010de"}),Object(d.jsx)("p",{children:"Pokud si po\u0159izujete hern\xed po\u010d\xedta\u010d doporu\u010duji koupit si ramky s frekvenc\xed mimnim\xe1ln\u011b 3000mhz a dohromady s pam\u011bt\xed alespo\u0148 8gb. Lep\u0161\xed ale je, kdy\u017e maj\xed 16gb"}),Object(d.jsx)("h3",{children:"Pro program\xe1tory a st\u0159iha\u010de"}),Object(d.jsx)("a",{children:"Jeliko\u017e budete \u010dasto rendrovat, je d\u016fle\u017eit\xe9, aby jste m\u011bli vysokofrekven\u010dn\xed ramky s pam\u011bt\xed 16gb a v\xedce."}),Object(d.jsx)("h3",{children:"Pro b\u011b\u017en\xe9 u\u017eivatele"}),Object(d.jsx)("a",{children:"Pokud jste b\u011b\u017en\xfd u\u017eivatel bohat\u011b v\xe1m posta\u010d\xed 4gb. Pokud ale chcete m\xedt rychlej\u0161\xed po\u010d\xedta\u010d kupte si 8gb. Kdy\u017e budete m\xedt 8gb po\u010d\xedta\u010d v\xe1m i d\xe9le vydr\u017e\xed a bude del\u0161\xed dobu pou\u017eiteln\xfd."})]})}}]),o}(a.Component),g=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"gpu",children:[Object(d.jsx)("h1",{children:"Grafick\xe1 karta"}),Object(d.jsx)("a",{children:"grafick\xe1 karta zobrazuje v\u0161echno, co vyd\xedte na obrazovce po\u010d\xedta\u010de. Parametr\u016f grafick\xfdch karet je opravdu hodn\u011b. Nejd\u016fle\u017eit\u011bj\u0161\xedmi jsou pam\u011bt, po\u010det stream procesor\u016f a fekvence. Vzhledem k tomu \u017ee je parametr\u016f opravdu hodn\u011b je lep\u0161\xed se koukat na r\u016fzn\xe9 testy.(na internetu je najdete pod pojmem benchmark.) Nebo t\u0159eba na video, kde na grafick\xe9 kart\u011b testuj\xed n\u011b\xe1kou hru. z\xe1kladem pro v\xfdkonn\u011bj\u0161\xed po\u010d\xedta\u010d je grafick\xe1 karta s pam\u011bt\xed alespo\u0148 2gb"}),Object(d.jsx)("h3",{children:"Pro hr\xe1\u010de"}),Object(d.jsx)("p",{children:"Pokud chcete ut\xe1hnout nejnov\u011bj\u0161\xed hry jako t\u0159eba Cyberpunk 2077, pot\u0159ebujete kartu s pam\u011bt\xed alespo\u0148 4gb jeliko\u017e je parametr\u016f hodn\u011b doporu\u010d\xedm vyhledat si na youtube test hry, kterou chcete na po\u010d\xedta\u010di spustit. Z\xe1kladn\xed hern\xed grafickou kartu koup\xedte okolo 3 000."}),Object(d.jsx)("h3",{children:"Pro program\xe1tory a st\u0159iha\u010de"}),"Pro program\xe1tory a st\u0159iha\u010de se d\u011blaj\xed specializovan\xe9 grafick\xe9 karty. Takov\xe9 se\u017eenete do p\u011bti tis\xedc. Op\u011bt pot\u0159ebujeme alespo\u0148 4gb pam\u011bti.",Object(d.jsx)("h3",{children:"Pro b\u011b\u017en\xe9 u\u017eivatele"}),Object(d.jsx)("p",{children:"Pokud jste b\u011b\u017en\xfd u\u017eivatel, doporu\u010d\xedm po\u0159\xeddit si karu s 1 a\u017e 2 gb intern\xed pam\u011bti. Ta v\xe1m vysta\u010d\xed na b\u011b\u017enou pr\xe1ci, i hran\xed star\u0161\xedch her."})]})}}]),o}(a.Component),z=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"disks",children:[Object(d.jsx)("h1",{children:"Disky"}),Object(d.jsx)("p",{children:"V po\u010d\xedta\u010di je d\u016fle\u017eit\xe9 m\xedt dostatek \xfalo\u017en\xe9ho prostoru, aby se v\xe1m do n\u011bj ve\u0161ly soubory. Jsou dva typy pam\u011bt\xed. Prvn\xed je SSD, co\u017e je disk s men\u0161\xed \u017eivotnost\xed, ale s v\u011bt\u0161\xed rychlost\xed. Druh\xfd je HDD, kter\xfd je pomalej\u0161\xed ne\u017e SSD, m\xe1 v\u011bt\u0161\xed \u017eivotnost a \u010d\xedm star\u0161\xed je t\xedm je pomalej\u0161\xed. Jako velice dobrou cennov\u011b dostupnou variantu vn\xedm\xe1m nainstalov\xe1n\xed syst\xe9m\u016f, a program\u016f, u kter\xfdch pot\u0159ebujete rychl\xe9 na\u010d\xedt\xe1n\xed na men\u0161\xed SSD a na HDD ulo\u017eit m\xe9n\u011b n\xe1ro\u010dn\xe9 programy a soubory. Pokud jste u\u017e n\u011bkdy d\u0159\xedve m\u011bli po\u010d\xedta\u010d \u010di notebook v\xedte, kolik m\xedsta pot\u0159ebujete. Pokud ne doporu\u010duji si koupit disky s velikost\xed kolem 500gb. Tak\xe9 si dejte pozor na r\u016fzn\xe9 konektory disk\u016f v\u011bt\u0161inou jsou konektory disku sata, ale nedavno byl vynalezen nov\xfd tip SSD disk\u016f s konektorem M.2."}),Object(d.jsx)("h3",{children:"Pro hr\xe1\u010de"}),Object(d.jsx)("p",{children:"Vzhledem k tomu \u017ee jsou hry celkem velk\xe9 doporu\u010d\xedm pam\u011b\u0165 od 500 do 1000gb. Nejlep\u0161\xed je pokud budete m\xedt v\u0161echno na SSD. Pokud ale m\xe1te napnut\xfd rozpo\u010det rozd\u011blte sv\xe9 soubory na SSD a HDD."}),Object(d.jsx)("h3",{children:"Pro program\xe1tory a st\u0159iha\u010de"}),Object(d.jsx)("p",{children:"Zde bych doporu\u010dil podobn\xfd postup jako v kolonce pro hr\xe1\u010de."}),Object(d.jsx)("h3",{children:"Pro b\u011b\u017en\xe9 u\u017eivatele"}),Object(d.jsx)("p",{children:"Pro b\u011b\u017en\xe9 u\u017eivatele doporu\u010duji bu\u010f pouze HDD, nebo kombinaci s SSD. Bude v\xe1m sta\u010dit 500gb m\xedsta."})]})}}]),o}(a.Component),P=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"system",children:[Object(d.jsx)("h1",{children:"Opera\u010dn\xed syst\xe9m"}),Object(d.jsxs)("p",{children:["Do po\u010d\xedta\u010de si mus\xedte sehnat opera\u010dn\xed syst\xe9m. Bu\u010f si m\u016f\u017eete koupit DVD s kompletn\xedm n\xe1vodem a k\xf3dem na aktivaci, nebo si m\u016f\u017eeete vitvo\u0159it instala\u010dn\xed m\xe9dium nap\u0159 z flashdisku. N\xe1vod\u016f je nato spousta nap\u0159.",Object(d.jsx)("a",{href:"https://www.youtube.com/watch?v=9SP6y4UuFEo",target:"blank",children:"tento"}),"Neaktivovan\xe9 windows sice m\u016f\u017eete pou\u017e\xedvat, ale \u010dasem bych doporu\u010dil koupit aktiva\u010dn\xed kl\xed\u010d. Pokud jste d\u0159\xedve m\u011bli po\u010d\xedta\u010d s aktivovan\xfdm windows m\u016f\u017eete se pot\xe9 p\u0159ihl\xe1st stejn\xfdm microsoft \xfa\u010dtem a windows se v\xe1m aktivuje."]})]})}}]),o}(a.Component),N=function(e){Object(j.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsx)("logo",{className:"App-logo"}),Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/supply",component:y}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/opening",component:k}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/Cpu",component:b}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/Case",component:v}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/Coolers",component:O}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/motherboard",component:x}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/RAM",component:f}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/gpu",component:g}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/disks",component:z}),Object(d.jsx)(h.a,{path:"/http//FilipKohlik.github.io/system",component:P})]})]})}}]),o}(n.a.Component),D=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,442)).then((function(t){var o=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;o(e),a(e),n(e),r(e),i(e)}))},C=o(84);i.a.render(Object(d.jsx)(C.a,{basename:"/",children:Object(d.jsx)(N,{})}),document.getElementById("root")),D()}},[[441,1,2]]]);
//# sourceMappingURL=main.7be8c86f.chunk.js.map