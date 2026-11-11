'use strict';
(function(){
const $=id=>document.getElementById(id),fee=.001,slip=.0005,initial=10000;
const fmt=x=>Number(x).toLocaleString('hu-HU',{maximumFractionDigits:2,minimumFractionDigits:2});
function sma(a,i,n){if(i<n-1)return NaN;let s=0;for(let j=i-n+1;j<=i;j++)s+=a[j].close;return s/n}
function rsi(a,i,n=14){if(i<n)return NaN;let u=0,d=0;for(let j=i-n+1;j<=i;j++){let x=a[j].close-a[j-1].close;u+=Math.max(0,x);d+=Math.max(0,-x)}return d===0?(u===0?50:100):100-100/(1+u/d)}
function atr(a,i,n=14){if(i<n)return NaN;let v=0;for(let j=i-n+1;j<=i;j++){let p=a[j-1].close;v+=Math.max(a[j].high-a[j].low,Math.abs(a[j].high-p),Math.abs(a[j].low-p))}return v/n}
function simulate(a,start,end,mode,params){let cash=initial,pos=null,peak=initial,dd=0,wins=0,closed=0,gain=0,loss=0,lastLoss=-9999;
const close=(i,raw)=>{let px=raw*(1-slip),gross=pos.qty*px,pnl=gross*(1-fee)-pos.cost;cash+=gross*(1-fee);if(pnl>0){wins++;gain+=pnl}else{loss-=pnl;lastLoss=i}closed++;pos=null};
for(let i=start;i<end;i++){let c=a[i],p=i-1,fast=sma(a,p,20),slow=sma(a,p,60),r=rsi(a,p),v=atr(a,p),prev=rsi(a,p-1),valid=[fast,slow,r,v,prev].every(Number.isFinite),exited=false;
if(pos){if(c.open<=pos.stop){close(i,c.open);exited=true}else if(c.open>=pos.target){close(i,c.open);exited=true}else if(c.low<=pos.stop){close(i,pos.stop);exited=true}else if(c.high>=pos.target){close(i,pos.target);exited=true}}
if(!pos&&!exited&&i<end-1&&valid&&i>lastLoss+params.cooldown){let trend=fast>slow,signal=.55*Math.max(-1,Math.min(1,(fast/slow-1)*30))+.45*Math.max(-1,Math.min(1,(r-50)/25)),dynamic=params.threshold+Math.min(.25,v/a[p].close*4);
let enter=mode==='adaptive'?trend&&r>=params.rsiMin&&r<75&&signal>dynamic:mode==='rsi'?trend&&r>=50&&r<60&&prev<r:trend&&r>=45&&r<=65&&a[p].close<=fast&&c.open>0;
if(enter){let entry=c.open*(1+slip),distance=params.useAtr?Math.max(entry*params.sl,v*2):entry*params.sl,stop=entry-distance,target=entry*(1+params.tp),budget=Math.min(cash*.95,cash*params.risk/(distance/entry+2*fee+2*slip));
if(budget>0&&stop>0){let qty=budget/(entry*(1+fee)),cost=qty*entry*(1+fee);cash-=cost;pos={qty,cost,stop,target};if(c.low<=stop)close(i,stop);else if(c.high>=target)close(i,target)}}}
let equity=cash+(pos?pos.qty*c.close*(1-fee-slip):0);peak=Math.max(peak,equity);dd=Math.max(dd,(peak-equity)/peak)}
if(pos)close(end-1,a[end-1].close);
return {ret:(cash/initial-1)*100,dd:dd*100,trades:closed,wins,pf:loss>0?gain/loss:gain>0?Infinity:null}}
function render(){let root=$('comparisonOutput');root.replaceChildren();if(typeof candles==='undefined'||candles.length<300){root.textContent='Előbb tölts be legalább 300 lezárt gyertyát.';return}
let a=candles,start=Math.floor(a.length*.7),p={sl:Number($('sl').value)/100,tp:Number($('tp').value)/100,risk:Number($('risk').value)/100,threshold:Number($('threshold').value),rsiMin:Number($('rsiMin').value),cooldown:Number($('cooldown').value),useAtr:$('atr').checked};
if(![p.sl,p.tp,p.risk,p.threshold,p.rsiMin,p.cooldown].every(Number.isFinite)||p.sl<=0||p.tp<=0||p.risk<=0||p.risk>.03||p.cooldown<0){root.textContent='Előbb állíts be érvényes paramétereket.';return}
let rows=[['Adaptív',simulate(a,start,a.length,'adaptive',p)],['RSI 50–60, emelkedő',simulate(a,start,a.length,'rsi',p)],['Trend + visszahúzódás',simulate(a,start,a.length,'pullback',p)]];
let hold=((a.at(-1).close*(1-slip)*(1-fee))/(a[start].open*(1+slip)*(1+fee))-1)*100;
let table=document.createElement('table'),head=document.createElement('tr');for(let h of ['Stratégia','Hozam','Max. DD','Ügyletek','Találati arány','Profitfaktor']){let th=document.createElement('th');th.textContent=h;head.append(th)}table.append(head);
for(let [name,v] of rows){let tr=document.createElement('tr');for(let x of [name,fmt(v.ret)+'%',fmt(v.dd)+'%',String(v.trades),v.trades?fmt(v.wins/v.trades*100)+'%':'—',v.pf===null?'—':v.pf===Infinity?'∞':fmt(v.pf)]){let td=document.createElement('td');td.textContent=x;tr.append(td)}table.append(tr)}
let tr=document.createElement('tr');for(let x of ['Buy & Hold',fmt(hold)+'%','—','1','—','—']){let td=document.createElement('td');td.textContent=x;tr.append(td)}table.append(tr);root.append(table);
let note=document.createElement('p');note.className='muted';note.textContent='Mindegyik stratégia ugyanazon utolsó 30%-on fut, 10 000 USDT indulótőkével, 0,10% jutalékkal és 0,05% becsült csúszással oldalanként. A stop/cél sorrendje órás OHLC adatokból nem ismert: egyidejű érintésnél stopot feltételezünk. Az RSI- és visszahúzódás-szabályok kutatási hipotézisek, nem optimalizált vagy bizonyított stratégiák. Ez a korábban megvizsgált holdout nem tekinthető új, független tesztnek. Az eredmény nem befektetési ajánlás.';root.append(note)}
$('compareRun').addEventListener('click',render);
})();