# Crypto Paper Bot v1

Android-friendly PWA for **synthetic-data paper trading only**. No exchange integration, no real orders, no investment advice.

## Run
Host this directory on GitHub Pages or any HTTPS static host. On Android open the URL in Chrome and choose **Add to Home screen**. Local file:// opening is not sufficient for service workers.

## Features
- BTC/ETH/SOL deterministic synthetic hourly closing prices (not historical market prices)
- EMA(12/26), RSI(14), MACD-line proxy (EMA12 minus EMA26; not the full MACD signal/histogram)
- Online bounded weight update after closed simulated trades
- 0.1% simulated transaction fee per side
- Stop-loss / take-profit evaluated at candle close (not guaranteed execution at threshold)
- 15% cash allocation per position; one long position at a time
- Backtest on synthetic in-sample prices; no independent out-of-sample validation

## Limitations
No persistent state: refreshing resets the simulation. Auto mode runs only while the browser is active. There is no real-time market data or actual historical exchange data, and no background server or trained neural network. This project is a working prototype, not a production trading engine.

## Security
Never put exchange API keys into client-side JavaScript. Do not connect this demo to live trading.
