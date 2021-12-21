export default function ExchangeRate( {exchangeData} ) {
    return (
        <div className="exchange-rate">
            <h3>Exchange Rate</h3>
            <h1>{exchangeData.exchangeRate}</h1>
            <p>{exchangeData.primaryCurrency} to {exchangeData.secondaryCurrency}</p>
        </div>
    );
}
