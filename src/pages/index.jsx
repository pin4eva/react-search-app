import React, { useState } from "react";
import Button from "../lib/button.lib";

// {
//       type: "Income",
//       description: "Offering",
//       date: "02-04-2022",
//       amount: 15000,
//     },

const HomePage = () => {
  const [view, setView] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [input, setInput] = useState({
    type: "",
    description: "",
    date: "",
    amount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccounts([input, ...accounts]);
    setView(!view);
  };
  return (
    <div>
      <h1>Financial Record</h1>
      <div className="text-end">
        <Button variant="primary" onClick={() => setView(!view)}>
          {view ? (
            "Add New record"
          ) : (
            <>
              <i className="fas fa-arrow-left"></i> Back
            </>
          )}
        </Button>
      </div>
      <div className="mt-3">
        {!view ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Record type</label>
              <select
                className="form-select"
                onChange={(e) => setInput({ ...input, type: e.target.value })}
                value={input.type}
              >
                <option value="" hidden></option>
                <option>Income</option>
                <option>Expenditure</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                value={input.description}
                onChange={(e) =>
                  setInput({ ...input, description: e.target.value })
                }
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                value={input.date}
                onChange={(e) => setInput({ ...input, date: e.target.value })}
                type="date"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                value={input.amount}
                onChange={(e) =>
                  setInput({ ...input, amount: Number(e.target.value) })
                }
                type="number"
                className="form-control"
              />
            </div>

            <div className="mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <div>
            {accounts.length > 1 ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account, i) => (
                    <tr key={i}>
                      <td>{account.description}</td>
                      <td>{account.date}</td>
                      <td>{account.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No Records yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
