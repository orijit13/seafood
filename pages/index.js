
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {

  //Isotope
  useEffect(() => {
    $(function () {
      var filterList = {
        init: function () {
        // MixItUp plugin

        $("#portfoliolist").mixitup({
          targetSelector: ".portfolio",
          filterSelector: ".filter",
          effects: ["fade"],
          easing: "snap",
          // call the hover effect
          onMixEnd: filterList.hoverEffect(),
        });
        },

        hoverEffect: function () {
        // Simple parallax effect
        $("#portfoliolist .portfolio").hover(
          function () {
          $(this)
            .find(".label")
            .stop();

          $(this)
            .find("img")
            .stop();

          },
          function () {
          $(this)
            .find(".label")
            .stop();

          $(this)
            .find("img")
            .stop();

          }
        );
        },
      };

      // Run the show!
      filterList.init();
      });
      //Start Flex slider
      $(".flexslider").flexslider({
        animation: "slide",
        start: function (slider) {
          $("body").removeClass("loading");
        },
      });
      //End Flex slider
  }, []);
  //End Isotope

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Head>
        <title>Sea Food A Hotal and Restaurants</title>
        <script type="text/javascript" src="/js/jquery.mixitup.min.js"></script>
        <script type="text/javascript" src="/js/jquery.flexslider.js"></script>
      </Head>
      <div className="banner">
        <Header />
        <div className="logo">
          <a href="/"><Image src="/images/logo.png" alt="Logo" width={250} height={250} layout="fixed" /></a>
        </div>
        <div className="slider">
          <section className="slider">
            <div className="flexslider">
              <ul className="slides">
              <li>
                <p>
                  Hen an unknown printer took a galley of type and scrambled it
                  to make a type specimen<br />
                  book. It has survived not only five centuries, but also the
                  leap into electronic
                </p>
              </li>
              <li>
                <p>
                  In a free hour, when our power of choice is untrammelled and
                  when nothing prevents our being<br />
                  able to do what we like best, every pleasure is to be welcomed
                  and every pain avoided.
                </p>
              </li>
              <li>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur<br />
                  magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className="seegrid">
        <div className="container">
          <div className="seegrid-main">
            <div className="col-md-6 seegrid-left">
              <span className="flyfish"> </span>
              <h3>MANY DESKTOP PUBLISHING PACKAGES AND WEB PAG</h3>
              <p>
                the first true generator on the Internet. It uses adictionary of
                over 200 Latin words, combined witha handful of model sentence
                structures, togenerate Lorem Ipsum which looks reasonable. The
                generated Lorem
              </p>
              <p>
                the first true generator on the Internet. It uses adictionary of
                over 200 Latin words, combined witha handful of model sentence
                structures, togenerate Lorem Ipsum which looks reasonable. The
                generated Lorem
              </p>
            </div>
            <div className="col-md-6 seegrid-right">
              <Image src="/images/gr.jpg" alt="" width={508} height={381} layout="responsive" />
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="gallery-inf">
        <div className="container">
          <div className="gallery-main">
            <div className="work-bottom">
              <ul id="filters" className="clearfix">
                <li>
                  <span className="filter cr" data-filter="app card icon logo web">
                  </span>
                </li>
                <li><span className="filter fi" data-filter="app"> </span></li>
                <li><span className="filter san" data-filter="card"> </span></li>
                <li><span className="filter octo" data-filter="icon"> </span></li>
              </ul>
              <div id="portfoliolist">
                <div className="portfolio app mix_all">
                  <div className="portfolio-wrapper">
                    <Link href="/"><a  className="b-link-stripe b-animate-go thickbox">
                      <Image src="/images/gr1.jpg" alt="" width={320} height={240} layout="responsive" />
                      <div className="b-wrapper">
                        <h2 className="b-animate b-from-left b-delay03"></h2>
                        </div>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="portfolio icon mix_all">
                  <div className="portfolio-wrapper">
                    <Link href="/"><a  className="b-link-stripe b-animate-go thickbox">
                      <Image src="/images/gr2.jpg" alt="" width={320} height={240} layout="responsive" />
                      <div className="b-wrapper">
                        <h2 className="b-animate b-from-left b-delay03"></h2>
                        </div>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="portfolio card mix_all">
                  <div className="portfolio-wrapper">
                    <Link href="/"><a className="b-link-stripe b-animate-go thickbox">
                      <Image src="/images/gr3.jpg" alt="" width={320} height={240} layout="responsive" />
                      <div className="b-wrapper">
                        <h2 className="b-animate b-from-left b-delay03"></h2>
                        </div>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="portfolio logos mix_all">
                  <div className="portfolio-wrapper">
                    <Link href="/"><a className="b-link-stripe b-animate-go thickbox">
                      <Image src="/images/gr4.jpg" alt="" width={320} height={240} layout="responsive" />
                      <div className="b-wrapper">
                        <h2 className="b-animate b-from-left b-delay03"></h2>
                        </div>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="portfolio card mix_all">
                  <div className="portfolio-wrapper">
                    <Link href="/"><a className="b-link-stripe b-animate-go thickbox">
                      <Image src="/images/gr5.jpg" alt="" width={320} height={240} layout="responsive" />
                      <div className="b-wrapper">
                        <h2 className="b-animate b-from-left b-delay03"></h2>
                      </div>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className="portfolio app mix_all">
                  <div className="portfolio-wrapper">
                    <Link href="/"><a className="b-link-stripe b-animate-go thickbox">
                      <Image src="/images/gr6.jpg" alt="" width={320} height={240} layout="responsive" />
                      <div className="b-wrapper">
                        <h2 className="b-animate b-from-left b-delay03"></h2>
                        </div>
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <div className="see-info">
        <div className="container">
          <div className="see-info-main">
            <div className="see-info-top">
              <span className="mess"> </span>
              <h3>RECENT NEWS</h3>
              <span className="long-line"> </span>
              <p>
                content here', making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as
                their default model text,
              </p>
            </div>
            <div className="see-info-bottom">
              <div className="see-info-grid col-md-4">
                <Image src="/images/bis.jpg" alt="" width={320} height={213} layout="responsive" />
                <h3>YOU NEED TO BE SURE THERE</h3>
                <span className="line"> </span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <div className="see-info-bwn">
                  <a href="#">LEARN MORE</a>
                </div>
              </div>
              <div className="see-info-grid col-md-4">
                <Image src="/images/stra.jpg" alt="" width={320} height={213} layout="responsive" />
                <h3>YOU NEED TO BE SURE THERE</h3>
                <span className="line"> </span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <div className="see-info-bwn">
                  <a href="#">LEARN MORE</a>
                </div>
              </div>
              <div className="see-info-grid col-md-4 inf">
                <Image src="/images/sup.jpg" alt="" width={320} height={213} layout="responsive" />
                <h3>YOU NEED TO BE SURE THERE</h3>
                <span className="line"> </span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </p>
                <div className="see-info-bwn">
                  <a href="#">LEARN MORE</a>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
