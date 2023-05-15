/**
 * WordPress dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';

const { name, icon } = json;

registerBlockType( name, {
	icon: {
		src: icon,
		foreground: '#0080FF',
	},
	edit,
	save,
} );