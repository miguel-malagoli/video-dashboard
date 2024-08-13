// local
import OnboardingSection from './OnboardingSection';
import ReviewListSection from './ReviewListSection';
import VideoListSection from './VideoListSection';

export default function DashboardPage() {
    return (
        <>
            <OnboardingSection />
            <VideoListSection />
            <ReviewListSection />
        </>
    );
}
