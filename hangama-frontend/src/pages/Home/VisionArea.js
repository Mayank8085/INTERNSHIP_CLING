export const VisionArea = () => (
    <section class="vision-area pt-100 pb-100 bg-white  landing-ques">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading text-center wow fadeInUp  animated" style={{
                        visibility: 'visible',
                        animationName: 'fadeInUp'
                    }}>
                        <h2 class="section-title mb-50">A powerful, end-to-end influencer marketing platform</h2>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="mr-lg-5">
                        <img src={require("../../assets/images/vision/01.png")} class="img-fluid  wow fadeInLeft  animated" data-wow-delay="0.2s" alt=""
                            style={{
                                visibility: 'visible',
                                animationDelay: '0.2s',
                                animationName: 'fadeInLeft'
                            }} />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="ml-lg-5">
                        <div class="media pre-card pre-primary rounded align-items-center p-4 position-relative overflow-hidden  wow fadeInUp  animated" data-wow-delay="0.2s"
                            style={{
                                visibility: 'visible',
                                animationDelay: '0.2s',
                                animationName: 'fadeInUp'
                            }}>
                            <span class="h1 icon2 theme-color">
                                <img src={require("../../assets/images/vision/02.png")} class="img-fluid pr-10" alt="" />
                            </span>
                            <div class="media-body content ml-3">
                                <h5>Safe, simple payments
                                </h5>
                                <p class="para mb-0">
                                    Effortlessly compensate influencers using HungamaPayments – the service that ensures all work is completed before influencers are paid.
                                </p>
                            </div>
                        </div>

                        <div class="media pre-card pre-primary rounded align-items-center p-4 mt-4 position-relative overflow-hidden wow fadeInUp  animated" data-wow-delay="0.4s"
                            style={{
                                visibility: 'visible',
                                animationDelay: '0.4s',
                                animationName: 'fadeInUp'
                            }}>
                            <span class="h1 icon2 theme-color">
                                <img src={require("../../assets/images/vision/03.png")} class="img-fluid pr-10" alt="" />
                            </span>
                            <div class="media-body content ml-3">
                                <h5>100,000+ creators waiting to partner with you
                                </h5>
                                <p class="para mb-0">Design public offers that qualified candidates can apply to while you simultaneously find and pitch additional creators using our Discover tool.

                                </p>
                            </div>
                        </div>

                        <div class="media pre-card pre-primary rounded align-items-center p-4 mt-4 position-relative overflow-hidden  wow fadeInUp  animated" data-wow-delay="0.6s"
                            style={{
                                visibility: 'visible',
                                animationDelay: '0.6s',
                                animationName: 'fadeInUp'
                            }}>
                            <span class="h1 icon2 theme-color">
                                <img src={require("../../assets/images/vision/04.png")} class="img-fluid pr-10" alt="" />
                            </span>
                            <div class="media-body content ml-3">
                                <h5>Control everything within your company dashboard</h5>
                                <p class="para mb-0">
                                    Build campaigns, stay on top of messages and complete transactions with ease using our powerful but intuitive influencer marketing platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)