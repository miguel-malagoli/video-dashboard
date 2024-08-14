import { ThemeProvider } from '@mui/material';
import SidebarProvider from '@contexts/SidebarContext';
import AppRoutes from '@pages/AppRoutes';
import themeGray from '@utils/theme';

function App() {
    return (
        <ThemeProvider theme={themeGray}>
            <SidebarProvider>
                <AppRoutes />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
