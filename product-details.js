// product-details.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    // Assuming you have a function that fetches product details by ID
    const productDetails = getProductDetailsById(productId);

    // Populate the product details section
    const productDetailsContainer = document.getElementById('product-details');
    if (productDetails) {
        productDetailsContainer.innerHTML = `
        
        <div class="pqr">
        <div>
             <div class="nav">
        <div class="imaa"><img src="Preview.png"></div>
       
    
          <div class="home"><a href="index.html"><img src="home.png" width="25" ></a></div>  
            
                <div class="search-container">
                    <input type="text" id="searchInput" placeholder="Search for products, brands and more">
                    <i class="fas fa-search search-icon"></i>
                    
                </div>
                
                
                <div>
                    <div class="user">
                        <img id="openProfileImg" src="user.png" width="20" >
                        <br> profile
                    </div>
                    <div id="profileSlider" class="slider">
                        <div class="slider-content">
                            <!-- Profile details here -->
                            <p>User Profile</p>
                            
                            <img class="pu" src="profile-user.png"  alt="...">
                            <div class="signclose">
                            <button class="sign">Sign In </button>
                            <!-- <p class="puu">Name: John Doe</p>
                            <p class="puuu">Email: john.doe@example.com</p> -->
                            <!-- Add more profile details as needed -->

                            <button class="sign" id="closeProfileBtn">Close</button>
                        </div>
                        <div class="full">
                            <button class="full-width"> Your Account</button>
                            <button class="full-width"> Your Orders</button>
                            <button class="full-width"><img class="q" src="settings.png" alt="..." width="25">  Settings</button>
                            <button class="full-width"><img class="q" src="question.png" alt="..." width="25"> Help</button>
                        </div>
                        </div>
                    </div>
                   
                   
                <div class="like">
                    <img src="heart.png" width="20" >
                    <br> wishlist
                   
                </div>
                
                       <div class="cart">
                        <img src="cart.png" width="20" >
                        <br> cart
                        <span class="badge" id="cart-badge">0</span>
                    </div>
                   </div>
                   <div>
                   
                   

                    <button class="yo" onclick= "window.location.href='fashion.html'">Fashion</button>
                    <button class="yo" onclick="window.location.href='beauty.html'">Beauty</button>
                    <button class="yo" onclick="window.location.href='lifestyle.html'">Lifestyle</button>
                    
                </div>       
          </div>
          
            <img src="${productDetails.image}" alt="${productDetails.name}" class="product-img">
            </div>
            <div class="abc">
            <h1>${productDetails.name}</h1>
            
           <div class="price">
            <h2> ${productDetails.price}</h2>
            
             <p class="off">${productDetails.off}</p>
             </div>
              ${productDetails.sizes ? `
                        <div class="sizes">
                            <h3>Available Sizes:</h3>
                            <button class="size-btn" onclick="setActive(this)">S</button>
                            <button class="size-btn" onclick="setActive(this)">M</button>
                            <button class="size-btn" onclick="setActive(this)">L</button>
                            <button class="size-btn" onclick="setActive(this)">XL</button>
                        </div>` : ''}

                        ${productDetails.colors ? `
                            <div class="colors">
                                
                                <button class="color-btn1" onclick="setActive(this)"> </button>
                                <button class="color-btn2" onclick="setActive(this)"> </button>
                                <button class="color-btn3" onclick="setActive(this)"> </button>
                                <button class="color-btn4" onclick="setActive(this)"> </button>
                            </div>` : ''}
              <div class="butt">

            <button class="addc" onclick="addToCart()"><img class="c" src="cart2.png" alt="..." width="25">  Add To Cart</button>
            
             <button class="addw"><img class="h" src="heart.png" alt="..." width="20">   Wishlist</button>
</div>
             <br>
             <br>
             <div class="proto">
             <ul>
             <li>100% Original Products</li>
             <li>Pay on delivery might be available</li>
             <li>Easy 14 days returns and exchanges</li>
             </ul>
             </div>
             <br>
            <p class="desc">${productDetails.description}</p>
           
             </div>
             </div>
                
        `;
    } else {
        productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    }

    initializeCartCount();
});

function getProductDetailsById(productId) {
    // Replace this with your actual data fetching logic
    const products = {
        1: {name: 'HUDA BEAUTY EYESHADOW PALETTE', image: 'p1.jpg', price: '₹1,499', off: '  MRP ₹ ̶1̶9̶9̶9̶ ', description: 'The ultimate everyday palette! Own your power with this luxurious line-up of buttery-smooth golds, coppers, browns, and neutrals in a variety of textures including intensely pigmented mattes, creamy gel-liner hybrids, foiled chrome metallics, AND a blingy wet-look shimmer. <br> <br> Effortlessly easy to apply, build, and blend, this intensely pigmented palette is perfect for creating your everyday beat, a dramatic smoky eye, a rich metallic look, and so much more, your options are LIMITLESS! Simply use a brush or your fingertips to apply; get ready to feel inspired and look confident AF.' },
        2: {name: 'COMFY 3 SEATER VELVET FABRIC COUCH IN IVORY ', image: 'p2.jpg', price: ' ₹19,800 ', off: 'MRP ₹ ̶2̶3̶,9̶9̶9̶ ', description: 'LUXURIOUS STYLE - Inspired by mid-century, modern, and contemporary styles, Adept embodies graceful intrigue with a tufted design and flared armrests, making it a trendy update to a home or apartment <br> VELVET UPHOLSTERY - Upholstered in stain-resistant performance velvet, the Adept couch embodies chic appeal. Its rich hue and luxe texture entitle it a stunning focal point in the living room or bedroom <br> SUPPORTIVE COMFORT - A sofa abounding in style and function, Adept quickly becomes a well-loved lounge spot in your home with its roomy depth, spacious low profile, and densely padded seat <br> TUFTED DESIGN - Deep inset tufts lend themselves to the square design on Adept. Each tufted square provides subtle plumpness that reveals repressed, gentle splendor that makes a bold statement <br> SUPERIOR CONSTRUCTION - Built to endure everyday use, this sturdy, durable couch sits atop splayed black birch wood frame with non-marking alloy foot sleeves protect your floors'},
        3: {name: 'ANTHEAA GEOMETRIC PRINT SHEATH MIDI DRESS', image: 'p3.jpg', price: '₹1379', off: '  MRP ₹ ̶2̶2̶9̶9̶', description:' ', sizes: true},
        4: {name: 'ROUGE PUR COURTURE CARING SATIN LIPSTICK', image: 'p4.jpg', price: '₹2999', off: '  MRP ₹ ̶3̶7̶9̶9̶', description: ' ', colors:true},
        5: {name: 'RED CLASSIC SUEDE STELETTO HEELS', image: 'p5.jpg', price: '₹3499', off: '  MRP ₹ ̶ ̶4̶5̶8̶9̶', description: ' '},
        6: {name: 'H&M WOMEN CO-ORD SET', image: 'pf1.jpg', price: '₹1600', off: ' ', description: ' '},
        7: {name: "OVERSIZED MEN'S T-SHIRT", image: 'pf77.jpg', price: '₹2499', off: ' ', description: ' '},
        8: {name: 'NIKE SPORT SHOES', image: 'pf22.jpg', price: '₹499', off: ' ', description: ' '},
        9: {name: 'JACK&JONES BLACK LEATHER FAUX JACKET', image: 'pf4.jpg', price: '₹1999', off: ' ', description: ' '},
        10: {name: 'WIDE LEG PANTS FOR WOMEN', image: 'pf5.jpg', price: '₹1389', off: ' ', description: ' '},
        11: {name: 'GOLD PLATED NECKPIECE', image: 'pf6.jpg', price: '₹16499', off: ' ', description: ' '},
        12: {name: 'STYLS COTTON MAXI DRESS', image: 'pf3.jpg', price: '₹2399', off: ' ', description: ' '},
        13: {name: 'WILDCRAFT BLACK LEATHER BOOTS', image: 'pf8.jpg', price: '₹5499', off: ' ', description: ' '},
        14: {name: 'MAYBELLEN MASCARA', image: 'pb1.jpg', price: '₹849', off: ' ', description: ' '},
        15: {name: 'BECCA NUDE CREME MATT LIPSTICK', image: 'pb2.jpg', price: '₹1499', off: ' ', description: ' ', colors:true},
        16: {name: 'MAKEUP BRUSHES', image: 'pb3.jpg', price: '₹3499', off: ' ', description: ' '},
        17: {name: 'GEORGE ARMANI PARFUME', image: 'pb4.jpg', price: '₹7500', off: ' ', description: ' '},
        18: {name: 'SEPHORA FULL COVERAGE FOUNDATION(SHADE 04)', image: 'pb5.jpg', price: '₹2489', off: ' ', description: ' '},
        19: {name: 'NYX EYE SHADOW PALLETE', image: 'pb6.jpg', price: '₹3499', off: ' ', description: ' '},
        20: {name: 'LANCOME SILK LIPSTICK ', image: 'pb7.jpg', price: '₹3499', off: ' ', description: ' ', colors: true},
        21: {name: 'MAC LIP GLOSS(SHADE 023)', image: 'pb8.jpg', price: '₹3499', off: ' ', description: ' '},
        22: {name: '1-SEATER SOFA(FABRIC, BLUE)  ', image: 'pl4.jpg', price: '₹3499', off: ' ', description: ' '},
        23: {name: 'WHITE TABLE WITH 2 CHAIRS SET', image: 'pl2.jpg', price: '₹3499', off: ' ', description: ' '},
        24: {name: 'IKEA HANGING MIRROR ', image: 'pl3.jpg', price: '₹3499', off: ' ', description: ' '},
        25: {name: 'BLACK GLASS VASE WITH DREIED WHEAT STACKS', image: 'pl9.jpg', price: '₹3499', off: ' ', description: ' '},
        26: {name: 'WHITE CERAMIC VASE', image: 'pl5.jpg', price: '₹1199', off: ' ', description: ' '},
        27: {name: 'THREE METAL PLANTERS', image: 'pl6.jpg', price: '₹2699', off: ' ', description: ' '},
        28: {name: 'COUCH SET (FABRIC, GREY) ', image: 'pl7.jpg', price: '₹23499', off: ' ', description: ' '},
        29: {name: 'BLACK PHOTOFRAMES (2 PIECES)', image: 'pl8.jpg', price: '₹1604', off: ' ', description: ' '},

        
        
        
    };

    return products[productId];
}

function setActive(button) {
    const buttons = document.querySelectorAll('.size-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function setActive(button) {
    const buttons = document.querySelectorAll('.color-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}


function addToCart() {
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    updateCartBadge(cartCount);
}

function initializeCartCount() {
    const cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
}

function updateCartBadge() {
    const cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const openProfileImg = document.getElementById('openProfileImg');
    const closeProfileBtn = document.getElementById('closeProfileBtn');
    const profileSlider = document.getElementById('profileSlider');

    // Open profile slider when profile image is clicked
    openProfileImg.addEventListener('click', function() {
        profileSlider.classList.add('active');
    });

    // Close profile slider when close button is clicked
    closeProfileBtn.addEventListener('click', function() {
        profileSlider.classList.remove('active');
    });
});