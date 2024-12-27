import { type IconName } from '#app/components/atoms'

export const navigationLinks = [
	{ to: '/', children: 'Strona główna', icon: 'web' },
	{ to: '/aktualnosci', children: 'Aktualności', icon: 'newspaper' },
	{ to: '/oferta', children: 'Oferta', icon: 'offer' },
	{ to: '/kontakt', children: 'Kontakt', icon: 'phone-call' },
	{ to: '/galeria', children: 'Galeria', icon: 'image' },
] satisfies Array<{ to: string; children: string; icon: IconName }>
