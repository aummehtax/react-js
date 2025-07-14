import profilePic from '../assets/img1.jpg'

function Card() {
    return(
        <>
            <div class="box">
                <div class="bg-color">
                    <div class="round">
                        <img src={profilePic} alt="error" class="img" />
                    </div>
                </div>

                <div class="text-div">
                    <h1>Coding lab</h1>
                    <span>YouTuber & Blogger</span>
                </div>

                <div class="divBtn">
                    <button class="btn">Subscribe</button>
                    <button class="btn">Message</button>
                </div>
            </div>
      </>  
    );
}

export default Card
