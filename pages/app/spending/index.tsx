import { ReactElement } from "react";
import Layout from "../layout";
import { FaEllipsisH, FaMoneyCheck } from "react-icons/fa";

const Spending = () => {
  return (
    <>
      <div className="spending">
        <div className="spending-card">
          <div className="spending-card-title">
            <a href="#">
              <i className="fas fa-money-check-dollar "></i>
              <FaMoneyCheck className="spending-icon" />
            </a>
            <h2>Spending</h2>
          </div>

          <div className="amount-spent">
            <h1 id="amount">
              <span className="currency-spent">KES</span>
              25,073
              <span className="rate">/mo</span>
            </h1>
          </div>

          <div className="date">
            <p>Apr 2023</p>

            <a href="#">
              <FaEllipsisH />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Spending.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Spending;
