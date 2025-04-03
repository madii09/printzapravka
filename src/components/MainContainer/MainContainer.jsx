import { Services } from '../Services/Services.jsx';
import { RefilInformation } from '../RefilInformation/RefilInformation.jsx';
import { Advantages } from '../Advantages/Advantages.jsx';
import { AboutUs } from '../AboutUs/AboutUs.jsx';
import { Statistics } from '../Statistics/Statistics.jsx';

export const MainContainer = () => {
	return (
		<main>
			<Services />
			<RefilInformation />
			<Advantages />
			<AboutUs />
			<Statistics />
		</main>
	);
};
