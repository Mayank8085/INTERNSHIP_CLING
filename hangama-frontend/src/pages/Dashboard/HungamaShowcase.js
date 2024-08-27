const data = [
    {
        avatar: require("../../assets/img/users/5.jpg"),
        title: 'Diana Rose Rosqueta Influencer Spotlight',
        desc: 'ased in the Philippines, Diana Rose Rosqueta started writing about her […]'
    },
    {
        avatar: require("../../assets/img/users/5.jpg"),
        title: 'Jessica Gury Influencer Spotlight',
        desc: 'Jessica Gury is the co-founder and CEO of Teuko, an online community […]'
    }, {
        avatar: require("../../assets/img/users/5.jpg"),
        title: 'Lindsay Detwiler Influencer Spotlight',
        desc: 'Lindsay Detwiler is a USA Today Bestselling author and high school  […]'
    }
]

export const HungamaShowcase = () => {
    return (
        <div class="card custom-card card-dashboard-calendar pb-4">
            <label class="main-content-label mb-2 pt-1">Hungama Showcase</label>
            <table class="table table-hover m-b-0 transcations mt-2">
                <tbody>
                    {data.map((d, i) => <Showcase item={d} key={i} />)}
                </tbody>
            </table>
            <button class="btn ripple btn-outline-primary btn-rounded text-cente">View All</button>
        </div>
    )
}

const Showcase = ({ item }) => (
    <tr>
        <td class="wd-5p">
            <div class="main-img-user avatar-md"> <img alt="avatar" class="rounded-circle mr-3" src={item.avatar} /> </div>
        </td>
        <td>
            <div class="d-flex align-middle ml-3">
                <div class="d-inline-block">
                    <h6 class="mb-1"><b>{item.title}</b></h6>
                    <p class="mb-0 tx-13 text-muted">{item.desc}</p>
                </div>
            </div>
        </td>
    </tr>
)