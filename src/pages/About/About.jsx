import './style.scss'
import { useDeviceBreakPoint } from '../../hooks'
export const About = () => {
    const { isPhone, isTablet, isExtraSmall } = useDeviceBreakPoint()
    return (
        <div className="about">
            <div className="topStuffs">
                <div className="aboutHeader">About</div>
                <div className="aboutSubHeader">debaterstoolkit.com is a handy toolkit for all debaters.</div>
                <div className="aboutSubHeader">Search over 7000 motions, calculate break chances or use a free online timekeeping tool.</div>
                {
                    !isExtraSmall ?
                        <div className="aboutSubHeader">Help make debaterstoolkit.com better by contributing code, ideas and features at its <a href="https://github.com/anhnguyenquy/debaters-toolkit"><span>GitHub Repository</span></a>.</div>
                        :
                        <></>
                }
                <div className="aboutSubHeader">Special thanks to the following contributors:</div>
                <div className="contributors">
                    <div className="aboutSubHeaderInContributors">- <a href="https://www.facebook.com/hoangdieulinh215" id="specialATag"><span>Ms. Dieu Linh Hoang</span></a>for giving me the idea ;)</div>
                    <div className="aboutSubHeaderInContributors">- <a href="https://www.facebook.com/MojiDebate" id="specialATag"><span>Moji Debate</span></a> for their <a href="https://drive.google.com/drive/folders/1OX39izeTiz8DMFWhrw9v3qpk8fg3_ylV"><span>Motions for Vietnam Debate Community</span></a>.</div>
                    <div className="aboutSubHeaderInContributors">- <a href="https://www.facebook.com/puzzles.ams" id="specialATag"><span>Puzzles Ams</span></a> for their <a href="https://docs.google.com/spreadsheets/d/1e11Rh2G_Bb9mNARLhnA6WjqgDO3Np6QpYnasVqXkGZY/"><span>Motion Database 2020-2021</span></a>.</div>
                </div>
                <div className="aboutSubHeader">Follow me on social media or support my work by becoming a Patron:</div>
                <div className="icons">
                    <a href="https://www.facebook.com/debaters.toolkit/"><button><i class="fab fa-facebook-square"></i></button></a>
                    <a href="https://twitter.com/ANQ_SocDem"><button><i class="fab fa-twitter-square"></i></button></a>
                    <a href="https://github.com/anhnguyenquy"><button><i class="fab fa-github-square"></i></button></a>
                    <a href="https://www.patreon.com/user?u=60734242"><button><i class="fab fa-patreon"></i></button></a>
                </div>
            </div>
            <div className="bottomStuffs">
                <div className="aboutSubHeader">Licensed under<a href="https://choosealicense.com/licenses/mit/"><span>MIT license</span></a>.</div>
                <div className="aboutSubHeader">© 2021 Anh Nguyen Quy.</div>
            </div>
        </div>
    )
}