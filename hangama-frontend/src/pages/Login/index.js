import { BrandLogin, InfluencerLogin } from './Forms';
import { LoginBG } from '../../styles';
import { Tabs } from '../../components/Tabs';

const Login = () => (
    <LoginBG className="login-signup">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-xl-6 col-lg-7 col-sm-12 col-12 aloa-bg-color">
                    <div class="description-review-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <Tabs initTab="Influencer">
                                        <div class="dec-review-topbar nav">
                                            <Tabs.Tab label="Influencer">Influencer</Tabs.Tab>
                                            <Tabs.Tab label="Brand">Brand</Tabs.Tab>
                                        </div>
                                        <div class="tab-content dec-review-bottom">
                                            <Tabs.Panel label="Influencer">
                                                <InfluencerLogin />
                                            </Tabs.Panel>
                                            <Tabs.Panel label="Brand">
                                                <BrandLogin />
                                            </Tabs.Panel>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LoginBG>
)

export default Login;