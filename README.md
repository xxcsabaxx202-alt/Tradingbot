# Crypto Paper Bot 2.0

Androidon futó, GitHub Pages-re telepíthető, kizárólag virtuális kriptokereskedési oktatási szimulátor.

## Funkciók
- Nyilvános Binance Vision API-ról legfeljebb 1000 darab 1 órás BTC/ETH/SOL USDT historikus záróár letöltése. Internetkapcsolat szükséges; ha a szolgáltatás nem elérhető, hibaüzenet jelenik meg.
- EMA12/EMA26, RSI14, MACD (12/26/9) hisztogram előjele alapján súlyozott jelzés.
- Egyszerű online súlyfrissítés lezárt virtuális ügyletek után; nem neurális hálózat és nem garantáltan javuló modell.
- 70/30 időrendi walk-forward teszt: tanulás az első szakaszon, súlyok befagyasztva a tesztszakaszra.
- 0,1% becsült vételi és eladási díj; záróár-alapú stop-loss/take-profit; nincs intrabar végrehajtás, spread vagy slippage.
- 10 000 USDT kezdőtőke, maximum 15% készpénz egy új pozícióra, long-only, tőkeáttétel nélkül.
- localStorage mentés, JSON naplóexport, Android PWA.

## GitHub Pages telepítés
1. A ZIP-et bontsd ki.
2. A hat fájlt közvetlenül a `Tradingbot` repository gyökerébe töltsd fel, a korábbi fájlok felülírásával (ne a ZIP-et töltsd fel).
3. GitHub Settings → Pages → Deploy from a branch → main → /(root).
4. Várd meg a publikálást, majd frissítsd az oldalt; ha a régi felület látszik, zárd be és nyisd újra.

## Korlátok
- A rendszer **nem** köt tőzsdei ügyletet, nem igényel API-kulcsot, nem tud valódi pénzhez hozzáférni.
- Az automata csak nyitott/aktív böngészőben játssza vissza a már letöltött historikus adatokat. Nem háttérben működő 24/7 bot.
- A teszt nem teljesen független kutatási validáció: egyetlen 70/30 felosztás, egyetlen piac és rövid időszak. A nyereség nem előrejelzés.
- A mentés böngészőnként és eszközönként helyi; böngészőadatok törlésével elveszhet. Használd a JSON exportot.
- A nyilvános API földrajzi, hálózati vagy szolgáltatói okból elérhetetlen lehet.
