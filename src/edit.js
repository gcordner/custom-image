import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, RichText } from '@wordpress/block-editor';
import { Button, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { imageUrl, imageId, isPortrait, altText, caption } = attributes;

    const onSelectImage = (media) => {
        setAttributes({
            imageUrl: media.url,
            imageId: media.id,
            altText: media.alt || '',
            caption: media.caption || ''
        });
    };

    const toggleOrientation = () => {
        setAttributes({ isPortrait: !isPortrait });
    };

    const orientationLabel = isPortrait ? 'Switch to Landscape' : 'Switch to Portrait';

    return (
        <div {...useBlockProps()}>
            <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={['image']}
                value={imageId}
                render={({ open }) => (
                    <Button onClick={open}>{imageUrl ? 'Change Image' : 'Select Image'}</Button>
                )}
            />
            {imageUrl && (
                <>
                    <img src={imageUrl} alt={altText} className={isPortrait ? 'portrait' : 'landscape'} />
                    <RichText
                        tagName="figcaption"
                        value={caption}
                        onChange={(newCaption) => setAttributes({ caption: newCaption })}
                        placeholder={__('Write caption...', 'custom-image')}
                        className="wp-element-caption"
                    />
                </>
            )}
            <ToggleControl
                label={orientationLabel}
                checked={isPortrait}
                onChange={toggleOrientation}
            />
        </div>
    );
}
