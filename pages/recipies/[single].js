import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const singleRecipe = () => {

    return (
        <>
            <Head>
                <title>Single | Sea Food A Hotal and Restaurants</title>
            </Head>
            <Header />
            <div className="single">
                <div className="container">
                    <div className="single-main">
                        <div className="recipies-top">
                            <h3>RECIPES</h3>
                            <p>content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                        </div>
                        <div className="col-md-8 single-left">
                            <div className="single-left-top">
                                <h3>Different Recipes Menu</h3>
                                <Image src="/images/salad.jpg" alt="" width={500} height={300} layout="responsive" />
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            </div>
                            <div className="single-imagesprite">
                                <ul>
                                    <li><a href="#"><span className="fa"> </span></a></li>
                                    <li><a href="#"><span className="tw"> </span></a></li>
                                    <li><a href="#"><span className="g"> </span></a></li>
                                    <li><a href="#"><span className="be"> </span></a></li>
                                </ul>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="col-md-4 single-right">
                            <h3>CATGETIES</h3>
                            <div className="catgeories">
                                <ul>
                                    <li><a href="#">Fish caries</a></li>
                                    <li><a href="#">France fri</a></li>
                                    <li><a href="#">Crabe salad</a></li>
                                    <li><a href="#">Fish fri</a></li>
                                    <li><a href="#">octopus</a></li>
                                    <li><a href="#">Mixed Salads</a></li>
                                    <li><a href="#">Frans caries</a></li>
                                    <li><a href="#">All Tyes of seafoods</a></li>
                                </ul>
                            </div>
                            <h3>SUBSCRIBE</h3>
                            <div className="single-subscribe">
                                <h4>SUBSCRIBE FOR NEWS</h4>
                                <input type="text" placeholder="Email.." />
                                <input type="submit" placeholder="SUBSCRIBE" />
                            </div>
                            <div className="papular-tags">
                                <h3>POUPULAR TAGS</h3>
                                <ul>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Branding</a></li>
                                    <li><a href="#">Art</a></li>
                                    <li><a href="#">Developing</a></li>
                                    <li><a href="#">Css</a></li>
                                    <li><a href="#">Html</a></li>
                                    <li><a href="#">Wordpress</a></li>
                                    <li><a href="#">Photography</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default singleRecipe