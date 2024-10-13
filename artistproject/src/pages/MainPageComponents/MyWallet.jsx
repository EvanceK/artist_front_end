import MemberNav from "../../components/MemberNav";

function MyWallet() {
  return (
    <div className="container mt-5 mb-5">
      {/* My Wallet 標題區塊 */}

      <h1 className="mb-3">My Wallet</h1>
      <div className="h1 underline mb-4"></div>

      {/* 信用卡資訊區塊 */}
      <div className="border p-4">
        <div className="h2 mb-5">Credit Card Information:</div>
        <div className="d-flex justify-content-between gap-4 h4 mt-2">
          <div className="text-end w-50">
            <p>Bank :</p>
            <p>Credit Card Number :</p>
          </div>
          <div class="text-star w-50">
            <p>823 Nextbank</p>
            <p>4065-1352-****-7596</p>
          </div>
        </div>
        <div className="btn m-4 ">Change credit card</div>
      </div>

      {/* 錢包資訊區塊 */}
      <div className="border p-4 mt-5">
        <div className="h2 mb-5">Wallet imformation :</div>
        <p>
          To participate in this auction,a refundable deposit is required. This
          deposit will be used as a guarantee of your bids and will be refunded
          if you do not win any items. The deposit amount is calculated as a
          percentage of the current bid. You are required to pay a deposit of
          10% of your current bid amount during the bid. The refunded deposit
          will be placed in the website wallet, and you can transfer the amount
          to your account from the website wallet.
        </p>

        {/* 錢包資訊區塊 */}
        <div className="d-flex justify-content-between h2  px-5 mt-5">
          <div className="h3 text-star">Current Balance :</div>
          <div ClassName="h3 text-end">$ 120,000</div>
        </div>
        <div className="underline"></div>
        <div className="d-flex justify-content-between h5 mt-3 px-5">
            <span>2024/10/02</span>
            <span>+500</span>
        </div>
        <div className="d-flex justify-content-between h5 mt-3 px-5">
            <span>2024/10/02</span>
            <span>+500</span>
        </div>
        <div className="d-flex justify-content-between h5 mt-3 px-5">
            <span>2024/10/02</span>
            <span>+500</span>
        </div>
        <div className="d-flex justify-content-between h5 mt-3 px-5">
            <span>2024/10/02</span>
            <span>-500</span>
        </div>
        <div className="d-flex justify-content-between h5 mt-3 px-5">
            <span>2024/10/02</span>
            <span>+500</span>
        </div>
      </div>
    </div>
  );
}

export default MyWallet;
