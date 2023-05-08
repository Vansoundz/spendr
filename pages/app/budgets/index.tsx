import { ReactElement } from "react";
import Layout from "../layout";
import { FaEllipsisH, FaPiggyBank } from "react-icons/fa";

const Budgets = () => {
  return (
    <>
      {/* <!-- BUDGET CARD --> */}
      <div className="budget">
        <div className="budget-card">
          <div className="budget-card-title">
            <a href="#">
              <FaPiggyBank className="budget-icon" />
            </a>
            <h2>Budget</h2>
          </div>

          <div className="amount-to-spend">
            <h1 id="amount">
              <span className="currency-spent">KES</span>
              1,000
              <span className="rate">/day</span>
            </h1>
          </div>

          <div className="date">
            <p>Tue 25/04/23</p>

            <a href="#">
              <FaEllipsisH />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Budgets.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Budgets;
