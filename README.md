# Crypto Paper Bot 4.0

Androidon használható, GitHub Pages alatt futó, kizárólag virtuális kereskedési szimulátor.

## Újdonságok
- Három **nem átfedő** időrendi tesztablak, ugyanazokon a szakaszokon adaptív és fix súlyú kontroll.
- Egyszerű piaci állapotfelismerés (trend / oldalazás / volatilis) EMA-különbség és ATR alapján.
- Csak trendnek besorolt környezetben nyit új pozíciót; volatilitásfüggő pozícióméret.
- Kihagyott jelzések számlálása, költségszimuláció, profitfaktor és drawdown.
- Új v4-es helyi mentés; a v3-as mentés nem importálódik automatikusan.

## Használat
A hat fájlt a GitHub repository gyökerébe töltsd fel. A Pages main/(root) beállítás maradhat. Az alkalmazásban töltsd le a BTC/ETH/SOL historikus órás gyertyáit, majd futtasd a 3 különálló tesztablakot. A szimuláció egy gyertyát léptet másodpercenként, csak aktív böngészőlap mellett.

## Korlátok
Nincs élő kereskedés, tőzsdei számlakapcsolat, valódi megbízás vagy garantált hozam. Az ATR-alapú piaci besorolás heurisztikus. A visszateszt nem szimulál gyertyán belüli stop-végrehajtást, order bookot vagy valós likviditást. A tanulási előzmények átfedhetnek; kevés kötés esetén a becslések bizonytalanok. Az árfolyamok a nyilvános Binance Vision API-tól függnek.
