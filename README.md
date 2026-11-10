# Crypto Paper Bot v5.0

Android-compatible GitHub Pages paper-trading simulator. **Never places real orders.**

## Features
- BTC/ETH/SOL historical hourly candles via public Binance REST API; up to 3000 candles, paginated (network availability and API regional restrictions apply).
- EMA/RSI/MACD-proxy hybrid adaptive weights, ATR-derived indicator, trend filter, stop/take, position sizing.
- Three disjoint chronological test windows, each compared with fixed weights and Buy & Hold. Prior training sets overlap; results are not independent samples.
- 0.10% fee and 0.05% assumed slippage per side; candle-close execution simplification.
- Trade decision diagnostics, JSON export, localStorage simulation state (candles not persisted; reload data to resume; currently UI resets the simulation on reload).
- Historical candle replay at one candle per second only while the page is open.

## Deployment
Upload all six files to the repository root and commit. GitHub Pages: deploy from main / root. Refresh after deployment. No keys or exchange credentials needed.

## Caveats
This is an educational simulation, not investment advice. No real-time trading, background server or guaranteed profit. Browser availability of Binance REST varies by region. The strategy has not been independently validated. Local storage contains an exportable snapshot but the current UI does not automatically restore state on refresh; use JSON export to retain a record.
