import { ThemeProvider } from '@mui/material';
import SidebarProvider from '@contexts/SidebarContext';
import AppRoutes from '@pages/AppRoutes';
import theme from '@utils/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SidebarProvider>
                <AppRoutes />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
