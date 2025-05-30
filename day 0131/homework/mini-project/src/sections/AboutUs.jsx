import './About.css'
const AboutUs = () => {
    const image = "https://cdn.prod.website-files.com/6560c067bb9a3b1d6f012aab/6560c067bb9a3b1d6f012d20_DSC00518.webp"
    const image2="https://images.dealersync.com/cloud/userdocumentprod/2770/images/service/service-banner-13.jpg?format=webp"
    return (
        <div id="about">
            <h1>About Us</h1>
            <p>Our company specializes in selling high-quality vehicles. We offer reliable, 
                inspected, and well-maintained cars. We work professionally, pay close attention to each customer, 
                and strive to help them find the most suitable vehicle.
                Customer satisfaction and long-term relationships are our top priorities.
                Contact us — and find your ideal car today!
            </p>
            <div id="image_div">
            <img src={image} width="600px"/>
            <img src={image2} width="638px" height="400px"/>
            </div>
        </div>
    )
}
export default AboutUs