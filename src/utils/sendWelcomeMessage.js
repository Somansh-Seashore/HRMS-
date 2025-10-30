export const sendWelcomeMessage = (phone, name) => {
	const message = `Hi ${name}, welcome to the company! 🎉 We're happy to have you onboard.`;
	const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
	window.open(whatsappUrl, "_blank");
	alert(`WhatsApp message opened for ${name}`);
};
