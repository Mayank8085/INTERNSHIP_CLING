import React from "react";
import HeroImg from "../../assets/images/hero/hero-1.png"

export const Hero = () => (
    // <!-- Hero -->
<div class="hero-1 oh pos-rel" style={{background: `url(${require('../../assets/images/hero/banner-bg.png')})`}}>
        {/* <!-- container --> */}
        <div class="container">
            {/* <!-- row --> */}
            <div class="row align-items-center">
                {/* <!-- col --> */}
				   <div class="col-lg-7 d-block d-sm-none">
                    <div class="hero-1-thumb-15 wow fadeInUp animated" data-wow-delay="0.4s">
                        <img class="img-fluid wow fadeInRight animated" src={require("../../assets/images/hero/hero-1.png")} alt="hero-2"/>
                    </div>
                </div>
				
				
                <div class="col-lg-6">
                    <div class="hero-1-content wow fadeInLeft animated">
                        <h1 class="title  wow fadeInUp animated" data-wow-delay="0.4s">Work With Trusted Hungama influencers to Promote Your Products and Services
                        </h1>
                        
                        <div class="hero-1-button-group mb-2">
                            <a href="#" class="btn theme-btn  wow fadeInUp animated" data-wow-delay="0.8s"> Discover The Best Hungama 
                                <i class="uil uil-angle-right-b ml-2 mb-2"></i></a>
                        </div>

                        <p class=" wow fadeInUp animated" data-wow-delay="0.6s">
                            Want to see it in action ? <a href="#" class="link">Take a self guided tour!</a>
                        </p>
                    </div>
                </div>
                {/* <!-- /col --> */}
                {/* <!-- col --> */}
                <div class="col-lg-6 d-none d-sm-block">
                    <div class="hero-1-thumb-15 wow fadeInUp animated" data-wow-delay="0.4s">
                        <img class="img-fluid wow fadeInRight animated" src={require("../../assets/images/hero/hero-1.png")} alt="hero-1"/>
                    </div>
                </div>
                {/* <!-- /col --> */}
            </div>
            {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
     </div>
    // // <!-- /Hero -->

    // <div class="hero-1 oh pos-rel" style={{background: `url(${require('../../assets/images/hero/banner-bg.png')})`}}>
    //     <div class="container">
    //         <div class="row align-items-center">
    //             <div class="col-lg-7 d-block d-sm-none">
    //                 <div class="hero-1-thumb-15 wow fadeInUp animated" data-wow-delay="0.4s">
    //                     <img class="img-fluid wow fadeInRight animated" src={require("../../assets/images/hero/hero-1.png")} alt="hero-1" />
    //                 </div>
    //             </div>
    //             <div class="col-lg-6">
    //                 <div class="hero-1-content wow fadeInLeft animated">
    //                     <h1 class="title  wow fadeInUp animated" data-wow-delay="0.4s">Work With Trusted Hungama influencers to Promote Your Products and Services
    //                     </h1>
    //                     <div class="hero-1-button-group mb-2">
    //                         <a href="#" class="btn theme-btn  wow fadeInUp animated" data-wow-delay="0.8s"> Discover The Best Hungama
    //                             <i class="uil uil-angle-right-b ml-2 mb-2"></i></a>
    //                     </div>
    //                     <p class=" wow fadeInUp animated" data-wow-delay="0.6s">
    //                         Want to see it in action ? <a href="#" class="link">Take a self guided tour!</a>
    //                     </p>
    //                 </div>
    //             </div>
    //             <div class="col-lg-6 d-none d-sm-block">
    //                 <div class="hero-1-thumb-15 wow fadeInUp animated" data-wow-delay="0.4s">
    //                     <img class="img-fluid wow fadeInRight animated" src={require("../../assets/images/hero/hero-1.png")} alt="hero-1" />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
)
