import Coco from "../../assets/img/influencer/coco.png";
export const EngagementDetails = () =>{
    return(
        <div class="card custom-card card-dashboard-calendar pb-4">
                            <label class="main-content-label mb-2 pt-1">ENGAGEMENT DEATILS
                            </label>
                            <div class="row">
                                <div class="col-sm-2">
                                    <img alt="avatar" src={Coco} />
                                </div>
                                <div class="col-sm-10 media-body add-campaigns ml-0 mr-4">

                                    <h5>Coca Cola Zero Calories</h5>
                                    <p>Category- Sports/Health</p>
                                    <h5>Energy Drink</h5>

                                    <div class="products-tabel" style={{ background: "#deebf7" }}>
                                        <table class="table mb-0 border-top table-bordered mt-30">
                                            <tbody>
                                                <tr>
                                                    <th>Target</th>
                                                    <th>Engage</th>
                                                    <th>Audience Profile</th>
                                                    <th>Value</th>
                                                </tr>
                                                <tr>
                                                    <td>5000</td>
                                                    <td>2%</td>
                                                    <td>18-25, Asian, Graduate</td>
                                                    <td>$15</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>


                                    <h5>Description </h5>
                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter</p>

                                    <p class="mt-3	"><b>Designed by</b> Almora in Austria, this Puma Shoes has</p>




                                </div>


                            </div>
                            <a href="campaigns-overview.php" class="btn ripple btn-outline-primary btn-rounded text-cente">Read More</a>
                        </div>
    )
}