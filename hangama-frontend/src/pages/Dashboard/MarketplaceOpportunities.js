import User from "../../assets/img/influencer/users/5.jpg";
const data = [
    {
        title: 'Website Design Facebook',
        desc: 'SEL Web Design South Africa',
        avatar: require("../../assets/img/users/5.jpg"),
        dueDate: '09/30/2021'
    },
    {
        title: 'Let\'s try to google search "Onshorer"',
        desc: 'Jessica Gury is the co-founder and CEO of Teuko, an online community […]',
        avatar: require("../../assets/img/users/5.jpg"),
        dueDate: ''
    },
    {
        title: 'Crystalex-Amethyst',
        desc: 'Crystalex-Amethystschool  […]',
        avatar: require("../../assets/img/users/5.jpg"),
        dueDate: '11/28/2025'
    }
]

export const MarketplaceOpportunities = () => {
    return (
        <div class="card custom-card card-dashboard-calendar pb-4">
            <label class="main-content-label mb-2 pt-1">New Marketplace Opportunities
            </label>
            <table class="table table-hover m-b-0 transcations mt-2">
                <tbody>
                    <tr>
                        <td class="wd-5p">
                            <div class="main-img-user avatar-md"> <img alt="avatar" class="rounded-circle mr-3" src={User} /> </div>
                        </td>
                        <td>
                            <div class="d-flex align-middle ml-3">
                                <div class="d-inline-block">
                                    <h6 class="mb-1"><b>Website Design Facebook</b></h6>
                                    <p class="mb-0 tx-13 text-muted">SEL Web Design South Africa<br />
                                        Due Date:
                                        09/30/2021
                                    </p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="wd-5p">
                            <div class="main-img-user avatar-md"> <img alt="avatar" class="rounded-circle mr-3" src={User} /> </div>
                        </td>
                        <td>
                            <div class="d-flex align-middle ml-3">
                                <div class="d-inline-block">
                                    <h6 class="mb-1"><b>Let's try to google search "Onshorer"</b></h6>
                                    <p class="mb-0 tx-13 text-muted">Jessica Gury is the co-founder and CEO of Teuko, an online community […]  </p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="wd-5p">
                            <div class="main-img-user avatar-md"> <img alt="avatar" class="rounded-circle mr-3" src={User} /> </div>
                        </td>
                        <td>
                            <div class="d-flex align-middle ml-3">
                                <div class="d-inline-block">
                                    <h6 class="mb-1"><b>Crystalex-Amethyst</b></h6>
                                    <p class="mb-0 tx-13 text-muted">Crystalex-Amethystschool  […]<br />Due Date:
                                        11/28/2025
                                    </p>
                                    {/* </p> */}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn ripple btn-outline-primary btn-rounded text-cente">View All</button>
        </div>
        // <div class="card custom-card card-dashboard-calendar pb-4">
        //     <label class="main-content-label mb-2 pt-1">New Marketplace Opportunities</label>
        //     <table class="table table-hover m-b-0 transcations mt-2">
        //         <tbody>
        //             {data.map((d,i)=><Opportunity opportunity={d} key={i}/>)}
        //         </tbody>
        //     </table>
        //     <button class="btn ripple btn-outline-primary btn-rounded text-cente">View All</button>
        // </div>
    )
}

const Opportunity = ({ opportunity }) => (
    <tr>
        <td class="wd-5p">
            <div class="main-img-user avatar-md"> <img alt="avatar" class="rounded-circle mr-3" src={opportunity.avatar} /> </div>
        </td>
        <td>
            <div class="d-flex align-middle ml-3">
                <div class="d-inline-block">
                    <h6 class="mb-1"><b>{opportunity.title}</b></h6>
                    <p class="mb-0 tx-13 text-muted">{opportunity.desc}<br />
                        {opportunity.dueDate ? `Due Date: ${opportunity.dueDate}` : ''}
                    </p>
                </div>
            </div>
        </td>
    </tr>
)