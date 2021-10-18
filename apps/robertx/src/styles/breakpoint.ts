export const size = {
	xxs: 425,
	mobile: 768,
	desktop: 1368
}

export const breakpoint = {
	//   tablet: `only screen and (min-width: ${size.tablet})`,
	desktop: `only screen and (min-width: ${size.desktop}px)`,
	mobile: `only screen and (max-width: ${size.mobile}px)`,
	xxs: `only screen and (max-width: ${size.xxs}px)`
}
