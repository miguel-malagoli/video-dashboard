import Box from '@components/Box';
import Typography from '@components/Typography';
import sx from './styles';
import { Link } from '@mui/material';

const steps = [
    {
        key: 0,
        content: <span>Open your inbox and verify your email</span>
    },
    {
        key: 1,
        content: (
            <span>
                Check the{' '}
                <Link
                    href="https://youtu.be/CvbvDGsZsKM?si=j8Hi4uCL0oKfX7oU&t=93"
                    target="_blank"
                >
                    short video of Pactto in action
                </Link>
            </span>
        )
    },
    {
        key: 2,
        content: (
            <span>
                Wanna record your computer screen or review files? Download
                Pactto for{' '}
                <Link href="https://www.pactto.com/#download" target="_blank">
                    Mac
                </Link>{' '}
                or{' '}
                <Link href="https://www.pactto.com/#download" target="_blank">
                    Windows
                </Link>
            </span>
        )
    },
    {
        key: 3,
        content: (
            <span>
                Wanna review videos, images or audio files with your phone or
                tablet? Download Pactto for{' '}
                <Link
                    href="https://apps.apple.com/us/app/pactto-record-video-feedback/id1662226619"
                    target="_blank"
                >
                    iOS
                </Link>{' '}
                or{' '}
                <Link
                    href="https://play.google.com/store/apps/details?id=com.pactto.replay"
                    target="_blank"
                >
                    Android
                </Link>
            </span>
        )
    }
];

export default function OnboardingSection() {
    return (
        <Box component="section" sx={sx.onboardingContainer}>
            <Typography variant="h2" sx={sx.onboardingWelcome}>
                Hey John, welcome to Pactto!
            </Typography>
            <ul>
                {steps.map((step) => (
                    <Typography
                        key={step.key}
                        component="li"
                        variant="body2"
                        sx={sx.onboardingStep}
                    >
                        <Box sx={sx.onboardingCheck}>Done</Box>
                        {step.content}
                    </Typography>
                ))}
            </ul>
        </Box>
    );
}
