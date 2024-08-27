import React, { useMemo } from "react";
import moment from "moment/moment";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import { GlobalFilter } from "../../components/tableFilters/GlobalFilter";
import { ColumnFilter } from "../../components/tableFilters/ColumnFilter";

export const BadgesTable = ({ setShowModal, influBadgeData }) => {
  const COLS = [
    {
      Header: "ID",
      Footer: "",
      accessor: "id",
      Filter: ColumnFilter,
    },
    {
      Header: "BADGE ICON",
      Footer: "",
      accessor: "image",
      Filter: ColumnFilter,
    },
    {
      Header: "BADGE NAME",
      Footer: "",
      accessor: "badge_name",
      Filter: ColumnFilter,
    },
    {
      Header: "EARNED DATE",
      Footer: "",
      accessor: (row) => {
        return row?.earned_date
          ? moment(row.earned_date).format("DD-MM-YYYY")
          : "";
      },
      Filter: ColumnFilter,
    },
    {
      Header: "DESCRIPTION",
      Footer: "",
      accessor: "description",
      Filter: ColumnFilter,
    },
    {
      Header: "STATUS",
      Footer: "",
      accessor: "status",
      Filter: ColumnFilter,
    },
    {
      Header: "DETAILS",
      Footer: "",
      accessor: "details",
      Filter: ColumnFilter,
    },
  ];
  const columns = useMemo(() => COLS, []);
  const data = influBadgeData;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state, 
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <div class="container-fluid">
      <div class="card card-dashboard-calendar text-center mb-2 ">
        <table
          {...getTableProps()}
          class="table table-bordered text-inputs-searching width-cstm text-center mt-2"
        >
          <thead class="bg-info text-white">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td {...columns.getFooterProps}>{column.render("Footer")}
                    <div>
                      {column.canFilter ? column.render('Filter') : null}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
          {/* <tfoot>
            <tr>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="#"
                  width="30px"
                />{" "}
              </th>
              <th>
                <input type="text" class="form-control" placeholder="Badge" />
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Badge Name"
                />
              </th>

              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Earned Date"
                  width="150px"
                />{" "}
              </th>
              <th>
                <input
                  disabled=""
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  width="150px"
                />
              </th>
              <th>
                <select class="form-control">
                  <option value="">Status</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Accepted">Accepted</option>
                </select>
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Action"
                  disabled=""
                />{" "}
              </th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};
