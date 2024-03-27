let loggedInUser = localStorage.getItem('users');

        if (loggedInUser) {
            loggedInUser = JSON.parse(loggedInUser);
            
            // Hiển thị thông tin người dùng (email)
            document.getElementById('email').innerText = loggedInUser.email;
            

        } else {
            window.location.href = "./pages/login.html";
            
        }

        

        
        /// Hàm để lưu danh sách sản phẩm vào Local Storage
        function saveProductsToLocal() {
        // Khởi tạo mảng để lưu các sản phẩm
        let products = [
        {
           id: 1,
           name: "Iphone 6",
           price: "2.500.000đ",
           image: "./assets/images/iphone6.jpg",
        },
        {
           id: 2,
           name: "Iphone 7 plus",
           price: "7.000.000đ",
           image: "./assets/images/iphone7.jpg",
        },
        {
           id: 3,
           name: "Iphone 8 plus",
           price: "8.000.000đ",
           image: "./assets/images/iphone8.jpg",
        },
        {
           id: 4,
           name: "Iphone 10",
           price: "10.000.000đ",
           image: "./assets/images/iphone10.jpg",
        },
        {
           id: 5,
           name: "Iphone 11",
           price: "16.000.000đ",
           image: "./assets/images/iphone11.jpg"
        },
        {
           id: 6,
           name: "Iphone 12",
           price: "20.000.000đ",
           image: "./assets/images/iphone12.jpg",
        },
        {
           id: 7,
           name: "Iphone 13 promax",
           price: "30.000.000",
           image: "./assets/images/iphone13.jpg",
        },
        {
           id: 8,
           name: "Iphone 14 promax",
           price: "35.000.000đ",
           image: "./assets/images/iphon14.jpg",
        },
        {
           id: 9,
           name: "Iphone 15 promax",
           price: "37.000.000đ",
           image: "./assets/images/iphone15.jpg",
        },
        {
           id: 10,
           name: "Samsung S23 Ultra",
           price: "9.000.000đ",
           image: "./assets/images/samsung.jpg",
        },
        {
           id: 11,
           name: "OPPO A57",
           price: "5.000.000đ",
           image: "./assets/images/oppo.jpg",
        },
        {
           id: 12,
           name: "Redmi Note 12",
           price: "12.000.000đ",
           image: "./assets/images/redmi.jpg",
        },
    ];
           

        // Lặp qua mỗi phần tử sản phẩm trên trang
        document.querySelectorAll('.product').forEach(productElement => {
        // Tạo một đối tượng sản phẩm từ thông tin trong phần tử sản phẩm
        let product = {
            id: productElement.id, // Sử dụng id của phần tử sản phẩm làm id sản phẩm
            name: productElement.querySelector('h3').innerText,
            price: productElement.querySelector('p').innerText.replace('Giá: ', ''),
            image: productElement.querySelector('img').src
        };

        // Thêm đối tượng sản phẩm vào mảng sản phẩm
        products.push(product);
    });

    // Lưu mảng sản phẩm vào Local Storage
    localStorage.setItem('products', JSON.stringify(products));
}



// Khởi tạo giỏ hàng trống
let cart = [];

// Lấy danh sách tất cả các nút "Mua"
let buyButtons = document.querySelectorAll('.product button');

// Lặp qua từng nút "Mua" để thêm sự kiện click
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Lấy thông tin sản phẩm từ phần tử cha của nút được nhấn
        let productElement = button.closest('.product');
        let productName = productElement.querySelector('h3').innerText;
        // Trích xuất giá từ văn bản giá
        let productPrice = productElement.querySelector('p').innerText;
        let productId = productElement.id;

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        let productIndex = cart.findIndex(item => item.productId === productId);
        if (productIndex !== -1) {
            // Nếu đã có, tăng quantity lên
            cart[productIndex].quantity++;
        } else {
            // Nếu chưa có, thêm sản phẩm vào giỏ hàng với quantity = 1
            cart.push({ productId: productId, productName: productName, productPrice: productPrice, quantity: 1 });
        }

        // Lưu giỏ hàng vào Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));

        
    });
});




function redirectToAnotherPage() {
    window.location.href = "./pages/cart.html ";
}


document.getElementById('email').onclick = function() {
    // Thực hiện hành động bạn muốn khi nhấn vào phần tử có id là 'email' ở đây
    window.location.href = "./pages/admin.user.html ";
};