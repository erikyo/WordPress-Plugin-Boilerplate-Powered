/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * The plugin Edit and Save components
 */
import { Edit } from './edit';
import { Save } from './save';

// prettier-ignore
export const blockIcon = ( <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><circle cx="11.99" cy="12.08" r="11.9" /><path d="M9.56 12.09c0 1.01.59 1.89 1.44 2.3l-1.22-3.35c-.14.32-.22.67-.22 1.04zm4.29-.13c0-.32-.11-.54-.21-.71-.13-.21-.25-.39-.25-.6 0-.24.18-.46.43-.46h.03a2.58 2.58 0 0 0-3.87.48h.16l.68-.03c.14-.01.15.19.02.21l-.29.02.93 2.77.56-1.68-.4-1.09-.27-.02c-.14-.01-.12-.22.02-.21l.67.03.68-.03c.14-.01.15.19.02.21l-.29.02.93 2.75.26-.85a2.4 2.4 0 0 0 .2-.83zm-1.68.35-.77 2.23a2.66 2.66 0 0 0 1.57-.04l-.02-.04-.79-2.15zm2.2-1.45.02.26c0 .26-.05.55-.19.92l-.78 2.26a2.55 2.55 0 0 0 .96-3.44zM5.46 12.4c-1.87-1.9-2.57-3.66-1.92-4.88s2.52-1.6 5.13-1.08c.71-2.57 1.89-4.06 3.27-4.1.69-.02 1.37.34 1.98 1.03l-.51.45c-.47-.54-.96-.81-1.45-.8-1.02.03-2.02 1.39-2.62 3.57a19.2 19.2 0 0 1 2.75.92 19.2 19.2 0 0 1 2.7-1.08 10.9 10.9 0 0 0-.55-1.34l.61-.3a11.5 11.5 0 0 1 .6 1.46c2.58-.67 4.46-.4 5.18.78S20.75 10 18.99 12c1.87 1.9 2.57 3.66 1.92 4.88-.17.31-.42.57-.75.78-.41.25-.93.42-1.56.49l-.08-.68c.63-.07 1.45-.29 1.79-.91.49-.9-.2-2.44-1.78-4.05a19.8 19.8 0 0 1-2.17 1.93 19.4 19.4 0 0 1-.41 2.88l1.05.16.05.01-.09.33-.03.34-1.14-.18c-.52 1.9-1.3 3.21-2.23 3.78a2.1 2.1 0 0 1-1.04.32c-1.38.04-2.65-1.38-3.5-3.9-.75.2-1.45.31-2.08.35l-.04-.68a9.63 9.63 0 0 0 1.91-.32 19.5 19.5 0 0 1-.58-2.84 19.2 19.2 0 0 1-2.28-1.79c-1.49 1.71-2.08 3.28-1.54 4.15.2.32.53.54 1.01.68l-.18.65a2.3 2.3 0 0 1-1.4-.97c-.73-1.18-.13-2.98 1.63-4.98zM4.14 7.84c-.49.9.2 2.44 1.78 4.06a18.8 18.8 0 0 1 2.17-1.93A19 19 0 0 1 8.5 7.1c-2.22-.43-3.88-.16-4.37.74zm11.15 9.31a17.9 17.9 0 0 0 .35-2.19l-1.21.8-1.26.72a17.2 17.2 0 0 0 2.12.67zM9.17 7.24a17.9 17.9 0 0 0-.35 2.19c.78-.55 1.62-1.07 2.47-1.52a18 18 0 0 0-2.12-.67zm3.18 8.9a23.4 23.4 0 0 0 3.36-2.07l.03-1.98-.14-1.97-1.7-1.01-1.78-.86c-1.16.59-2.32 1.3-3.36 2.07l-.03 1.98.14 1.97 1.7 1.01 1.78.86zm1.87-7.63 1.26.73A16.9 16.9 0 0 0 15 7.07a17.8 17.8 0 0 0-2.07.79l1.3.65zm2.11 2.12.09 1.45v1.45a18.5 18.5 0 0 0 1.64-1.5 17.7 17.7 0 0 0-1.72-1.4zm-6.08 5.25L9 15.16a16.9 16.9 0 0 0 .48 2.17 19.8 19.8 0 0 0 2.07-.79l-1.3-.65zm-2.2-3.56v-1.45a18.5 18.5 0 0 0-1.64 1.5 18 18 0 0 0 1.72 1.4l-.09-1.45zm12-4.95c-.54-.87-2.21-1.05-4.4-.49a19.4 19.4 0 0 1 .58 2.85 19.2 19.2 0 0 1 2.28 1.79c1.49-1.71 2.08-3.28 1.54-4.15zM12.5 21.38c1.03-.03 2.02-1.39 2.62-3.57a19 19 0 0 1-2.75-.92 18.9 18.9 0 0 1-2.69 1.08c.73 2.14 1.8 3.44 2.83 3.41z" fill="#fff" fillRule="nonzero"/><path d="M5.06 17.99a1.07 1.07 0 1 0 1.96-.38 1.07 1.07 0 0 0-1.96.38z" fill="#f95428" fillRule="nonzero"/><path d="M16.71 17.69a1.07 1.07 0 0 0 1.61 1.09 1.07 1.07 0 0 0 .34-1.47c-.31-.5-.97-.66-1.47-.35-.27.17-.44.44-.49.73z" fill="#2ba5f7" fillRule="nonzero"/><path d="M13.13 4.05a1.07 1.07 0 1 0 2.1.36 1.07 1.07 0 0 0-2.1-.36z" fill="#f7b239" fillRule="nonzero"/></svg> );

export const blockStyle = {
	textAlign: 'center',
};

// The block configuration
const blockConfig = require( '../../block.json' );

// Register the block
/// https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
registerBlockType( blockConfig.name, {
	...blockConfig,
	icon: blockIcon,
	apiVersion: 2,
	edit: Edit,
	save: Save,
	// https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/
	supports: {
		align: true,
		anchor: true,
		className: true,
		color: {
			background: true,
			link: true,
			text: true,
			gradients: true,
		},
		spacing: {
			margin: true, // Enable margin UI control.
			padding: true, // Enable padding UI control.
			blockGap: true, // Enables block spacing UI control.
		},
	},
	attributes: {
		style: {
			type: 'object',
			default: {
				color: {
					background: '#333333',
					text: '#ffffff',
					link: '#00A0D2',
				},
				spacing: {
					padding: {
						top: '32px',
						left: '32px',
						bottom: '32px',
						right: '32px',
					},
				},
			},
		},
		href: {
			type: 'string',
			default: 'https://github.com/WPBP',
		},
	},
} );
