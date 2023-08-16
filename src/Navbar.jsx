import React from 'react';
import {
	Outlet,
	Link
} from 'react-router-dom';
import pHblanco from './images/phcafe.png';
export const Navbar = () => {
	const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (event) => {
			// Prevent the mini-infobar from appearing on mobile.
			event.preventDefault();
			console.log("👍", "beforeinstallprompt", event);
			// Stash the event so it can be triggered later.
			window.deferredPrompt = event;
			// Remove the 'hidden' class from the install button container.
			setIsReadyForInstall(true);
		});
	}, []);

	async function downloadApp() {
		console.log("👍", "butInstall-clicked");
		const promptEvent = window.deferredPrompt;
		if (!promptEvent) {
			// The deferred prompt isn't available.
			console.log("oops, no prompt event guardado en window");
			return;
		}
		// Show the install prompt.
		promptEvent.prompt();
		// Log the result
		const result = await promptEvent.userChoice;
		console.log("👍", "userChoice", result);
		// Reset the deferred prompt variable, since
		// prompt() can only be called once.
		window.deferredPrompt = null;
		// Hide the install button.
		setIsReadyForInstall(false);
	}


	return (

		<>

			<header>
				<h1>
					<Link to='/'><img src={pHblanco} height={70} /></Link></h1>
				<nav>
					<div className='phbutton'>
						{isReadyForInstall && (<a href="" type='button' className='btn' onClick={downloadApp}>
							<h5>descargar</h5>
						</a>)}
					</div>
					<b>
						<Link style={{ marginRight: '20px', color: '#F2E9D8', borderColor: '404040' }} to='/'>Inicio</Link>

						{/* <Link to='/Tabla'>Tablas</Link> */}
						<Link style={{ marginRight: '20px', color: '#F2E9D8' }} to='/Reporte'>Reporte</Link>
						<Link style={{ color: '#F2E9D8' }} to='/Tabla'>Tabla</Link>
					</b>
				</nav>
			</header>

			<Outlet />
		</>
	);
};
