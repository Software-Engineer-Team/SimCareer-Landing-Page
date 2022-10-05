import PageHeaderGeneral from "@utils/PageHeaderGeneral/PageHeaderGeneral";
import {
  ContactUsContainer,
  ContactUsContent,
  ContactUsContentLeft,
  ContactUsContentRight,
} from "./ContactUs.styled";

const ContactUs = () => {
  return (
    <>
      <PageHeaderGeneral
        bg="/images/contactus-bg.webp"
        headerTitle="Contact us"
      />
      <ContactUsContainer>
        <ContactUsContent>
          <div className="inner-content-reverse">
            <ContactUsContentRight>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.557755930271!2d106.65780085008001!3d10.768526492289245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee9ea1e3db3%3A0x3d7f82c1da98eff7!2zSOG6u20gMjg0LzQxIEzDvSBUaMaw4budbmcgS2nhu4d0LCBwaMaw4budbmcgMTQsIFF14bqtbiAxMCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1664968577271!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </ContactUsContentRight>
            <ContactUsContentLeft>
              <h1>Contact with our team</h1>
              <div>
                Please contact the Department in charge so that we can recommend
                and advise you directly about the service you are interested in.
                YOOT is always happy to listen and support you!
                <br />
              </div>
              <p>
                <strong>- Hotline</strong>: 1800 888 887 (Free)
              </p>
              <p>
                <strong>- Email</strong>: example@gmail.com
              </p>
            </ContactUsContentLeft>
          </div>
        </ContactUsContent>
      </ContactUsContainer>
    </>
  );
};

export default ContactUs;
