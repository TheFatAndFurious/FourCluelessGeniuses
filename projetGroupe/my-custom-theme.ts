import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #B6E9FF
		'--color-primary-50': '244 252 255', // #f4fcff
		'--color-primary-100': '240 251 255', // #f0fbff
		'--color-primary-200': '237 250 255', // #edfaff
		'--color-primary-300': '226 246 255', // #e2f6ff
		'--color-primary-400': '204 240 255', // #ccf0ff
		'--color-primary-500': '182 233 255', // #B6E9FF
		'--color-primary-600': '164 210 230', // #a4d2e6
		'--color-primary-700': '137 175 191', // #89afbf
		'--color-primary-800': '109 140 153', // #6d8c99
		'--color-primary-900': '89 114 125', // #59727d
		// secondary | #EBFFFE
		'--color-secondary-50': '252 255 255', // #fcffff
		'--color-secondary-100': '251 255 255', // #fbffff
		'--color-secondary-200': '250 255 255', // #faffff
		'--color-secondary-300': '247 255 255', // #f7ffff
		'--color-secondary-400': '241 255 254', // #f1fffe
		'--color-secondary-500': '235 255 254', // #EBFFFE
		'--color-secondary-600': '212 230 229', // #d4e6e5
		'--color-secondary-700': '176 191 191', // #b0bfbf
		'--color-secondary-800': '141 153 152', // #8d9998
		'--color-secondary-900': '115 125 124', // #737d7c
		// tertiary | #797979
		'--color-tertiary-50': '235 235 235', // #ebebeb
		'--color-tertiary-100': '228 228 228', // #e4e4e4
		'--color-tertiary-200': '222 222 222', // #dedede
		'--color-tertiary-300': '201 201 201', // #c9c9c9
		'--color-tertiary-400': '161 161 161', // #a1a1a1
		'--color-tertiary-500': '121 121 121', // #797979
		'--color-tertiary-600': '109 109 109', // #6d6d6d
		'--color-tertiary-700': '91 91 91', // #5b5b5b
		'--color-tertiary-800': '73 73 73', // #494949
		'--color-tertiary-900': '59 59 59', // #3b3b3b
		// success | #7ABE87
		'--color-success-50': '235 245 237', // #ebf5ed
		'--color-success-100': '228 242 231', // #e4f2e7
		'--color-success-200': '222 239 225', // #deefe1
		'--color-success-300': '202 229 207', // #cae5cf
		'--color-success-400': '162 210 171', // #a2d2ab
		'--color-success-500': '122 190 135', // #7ABE87
		'--color-success-600': '110 171 122', // #6eab7a
		'--color-success-700': '92 143 101', // #5c8f65
		'--color-success-800': '73 114 81', // #497251
		'--color-success-900': '60 93 66', // #3c5d42
		// warning | #DDAF88
		'--color-warning-50': '250 243 237', // #faf3ed
		'--color-warning-100': '248 239 231', // #f8efe7
		'--color-warning-200': '247 235 225', // #f7ebe1
		'--color-warning-300': '241 223 207', // #f1dfcf
		'--color-warning-400': '231 199 172', // #e7c7ac
		'--color-warning-500': '221 175 136', // #DDAF88
		'--color-warning-600': '199 158 122', // #c79e7a
		'--color-warning-700': '166 131 102', // #a68366
		'--color-warning-800': '133 105 82', // #856952
		'--color-warning-900': '108 86 67', // #6c5643
		// error | #BE7A7A
		'--color-error-50': '245 235 235', // #f5ebeb
		'--color-error-100': '242 228 228', // #f2e4e4
		'--color-error-200': '239 222 222', // #efdede
		'--color-error-300': '229 202 202', // #e5caca
		'--color-error-400': '210 162 162', // #d2a2a2
		'--color-error-500': '190 122 122', // #BE7A7A
		'--color-error-600': '171 110 110', // #ab6e6e
		'--color-error-700': '143 92 92', // #8f5c5c
		'--color-error-800': '114 73 73', // #724949
		'--color-error-900': '93 60 60', // #5d3c3c
		// surface | #ECE0FF
		'--color-surface-50': '252 250 255', // #fcfaff
		'--color-surface-100': '251 249 255', // #fbf9ff
		'--color-surface-200': '250 247 255', // #faf7ff
		'--color-surface-300': '247 243 255', // #f7f3ff
		'--color-surface-400': '242 233 255', // #f2e9ff
		'--color-surface-500': '236 224 255', // #ECE0FF
		'--color-surface-600': '212 202 230', // #d4cae6
		'--color-surface-700': '177 168 191', // #b1a8bf
		'--color-surface-800': '142 134 153', // #8e8699
		'--color-surface-900': '116 110 125' // #746e7d
	}
};
