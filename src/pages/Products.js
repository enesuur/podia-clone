

import './Products.css';
import HeroImg from '../assets/digital_products-hero.png';
import CoursesImg from '../assets/digital_products-courses.png';
import DownloadsImg from '../assets/digital_products-downloads.png';
import WebinarImg from '../assets/digital_products-webinars.png';
import CardBasketImg from '../assets/digital_products-icon-cart.svg';
import StartImg from '../assets/Stars__1_.png';


export default function Products() {

    return (
        <>
            {/* Includes hero section. */}
            <section>
                <div className='hero container'>
                    <article className='hero-article'>
                        <h1 className='hero-title'>DIGITAL PRODUCTS</h1>
                        <h2 className='hero-subtitle'>Sell online courses, coaching sessions, webinars, workshops, ebooks, and anything you can think of on xodia</h2>
                        <p>Get everything you need in one place that you own. Xodia takes care of hosting products, taking payments, and getting products to your customers. And you always control your own work.</p>
                        <p className='article-signup-btn'>
                            <a href=''>Get your free account</a>
                        </p>
                    </article>
                    <figure className='showcase-figure'>
                        <picture>
                            <img src={HeroImg} alt='Hero Image' loading='lazy' />
                        </picture>
                    </figure>
                </div>
            </section>

            {/* Includes product's motto information. */}
            <section>
                <div className='product-motto container'>
                    <div className='motto-header'>
                        <h2 className='text-header'>All you have to do is make the product. Xodia takes care of the details for you.</h2>
                        <p className='text-subheader'>Xodia lets you make your sales page, take payments, and give your customers access all in one place. Host and sell your products without needing to figure out a handful of new tools.</p>
                    </div>
                    <div className='card-container'>
                        <article className='card-item'>
                            <figure>
                                <picture>
                                    <img src={CardBasketImg} alt='' />
                                </picture>
                            </figure>
                            <h2>Your customers log in, and your products are there for them</h2>
                            <p>Your Xodia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they’ve bought from you.</p>
                        </article>
                        <article className='card-item'>
                            <figure>
                                <picture>
                                    <img src={CardBasketImg} alt='' />
                                </picture>
                            </figure>
                            <h2>Checkout and sales are handled for you</h2>
                            <p>You don’t have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Xodia site takes care of payments for you.</p>
                        </article>
                        <article className='card-item'>
                            <figure>
                                <picture>
                                    <img src={CardBasketImg} alt='' />
                                </picture>
                            </figure>
                            <h2>Upload your product. Make your sales page. Done.</h2>
                            <p>You could sell a digital product by this afternoon. Xodia handles hosting, sales pages, checkout, and delivery. All you need is something to sell</p>
                        </article>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='product-types'>
                        <h2 className='text-header'>What kinds of products can you sell with Xodia?</h2>
                        <p className='text-subheader'>Xodia gives you the flexibility to sell whatever you want. That means you have more ways to grow your creator business.</p>
                    </div>
                    <div className='showcase'>
                        <article className='showcase-article'>
                            <h1>ONLINE COURSES</h1>
                            <h2>Beautiful online courses you can build in moments</h2>
                            <p>Make a beautiful online course for your customers. Xodia hosts your course. That means all the lessons, files, and videos you want handled for you.</p>
                            <a href='#'>Learn more about courses →</a>
                        </article>
                        <figure className='showcase-figure'>
                            <picture>
                                <img src={CoursesImg} alt='Download Img'></img>
                            </picture>
                        </figure>
                    </div>
                </div>
            </section>

            <section> 
                <div className='container'>
                    <div className='star-rate-wrapper'>
                        <figure>
                            <img src={StartImg} alt='Start-rated-5'></img>
                        </figure>

                        <div className='quote-wrapper'>
                            <p>
                            We didn’t have to stress about technical details or custom coding. Using Xodia made selling our first eBook quick, efficient, and fun.
                            </p>
                            <p>— Matt & Steph, Plant-based food bloggers</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='showcase'>
                        <article className='showcase-article'>
                            <h1>ONLINE COURSES</h1>
                            <h2>Beautiful online courses you can build in moments</h2>
                            <p>Make a beautiful online course for your customers. Xodia hosts your course. That means all the lessons, files, and videos you want handled for you.</p>
                            <a href='#'>Learn more about courses →</a>
                        </article>
                        <figure className='showcase-figure'>
                            <picture>
                                <img src={DownloadsImg} alt='Download Img'></img>
                            </picture>
                        </figure>
                    </div>
                </div>
            </section>

            <section> 
                <div className='container'>
                    <div className='star-rate-wrapper'>
                        <figure>
                            <img src={StartImg} alt='Start-rated-5'></img>
                        </figure>

                        <div className='quote-wrapper'>
                            <p>
                            We didn’t have to stress about technical details or custom coding. Using Xodia made selling our first eBook quick, efficient, and fun.
                            </p>
                            <p>— Matt & Steph, Plant-based food bloggers</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <div className='container'>

                    <div className='showcase'>
                        <article className='showcase-article'>
                            <h1>ONLINE COURSES</h1>
                            <h2>Beautiful online courses you can build in moments</h2>
                            <p>Make a beautiful online course for your customers. Xodia hosts your course. That means all the lessons, files, and videos you want handled for you.</p>
                            <a href='#'>Learn more about courses →</a>
                        </article>
                        <figure className='showcase-figure'>
                            <picture>
                                <img src={WebinarImg} alt='Webinar Img'></img>
                            </picture>
                        </figure>
                    </div>
                </div>
            </section>

            
            <section>
                <div className='container'>
                    <div className='showcase'>
                        <article className='showcase-article'>
                            <h1>ONLINE COURSES</h1>
                            <h2>Beautiful online courses you can build in moments</h2>
                            <p>Make a beautiful online course for your customers. Xodia hosts your course. That means all the lessons, files, and videos you want handled for you.</p>
                            <a href='#'>Learn more about courses →</a>
                        </article>
                        <figure className='showcase-figure'>
                            <picture>
                                <img src={HeroImg} alt='Hero Img'></img>
                            </picture>
                        </figure>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='showcase'>
                        <article className='showcase-article'>
                            <h1>ONLINE COURSES</h1>
                            <h2>Beautiful online courses you can build in moments</h2>
                            <p>Make a beautiful online course for your customers. Xodia hosts your course. That means all the lessons, files, and videos you want handled for you.</p>
                            <a href='#'>Learn more about courses →</a>
                        </article>
                        <figure className='showcase-figure'>
                            <picture>
                                <img src={HeroImg} alt='Hero Img'></img>
                            </picture>
                        </figure>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className='banner-wrapper'>
                        <h2>Get your free Xodia account</h2>
                        <p>Join the 150,000+ creators who use Xodia to create websites, sell digital products, and build online communities.</p>
                        <a href='#'>Sign up for free</a>
                    </div>
                </div>
            </section>
        </>
    )
}