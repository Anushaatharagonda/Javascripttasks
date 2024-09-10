document.addEventListener('DOMContentLoaded', () => {
    const clothingData = [
        {
            name: 'Men Navy Blue Solid Sweatshirt',
            brand: 'United colors of beneton',
            price: 'Rs.2599',
            image: 'menTshirt.jpeg'
        },
        {
            name: 'Men Black MAMFP T7 Sweat Sporty Jacket',
            brand: 'puma',
            price: 'Rs.7599',
            image: 'menjacket.png'
        },
        {
            name: 'Men Black Action Parkview Lifestyle Shoes',
            brand: 'Hush Puppies',
            price: 'Rs.6599',
            image: 'shoe.jpeg'
        },
        {
            name: 'Women Black Solid Light Weight Leather Jacket',
            brand: 'BARESKIN',
            price: 'Rs.9999',
            image: 'womenjacket.jpeg'
        },
        {
            name: 'Women Blue Shirt Dress',
            brand: 'SASSAFRAS',
            price: 'Rs.5200',
            image: 'womentop.jpeg'
        }
    ];

    const accessoriesData = [
        {
            name: 'Unisex Silver-Toned Series 3 Smart Watch',
            brand: 'Apple',
            price: 'Rs.31999',
            image: 'smartwatch.jpeg'
        },
        {
            name: 'Unisex Black & Green ReFlex 2.0 Smart Band',
            brand: 'Fastrack',
            price: 'Rs.1999',
            image: 'smartwatch2.jpeg'
        },
        {
            name: 'Unisex Black Galaxy Fit Fitness Band',
            brand: 'Samsung',
            price: 'Rs.2599',
            image: 'smartwatch1.jpeg'
        },
        {
            name: 'Gear IconX Black Cord-Free Fitness Earbuds',
            brand: 'Samsung',
            price: 'Rs.13990',
            image: 'earbuds.jpeg'
        },
        {
            name: 'White 2nd Generation AirPods With Charing Case',
            brand: 'Apple',
            price: 'Rs.14999',
            image: 'earbud1.jpeg'
        }
    ];

    function generateCard(product) {
        return `
            <div class="card">
                <img src="${product.image}" alt="${product.name}">
                <div class="content">
                    <p>${product.name}</p>
                    <p class="brand">${product.brand}</p>
                    <p class="money">${product.price}</p>
                </div>
            </div>
        `;
    }

    function Section(sectionId, data) {
        const section = document.getElementById(sectionId);
        section.innerHTML = data.map(generateCard).join('');
    }

    Section('clothing', clothingData);
    Section('accessories', accessoriesData);
});
