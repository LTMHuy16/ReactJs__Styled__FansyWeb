import * as Styled from './Footer.styled'

import ButtonCustom from '../Button/ButtonCustom'
import Grid from '../Grid'
import Section from '../Section'

import footerImg1 from '../../../assets/images/footerImg1.png'
import footerImg2 from '../../../assets/images/footerImg2.png'
import LogoImg from '../../../assets/images/logo-2.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance, FaDribbble, FaPhone, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import InstagramImgs from '../../../assets/fakeData/InstagramImg'
import { ImageBackGround } from '../ImageBackGround'


const Footer = () => {

  return (
    <Styled.Footer>
        <ImageBackGround 
          src={footerImg1}
          right="0"
          top="0"
        />
        <ImageBackGround 
          src={footerImg2}
          left="0"
          top="50%"
        />

        <Section>
          <Styled.Wrapper>
            <Styled.InfoFooter>
              <img src={LogoImg} />
              <p>
                Power of choice is untrammelled &amp; when nothing prevents our being able
              </p>
              <ul>
                <li>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaBehance />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaDribbble />
                  </a>
                </li>
              </ul>
            </Styled.InfoFooter>
            <Styled.SubtribeFooter>
              <h4>Subscribe Our Newsletters</h4>
              <Styled.NewLetterForm action='#'>
                <input type="email" placeholder='Enter Your Email' />
                <div>
                <ButtonCustom
                  background='var(--main-color)'
                  shapeColor='var(--black)'
                >
                  Subscribe Now
                </ButtonCustom>
                </div>
              </Styled.NewLetterForm>
            </Styled.SubtribeFooter>
          </Styled.Wrapper>
        </Section>

        <Section>
          <Grid
            col={1}
            smCol={2}
            lgCol={4}
            xlCol={4}
          >
            <Styled.LinkList>
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#">Company History</a></li>
                <li><a href="#">Latest News &amp; Blog</a></li>
                <li><a href="#">Popular Services</a></li>
                <li><a href="#">Business &amp; Consulting</a></li>
                <li><a href="#">Financial Planning</a></li>
              </ul>
            </Styled.LinkList>
            <Styled.LinkList>
              <h5>Company</h5>
                <ul>
                  <li><a href="#">About Comapny</a></li>
                  <li><a href="#">World Wide Clients</a></li>
                  <li><a href="#">Happy People’s</a></li>
                  <li><a href="#">Winning Awards</a></li>
                  <li><a href="#">Company Statics</a></li>
                </ul>
            </Styled.LinkList>
            <Styled.LinkList>
              <h5>Contact Us</h5>
              <p>
                Untrammelled &amp; nothing preven our being able
              </p>
              <ul>
                <li>
                  <FaPhone />
                  <a href="#">Latest</a>
                </li>
                <li>
                  <FaEnvelopeOpen />
                  <a href="#">Popular</a>
                </li>
                <li>
                  <FaMapMarkerAlt />
                  <a href="#">Business</a>
                </li>
              </ul>
            </Styled.LinkList>
            <Styled.LinkList>
              <h5>Follow Instagram</h5>
              <Grid 
                col={3}
                columnGap={5}
                rowGap={5}
              >
                {InstagramImgs?.map((item, i) => (
                  <div 
                    key={i}
                    style={{backgroundImage: `url(${item.img})`}}
                  >
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </div>
                ))}
              </Grid>
            </Styled.LinkList>
          </Grid>
        </Section>
    </Styled.Footer>
  )
}

export default Footer