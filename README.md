# Crypto Paper Bot 6.0

Androidon is használható GitHub Pages PWA, kizárólag historikus adatokkal és virtuális kereskedéssel. Nincsenek valódi tőzsdei megbízások vagy API-kulcsok.

## Újdonságok
- Piaci rezsim (eső, trendelő, oldalazó) és volatilitás szerinti vételi szűrés
- Állítható belépési küszöb és ATR-hez igazított stop-loss
- Három nem átfedő tesztablak, adaptív/fix/Buy & Hold kontroll
- Találati arány és profitfaktor ablakonként
- Helyi szimuláció mentése és visszaállítása azonos adatsor esetén

## Telepítés
A hat fájlt a repository gyökerébe kell feltölteni. GitHub Pages: main / (root). Androidon az oldal újratöltése szükséges lehet.

## Korlátok
A historikus gyertyák a nyilvános Binance API-ból érkeznek; a szolgáltatás régiónként elérhetetlen lehet. A stratégia tanulása egyszerű súlyfrissítés, nem mélytanulás. A stop és take gyertyazáras, nem intrabar. Az időablakok tanulási előzményei átfedhetnek. A modell nem garantál nyereséget. A szimuláció csak nyitott böngészőben fut.
