# Crypto Paper Bot v7.0

Kizárólag oktatási célú virtuális spot long szimulátor. Nem küld tőzsdei megbízásokat, nem kér API-kulcsot.

## Telepítés
A csomag fájljait a GitHub Pages repository gyökérkönyvtárába töltsd fel, a meglévő fájlokat felülírva. Pages: main / (root). Mobilon frissítsd a lapot, szükség esetén töröld a régi webhelyadatokat.

## Megjegyzések
A historikus adatok Binance nyilvános historikus klines API-jából származnak; a böngészőből való elérés szolgáltatói hozzáféréstől és CORS-tól függ. A 70/30 felosztás nem többablakos walk-forward validáció. A jelzések az előző lezárt gyertyán alapulnak, a következő gyertya nyitásán történik virtuális vétel. A stratégia indikátorai SMA20/SMA60, RSI14 és ATR14; nem neurális hálózat. A jutalék 0,10%, a becsült csúszás 0,05% oldalanként. A gyertyán belüli stop/célár sorrend ismeretlen. Az eredmények nem garantálnak nyereséget.
