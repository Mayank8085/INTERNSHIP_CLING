import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export const Testimonial = () => {
    function createSlide() {
        return (
          <SwiperSlide>
              <div class="testimonial-box text-center p-4">
                            <div class="testi-img-user">
                                <img src={require("../../assets/images/avatar/1.png")} alt="" class="rounded-circle testi-user mx-auto d-block"/>
                            </div>
                            <img src={require("../../assets/images/icon-img/client-quote.png")} class="mt-4 pt-2" alt=""/>

                            <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
                                family
                                Their
                                separate existence is a myth For science, music, sport, etc, europe their Eopean
                                languages common the theory of popular words.</h4>

                            <div class="testi-border mt-4"></div>
                            <p class="text-uppercase text-muted mb-0 mt-4 f-14">Developer</p>
                            <h5 class="mt-2">Jeremiah Eskew</h5>
                        </div>

          </SwiperSlide>
        );
      }
      function createSlide2() {
        return (
          <SwiperSlide>
                 
                 <div class="testimonial-box text-center p-4">
                            <div class="testi-img-user">
                                <img src={require("../../assets/images/avatar/2.png")} alt="" class="rounded-circle testi-user mx-auto d-block"/>
                            </div>
                            <img src={require("../../assets/images/icon-img/client-quote.png")} class="mt-4 pt-2" alt=""/>

                            <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
                                family
                                Their
                                separate existence is a myth For science, music, sport, etc, europe their Eopean
                                languages common the theory of popular words.</h4>

                            <div class="testi-border mt-4"></div>
                            <p class="text-uppercase text-muted mb-0 mt-4 f-14">Designer</p>
                            <h5 class="mt-2">Cameron Green</h5>
                        </div>


          </SwiperSlide>
        );
      }
      function createSlide3() {
        return (
          <SwiperSlide>
              
              <div class="testimonial-box text-center p-4">
                            <div class="testi-img-user">
                                <img src={require("../../assets/images/avatar/3.png")} alt="" class="rounded-circle testi-user mx-auto d-block"/>
                            </div>
                            <img src={require("../../assets/images/icon-img/client-quote.png")} class="mt-4 pt-2" alt=""/>

                            <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
                                family
                                Their
                                separate existence is a myth For science, music, sport, etc, europe their Eopean
                                languages common the theory of popular words.</h4>

                            <div class="testi-border mt-4"></div>
                            <p class="text-uppercase text-muted mb-0 mt-4 f-14">Manager</p>
                            <h5 class="mt-2">Sammy Randolph</h5>
                        </div>
          </SwiperSlide>
        );
      }
    return(
        <div>
        <section class="testimonial-area bg-testimonial" id="testimonial">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading text-center wow fadeInUp animated">
                        <h5 class="section-meta ">Testimonial</h5>
                        <h2 class="section-title">What they say about<br/> us
                            honest reviews</h2>
              

                    </div>
                </div>
            </div>

            <div class="row justify-content-center mt-5">
                <div class="col-lg-8" style={{marginBottom:75}}>
                    <div class="testi-carousel">

                    </div>
        <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: false }}
    >
      {createSlide()}
      {createSlide2()}
      {createSlide3()}
    </Swiper>


                    </div>
                </div>
            </div>
    </section>
    <div class="cta-v1-section pt-0"/>
    </div>
    


                   

                    
    )
}
    
    // <div>
    // <section class="testimonial-area bg-testimonial" id="testimonial">
    //     <div class="container">
    //         <div class="row">
    //             <div class="col-lg-12">
    //                 <div class="section-heading text-center wow fadeInUp animated">
    //                     <h5 class="section-meta ">Testimonial</h5>
    //                     <h2 class="section-title">What they say about<br/> us
    //                         honest reviews</h2>
              

    //                 </div>
    //             </div>
    //         </div>

    //         <div class="row justify-content-center mt-5">
    //             <div class="col-lg-8" style={{marginBottom:75}}>
    //                 <div class="testi-carousel">

    //                     <div class="testimonial-box text-center p-4">
    //                         <div class="testi-img-user">
    //                             <img src={require("../../assets/images/avatar/1.png")} alt="" class="rounded-circle testi-user mx-auto d-block"/>
    //                         </div>
    //                         <img src={require("../../assets/images/icon-img/client-quote.png")} class="mt-4 pt-2" alt=""/>

    //                         <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
    //                             family
    //                             Their
    //                             separate existence is a myth For science, music, sport, etc, europe their Eopean
    //                             languages common the theory of popular words.</h4>

    //                         <div class="testi-border mt-4"></div>
    //                         <p class="text-uppercase text-muted mb-0 mt-4 f-14">Developer</p>
    //                         <h5 class="mt-2">Jeremiah Eskew</h5>
    //                     </div>

    //                     <div class="testimonial-box text-center p-4">
    //                         <div class="testi-img-user">
    //                             <img src={require("../../assets/images/avatar/2.png")} alt="" class="rounded-circle testi-user mx-auto d-block"/>
    //                         </div>
    //                         <img src={require("../../assets/images/icon-img/client-quote.png")} class="mt-4 pt-2" alt=""/>

    //                         <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
    //                             family
    //                             Their
    //                             separate existence is a myth For science, music, sport, etc, europe their Eopean
    //                             languages common the theory of popular words.</h4>

    //                         <div class="testi-border mt-4"></div>
    //                         <p class="text-uppercase text-muted mb-0 mt-4 f-14">Designer</p>
    //                         <h5 class="mt-2">Cameron Green</h5>
    //                     </div>

    //                     <div class="testimonial-box text-center p-4">
    //                         <div class="testi-img-user">
    //                             <img src={require("../../assets/images/avatar/3.png")} alt="" class="rounded-circle testi-user mx-auto d-block"/>
    //                         </div>
    //                         <img src={require("../../assets/images/icon-img/client-quote.png")} class="mt-4 pt-2" alt=""/>

    //                         <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
    //                             family
    //                             Their
    //                             separate existence is a myth For science, music, sport, etc, europe their Eopean
    //                             languages common the theory of popular words.</h4>

    //                         <div class="testi-border mt-4"></div>
    //                         <p class="text-uppercase text-muted mb-0 mt-4 f-14">Manager</p>
    //                         <h5 class="mt-2">Sammy Randolph</h5>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    // <div class="cta-v1-section pt-0"/>
    // </div>
    
    // <!-- Testimoninal -->
    // <section class="testimonial-area bg-testimonial pb-100" id="testimonial">
    //     <div class="container">
    //         <!-- row -->
    //         <div class="row">
    //             <!-- col -->
    //             <div class="col-lg-12">
    //                 <div class="section-heading text-center wow fadeInUp animated">
    //                     <h5 class="section-meta ">Testimonial</h5>
    //                     <h2 class="section-title">What they say about<br> us
    //                         honest reviews</h2>
              

    //                 </div>
    //             </div>
    //             <!-- col -->
    //         </div>
    //         <!-- /row -->

    //         <div class="row justify-content-center mt-5">
    //             <div class="col-lg-8">
    //                 <div class="testi-carousel">

    //                     <div class="testimonial-box text-center p-4">
    //                         <div class="testi-img-user">
    //                             <img src="images/avatar/1.png" alt="" class="rounded-circle testi-user mx-auto d-block">
    //                         </div>
    //                         <img src="images/icon-img/client-quote.png" class="mt-4 pt-2" alt="">

    //                         <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
    //                             family
    //                             Their
    //                             separate existence is a myth For science, music, sport, etc, europe their Eopean
    //                             languages common the theory of popular words.</h4>

    //                         <div class="testi-border mt-4"></div>
    //                         <p class="text-uppercase text-muted mb-0 mt-4 f-14">Developer</p>
    //                         <h5 class="mt-2">Jeremiah Eskew</h5>
    //                     </div>

    //                     <div class="testimonial-box text-center p-4">
    //                         <div class="testi-img-user">
    //                             <img src="images/avatar/2.png" alt="" class="rounded-circle testi-user mx-auto d-block">
    //                         </div>
    //                         <img src="images/icon-img/client-quote.png" class="mt-4 pt-2" alt="">

    //                         <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
    //                             family
    //                             Their
    //                             separate existence is a myth For science, music, sport, etc, europe their Eopean
    //                             languages common the theory of popular words.</h4>

    //                         <div class="testi-border mt-4"></div>
    //                         <p class="text-uppercase text-muted mb-0 mt-4 f-14">Designer</p>
    //                         <h5 class="mt-2">Cameron Green</h5>
    //                     </div>

    //                     <div class="testimonial-box text-center p-4">
    //                         <div class="testi-img-user">
    //                             <img src="images/avatar/3.png" alt="" class="rounded-circle testi-user mx-auto d-block">
    //                         </div>
    //                         <img src="images/icon-img/client-quote.png" class="mt-4 pt-2" alt="">

    //                         <h4 class="font-italic mt-4 pt-2">The European languages are members of the same
    //                             family
    //                             Their
    //                             separate existence is a myth For science, music, sport, etc, europe their Eopean
    //                             languages common the theory of popular words.</h4>

    //                         <div class="testi-border mt-4"></div>
    //                         <p class="text-uppercase text-muted mb-0 mt-4 f-14">Manager</p>
    //                         <h5 class="mt-2">Sammy Randolph</h5>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </section>
    // <!-- /Testimoninal -->

    // <!-- Cta -->
    // <div class="cta-v1-section pt-0"></div>
    
   
