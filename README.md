# Crypto Paper Bot v8.0

Mobilbarát, statikus GitHub Pages virtuális kriptokereskedési szimulátor. Nincs API-kulcs, valódi kereskedés vagy szerveroldali adatmentés.

## Telepítés
A ZIP tartalmát (ne magát a ZIP-et) töltsd fel a Tradingbot repository gyökerébe, a régi azonos nevű fájlokat cseréld le. GitHub Pages: Settings > Pages > Deploy from branch > main / root. Androidon frissítsd az oldalt, szükség esetén ürítsd a korábbi oldal gyorsítótárát.

## Működés
Nyilvános Binance órás OHLC adatok, kizárólag lezárt gyertyák. Az utolsó 30% elkülönített visszateszt. EMA/SMA jellegű 20/60 mozgóátlag, RSI és ATR alapú long-only belépés; ATR stop; szünet veszteség után; konzervatív OHLC stop-prioritás. A pozíció a következő gyertya nyitásán lép be, és az azonos gyertyán belüli stop/cél találatot is figyeli. Jutalék 0,10%, csúszás 0,05% oldalanként. Nettó PnL a belépési és kilépési díjat tartalmazza. Az equity becsült zárási költséget is levon. A stop/cél teljesülési sorrendje OHLC adatokból nem ismerhető meg, ezért azonos gyertyán belüli kettős érintésnél stop az első.

## Korlátok
A szimuláció nem jósol profitot. A walk-forward itt egyszeri 70/30 időrendi holdout, nem többszörös újratanítás. A 30%-os tesztszakaszon ismételten hangolt paraméterek elveszítik a független teszt jellegüket. A stratégia szabályalapú, nem neurális AI. Offline csak a már betöltött alkalmazásfájlok működhetnek; historikus adatok lekéréséhez internet szükséges.
