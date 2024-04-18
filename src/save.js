const save = ({ attributes }) => {
    const { imageUrl, isPortrait, altText, caption } = attributes;
    return (
        <figure className={`wp-block-image ${isPortrait ? 'portrait' : 'landscape'} size-large`}>
            <img src={imageUrl} alt={altText || ''} />
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
};