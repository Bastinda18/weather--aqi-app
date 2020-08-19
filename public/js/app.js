const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const infoMessage = document.querySelector('.info-message');
const root = document.querySelector('#root');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();
	infoMessage.classList.add('bg');
	infoMessage.textContent = 'Loading...';
	const location = search.value;

	fetch(`/weather?address=${location}`).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				infoMessage.textContent = data.error;
				saferInnerHTML(root, ' ');
			} else {
				console.log(data);
				infoMessage.textContent = `Location: ${data.location}`;
				displayMeteoData(data, root);
			}
		});
	});
	search.value = '';
});
// displayDummyData(root); //remove
