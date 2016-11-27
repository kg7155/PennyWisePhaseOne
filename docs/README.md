# Penny-Wise

Opis
Spletna aplikacija Penny-Wise je aplikacija, v katero uporabnik na enostaven način vnaša svoje prihodke in izdatke ter določi varčevalne cilje. Aplikacija na podlagi zbranih podatkov pripravi poročila in uporabnika sproti obvešča o izpolnjevanju varčevalnih ciljev.

Aplikacija se prične na strani, kjer se uporabnik lahko prijavi. V kolikor uporabniškega računa še nima, lahko odklika na stran z registracijo. Jedro aplikacije predstavlja delovna tabla (angl. dashboard) z vsemi podstranmi.

Dostopna je na https://penny-wise.azurewebsites.net.

Ciljna publika in naprave
Aplikacija je namenjena vsem, ki želijo vedno imeti nadzor nad svojimi financami in tako privarčevati. Zaenkrat je namenjena uporabi na osebnem računalniku, se bo pa to v prihodnjem mesecu spremenilo.

Težave v različnih brskalnikih
Stran je bila preverjena in stestirana v brskalnikih Chrome, Opera in Internet Explorer. Do težav ni prišlo v nobenem izmed naštetih brskalnikov in strani izgledajo v vseh brskalnikih enako.

Posebna gradnika strani
Podstrani Overview, Expenses, Incomes in Reports vsebujejo HTML5 Canvas, na katerega sem narisala graf. Podstrani Overview in Reports vsebujeta črtni graf (angl. line chart), preostali dve pa stolpični graf (angl. bar graph). Vsi grafi so prilagodljivi in lahko prikažejo poljuben nabor podatkov.

Naslednji posebni gradnik je zajem videa v podstrani Profile. Če uporabnik dovoli dostop do kamere, se v elementu video prikaže slika v živo. Ko uporabnik pritisne na gumb "Snap!", se element video skrije in prikaže se canvas, ki izriše sliko. Uporabnik lahko posname novo fotografijo s klikom na "Take a new photo". Ker v tej fazi zaledni del še ni izdelan, se slika nikamor ne shrani.