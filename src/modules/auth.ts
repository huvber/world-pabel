import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import firebaseui from 'firebaseui';

const ui = new firebaseui.auth.AuthUI(getAuth());

export const startSignin = () => {
	ui.start('#firebaseui-auth-container', {
		signInOptions: [
			{
				provider: GoogleAuthProvider.PROVIDER_ID,
				requireDisplayName: false
			}
		]
	});
};
