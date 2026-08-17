document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive Like Buttons for Products
    const likeButtons = document.querySelectorAll('.product-footer .likes');

    likeButtons.forEach(likeBtn => {
        likeBtn.style.cursor = 'pointer';
        likeBtn.addEventListener('click', function () {
            const heartIcon = this.querySelector('i');
            
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                heartIcon.style.color = '#8b949e';
                this.style.color = '#8b949e';
            } else {
                this.classList.add('liked');
                heartIcon.style.color = '#00f2ff';
                this.style.color = '#00f2ff';
            }
        });
    });

    // 2. Search Bar Interaction
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');

    function handleSearch() {
        const query = searchInput.value.trim();
        if (query !== "") {
            alert(`Searching for: "${query}" in DealHubX catalog...`);
            searchInput.value = "";
        }
    }

    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // 3. Category Selection Active State
    const catCards = document.querySelectorAll('.cat-card');
    catCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            catCards.forEach(c => c.style.borderColor = '#30363d');
            card.style.borderColor = '#00f2ff';
            card.style.boxShadow = '0 0 10px rgba(0, 242, 255, 0.3)';
        });
    });

    // 4. Newsletter Subscription Handling
    const subscribeBtn = document.querySelector('.newsletter-box .btn-primary');
    const emailInput = document.querySelector('.newsletter-box input');

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to DealHubX Tech Deals!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    console.log("DealHubX Interactive Scripts Loaded Successfully!");
});