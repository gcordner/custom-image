/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { Button, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
    const [image, setImage] = useState(attributes.imageUrl);
    const [isPortrait, setIsPortrait] = useState(attributes.isPortrait || false);

    const onSelectImage = (media) => {
        setImage(media.url);
        setAttributes({ imageUrl: media.url, imageId: media.id });
    };

    const toggleOrientation = () => {
        setIsPortrait(!isPortrait);
        setAttributes({ isPortrait: !isPortrait });
    };

    const orientationLabel = isPortrait ? 'Switch to Landscape' : 'Switch to Portrait';

    return (
        <div {...useBlockProps()}>
            <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={['image']}
                value={attributes.imageId}
                render={({ open }) => (
                    <Button onClick={open}>
                        {image ? 'Change Image' : 'Select Image'}
                    </Button>
                )}
            />
            {image && (
                <img
                    src={image}
                    alt={__('Selected image', 'custom-image')}
                    className={isPortrait ? 'portrait' : 'landscape'}
                />
            )}
            <div style={{ marginTop: '20px' }}>
                <ToggleControl
                    label={orientationLabel}
                    checked={isPortrait}
                    onChange={toggleOrientation}
                />
                <p>
                    {__('Toggle the switch to change the orientation of the image. Current mode: ', 'custom-image')}
                    <strong>{isPortrait ? 'Portrait' : 'Landscape'}</strong>.
                </p>
            </div>
        </div>
    );
}
