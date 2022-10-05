export interface order{
    email: string,
    withdrawAddress: string,
    transactionId: number,
    rate : number,
    usdAmount : number,
    usdtAmount : number,
    paymentAmount : number,
    paymentStatus: string,
    sentStatus : string
}