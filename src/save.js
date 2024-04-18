import { RichText } from '@wordpress/block-editor';

const save = ({ attributes }) => {
    const { imageUrl, altText, isPortrait, caption } = attributes;
    return (
        <figure className={`wp-block-custom-image ${isPortrait ? 'portrait' : 'landscape'}`}>
            <img src={imageUrl} alt={altText || ''} />
            {caption && (
                <RichText.Content tagName="figcaption" value={caption} />
            )}
        </figure>
    );
};
