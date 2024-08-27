import { LoginBG } from '../../styles';
import { BrandRegister, InfluencerRegister } from './Forms';
import { Tabs } from '../../components/Tabs';

const Register = () => (
    <LoginBG className="login-signup">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-lg-7 col-sm-12 col-12 aloa-bg-color">
                    <div className="description-review-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Tabs initTab="Influencer">
                                        <div class="dec-review-topbar nav">
                                            <Tabs.Tab label="Influencer">Influencer</Tabs.Tab>
                                            <Tabs.Tab label="Brand">Brand</Tabs.Tab>
                                        </div>
                                        <div class="tab-content dec-review-bottom">
                                            <Tabs.Panel label="Influencer">
                                                <InfluencerRegister />
                                            </Tabs.Panel>
                                            <Tabs.Panel label="Brand">
                                                <BrandRegister />
                                            </Tabs.Panel>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </LoginBG>
)

export default Register;