import CustomerInfo from "../../components/CustomerInfo";
import PaymentMethod from "../../components/PaymentMethod";
import Order from "../../components/Order";

function OrderPage() {
  return (
    <div className="container mt-5 w-75">
      <CustomerInfo />
      <PaymentMethod />
      <Order />
    </div>
  );
}

export default OrderPage;
