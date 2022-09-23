import React from "react";

const AccountTable = ({ accounts }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map((record, i) => (
          <TableRow key={i} account={record} />
        ))}
      </tbody>
    </table>
  );
};

export default AccountTable;

const TableRow = ({ account }) => {
  return (
    <tr>
      <td>{account.description}</td>
      <td>{account.date}</td>
      <td>{account.amount}</td>
    </tr>
  );
};
