export const DownloadArea = () => (
    <div class="download-area color-1 question landing-ques" >
        <div class="overlay-bg " style={{ backgroundImage: `url(${require('../../assets/images/bg/bg2.png')})` }}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 ">
                        <div id="content_block_07">
                            <h1 class="text-white">You have questions. We have answers!</h1>
                            <ul class="accordion-box">
                                <li class="accordion block active-block">
                                    <div class="acc-btn active">
                                        <h4><span>Q.</span>How much does Hungamacost to use?</h4>
                                    </div>
                                    <div class="acc-content current">
                                        <div class="content">
                                            <p>For brands, we offer membership designs that are customized to practically any financial plan.Look at our estimating page to think about our self-administration or 100% oversaw plan alternatives.Temporarily we are offering a 20% rebate on yearly plans when they are paid forthright.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="accordion block">
                                    <div class="acc-btn">
                                        <h4><span>Q.</span>Can I get a demo of Intellifluence?</h4>
                                    </div>
                                    <div class="acc-content">
                                        <div class="content">
                                            <p>Our independent image demo empowers brands to review our foundation beginning to end at their own speed. Figure out how to make a mission, Discover Influencers and asset a mission to pay Influencers safely!
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="accordion block">
                                    <div class="acc-btn">
                                        <h4><span>Q.</span>Which social media networks does Hungamasupport?</h4>
                                    </div>
                                    <div class="acc-content">
                                        <div class="content"><p>Hungamacurrently supports the following social networks:</p>
                                            <ul class="faq-socila">
                                                <li>Facebook (Profile & pages)</li>
                                                <li> Twitter</li>
                                                <li>Instagram</li>
                                                <li> Pinterest</li>
                                                <li>YouTube</li>
                                                <li> LinkedIn</li>
                                                <li> Twitch</li>
                                                <li>  TikTok</li>
                                                <li> Reddit</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <img src={require("../../assets/images/bg/work.png")} alt="" class="s8-mockup img-fluid wow fadeInDown  animated" data-wow-delay="0.4s"
                            style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInDown' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)