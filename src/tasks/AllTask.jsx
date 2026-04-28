import React from 'react'
import useAppData from '../hooks/useAppData';

function AllTask() {
    const {allData} = useAppData();
  return (
    <div className="all-tasks px-0 py-5!">
  <div className="task-table">

    {/* Header */}
    <div className="row header">
      <div>Employee Name</div>
      <div>All Task</div>
      <div>Active Task</div>
      <div>Completed</div>
      <div>Failed</div>
    </div>

    {/* Body */}
    {allData.employeesData.map(emp => {
      const tc = emp.taskCounts[0];
      return (
        <div className="row" key={emp.id}>
          <div className="emp-name">{emp.name}</div>
          <div>{tc.newTask}</div>
          <div>{tc.active}</div>
          <div>{tc.completed}</div>
          <div>{tc.failed}</div>
        </div>
      );
    })}

  </div>
</div>
  )
}

export default AllTask