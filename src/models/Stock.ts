export interface Stock {
    _id: string,
    description: string,
    displaySymbol: string,
    symbol: string,
    type: string,
    mic: string,
    figi: string,
    shareClassFIGI: string,
    currency: string,
    symbol2: string,
    isin: string | null,
    __v: number
}

export interface StockProfile {
    country: string,
    currency: string,
    exchange: string,
    name: string,
    ticker: string,
    ipo: string,
    marketCapitalization: number,
    shareOutstanding: number,
    logo: string,
    phone: string,
    weburl: string,
    finnhubIndustry: string,
    owner?: string
}
