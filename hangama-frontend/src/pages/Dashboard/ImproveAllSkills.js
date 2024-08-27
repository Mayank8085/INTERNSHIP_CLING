const data = [
    {
        title: 'How to Create the Best Content Marketing Strategy for Your Niche',
        desc: 'Content marketing can serve as a valuable lead generation tool for your brand.[…]'
    },
    {
        title: 'How You can Become a Brand Ambassador',
        desc: 'Based in the Philippines, Diana Rose Rosqueta started writing about her experiences[…]'
    },
    {
        title: '5 Lifestyle Bloggers You Need to Follow in 2019',
        desc: 'There are many blogs within the lifestyle niche, but a few stand out above the rest. […]'
    }
]

export const ImproveAllSkills = () => {
    return (
        <div class="card custom-card card-dashboard-calendar pb-4">
            <label class="main-content-label mb-2 pt-1">Improve Your Skills!</label>
            <table class="table table-hover m-b-0 transcations mt-2">
                <tbody>
                    <tr>
                        <td>
                            <div class="d-inline-block">
                                <h6 class="mb-1"><b>How to Create the Best Content Marketing Strategy for Your Niche</b></h6>
                                <p class="mb-0 tx-13 text-muted">Content marketing can serve as a valuable lead generation tool for your brand.[…]</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-inline-block">
                                <h6 class="mb-1"><b>How You can Become a Brand Ambassador</b></h6>
                                <p class="mb-0 tx-13 text-muted">Based in the Philippines, Diana Rose Rosqueta started writing about her experiences[…]</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="d-inline-block">
                                <h6 class="mb-1"><b>5 Lifestyle Bloggers You Need to Follow in 2019</b></h6>
                                <p class="mb-0 tx-13 text-muted">There are many blogs within the lifestyle niche, but a few stand out above the rest. […]</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button class="btn ripple btn-outline-primary btn-rounded text-cente">View All</button>
        </div>
        // <div class="card custom-card card-dashboard-calendar pb-4">
        //     <label class="main-content-label mb-2 pt-1">Improve Your Skills!</label>
        //     <table class="table table-hover m-b-0 transcations mt-2">
        //         <tbody>
        //             {data.map((d, i) => <Skill skill={d} key={i} />)}
        //         </tbody>
        //     </table>
        //     <button class="btn ripple btn-outline-primary btn-rounded text-cente">View All</button>
        // </div>
    )
}

const Skill = ({ skill }) => (
    <tr>
        <td>
            <div class="d-inline-block">
                <h6 class="mb-1"><b>{skill.title}</b></h6>
                <p class="mb-0 tx-13 text-muted">{skill.desc}</p>
            </div>
        </td>
    </tr>
)