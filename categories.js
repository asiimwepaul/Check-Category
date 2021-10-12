const categories = [
    {id:1, title:'supermaket', sub:[
        {id:211,title:'Food Cupboard',sub:[
            {id:212, title: 'Sugar'},
            {id:213, title: 'Flours'},
            {id:214, title: 'Dried Beans, Grains & Rice'},
            {id:215, title: 'Snacks'},
            {id:216, title: 'Cooking Oil'},
            {id:217, title: 'Soft Drinks'},
            {id:218, title: 'Fruit Juice'},
            {id:219, title: 'Water'},
            {id:220, title: 'Coffe, Tea & Cocoa'},
            {id:221, title: 'Milk & Cream'},
            {id:222, title: 'Pasta'},
            {id:223, title: 'Breakfast Foods'},
            {id:224, title: 'Spices'}

        ] },
        {id:311,title:'Beers, Wines & Spirits',sub:[
            {id:312, title: 'Vodka'},
            {id:313, title: 'Red White'},
            {id:314, title: 'Liquor'},
            {id:315, title: 'Beers'},
            {id:316, title: 'White Wine'},
            {id:317, title: 'Whiskey'},
            {id:318, title: 'Champagne'},
         

        ] },
       
        {id:411,title:'Cleaning',sub:[
            {id:412, title: 'Laundry'},
            {id:413, title: 'Household Air Freshener'},
            {id:414, title: 'Toilet Cleaners'},
            {id:415, title: 'Toilet Paper, Wipes & Kitchen Towels'},
            {id:416, title: 'Household Cleaning'},
        ] },

        {id:511,title:'Baby Products',sub:[
            {id:512, title: 'Disposable Daipers'},
            {id:513, title: 'Wipes & Refills'},
            {id:514, title: 'Feeding'},
           
        ] },
    ]},

    {id:2, title:'Phones & Tablets', sub:[
        {id:231,title:'Mobile Phones',sub:[
            {id:232, title: 'Smartphones'},
            {id:233, title: 'Feature phones'},
            {id:234, title: 'Refurbished phones'}
        ] },

        {id:331,title:'Tables',sub:[
            {id:332, title: 'Tablets'},
            {id:333, title: 'Bags'}
        ] },

        {id:431,title:'Cell Phone Accessories',sub:[
            {id:432, title: 'Smart Watches'},
            {id:433, title: 'Batteries & Battery Packs'},
            {id:434, title: 'Cases & Clips'},
            {id:435, title: 'chargers'},
            {id:436, title: 'Data & Connectiviy'},
            {id:437, title: 'Headsets'},
            {id:438, title: 'Memory Cards'},
            {id:439, title: 'Selfie Sticks & Tripods'}
        ] },
    ]},
    
    {id:3, title:'Home & Office', sub:[
        {id:241,title:'Home & Kitchen',sub:[
            {id:242, title: 'Furniture'},
            {id:243, title: 'Home Decor'},
            {id:244, title: 'Bedding'},
            {id:245, title: 'Bath'},
            {id:246, title: 'Event & Party Supplies'},
            {id:247, title: 'Storage & Organization'},
            {id:248, title: 'Wall Art'},
            {id:249, title: 'Vacuums & Floor Care'},
            {id:250, title: 'Cleaning Supplies'},
            {id:251, title: 'Irons & Steamers'},
        ] },

        {id:341,title:'Kitchen & Dining',sub:[
            {id:342, title: 'Small appliances'},
            {id:343, title: 'Dining & Entertaining'},
            {id:344, title: 'Kitchen Utensils & Gadgets'},
            {id:345, title: 'Cookware'},
            {id:346, title: 'Coffee, Tea & Espresso'},
            {id:347, title: 'Storage & Organization'},
            {id:348, title: 'Bakeware'},
            {id:349, title: 'Cutlery & Knife Accessories'},
            {id:350, title: 'Food Service Equipment & Supplies'}
        ] },

        {id:441,title:'Office products',sub:[
            {id:442, title: 'Office & School Supplies'},
            {id:443, title: 'Office Electronics'},
            {id:444, title: 'Office Furniture & Lighting'},
            {id:445, title: 'chargers'},
            {id:446, title: 'Data & Connectiviy'},
            {id:447, title: 'Headsets'},
            {id:448, title: 'Memory Cards'},
            {id:449, title: 'Selfie Sticks & Tripods'}
        ] },

        {id:541,title:'Arts, Crafts & Sewing',sub:[
            {id:542, title: 'Sewing'},
            {id:543, title: 'Painting, Drawing & Art Supplies'},
            {id:434, title: 'Gift Wrapping Supplies'},
        ] },

        {id:641,title:'Tools & Home Improvements',sub:[
            {id:642, title: 'Power & Hand Tools'},
            {id:643, title: 'Electrical'},
            {id:644, title: 'Appliances'},
            {id:645, title: 'Safety & Security'},
            {id:646, title: 'Hardware'},
            {id:647, title: 'Kitchen & Bath Fixtures'},
            {id:648, title: 'Lighting'},
            {id:649, title: 'Fridges'}
        ] },
    ]},

    {id:4, title:'Electronics', sub:[
        {id:251,title:'Television & Video',sub:[
            {id:252, title: 'Televisions'},
            {id:253, title: 'DVD Players'},
            {id:254, title: 'LED & LCD TVs'},
            {id:255, title: 'Smart TVs'}
        ] },

        {id:351,title:'Camera & Photos',sub:[
            {id:352, title: 'Digital Cameras'},
            {id:353, title: 'Film Photography'},
            {id:354, title: 'Projectors'},
            {id:355, title: 'Video'},
            {id:353, title: 'Video Survillance'},
        ] },

        {id:451,title:'Home Audio',sub:[
            {id:452, title: 'Home Theatre Systems'},
            {id:453, title: 'Speakers'},
        ] },

        {id:551,title:'Audio',sub:[
            {id:552, title: 'Accessories'},
            {id:553, title: 'Multimedia Wireless Systems'},
            {id:554, title: 'Player & Recorder'},
            {id:555, title: 'Portable Audio'},
            {id:556, title: 'Radios'},
            {id:557, title: 'Speakers'},
            {id:552, title: 'Stereo Components'}
        ] },

        {id:651,title:'Car & Vehicle Electronics',sub:[
            {id:652, title: 'Powersports Electronics'},
        ] },

        {id:751,title:'Home appliances',sub:[
            {id:752, title: 'Air quality & Seasonal Appliances'},
            {id:753, title: 'Kitchen Appliances'}
        ] },

        {id:851,title:'Television & Recorders',sub:[
            {id:852, title: 'Accessories'},
            {id:853, title: 'BluRay Recorders & Players'}
        ] },

        {id:951,title:'Accessories & Supplies',sub:[
            {id:952, title: 'Audio & Video Accessories'},
            {id:953, title: 'Batteries'},
            {id:954, title: 'Batteries, Chargers & Accessories'},
            {id:955, title: 'Cables'},

        ] },
    ]},

    {id:5, title:'Health & Beauty', sub:[
        {id:261,title:'Make up',sub:[
            {id:262, title: 'Eyes'},
            {id:263, title: 'Face'},
            {id:264, title: 'Lips'},
            {id:265, title: 'Makeup set'}
        ] },

        {id:361,title:'Fragrances',sub:[
            {id:362, title: 'Unisex'},
            {id:363, title: 'Celebrity Fragrances'}
         
        ] },

        {id:461,title:'Hair Care',sub:[
            {id:462, title: 'Hair Accessories'},
            {id:463, title: 'Shampoo & Conditioners'},
            {id:464, title: 'Extensions, Wigs & Accessories'}

        ] },

        {id:561,title:'Personal Care',sub:[
            {id:562, title: 'Deodorants & Antiperspirants'},
            {id:563, title: 'Hair Care'},
            {id:564, title: 'Shave & Hair Removal'},
            {id:565, title: 'Skin Care'},
            {id:566, title: "Men's grooming"},
            {id:567, title: 'Sexual Wellness'}
        ] },

        {id:661,title:'Oral Care',sub:[
            {id:662, title: 'Toothpaste'},
            {id:663, title: 'Toothbrushes'},
            {id:664, title: 'Infant Dental Care'}
        ] },

    ]},

    {id:6, title:'Fashion', sub:[
        {id:271,title:"Women's Fashion",sub:[
            {id:272, title: 'Clothing'},
            {id:273, title: 'Shoes'},
            {id:274, title: 'Accessories'},
            {id:275, title: 'Jewelry'},
            {id:276, title: 'Handbags & Wallets'},
            {id:277, title: 'Costumes & Accessories'}
        ] },

        {id:371,title:"Men's Fashion",sub:[
            {id:372, title: 'Clothing'},
            {id:373, title: 'Shoes'},
            {id:374, title: 'Accessories'},
            {id:375, title: 'Jewelry'},
            {id:376, title: 'Costumes & Accessories'},
            {id:377, title: 'Watches'}
         
        ] },

        {id:471,title:"Kid's Fashion",sub:[
            {id:472, title: "Boys' Fashion"},
            {id:473, title: "Girl's Fashion"},
            {id:474, title: 'Boys'},
            {id:475, title: 'Girls'}
        ] },

        {id:571,title:'Sports Shop',sub:[
            {id:572, title: 'Accessories'}
        ] },

        {id:671,title:'Shop Jewelry and Watch Accessories',sub:[
            {id:672, title: 'Watch Accessories'},
        ] },

        {id:771,title: 'Luggage & Travel Gear',sub:[
            {id:772, title: 'Backpacks'},
            {id:773, title: 'Gym Bags'},
            {id:774, title: 'Laptop Bags'},
            {id:775, title: 'Luggage'},
            {id:776, title: 'Luggage Sets'},
            {id:777, title: 'Messenger Bags'}
         
        ] },

        {id:871,title:'Watches & Sunglasses',sub:[
            {id:872, title: 'Unisex Watches'},
            {id:873, title: 'Womens Watches'},
            {id:874, title: 'Mens Watches'}
        ] },

        {id:971,title:'Weddings',sub:[
            {id:972, title: 'Accessories'},
            {id:973, title: 'Brides Apparel'}
        ] },

    ]},

    

    {id:7, title:'Computing', sub:[
        {id:281,title:'Computers',sub:[
            {id:282, title: 'Computers & Tablets'}
        ] },

        {id:381,title:'Printers',sub:[
            {id:382, title: 'Printers'}
        ] },

        {id:481,title:'Data Storage',sub:[
            {id:482, title: 'External Hard Drives'},
            {id:483, title: 'USB Flash Drives'}
        ] },

        {id:581,title:'Software',sub:[
            {id:582, title: 'Software'},
            {id:583, title: 'Business & Office'},


        ] },

        {id:681,title: 'Computer Accessories',sub:[
            {id:682, title: 'External Hard Drives'},
            {id:683, title: 'Printers'},
            {id:684, title: 'Scanners'},
            {id:685, title: 'Webcams'},
            {id:686, title: 'Monitors'},
            {id:687, title: 'Mouse'},
            {id:688, title: 'Laptop Bags'}

         
        ] },

    ]},

    {id:8, title:'Sporting Goods', sub:[
        {id:291,title:'Outdoor & Adventure',sub:[
            {id:292, title: 'Running'}
        ] },

        {id:391,title:'Oudoor Recreation',sub:[
            {id:392, title: 'Cycling'},
            {id:393, title: 'Water Sports'},
            {id:394, title: 'Camping & Hiking'},
            {id:395, title: 'Skates, Skateboards & Scooters'},
        ] },

        {id:491,title:'Racquet Sports',sub:[
            {id:492, title: 'Badminton'},

        ] },

        {id:591,title:'Sport & Fitness',sub:[
            {id:592, title: 'Exercise & Fitnes'},
            {id:593, title: 'Golf'},
            {id:594, title: 'Other Sports'},
            {id:595, title: 'Swimming'},
            {id:596, title: 'Team Sports'}
        ] },

    ]},

    {id:9, title:'Baby Products', sub:[
        {id:2101,title:'Apparel & Accessories',sub:[
            {id:2102, title: 'Baby Boys'},
            {id:2103, title: 'Baby Girls'}

        ] },

        {id:3101,title:'Feeding',sub:[
            {id:3102, title: 'Baby Food'},
            {id:3103, title: 'Bottle-Feeding'},
            {id:3104, title: 'Breastfeeding'},
            {id:3105, title: 'Solid Feeding'},
        ] },

        {id:4101,title:'Bathing & Skin Care',sub:[
            {id:4102, title: 'Bathroom Safety'},
            {id:4103, title: 'Gift Sets'},
            {id:4104, title: 'Grooming & Healthcare Kits'},
            {id:4105, title: 'Non-Slip Bath Mats'},
            {id:4106, title: 'Shampoo'},
            {id:4107, title: 'Skin Care'},
            {id:4108, title: 'Wash Cloths & Towels'}

        ] },

        {id:5101,title:'Health & Baby Care',sub:[
            {id:5102, title: 'Thermometer'},
            {id:5103, title: 'Tooth Brushes'},
            {id:5104, title: 'Teethers & Teething Relief'},
            {id:595, title: 'Swimming'},
            {id:596, title: 'Team Sports'}
        ] },

        {id:6101,title:'Diapering',sub:[
            {id:6102, title: 'Diaper Bags'},
            {id:6103, title: 'Disposable Diapers'},
            {id:6104, title: 'Cloth Diapers'}
        ] },

        
    ]},

    {id:10, title:'Gaming ', sub:[
        {id:2111,title:'Pc gaming',sub:[
            {id:2112, title: 'Accessories'},
            {id:2113, title: 'Games'}

        ] },

        {id:3111,title:'Playstation 4',sub:[
            {id:3112, title: 'Consoles'},
            {id:3113, title: 'Games'},
        ] },

        {id:4111,title:'Xbox One',sub:[
            {id:4112, title: 'Consoles'},
            {id:4113, title: 'Accessories'},
            {id:4114, title: 'Games'}
        ] },

    ]},

    {id:11, title:'Garden & Outdoors', sub:[
        {id:2121,title:'Garden & Lawn Care',sub:[
            {id:2122, title: 'Watering Equipment'},
            {id:2123, title: 'Weed & Moss Control'}

        ] },

        {id:3121,title:'Generators & Portable Powers',sub:[
            {id:3122, title: 'Rechargeable Power Supplies'},
            {id:3123, title: 'Solar & Wind Power'},
        ] },

    ]},

    {id:12, title:'Other categories', sub:[
        {id:2131,title:'Official Stores',sub:[
            {id:2132, title: 'Phones & Tablets'},
            {id:2133, title: 'Electeronics'},
            {id:2134, title: 'Supermarket'},


        ] },

        {id:3131,title:'Airdady Global',sub:[
            {id:3132, title: "women's Fashion"},
            {id:3133, title: "Men's Fashion"},
            {id:3134, title: "Girl's Fashion"},
            {id:3135, title: "Boy's Fashion"},
            {id:3136, title: 'Luggage'},
            {id:3132, title: 'Health & Beauty'},

        ] },

        
        {id:4131,title:'Pet Supplies',sub:[] },

        {id:5131,title:'Miscellaneous',sub:[] },

        {id:6131,title:'Toys & Games',sub:[
            {id:6132, title: 'Toys'},
            {id:6133, title: 'Games'},
            {id:6134, title: 'Sports & Outdoor Play'}


        ] },

        {id:7131,title:'Automobile',sub:[
            {id:7132, title: 'Car Electronics & Accessories'},
        ] },

        {id:8131,title:'Musical Instruments',sub:[] },

        {id:9131,title:'Books, Movies, and Music',sub:[] },

        {id:10131,title:'Services',sub:[] },

        {id:11131,title:'Industrial & Scientific',sub:[] },

        {id:12131,title:'Livestock',sub:[] },

        {id:13131,title:'Wholesale',sub:[] },

    ]},

]