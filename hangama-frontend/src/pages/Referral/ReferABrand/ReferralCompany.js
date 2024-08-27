export const ReferralCompany = () => {
  return (
    <>
      <table class="table table-bordered text-inputs-searching width-cstm text-left mt-2">
        <thead class="bg-info text-white">
          <tr>
            <th width="30px">#</th>
            <th>NAME OF COMPANY</th>
            <th>OFFER AMOUNT</th>
            <th>CAMPAIGN AMOUNT</th>
            <th>CONTACT PERSON</th>
            <th>CONTACT NO</th>
            <th>EMAIL</th>
            <th>REFERRAL AMOUNT</th>
            <th>REFERRAL DATE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                alt="avatar"
                class="rounded-circle mr-2"
                src={require("../../assets/img/influencer/coco.png")}
                width="20px;"
              />
              Coca Cola Zero Calories
            </td>
            <td>200</td>
            <td>100</td>
            <td>John</td>
            <td>9990179856</td>
            <td>testgmail.com</td>
            <td>$400</td>
            <td>05/Jan/2022</td>
            <td class="green">Converted</td>
            <td>
              <button class="btn btn-success">
                <i class="fas fa-edit"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img
                alt="avatar"
                class="rounded-circle mr-2"
                src={require("../../assets/img/influencer/coco.png")}
                width="20px;"
              />
              Coca Cola Zero Calories
            </td>
            <td>200</td>
            <td>100</td>
            <td>John</td>
            <td>9990179856</td>
            <td>testgmail.com</td>
            <td>$400</td>
            <td>05/Jan/2022</td>
            <td class="red">Non Converted</td>
            <td>
              {/* <button class="btn btn-success">
              <i class="fas fa-edit"></i>
            </button> */}
            </td>
          </tr>
          <tr />
        </tbody>
        <tfoot>
          <tr>
            <th width="30px">
              <input type="text" class="form-control" placeholder="#" />{" "}
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Name of Company"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Offer Amount"
              />{" "}
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Campaign Amount"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Contact Person"
              />
            </th>
            <th>
              <input type="text" class="form-control" placeholder="Contact" />
            </th>
            <th>
              <input type="text" class="form-control" placeholder="Email" />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Credit Amount"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Referral Date "
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Status"
                disabled={true}
              />{" "}
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Action"
                disabled={true}
              />{" "}
            </th>
          </tr>
        </tfoot>
      </table>
      <div class="row">
        <div class="col-sm-12 col-md-5">
          <div
            class="dataTables_info"
            id="DataTables_Table_0_info"
            role="status"
            aria-live="polite"
          >
            Showing 1 to 2 of 2 entries
          </div>
        </div>
        <div class="col-sm-12 col-md-7">
          <div
            class="dataTables_paginate paging_simple_numbers"
            id="DataTables_Table_0_paginate"
          >
            <ul class="pagination">
              <li
                class="paginate_button page-item previous disabled"
                id="DataTables_Table_0_previous"
              >
                <a
                  href="#"
                  aria-controls="DataTables_Table_0"
                  data-dt-idx="0"
                  tabindex="0"
                  class="page-link"
                >
                  Previous
                </a>
              </li>
              <li class="paginate_button page-item active">
                <a
                  href="#"
                  aria-controls="DataTables_Table_0"
                  data-dt-idx="1"
                  tabindex="0"
                  class="page-link"
                >
                  1
                </a>
              </li>
              <li
                class="paginate_button page-item next disabled"
                id="DataTables_Table_0_next"
              >
                <a
                  href="#"
                  aria-controls="DataTables_Table_0"
                  data-dt-idx="2"
                  tabindex="0"
                  class="page-link"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
