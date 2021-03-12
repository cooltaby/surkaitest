var PublisherID = "e036a071-a45d-49d6-bff8-3bcb46ca039c";
	var AppName = "yourAppName";
	var SlotName = "yourSlotName";
	
function CallAds()
	{
		console.log("Called Get KaiAd");
		try {
			console.log("Called KaiAd try");
			// display ad
			getKaiAd({
				publisher: PublisherID,
	            app: AppName,
	            slot: SlotName,
	            test: 0,
				/* only for responsive ads */
				/*h: adMaxHeight,
				w: adMaxWidth,
				container: adContainer,*/
				/* up to here */

				/* error codes */
				/* https://www.kaiads.com/publishers/sdk.html#error */
				onerror: err => console.error('KaiAds error catch:', err),
				onready: ad => {
					ad.call('display')
					/* , {
						tabindex: adTabIndex,
						navClass: 'navItem',
						display: 'block'
					} */
					ad.on('click', () => console.log('ad clicked'))
					ad.on('close', closeAd)
					ad.on('display', displayAd)

				}
			});
		} catch (e) {
			var message = 'KaiAds not available: https://www.kaiads.com/publishers/sdk.html';
			console.log("Called KaiAd catch");
			console.log(message);
			/*if (!fullscreenAd) {
				adContainer.innerText = message;
			}*/
		}
	}

	function displayAd() {
		console.log('ad displayed');
		/*if (fullscreenAd) {
			app.fullAdVisible = true;
		}*/
		/* do something, like pause the app */
	}

	function closeAd() {
		console.log('ad closed');
		//if (fullscreenAd) {
		//	setTimeout(function () {
		//		app.fullAdVisible = false;
		//		app.activeNavItem.focus();
		//	}, 200); /* delayed to avoid background button execution */
		//}
	}