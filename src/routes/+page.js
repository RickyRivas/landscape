// export const prerender = true;
export let businessInfo = {
    companyName: 'Tulsa Landscape',
    cityAndState: 'Tulsa, Ok',
    industry: 'Construction',
    phone: '(123)456-7890',
    fullAddress: '1234 East Tulsa, Ok',
    email: '/',
    googleLink: '/',
    businessHours:
        {
            monday: '',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: '',
            saturday: '',
            sunday: '',
    },
    socials: [
		{
			platform: 'facebook',
			url: '/'
		},
		{
			platform: 'google',
			url: '/'
		},
		{
			platform: 'tiktok',
			url: '/'
		},
		{
			platform: 'instagram',
			url: '/'
		},
		{
			platform: 'twitter',
			url: ''
		},
		{
			platform: 'youtube',
			url: ''
		}
    ],
    ftServices: [
        {
            service: 'Service One'
        },
        {
            service: 'Service Two'
        },
        {
            service: 'Service Three'
        },
        {
            service: 'Service Four'
        },
        {
            service: 'Service Five'
        }
    ]
}
// 3 main services 
export let services = [
    {
        name: 'Maintenance',
        description: `Keep your landscape completely flawless without you having to touch a spec of dirt. Our experts know exactly how to keep your surrounding space perfect all year round.`
    },
    {
        name: 'Urban',
        description: `Add value to your home by crafting the perfect green surroundings, and give your backyard and lawn the renovation they need to draw a smile on your face every time you’re out in the morning.`
    },
    {
        name: 'Gardens',
        description: `Optimize your soil for growing your own plants, and let us help you enjoy the growing and farming experience with the right plants, fertilizers, and more.`
    },
]
// Main services section
export let mainServices = [
    {
        title: 'Design Concept Assistance',
        description: 'Our 3 decades of experience give us enough knowledge of the science that goes behind landscaping, which is why we can help you make use of the space you have in the most practical, cost-effective, and aesthetically-pleasing way.',
        iconPath: '/home/planning.svg'
    },
    {
        title: 'Tree, Shrub, And Plant Installation',
        description: `Whether you need 1 tree installed in your backyard for a new treehouse, or you're looking to surround a large property with plants hand-picked to suit your needs and general theme, Lawncare can guarantee flawless installation on a timeframe you can trust.`,
        iconPath: '/home/plant.svg'
    },
    {
        title: 'New Grass And Sod Installation',
        description: `No matter how large or small your lawn is, we can help you cover it completely with high-quality sod sourced from the best suppliers in the country, guaranteeing the exact results you're after, brought to life by our Lawncare professionals.`,
        iconPath: '/home/plant-pot.svg'
    },
    {
        title: 'Driveways, Patios, And Walkways',
        description: `If you're looking for pathways, driveways, and walkways that last a lifetime without any cracks, splits, or fading in sight, Lawncare is where you need to be. We help you find the right choices for your needs and carry out the installation process, all without disrupting your day-to-day routine.`,
        iconPath: '/home/brick-wall.svg'
    }
]
// Why 

export let reasons = [
    {
        title: 'Quality',
        description: 'An unmatched fit and finish in every detail.'
    },
    {
        title: 'Always On Time',
        description: 'No delays, inconveniences, or downtime.'
    },
    {
        title: 'Experienced',
        description: 'We help bring your vision to reality.'
    },
]
// Testimonials 
export let reviews = [
    {
        testifier: 'RR',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
    },
    {
        testifier: 'Valued Customer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
    },
    {
        testifier: 'Valued Customer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
    },
    {
        testifier: 'Valued Customer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
    },
    {
        testifier: 'Valued Customer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
    },
    {
        testifier: 'Valued Customer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, molestie dolor ac facilis egestas eget. Viverra pellentesque in nisl porta porttitor auctor ut dignissim.'
    }
]
// home (3) reviews 
export let subReviews = []
subReviews.push(reviews[0], reviews[1], reviews[2])