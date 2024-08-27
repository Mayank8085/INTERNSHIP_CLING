const data = [
    {
        title: 'Flicker',
        desc: 'Milestone2',
        src: require("../../assets/img/users/8.jpg"),
        price: '$37.285',
        date: '4 Apr 2020'
    },
    {
        title: 'Flicker',
        desc: 'App improvement',
        src: require("../../assets/img/users/5.jpg"),
        price: '$45.234',
        date: '12 Jan 2020'
    },
    {
        title: 'Intoxica',
        desc: 'Milestone',
        src: require("../../assets/img/users/6.jpg"),
        price: '$23.452',
        date: '23 Jan 2020'
    }, {
        title: 'Digiwatt',
        desc: 'Sales executive',
        src: require("../../assets/img/users/7.jpg"),
        price: '$78.001',
        date: '4 Apr 2020'
    }
]

export const RecentTranscations = () => {
    return (
        <div class="card custom-card card-dashboard-calendar pb-4">
            <label class="main-content-label mb-2 pt-1">Recent transcations</label>
            <table class="table table-hover m-b-0 transcations mt-2">
                <tbody>
                    {data.map((trans, i) => <Transcation key={i} tarnscation={trans}/>)}
                </tbody>
            </table>
            <button class="btn ripple btn-outline-primary btn-rounded text-cente">View All</button>
        </div>
    )
}

const Transcation = ({tarnscation}) => (
    <tr>
        <td class="wd-5p">
            <div class="main-img-user avatar-md">
                <img alt="avatar" class="rounded-circle mr-3" src={tarnscation.src} />
            </div>
        </td>
        <td>
            <div class="d-flex align-middle ml-3">
                <div class="d-inline-block">
                    <h6 class="mb-1">{tarnscation.title}</h6>
                    <p class="mb-0 tx-13 text-muted">{tarnscation.desc}</p>
                </div>
            </div>
        </td>
        <td class="text-right">
            <div class="d-inline-block">
                <h6 class="mb-2 tx-15 font-weight-semibold">{tarnscation.price}<i class="fas fa-level-up-alt ml-2 text-success m-l-10"></i></h6>
                <p class="mb-0 tx-11 text-muted">{tarnscation.date}</p>
            </div>
        </td>
    </tr>
)