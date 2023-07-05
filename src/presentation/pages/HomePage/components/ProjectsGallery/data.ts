import photo1 from './assets/photo1.webp';
import photo2 from './assets/photo2.webp';
import photo3 from './assets/photo3.webp';
import photo4 from './assets/photo4.webp';
import photo5 from './assets/photo5.webp';
import photo6 from './assets/photo6.jpg';

const data = [
  {
    id: 1,
    title: 'Surrey Pretrial Service Centre',
    image: photo1,
  },
  {
    id: 2,
    title: 'Simon Fraser University',
    image: photo2,
  },
  {
    id: 3,
    title: 'Meadowood Community Centre',
    image: photo3,
  },
  {
    id: 4,
    title: 'Lake Trail Middle School',
    image: photo4,
  },
  { 
    id: 5,
    title: 'MacKenzie Village Plaza',
    image: photo5,
  },
  {
    id: 6,
    title: 'Tla`amin Wellness Centre',
    image: photo6,
  },
] as const;

export default data;