import { Link } from 'react-router-dom';
import logoImg from 'src/assets/logo.png';
import { HOME } from 'src/constants/routes';

function Logo() {
	return (
		<div className="w-full max-w-[50px]">
			<Link to={HOME}>
				<img src={logoImg} alt="Dev.to homepage" />
			</Link>
		</div>
	);
}
export default Logo;
