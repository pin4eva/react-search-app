import React from "react";
import { membersData } from "./utils/members.data";

const MemberTable = () => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {membersData.map((member) => (
          <tr key={member.id}>
            <td>
              {member.firstName} {member.lastName}
            </td>
            <td>{member.gender}</td>
            <td>{member.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberTable;
