import luna from '@assets/Luna.mp4';
import kiwi from '@assets/Kiwi.mp4';
import bonnie from '@assets/Bonnie.mp4';
import chip from '@assets/Chip.mp4';
import mittens from '@assets/Mittens.mp4';
import muffin from '@assets/Muffin.mp4';
import lily from '@assets/Lily.mp4';
import { VideoData } from '@utils/data';

export const mockVideoList: VideoData[] = [
    {
        id: '0',
        name: 'Luna.mp4',
        description: 'Luna playing with some fabric',
        tags: ['cat', 'black', 'play'],
        file: luna,
        date: new Date()
    },
    {
        id: '1',
        name: 'Kiwi.mp4',
        description: 'Kiwi sleeping on the couch',
        tags: ['cat', 'tabby', 'sleep'],
        file: kiwi,
        date: new Date()
    },
    {
        id: '2',
        name: 'Bonnie.mp4',
        description: 'Bonnie looking at the camera',
        tags: ['cat', 'tabby', 'look'],
        file: bonnie,
        date: new Date()
    },
    {
        id: '3',
        name: 'Chip.mp4',
        description: 'Chip playing in the house',
        tags: ['cat', 'orange', 'play'],
        file: chip,
        date: new Date()
    },
    {
        id: '4',
        name: 'Mittens.mp4',
        description: 'Mittens looking at the camera',
        tags: ['cat', 'black', 'look'],
        file: mittens,
        date: new Date()
    },
    {
        id: '5',
        name: 'Muffin.mp4',
        description: 'Muffin eating in a park',
        tags: ['cat', 'orange', 'eat'],
        file: muffin,
        date: new Date()
    },
    {
        id: '6',
        name: 'Lily.mp4',
        description: 'Lily sleeping on the couch',
        tags: ['cat', 'siamese', 'sleep'],
        file: lily,
        date: new Date()
    }
];

export const mockReviewList: VideoData[] = [
    {
        id: '2',
        name: 'Bonnie.mp4',
        description: 'Bonnie looking at the camera',
        tags: ['cat', 'tabby', 'look'],
        file: bonnie,
        date: new Date()
    },
    {
        id: '5',
        name: 'Muffin.mp4',
        description: 'Muffin eating in a park',
        tags: ['cat', 'orange', 'eat'],
        file: muffin,
        date: new Date()
    }
];
