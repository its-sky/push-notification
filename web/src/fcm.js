import { messaging } from './firebase-config'
import { getToken, onMessage } from 'firebase/messaging'

const VAPID_KEY = process.env.FIREBASE_VAPID_KEY;

/**
 * Request FCM Device Token
 * @returns {Promise<string|null>} The FCM token or null if permission denied
 */
export const requestFcmToken = async () => {
	try {
		const permission = Notification.permission;
		console.log('권한 체크:', permission);


		if (permission == 'default' || permission == 'denied') {
			await Notification.requestPermission();
		}

		if (permission != 'granted') {
			console.error('Notification permission not granted');
			return null;
		}

		const token = await getToken(messaging, { vapidKey : VAPID_KEY });
		console.log('FCM Device Token:', token);
		return token;
	} catch (error) {
		console.error('Failed to get FCM Token:', error);
		return null;
	}
};

export const listenForMessages = (callback) => {
	onMessage(messaging, (payload) => {
		console.log('Message 도착:', payload);
		if (callback) {
			callback(payload);
		}
	})
}