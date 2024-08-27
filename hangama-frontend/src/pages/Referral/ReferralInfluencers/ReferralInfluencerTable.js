export const ReferralInfluencerTable = () => {
  return (
    <>
      <table class="table table-bordered text-inputs-searching width-cstm text-left mt-2">
        <thead class="bg-info text-white">
          <tr>
            <th width="30px">#</th>
            <th>INFLUNCERS NAME </th>
            <th>OFFER AMOUNT</th>
            <th>CAMPAIGN AMOUNT</th>
            <th>SOCIAL LINK</th>
            <th>CONTACT NO</th>
            <th>EMAIL</th>
            <th>REFERRAL AMOUNT</th>
            <th>REFERRAL DATE </th>
            <th>STATUS</th>
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
              John
            </td>
            <td>200</td>
            <td>100</td>
            <td>www.instagram.com</td>
            <td>9990179856</td>
            <td>test@gmail.com</td>
            <td>$5</td>
            <td>05/Jan/2022</td>
            <td class="green">Converted</td>
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
              John
            </td>
            <td>200</td>
            <td>100</td>
            <td>www.instagram.com</td>
            <td>9990179856</td>
            <td>test@gmail.com</td>
            <td>$5</td>
            <td>05/Jan/2022</td>
            <td class="green">Converted</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img
                alt="avatar"
                class="rounded-circle mr-2"
                src={require("../../assets/img/influencer/coco.png")}
                width="20px;"
              />
              John
            </td>
            <td>200</td>
            <td>100</td>
            <td>www.instagram.com</td>
            <td>9990179856</td>
            <td>test@gmail.com</td>
            <td>$5</td>
            <td>05/Jan/2022</td>
            <td class="green">Converted</td>
          </tr>
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
                placeholder="Influencers Name"
              />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Offer Amount"
              />
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
                placeholder="Social Link"
              />
            </th>
            {/* <th>
            <select class="form-control">
              <option>Social Platform</option>
              <option>Facbook</option>
              <option>Twitter</option>
              <option>Instagram</option>
            </select>{" "}
          </th> */}

            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Contact No"
              />
            </th>
            <th>
              <input type="text" class="form-control" placeholder="Email" />
            </th>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Referral Amount"
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
            Showing 1 to 3 of 3 entries
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
