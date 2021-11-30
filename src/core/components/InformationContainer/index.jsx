import './style.scss'
export const InformationContainer = () => {
    return (
        <div className="informationContainer">
            <div className="topLane">
                <button><a href="/about">ABOUT</a></button>
            </div>
            <div className="midLane">
                <a href="https://www.facebook.com/debaters.toolkit/"><button><i class="fab fa-facebook-square"></i></button></a>
                <a href="https://twitter.com/ANQ_SocDem"><button><i class="fab fa-twitter-square"></i></button></a>
                <a href="https://github.com/anhnguyenquy"><button><i class="fab fa-github-square"></i></button></a>
                <a href="https://www.patreon.com/user?u=60734242"><button><i class="fab fa-patreon"></i></button></a>
            </div>
            <div className="botLane">
                <div className="introText">
                    <div>Debaters' toolkit is an open-source software licensed under the <a href="https://choosealicense.com/licenses/mit/"><span>MIT license</span></a> that aims to be useful to all debaters. Our motions are collected from various sources. While we strive to update the database as regularly as possible, we cannot warrant absolute correctness for all motions. If you have any issue with our content or detect any bug in our app, please contact us at <a href="mailto: support@debaterstoolkit.com"><span>support@debaterstoolkit.com</span></a>.</div>
                    <div>© 2021 Anh Nguyen Quy.</div>
                </div>
            </div>
        </div>
    )
}