import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

const customImageIcon = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"></path>
    </svg>
);

registerBlockType(metadata.name, {
    icon: customImageIcon,
    edit: Edit,
    attributes: {
        imageUrl: {
            type: 'string',
            default: ''
        },
        imageId: {
            type: 'number'
        },
        isPortrait: {
            type: 'boolean',
            default: false
        },
        altText: {
            type: 'string',
            default: ''
        },
        caption: {
            type: 'string',
            default: ''
        }
    },
    save: ({ attributes }) => {
        const { imageUrl, isPortrait, altText, caption } = attributes;
        return (
            <figure className={`wp-block-image size-large ${isPortrait ? 'portrait' : 'landscape'}`}>
                <img src={imageUrl} alt={altText} className={`wp-image-${attributes.imageId}`} />
                {caption && <figcaption>{caption}</figcaption>}
            </figure>
        );
    }
});

