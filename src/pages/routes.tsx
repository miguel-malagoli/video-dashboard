import ChatsPage from './Chats';
import DashboardPage from './Dashboard';
import LibraryPage from './Library';
import PackagesPage from './Packages';
import PersonalInfoPage from './PersonalInfo';
import ReviewPage from './Review';
import SettingsPage from './Settings';
import SubscriptionPage from './Subscription';
import WebLinksPage from './WebLinks';
import WebsitePage from './Website';

const routes = [
    {
        label: 'Home',
        path: '/home',
        icon: 'house',
        element: <DashboardPage />
    },
    {
        label: 'Pacttos (Chats)',
        path: '/pacttos',
        icon: 'question_answer',
        element: <ChatsPage />
    },
    {
        label: 'Items to review',
        path: '/videos-to-review',
        icon: 'video_library',
        element: <ReviewPage />
    },
    {
        label: 'Web links you created',
        path: '/shared-links',
        icon: 'link',
        element: <WebLinksPage />
    },
    {
        label: 'Personal information',
        path: '/personal-info',
        icon: 'manage_accounts',
        element: <PersonalInfoPage />
    },
    {
        label: 'Review packages for sale',
        path: '/packages',
        icon: 'redeem',
        element: <PackagesPage />
    },
    {
        label: 'Pactto website',
        path: '/profile',
        icon: 'view_carousel',
        element: <WebsitePage />
    },
    {
        label: 'Reference video library',
        path: '/library',
        icon: 'ondemand_video',
        element: <LibraryPage />
    },
    {
        label: 'Subscription',
        path: '/subscription',
        icon: 'subscriptions',
        element: <SubscriptionPage />
    },
    {
        label: 'Review settings',
        path: '/review-settings',
        icon: 'settings',
        element: <SettingsPage />
    }
];

export default routes;
