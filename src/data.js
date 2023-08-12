import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    { id:1, href: '/', text: 'home' },
    { id:2, href: '/about', text: 'about' },
    { id:3, href: '/services', text: 'training'},
    { id:4, href: '/tours', text: 'contact' },
    


];

export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com/charles.delrosario1', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.youtube.com/@gymratzonly5001/featured', icon: 'fab fa-youtube'},
    { id: 3, href: 'https://www.instagram.com/underrated_basketballjunkie/', icon: 'fab fa-instagram' },
    { id: 4, href: 'https://www.twitter.com', icon: 'fab fa-snapchat' },

];

export const services = [
    { id: 1, icon:'fas fa-wallet fa-fw', title:'Personal 1-1 Training', text:' For the serious player who wants direct feedback and communication with Coach'},
    { id: 2, icon:'fas fa-tree fa-fw', title:'Group Training', text:' Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    { id: 3, icon:'fas fa-socks fa-fw', title:'Adult Training', text:' Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    { id: 3, icon:'fas fa-socks fa-fw', title:'Pro Training', text:' Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
];

export const tours = [
    { id: 1, image: tour1, date: 'august 26th, 2020', title: 'Tibet Adventure', 
    info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque' , location: 'china', duration: 6, cost: 2100, },
    { id: 2, image: tour2, date: 'october 1th, 2020', title: 'best of java', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' , location: 'indonesia', duration: 11, cost: 1400, },
    { id: 3, image: tour3, date: 'september 15th, 2020', title: 'explore hong kong', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' , location: 'hong kong', duration: 8, cost: 5000, },
    { id: 4, image: tour4, date: 'december 5th, 2019', title: 'kenya highlights', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' , location: 'kenya', duration: 20, cost: 3300, },
]
