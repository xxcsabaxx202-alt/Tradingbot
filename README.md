# Crypto Paper Bot 3.0

Androidon használható, statikus GitHub Pages PWA. **Kizárólag oktatási célú, virtuális kereskedés.** Nem kapcsolódik kereskedési fiókhoz, nem küld megbízást.

## Újdonságok
- BTC/ETH/SOL 1 órás historikus gyertyák a nyilvános Binance Vision API-ról.
- EMA/RSI/MACD-proxy hibrid pontozás; lezárt ügyletek alapján adaptív súlyok.
- Három időrendben elkülönített, részben átfedő tesztablak (55–75%, 65–85%, 75–95%).
- Adaptív és fix súlyú kontroll azonos időablakon.
- Jutalék (0,1% oldalanként) és becsült csúszás (0,05% oldalanként).
- Profitfaktor, átlagos kötés-eredmény, visszaesés, kötésdarabszám.
- Böngésző helyi tárhelye, JSON napló export.

## Telepítés
A hat fájlt a GitHub repository főkönyvtárába kell feltölteni; Pages: main / (root). A korábbi 2.0 adatai nem kerülnek automatikusan a 3.0-ba; a régi 2.0 mentés a böngészőben megmarad.

## Korlátok
- Nem élő kereskedés: 1 historikus gyertya/másodperc, csak nyitott oldalon.
- Gyertyazár-alapú végrehajtás; nem kezeli a gyertyán belüli stopot, spreadet, likviditást vagy a valós megbízás teljesülését.
- A tesztablakok átfednek, ezért nem függetlenek. A modell nem bizonyítottan nyereséges.
- A tanuló súlyok egyszerű heurisztikával változnak, nem neurális hálózattal.
- A helyi mentés elveszhet a böngésző adatainak törlésekor.
