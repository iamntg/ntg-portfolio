import ebony1 from '@/assets/ig/ebony-1.jpeg';
import ebony2 from '@/assets/ig/ebony-2.jpeg';
import ebony3 from '@/assets/ig/ebony-3.jpeg';
import aparna1 from '@/assets/ig/aparna-1.jpeg';
import aparna2 from '@/assets/ig/aparna-2.jpeg';
import anniko from '@/assets/ig/anniko.jpeg';
import carmenian from '@/assets/ig/carmenian.jpg';
import justin from '@/assets/ig/justin.jpeg';
import kat1 from '@/assets/ig/kat-1.jpeg';
import kat2 from '@/assets/ig/kat-2.jpeg';
import lisa1 from '@/assets/ig/lisa-1.jpeg';
import lisa2 from '@/assets/ig/lisa-2.jpeg';
import paige from '@/assets/ig/paige.jpeg';
import scarlett1 from '@/assets/ig/scarlett-1.jpg';
import scarlett2 from '@/assets/ig/scarlett-2.jpg';
import scarlett3 from '@/assets/ig/scarlett-3.jpg';
import scarlett4 from '@/assets/ig/scarlett-4.jpg';
import sophia1 from '@/assets/ig/sophia-1.jpeg';
import sophia2 from '@/assets/ig/sophia-2.jpeg';
import taker from '@/assets/ig/taker.jpeg';

export interface InstagramCarousel {
    id: string;
    title: string;
    postUrlKey: string;
    thumbnailUrl: string; // resolved via imports
    shootTag?: string;    // optional e.g., "Model shoot", "Studio", etc.
    date?: string;
}

/**
 * INSTRUCTIONS FOR ADDING NEW ENTRIES:
 * 1. Save the carousel thumbnail in /src/assets/ig/
 * 2. Import the image at the top of this file.
 * 3. Add a new object to the array below.
 */
export const instagramCarousels: InstagramCarousel[] = [
    {
        id: '1',
        title: 'Ebony Jepson',
        postUrlKey: 'DCGDrh_JwDA',
        thumbnailUrl: ebony1,
        shootTag: 'Model Shoot | Outdoor',
        date: '2024'
    },
    {
        id: '2',
        title: 'Ebony Jepson',
        postUrlKey: 'DCA0GsHP8SB',
        thumbnailUrl: ebony2,
        shootTag: 'Model Shoot | Outdoor',
        date: '2024'
    },
    {
        id: '3',
        title: 'Ebony Jepson',
        postUrlKey: 'CtjjwBFR_92',
        thumbnailUrl: ebony3,
        shootTag: 'Model Shoot | Outdoor',
        date: '2024'
    },
    {
        id: '4',
        title: 'Aparna',
        postUrlKey: 'DM4IYm8x2U-',
        thumbnailUrl: aparna1,
        shootTag: 'Casual Shoot | Tulip Fields',
        date: '2024'
    },
    {
        id: '5',
        title: 'Aparna',
        postUrlKey: 'DBKxz28PSB2',
        thumbnailUrl: aparna2,
        shootTag: 'Casual Shoot | Outdoor',
        date: '2025'
    },
    {
        id: '6',
        title: 'Anniko',
        postUrlKey: 'CpcqRXXr5sq',
        thumbnailUrl: anniko,
        shootTag: 'Editorial',
        date: '2024'
    },
    {
        id: '7',
        title: 'Carmenian',
        postUrlKey: 'CtImyvSOH0D',
        thumbnailUrl: carmenian,
        shootTag: 'Portrait | Studio',
        date: '2024'
    },
    {
        id: '8',
        title: 'Justin',
        postUrlKey: 'Cpnjo_svTHB',
        thumbnailUrl: justin,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '9',
        title: 'Kat',
        postUrlKey: 'CtdOOdvOiLs',
        thumbnailUrl: kat1,
        shootTag: 'Model Shoot | Outdoor',
        date: '2024'
    },
    {
        id: '10',
        title: 'Kat',
        postUrlKey: 'CtdB9QgRPaf',
        thumbnailUrl: kat2,
        shootTag: 'Model Shoot | Outdoor',
        date: '2024'
    },
    {
        id: '11',
        title: 'Lisa Naveed',
        postUrlKey: 'Cpk6umtv-R9',
        thumbnailUrl: lisa1,
        shootTag: 'Fashion',
        date: '2024'
    },
    {
        id: '12',
        title: 'Lisa Naveed',
        postUrlKey: 'Cpk4zmXJ9fd',
        thumbnailUrl: lisa2,
        shootTag: 'Fashion',
        date: '2024'
    },
    {
        id: '13',
        title: 'Paige',
        postUrlKey: 'Cpp9K8sJ4um',
        thumbnailUrl: paige,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '14',
        title: 'Scarlett Elliott',
        postUrlKey: 'CwTmFVDPWl5',
        thumbnailUrl: scarlett1,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '15',
        title: 'Scarlett Elliott',
        postUrlKey: 'CvOI-loJkTt',
        thumbnailUrl: scarlett2,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '16',
        title: 'Scarlett Elliott',
        postUrlKey: 'CtJzaegrBPK',
        thumbnailUrl: scarlett3,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '17',
        title: 'Scarlett Elliott',
        postUrlKey: 'CtRjU7tRV8O',
        thumbnailUrl: scarlett4,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '18',
        title: 'Sophia',
        postUrlKey: 'CpZR2PjOnOR',
        thumbnailUrl: sophia1,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '19',
        title: 'Sophia',
        postUrlKey: 'CpZTXituwLW',
        thumbnailUrl: sophia2,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    },
    {
        id: '20',
        title: 'Taker',
        postUrlKey: 'CpicSoFPUEO',
        thumbnailUrl: taker,
        shootTag: 'Model Shoot | Studio',
        date: '2024'
    }
];
