import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import './App.css';
import Copyright from './components/Copyright.tsx';
import ProTip from './components/ProTip.tsx';

function App() {
	const { t } = useTranslation();
	return (
		<Box my={4}>
			<Box mb={2}>
				<Typography variant="h4" component="h1">
					{t('core.description')}
				</Typography>
			</Box>
			<ProTip />
			<Copyright />
		</Box>
	);
}

export default App;
