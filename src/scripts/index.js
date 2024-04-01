import '../css/styles.css';

import headerImage from '../assets/images/cropped-600.png';
import bodyImage from '../assets/images/image-1.jpg';

document.querySelector('.img-header').src = headerImage;
document.querySelector('.img-header').width = '300';

document.querySelector('.hero').style.backgroundImage = `url(${bodyImage})`;
document.querySelector('.hero').style.backgroundSize = 'cover';
