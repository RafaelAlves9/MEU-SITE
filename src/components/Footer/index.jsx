import { Footer } from "./styled";
import Linkedin from './images/linkedin.png'
import Git from './images/github.png'
import Whats from './images/whats.png'

export const FooterPage = () => {

    return (
        <Footer>
            &copy; Rafael Alves 2022
            <div>
                <ul>
                    <li><a target='_blank' href="https://www.linkedin.com/in/Rafael-Alves412/"><img src={Linkedin} alt="linkedin"/></a></li>
                    <li><a target='_blank' href="https://github.com/RafaelAlves9"><img src={Git} alt="github" /></a></li>
                    <li><a target='_blank' href="https://wa.me/5521967112523?text=Ol%C3%A1%2C+vim+pelo+site%21"><img src={Whats} alt="whatsapp" /></a></li>
                </ul>
            </div>
        </Footer>
    )
}